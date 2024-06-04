<script lang="ts">
import type IDestino from '@/interfaces/IDestinos';
import type { PropType } from 'vue';

export default {
    props: {
        destino: { type: Object as PropType<IDestino>, required: true }
    }
}
</script>

<template>
    <article class="destino">
        <header class="destino__cabecalho">
            <img class="destino__imagem" :src="`/imagens/destinos/${destino.img}`" :alt="`Foto de ${destino.nome}`">
        </header>

        <section class="destino__corpo">
            <h2 class="paragrafo destino__nome">
                {{ destino.nome }}
            </h2>
            <h5 class="destino_descricao">{{ destino.descricao }}</h5>
        </section>
    </article>
</template>

<style scoped>
.destino {
    display: flex;
    width: 17.625rem;
    max-width: 19.5rem;
    flex-direction: column;
    align-items: center;

    border-radius: 1rem;
    background: var(--Branco, #FFF);
    box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.destino__corpo {
    padding: 2rem 1rem;
}

.destino__imagem {
    width: 100%;
    border-radius: 1rem 1rem 0rem 0rem;
    display: block;
}

.destino__nome {
    font-weight: 700;
    color: var(--preto);
}

.destino_descricao {
    margin-top: 5px;
    color: var(--coral);
}
</style>
