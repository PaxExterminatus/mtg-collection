<template>
    <div class="card-grid">
        {{msg}}
    </div>
</template>

<script lang="ts">
import { Vue, Prop, PropSync } from 'vue-property-decorator'

export default class CardGrid extends Vue {
    @PropSync('msg', {type: String}) msg: string = 'def3';
}
</script>