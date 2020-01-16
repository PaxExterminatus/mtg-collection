<template>
    <div class="card-image-cmp" :class="{'is-hq': card.images.hq}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ICardModel } from 'app/objects/card'

@Component
export default class CardImage extends Vue {
    @Prop() card!: ICardModel;
}
</script>
