<template>
    <div class="page collection">
        <h1 class="title h1">Collection</h1>
        <div>
            {{collection}}
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
    directives: {},
    components: {},
})
export default class PageCollection extends Vue {
    get collection() {
        return this.$store.state.collection
    }
}
</script>
