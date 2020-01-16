<template>
    <div class="card-grid-component">
        <div>Name</div><div>{{card.name}}</div>
        <div>Type</div><div>{{card.type}}</div>
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