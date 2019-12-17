<template>
    <div class="card-info">

        <div class="card-images">
            <img class="card-cover selected" :src="card.images.cover" :alt="card.name" @click="select">
            <img class="card-cover" :src="card.images.translate" :alt="card.name" @click="select">
        </div>

        <div class="tbl">
            <div>Release</div>
            <div>{{card.releasedDate}}</div>

            <div>Set</div>
            <div>{{card.set.name}} [{{card.set.code}}]</div>

            <div>Name</div>
            <div>{{card.name}}</div>
            <div>Rarity</div>
            <div>{{card.rarity}}</div>

            <div>Type</div>
            <div>{{card.type.line}}</div>
            <div>Text</div>
            <div v-html="card.text.oracle"></div>
            <div>Flavor</div>
            <div v-html="card.flavor.oracle"></div>

            <div>Type</div>
            <div>{{card.type.translate}}</div>
            <div>Text</div>
            <div v-html="card.text.translate"></div>
            <div>Flavor</div>
            <div v-html="card.flavor.translate"></div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ScryfallCard } from '@/library/api/scryfall'

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
