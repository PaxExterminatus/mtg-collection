<template>
    <div class="page adding">
        <h1 class="title h1">Adding

        </h1>

        <div class="form-box adding">
            <div class="form-line" v-tab-trap>
                <select class="form-input choice" title="Language">
                    <option>ru</option>
                    <option>en</option>
                </select>
                <input class="form-input" title="code" v-model="item.code" tabindex>
                <input class="form-input" title="number" v-model="item.number" tabindex>
                <a class="btn" @click="show" tabindex>show</a>
                <a class="btn" @click="save" tabindex>save</a>
            </div>

            <template v-if="card">
                <div class="form-line">
                    <dropdown-menu>
                        <div class="btn">links</div>
                        <template slot="menu">
                            <a target="_blank" :href="card.url.scryfall.set">scryfall.com set</a>
                            <a target="_blank" :href="card.url.scryfall.card">scryfall.com card</a>
                        </template>
                    </dropdown-menu>
                </div>

                <card-information-cmp :card="card"/>
            </template>
        </div>

    </div>
</template>

<script lang="ts">
    import CardInformationCmp from "@/app/components/card-info/card-info.vue";
    import axios from 'axios'
    import { Component, Vue } from 'vue-property-decorator'
    import { tabTrap } from '@/library/vue/vue-directives/vue-forms-directives'
    import { ItemDataFace, ItemVModel, ItemVModelDefault } from '@/app/store/Collection/CollectionItem'
    import { ScryfallCard, ScryfallCardModel } from '@/library/api/scryfall'
    import { DropdownMenu } from '@/library/vue/vue-ui'

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
        item: ItemDataFace = new ItemVModelDefault('card');
        oracle: ScryfallCardModel | null = null;
        translate: ScryfallCardModel | null = null;
        card: ScryfallCard | null = null;

        get collection() {
            return this.$store.state.collection;
        }

        get api() {
            return {
                scryfall: {
                    oracle: `https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}`,
                    translate: `https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}+lang:${this.item.lang}`
                }
            }
        }

        show() {
            axios.get(this.api.scryfall.oracle)
                .then( resp => {
                    this.oracle = resp.data.data[0];
                    this.init();
                });

            axios.get(this.api.scryfall.translate)
                .then( resp => {
                    this.translate = resp.data.data[0];
                    this.init();
                });
        }

        save() {
            // todo create and use new class
            this.collection.add({
                code: this.item.code,
                number: this.item.number,
                type: this.item.type,
                lang: this.item.lang,
            });
        }

        init() {
            if (this.oracle && this.translate) {
                this.card = new ScryfallCard(this.oracle, this.translate);
            }
        }
    }
</script>
