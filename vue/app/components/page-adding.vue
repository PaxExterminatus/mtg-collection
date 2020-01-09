<template>
    <div class="page adding">
        <h1 class="title h1">Adding</h1>

        <div class="form-box adding">
            <div class="flex-tbl lang">
                <a class="btn" :class="{selected: item.lang === 'en'}" @click="item.lang = 'en'">EN</a>
                <a class="btn" :class="{selected: item.lang === 'ru'}" @click="item.lang = 'ru'">RU</a>
                <a class="btn" :class="{selected: item.foil}" @click="item.foil = !item.foil">FOIL</a>
                <a class="btn to-right">?</a>
            </div>

            <div class="form-line" v-tab-trap>
                <input class="form-input" title="code" tabindex
                       v-model="item.code">
                <input class="form-input" title="number" tabindex
                       v-model="item.number"
                       @keyup.enter="show"
                       @keydown.arrow-up="item.numberPlus"
                       @keydown.arrow-down="item.numberMinus">
<!--                <a class="btn" tabindex @keyup.enter="show" @click="show">show</a>-->
                <a class="btn" tabindex @keyup.enter="save" @click="save">save</a>
            </div>

            <div v-if="apiError">
                [{{apiError.status}}] {{apiError.text}}: {{apiError.details}}
            </div>

            <template v-if="card">
                <div class="flex-tbl">
                    <dropdown-menu>
                        <div class="btn">scryfall</div>
                        <template slot="menu">
                            <a target="_blank" :href="card.url.scryfall.set">set</a>
                            <a target="_blank" :href="card.url.scryfall.card">card</a>
                        </template>
                    </dropdown-menu>
                </div>

                <card-information-cmp :card="card"/>
            </template>
        </div>

    </div>
</template>

<script lang="ts">
import CardInformationCmp from "./card-info/card-info.vue";
import axios from 'axios'
import { Component, Vue } from 'vue-property-decorator'
import { tabTrap } from '../../lib/vue/vue-directives/vue-forms-directives'
import { CardDataFace, CardInputModel, CardLanguages } from '../store/Collection/CollectionItem'
import { ScryfallCard, ScryfallCardModel } from '../../lib/api/scryfall'
import { DropdownMenu } from '../../lib/vue/vue-ui'

@Component({
    directives: {
        tabTrap,
    },
    components: {
        CardInformationCmp,
        DropdownMenu,
    }
})

export default class addingPage extends Vue {
    item = new CardInputModel();
    oracle: ScryfallCardModel | null = null;
    translate: ScryfallCardModel | null = null;
    card: ScryfallCard | null = null;
    apiError: null | any = null;

    get collection() {
        return this.$store.state.collection;
    }

    show() {
        this.apiError = null;

        const scryfallOracle = `https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}`;
        const scryfallTranslate = `https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}+lang:${this.item.lang}`;

        axios.get(scryfallOracle)
            .then( resp => {
                this.oracle = resp.data.data[0];
                this.init();
            });

        axios.get(scryfallTranslate)
            .then( resp => {
                this.translate = resp.data.data[0];
                this.init();
            })
            .catch( err => {
                this.apiError = {
                    text: err.response.statusText,
                    object: err.response.data.object,
                    code: err.response.data.code,
                    status: err.response.data.status,
                    details: err.response.data.details,
                }
            });
    }

    save() {
        this.collection.add(this.item.json)
    }

    init() {
        if (this.oracle && this.translate) {
            this.card = new ScryfallCard(this.oracle, this.translate);
        }
    }
}
</script>
