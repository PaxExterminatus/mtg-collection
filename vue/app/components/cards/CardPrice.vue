<template>
    <div class="card-grid-cmp" v-if="card && card.appreciated">
        <div><slot></slot></div>
        <div class="flex-tbl">
            <div>USD</div>
            <div>{{card.prices.usd}}</div>
            <div>FOIL</div>
            <div>{{card.prices.foil}}</div>
            <div>EUR</div>
            <div>{{card.prices.eur}}</div>
            <div>TIX</div>
            <div>{{card.prices.tix}}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator'
import { ICardModel } from 'app/objects/card'

@Component
export default class CardPrice extends Vue {
    @Prop() card: ICardModel | null = null
}
</script>