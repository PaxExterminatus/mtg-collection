<template>
    <div class="page collection">
        <h1 class="title h1">Collection</h1>

        <div class="collection-grid">

            <div class="collection-item" v-for="card in collection.cards">
                <div class="card-code">{{card.code}} / {{card.number}} 🞄 {{card.lang}}</div>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
    directives: {},
    components: {},
})
export default class CollectionPage extends Vue {
    collection = this.$store.state.collection;
}
</script>
