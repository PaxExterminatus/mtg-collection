<template>
    <div class="page adding">
        <h1 class="title h1">Adding</h1>

        <div class="form-box adding">
            <div class="flex-tbl lang">
                <a class="btn" :class="{'is-selected': input.lang === 'en'}" @click="input.lang = 'en'">EN</a>
                <a class="btn" :class="{'is-selected': input.lang === 'ru'}" @click="input.lang = 'ru'">RU</a>
                <a class="btn" :class="{'is-selected': input.foil}" @click="input.foil = !input.foil">FOIL</a>
                <a class="btn to-right">?</a>
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

            <div>
                <div class="flex-tbl lang">
                    <a class="btn" :class="{'is-selected': state.tab === 'oracle'}" @click="state.tab = 'oracle'">oracle</a>
                    <a class="btn" :class="{'is-selected': state.tab === 'printed'}" @click="state.tab = 'printed'">printed</a>
                    <a class="btn" :class="{'is-selected': state.tab === 'translate'}" @click="state.tab = 'translate'">translate</a>
                </div>

                <div class="grid-tbl" v-if="state.tab === 'oracle'">
                    oracle
                </div>

                <div class="grid-tbl" v-if="state.tab === 'printed'">
                    printed
                </div>

                <div class="grid-tbl" v-if="state.tab === 'translate'">
                    translate
                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CardInformationComponent } from "@/components/card";
import { tabTrap } from 'lib/vue/vue-directives/vue-forms-directives'
import { CardDataFace, CardInputModel, CardLanguages } from '@/store/Collection/CollectionItem'

import { DropdownMenu } from 'lib/vue/vue-ui'
import { ScryfallSearchCard } from 'lib/api/scryfall'
import { ICardModel, CardModel } from '@/objects/card'

@Component({
    directives: {
        tabTrap,
    },
    components: {
        DropdownMenu,
        cardInfo: CardInformationComponent,
    }
})

export default class addingPage extends Vue {
    scryfall = new ScryfallSearchCard();
    input = new CardInputModel();

    oracle: ICardModel | null = null;
    printed: ICardModel | null = null;
    translate: ICardModel | null = null;

    error: string | null = null;

    state = {
        tab: ''
    };

    get collection() {
        return this.$store.state.collection;
    }

    search()
    {
        let uiLang = 'ru';

        if (uiLang === 'en')
        {
            this.scryfall.oracle({code: this.input.code, number: this.input.number})
            .then( resp => {
                this.oracle = new CardModel(resp.data.data[0]);
            })
            .catch( error => {
                const {code, status, details} = error.response.data;
                this.error = `[${code}] ${status}: ${details}`
            })
        }
        else
        {
            this.scryfall.translate({code: this.input.code, number: this.input.number, language: this.input.lang})
                .then( resp => {
                    this.translate = new CardModel(resp.data.data[0]);
                })
                .catch( error => {
                    const {code, status, details} = error.response.data;
                    this.error = `[${code}] ${status}: ${details}`
                })
        }
    }

    save() {
        this.collection.add(this.input.json)
    }
}
</script>