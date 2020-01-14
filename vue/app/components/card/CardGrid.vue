<template>
    <div class="card-grid-component">
        <div>Name</div><div>{{card.name}}</div>
        <div>Type</div><div>{{card.type}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CardFace } from '@/objects/card'

@Component
export default class CardGridComponent extends Vue {
    @Prop() card!: CardFace
}
</script>