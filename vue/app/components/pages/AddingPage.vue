<template>
    <div class="page adding">
        <h1 class="title h1">Adding</h1>

        <div class="form-box adding">
            <div class="flex-tbl lang">
                <a class="btn" :class="{'is-selected': input.lang === 'en'}" @click="input.lang = 'en'">EN</a>
                <a class="btn" :class="{'is-selected': input.lang === 'ru'}" @click="input.lang = 'ru'">RU</a>
                <a class="btn" :class="{'is-selected': input.lang === 'it'}" @click="input.lang = 'it'">IT</a>
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

            <div class="flex-tbl lang">
                <state-btn v-if="oracle" v-model="state.tab" equate="oracle">Oracle</state-btn>
                <state-btn v-if="printed" v-model="state.tab" equate="printed">Printed [{{input.lang}}]</state-btn>
                <state-btn v-if="translate" v-model="state.tab" equate="translate">Translate [{{userInterfaceLanguage}}]</state-btn>
            </div>

            <div class="card-info">
                <div class="card-images"></div>
                <card-grid class="grid-tbl" v-if="state.tab === 'oracle' && oracle" :card="oracle"/>
                <card-grid class="grid-tbl" v-if="state.tab === 'printed' && printed" :card="printed"/>
                <card-grid class="grid-tbl" v-if="state.tab === 'translate' && translate" :card="translate"/>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CardGrid } from '@/components/card';
import { tabTrap } from 'lib/vue/vue-directives/vue-forms-directives'
import { CardInputModel } from '@/store/Collection/CollectionItem'

import { DropdownMenu, StateBtn } from 'lib/vue/vue-ui'
import {LanguageEnum, ScryfallSearchCard} from 'lib/api/scryfall'
import { ICardModel, CardModel } from '@/objects/card'

type ComponentDataStateTabs = 'oracle' | 'printed' | 'translate'
type ComponentDataState = {
    tab: ComponentDataStateTabs
}

@Component({
    directives: {
        tabTrap,
    },
    components: {DropdownMenu, CardGrid, StateBtn}
})

export default class addingPage extends Vue {
    scryfall = new ScryfallSearchCard();
    input = new CardInputModel();

    oracle: ICardModel | null = null;
    printed: ICardModel | null = null;
    translate: ICardModel | null = null;

    error: string | null = null;

    state: ComponentDataState = {
        tab: 'printed'
    };

    get userInterfaceLanguage(): LanguageEnum {
        return 'ru';
    }

    get collection() {
        return this.$store.state.collection;
    }

    search()
    {
        this.error = null;
        this.oracle = null;
        this.printed = null;
        this.translate = null;
        this.state.tab = "printed";

        this.scryfall.translate({code: this.input.code, number: this.input.number, language: this.input.lang})
            .then( resp => {
                this.printed = new CardModel(resp.data.data[0]);
            })
            .catch( error => {
                const {code, status, details} = error.response.data;
                this.error = `[${code}] ${status}: ${details}`
            });

        if (this.input.lang !== 'en')
        {
            this.scryfall.oracle({code: this.input.code, number: this.input.number})
                .then( resp => {
                    this.oracle = new CardModel(resp.data.data[0]);
                })
                .catch( error => {
                    const {code, status, details} = error.response.data;
                    this.error = `[${code}] ${status}: ${details}`
                });
        }

        if (this.input.lang !== this.userInterfaceLanguage)
        {
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