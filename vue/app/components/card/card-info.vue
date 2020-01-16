<template>
<div class="card-info">

<!--    <div class="card-images">-->
<!--        <img class="card-cover selected" :src="card.images.cover" :alt="card.name.oracle" :title="card.name.oracle" @click="select">-->
<!--        <img class="card-cover" :src="card.images.translate" :alt="card.name.translate" :title="card.name.translate" @click="select">-->
<!--    </div>-->
    <card-grid :card="card.oracle"/>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
// import {CardModelLayout} from '@/objects/card'
// components
import { CardGrid } from 'app/components/card'

@Component({
    components: {CardGrid}
})
export default class CardInformationComponent extends Vue {
    // @Prop() private card!: CardModelLayout;
}
</script>
