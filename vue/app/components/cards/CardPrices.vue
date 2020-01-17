<template>
    <div class="card-grid-cmp">
        <template v-for="card in cards" v-if="card && card.appreciated">
            <div>{{card.lang}}</div>
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
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop} from 'vue-property-decorator'
import { ICardModel } from 'app/objects/card'

@Component
export default class CardPrices extends Vue {
    @Prop() cards!: ICardModel[]
}
</script>