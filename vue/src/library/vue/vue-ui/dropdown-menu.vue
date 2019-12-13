<template>
    <div class="dropdown-menu-cmp" @click="relay">
        <slot name="button"></slot>
        <div class="dropdown-menu" v-if="state">
            <slot name="menu"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
    directives: {},
    components: {}
})
export default class DropdownMenu extends Vue {
    protected state: boolean = false;
    relay() {
        this.state = !this.state;
    }
}
</script>
