<script lang="ts">

import type ICategoria from '@/interfaces/ICategoria';
import type { PropType } from 'vue';
import Tag from './Tag.vue';
import ItemSelecionavel from './ItemSelecionavel.vue';

export default {
  props: {
    categoria: { type: Object as PropType<ICategoria>, required: true }
  },
  components: { Tag, ItemSelecionavel },
  emits: ['adicionarItem', 'removerItem']
}

</script>

<template>

  <article class="categoria">
    <header class="categoria__cabecalho">
      <img :src="`/imagens/icones/categorias/${categoria.img}`" alt="" class="categoria__imagem">

      <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
    </header>

    <ul class="categoria__itens">
      <li v-for="item in categoria.itens" :key="item">
        <ItemSelecionavel :item="item" @adicionar-item="$emit('adicionarItem', $event)"
          @remover-item="$emit('removerItem', $event)" />

      </li>
    </ul>
  </article>

</template>

<style scoped>
.categoria {
  width: 40rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.categoria__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.categoria__imagem {
  width: 2.5rem;
}

.categoria__nome {
  text-align: center;
  color: var(--preto);
  font-weight: 700;
}

.categoria__itens {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}


@media only screen and (max-width: 767px) {
  .categoria {
    width: 20rem;
  }
}
</style>