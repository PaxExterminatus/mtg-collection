<template>
  <div class="page adding">
    <h1 class="title header-one">Adding</h1>

    <div class="form-box adding">

      <div class="form-line" v-tab-trap>
        <input tabindex class="form-input" title="code" v-model="item.code">
        <input tabindex class="form-input" title="number" v-model="item.number">
        <a class="btn" tabindex @click="show">show</a>
        <a class="btn" tabindex>save</a>
      </div>

      <div class="form-line">
        <dropdown-menu>
          <template slot="button">
            <div class="btn">links</div>
          </template>
          <template slot="menu">
            <a target="_blank" :href="info.url.scryfall.en">scryfall.com [en]</a>
            <a target="_blank" :href="info.url.scryfall.ru">scryfall.com [ru]</a>
          </template>
        </dropdown-menu>
      </div>

      <div  v-if="card">
        <div>{{card.object}} | {{card.lang}}</div>
        <div class="card-info">
          <div class="card-info-image">
            <!--          <img :src="card.image_uris.small" :alt="card.name">-->
            <!--          <img :src="card.image_uris.normal" :alt="card.name">-->
            <!--          <img :src="card.image_uris.large" :alt="card.name">-->
            <!--          <img :src="card.image_uris.art_crop" :alt="card.name">-->
            <img :src="card.images.border_crop" :alt="card.name">
          </div>

          <div class="tbl">
            <div>Set</div>
            <div>{{card.set.name}} [{{card.set.code}}]</div>
            <div>Release</div>
            <div>{{card.releasedDate}}</div>
            <div>Name</div>
            <div>{{card.name}}</div>
            <div>Type</div>
            <div>{{card.type.line}}</div>
            <div>Printed Type</div>
            <div>{{card.type.printed}}</div>
            <div>Rarity</div>
            <div>{{card.rarity}}</div>
            <div>Oracle Text</div>
            <div v-html="card.text.oracle"></div>
            <div>Printed Text</div>
            <div v-html="card.text.printed"></div>
            <div>Flavor Text</div>
            <div v-html="card.text.flavor"></div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { tabTrap } from '@/library/vue/vue-directives/vue-forms-directives'
import { ItemDataFace, ItemVModel, ItemVModelDefault,  CardInfo, ScryfallSearchResponse, ScryfallCardModel } from '@/store/Collection/CollectionItem'
import { DropdownMenu } from '@/library/vue/vue-ui'

@Component({
  directives: {
    tabTrap,
  },
  components: {
    DropdownMenu,
  }
})

export default class addingPage extends Vue {
  @Prop() private msg!: string;
  item: ItemDataFace = new ItemVModelDefault('card');
  info = new CardInfo(this.item);
  scryfall: ScryfallSearchResponse | null = null;

  get card() {
    return this.scryfall?.card;
  }

  show() {
    axios.get(`https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}+lang:ru`)
            .then( resp => {
              this.scryfall = new ScryfallSearchResponse(resp.data);
            })
  }
}
</script>
