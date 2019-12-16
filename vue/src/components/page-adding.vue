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
<!--            <a target="_blank" :href="api.scryfall.oracle">scryfall.com api</a>-->
<!--            <a target="_blank" :href="api.scryfall.printed">scryfall.com api {{item.lang}}</a>-->
          </template>
        </dropdown-menu>
      </div>

      <div  v-if="card">
        <div>{{card.object}} | {{card.lang}}</div>
        <div class="card-info">

          <div class="card-images">
            <img class="card-cover selected" :src="card.images.cover" :alt="card.name" @click="select">
            <img class="card-cover" :src="card.images.translate" :alt="card.name" @click="select">
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
            <div>Type</div>
            <div>{{card.type.translate}}</div>
            <div>Rarity</div>
            <div>{{card.rarity}}</div>
            <div>Text</div>
            <div v-html="card.text.oracle"></div>
            <div>Text</div>
            <div v-html="card.text.translate"></div>
            <div>Flavor</div>
            <div v-html="card.flavor.oracle"></div>
            <div>Flavor</div>
            <div v-html="card.flavor.translate"></div>
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
import { ItemDataFace, ItemVModel, ItemVModelDefault } from '@/store/Collection/CollectionItem'
import { ScryfallCard, ScryfallCardModel } from '@/library/api/scryfall'
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
  item: ItemDataFace = new ItemVModelDefault('card');
  oracle: ScryfallCardModel | null = null;
  translate: ScryfallCardModel | null = null;
  card: ScryfallCard | null = null;

  get api() {
    return {
      scryfall: {
        oracle: `https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}`,
        translate: `https://api.scryfall.com/cards/search?q=set:${this.item.code.toLowerCase()}+number:${this.item.number}+lang:${this.item.lang}`
      }
    }
  }

  show() {
    axios.get(this.api.scryfall.oracle)
            .then( resp => {
              this.oracle = resp.data.data[0];
              this.init();
            });

    axios.get(this.api.scryfall.translate)
            .then( resp => {
              this.translate = resp.data.data[0];
              this.init();
            });
  }

  init() {
    if (this.oracle && this.translate) {
      this.card = new ScryfallCard(this.oracle, this.translate);
    }
  }

  select(e: MouseEvent) {
    const images = document.querySelectorAll('.card-cover');
    images.forEach(el => {
      el.classList.remove('selected');
    });

    const el = e.target as HTMLImageElement;
    el.classList.add('selected');
  }
}
</script>
