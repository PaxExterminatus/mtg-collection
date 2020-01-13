<template>
<div class="card-info">

    <div class="card-images">
<!--        <img class="card-cover selected" :src="card.images.cover" :alt="card.name.oracle" :title="card.name.oracle" @click="select">-->
<!--        <img class="card-cover" :src="card.images.translate" :alt="card.name.translate" :title="card.name.translate" @click="select">-->
    </div>

    <div class="grid-tbl"></div>
</div>
</template>

<script lang="ts">
import {Prop, Vue} from 'vue-property-decorator'
import {CardModelLayout} from 'app/objects/card'

export default class CardInformationVue extends Vue {
    @Prop() private card!: CardModelLayout;
}
</script>
