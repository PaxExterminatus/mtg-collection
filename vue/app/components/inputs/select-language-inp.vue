<template>
<span class="select-language-inp">
    <state-btn v-for="lang in languages" @input="$emit('input', lang)" :value="value" :equate="lang">{{lang}}</state-btn>
</span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { LanguagesType, languages } from 'lib/api/scryfall'
import { StateBtn } from 'lib/vue/vue-ui'

@Component({
    components: { StateBtn }
})
export default class SelectLanguagesInp extends Vue {
    @Prop() value!: LanguagesType;
    languages = languages;
}
</script>