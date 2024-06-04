<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        itens: { type: Array as PropType<string[]>, required: true }
    },
}
</script>

<template>
    <section>
        <span class="subtitulo-lg sua-lista-texto">
            Sua Lista:
        </span>

        <ul v-if="itens.length" class="itens-sua-lista">
            <li v-for="item in itens" :key="item">
                <Tag :texto="item" ativa />
            </li>
        </ul>

        <p v-else class="paragrafo lista-vazia">
            <img src="../assets/imagens/icones/icone-pessoa-mala.png" alt="">
            Sua lista está vazia, selecione alguma opção.
        </p>
    </section>
</template>

<style scoped>
.sua-lista-texto {
    color: var(--turquesa-claro);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.itens-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    color: var(--turquesa-claro);
    text-align: center;
}
</style>