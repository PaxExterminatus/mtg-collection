<template>
    <div class="card-grid-cmp">
        <div>Name</div><div v-html="card.name"></div>
        <div>Type</div><div v-html="card.type"></div>
        <div>Text</div><div v-html="card.text"></div>
        <div>Flower</div><div v-html="card.flower"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ICardModel } from 'app/objects/card'

@Component
export default class CardGrid extends Vue {
    @Prop() card!: ICardModel
}
</script>