<template>
    <router-link class="aside-item as-router" :to="item.to" tabindex="-1">{{item.label}}</router-link>
</template>

<script>
export default {
    props: {
        item: {},
    }
}
</script>
