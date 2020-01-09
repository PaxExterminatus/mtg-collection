<template>
<div class="card-info">

    <div class="card-images">
        <img class="card-cover selected" :src="card.images.cover" :alt="card.name.oracle" :title="card.name.oracle" @click="select">
        <img class="card-cover" :src="card.images.translate" :alt="card.name.translate" :title="card.name.translate" @click="select">
    </div>

    <div class="grid-tbl">
        <div>Release</div>
        <div>{{card.releasedDate}}</div>
        <div>Set</div>
        <div>{{card.set.name}} [{{card.set.code}}]</div>
        <div>Rarity</div>
        <div>{{card.rarity}}</div>

        <div class="tbl-row">Translate</div>
        <div>Имя</div>
        <div>{{card.name.translate}}</div>
        <div>Тип</div>
        <div>{{card.type.translate}}</div>
        <div>Текст</div>
        <div v-html="card.text.translate"></div>
        <template v-if="card.flavor.translate">
            <div>Описание</div>
            <div v-html="card.flavor.translate"></div>
        </template>

        <div class="tbl-row">Oracle</div>
        <div>Name</div>
        <div>{{card.name.oracle}}</div>
        <div>Type</div>
        <div>{{card.type.line}}</div>
        <div>Text</div>
        <div v-html="card.text.oracle"></div>
        <template v-if="card.flavor.oracle">
            <div>Flavor</div>
            <div v-html="card.flavor.oracle"></div>
        </template>

        <div>Prices</div>
        <div class="flex-tbl">
            <div>USD</div>
            <div>{{card.prices.usd}}</div>
            <div>FOIL</div>
            <div>{{card.prices.usd_foil}}</div>
            <div>EUR</div>
            <div>{{card.prices.eur}}</div>
            <div>TIX</div>
            <div>{{card.prices.tix}}</div>
        </div>
    </div>

</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ScryfallCard } from '../../../lib/api/scryfall'

@Component({
    directives: {},
    components: {},
})
export default class CardInformationVue extends Vue {
    @Prop() private card!: ScryfallCard;

    select(e: Event) {
        const images = document.querySelectorAll('.card-cover');
        images.forEach(el => {
            el.classList.remove('selected');
        });

        const el = e.target as HTMLImageElement;
        el.classList.add('selected');
    }
}
</script>
