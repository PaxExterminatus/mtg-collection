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

            <div v-if="card">
<!--                <div class="flex-tbl">-->
<!--                    <dropdown-menu>-->
<!--                        <div class="btn">scryfall</div>-->
<!--                        <template slot="menu">-->
<!--                            <a target="_blank" :href="card.url.scryfall.set">set</a>-->
<!--                            <a target="_blank" :href="card.url.scryfall.card">card</a>-->
<!--                        </template>-->
<!--                    </dropdown-menu>-->
<!--                </div>-->

                <card-info :card="card"/>
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
import { ScryfallSearch, SupportedLanguages } from 'lib/api/scryfall'
import { CardModelLayout } from '@/objects/card'

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
    scryfall = new ScryfallSearch();
    input = new CardInputModel();
    card = new CardModelLayout();

    error: string | null = null;

    get collection() {
        return this.$store.state.collection;
    }

    get languages() {
        return {
            oracle: 'en',
            printed: this.input.lang,
            translate: 'ru'
        }
    }

    search()
    {
        if (this.input.lang === 'en')
        {
            this.scryfall.oracle(this.input.code, this.input.number)
            .then( resp => {

            })
        }

        this.scryfall.search({
            code: this.input.code,
            number: this.input.number,
            language: this.input.lang,
        }).then( resp => {
            this.card = new CardModelLayout(resp.data.data[0]);
        })
        .catch( error => {
            const {code, status, details} = error.response.data;
            this.error = `[${code}] ${status}: ${details}`
        })
    }

    save() {
        this.collection.add(this.input.json)
    }
}
</script>