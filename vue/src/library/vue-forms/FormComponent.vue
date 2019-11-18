<template>
<form class="form-cmp">
    <slot></slot>
</form>
</template>

<script>
import {prop} from 'lib/vue'
import {FormComponentEntity, formEntityInit} from 'lib/vue-forms/FormComponentEntity'

export default {
    props: {
        opt: {...prop.type(FormComponentEntity).required.get},
    },

    data(){return{
        ent: formEntityInit(this.opt, this),
    }},

    mounted() {
        //this.ent.mounted();
    },
}
</script>
