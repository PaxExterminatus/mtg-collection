<template>
<aside class="aside-box-cmp">
    <template v-for="item of items">
        <slot name="item" :it="item"/>
    </template>
</aside>
</template>

<script>
export default {
    props: {
        items: {default: () => []},
    }
}
</script>
