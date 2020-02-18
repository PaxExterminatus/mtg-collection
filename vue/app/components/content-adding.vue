<template>
    <div class="content-adding">
        <h1 class="title h1">Adding</h1>

        <div class="form-box adding">
            <div class="actions-panel">
                <buttons-selector class="buttons-languages" v-model="input.lang" :list="languages"/>
                <btn-toggle v-model="input.foil" :on="true" :off="false">FOIL</btn-toggle>
            </div>

            <div class="form-line" v-tab-trap>
                <input class="form-input" title="code" tabindex
                       v-model="input.code">
                <input class="form-input" title="number" tabindex
                       v-model="input.number"
                       @keyup.enter="search"
                       @keydown.arrow-up="input.numberPlus"
                       @keydown.arrow-down="input.numberMinus">
                <a class="btn" tabindex @keyup.enter="search" @click="search">search</a>
                <a class="btn" tabindex @keyup.enter="save" @click="save">save</a>
            </div>

            <div v-if="error">
                {{error}}
            </div>

            <div class="actions-panel cards-tab">
                <btn-setter v-if="oracle" v-model="state.tab" set="oracle">oracle</btn-setter>
                <btn-setter v-if="printed" v-model="state.tab" set="printed">printed</btn-setter>
                <btn-setter v-if="translate" v-model="state.tab" set="translate">translate</btn-setter>
            </div>

            <div class="card-info">
                <card-cover :cards="[oracle, printed, translate]"/>

                <div>
                    <template v-if="state.tab === 'oracle' && oracle">
                        <card-grid :card="oracle"/>
                    </template>

                    <template v-if="state.tab === 'printed' && printed">
                        <card-grid :card="printed"/>
                    </template>

                    <template v-if="state.tab === 'translate' && translate">
                        <card-grid :card="translate"/>
                    </template>

                    <card-price :card="oracle">oracle</card-price>
                    <card-price :card="printed">printed</card-price>
                    <card-price :card="translate">translate</card-price>
                </div>
            </div>


        </div>

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { DropdownMenu, BtnSetter, BtnToggle, StatusSelectors } from 'lib/vue/vue-ui'
import { tabTrap } from 'lib/vue/vue-directives/vue-forms-directives'
import { LanguagesType, ScryfallSearchCard } from 'lib/api/scryfall'

import { CardGrid, CardGallery, CardPrice } from 'app/components/cards'
import { CardInputModel } from 'app/store/Collection/CollectionItem'
import { ICardModel, CardModel } from 'app/objects/card'

type ComponentDataStateTabs = 'oracle' | 'printed' | 'translate'
type ComponentDataState = {
    tab: ComponentDataStateTabs
}

@Component({
    directives: {tabTrap},
    components: {CardPrice, CardGrid, CardCover: CardGallery, DropdownMenu, BtnSetter, BtnToggle, ButtonsSelector: StatusSelectors}
})

export default class ContentAdding extends Vue {
    scryfall = new ScryfallSearchCard();
    input = new CardInputModel();

    oracle: ICardModel | null = null;
    printed: ICardModel | null = null;
    translate: ICardModel | null = null;

    error: string | null = null;

    languages: LanguagesType[] = ['en', 'ru', 'it'];

    state: ComponentDataState = {
        tab: 'printed'
    };

    get userInterfaceLanguage(): LanguagesType {
        return 'ru';
    }

    get collection() {
        return this.$store.state.collection;
    }

    searchReset() {
        this.error = null;
        this.oracle = null;
        this.printed = null;
        this.translate = null;
        this.state.tab = "printed";
    }

    search() {
        this.searchReset();

        this.scryfall.translate({code: this.input.code, number: this.input.number, language: this.input.lang})
            .then( resp => {
                this.printed = new CardModel(resp.data.data[0]);
            })
            .catch( error => {
                const {code, status, details} = error.response.data;
                this.error = `[${code}] ${status}: ${details}`
            });

        if (this.input.lang !== 'en') {
            this.scryfall.oracle({code: this.input.code, number: this.input.number})
                .then( resp => {
                    this.oracle = new CardModel(resp.data.data[0]);
                })
                .catch( error => {
                    const {code, status, details} = error.response.data;
                    this.error = `[${code}] ${status}: ${details}`
                });
        }

        if (this.input.lang !== this.userInterfaceLanguage) {
            this.scryfall.translate({code: this.input.code, number: this.input.number, language: this.userInterfaceLanguage})
                .then( resp => {
                    this.translate = new CardModel(resp.data.data[0]);
                    this.state.tab = "translate";
                })
                .catch( error => {
                    const {code, status, details} = error.response.data;
                    this.error = `[${code}] ${status}: ${details}`
                });
        }
    }

    save() {
        this.collection.add(this.input.json)
    }
}
</script>