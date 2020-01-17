<template>
<div class="card-gallery">
    <div class="card-cover"
         :class="{shown: state.shown === idx}"
         :style="{transform: `translateY(${20 * idx}%)`}"
         v-for="(card, idx) in cards" v-if="card"
         @click="show(idx)"
    >
        <div class="card-state">
            <div title="Print language">{{card.lang}}</div>
            <div v-if="card.images.hq" title="High-quality">hq</div>
        </div>
        <img class="card-img" :src="card.images.png" :alt="card.name" :title="card.name"/>
    </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ICardModel } from 'app/objects/card'

@Component
export default class CardGallery extends Vue {
    @Prop() cards!: ICardModel[];

    state = {
        shown: 0,
    };

    show(idx: number) {
        this.state.shown = idx;
    }
}
</script>