<template>
    <div class="card-information-cmp">

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { ScryfallCardModel } from '@/store/Collection/CollectionItem'

@Component({
    directives: {},
    components: {},
})
export default class CardInformationVue extends Vue {
    @Prop() private card!: ScryfallCardModel;
}
</script>
