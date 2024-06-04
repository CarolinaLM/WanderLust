<script lang="ts">

import { obterCategorias } from '@/http/index';
import type ICategoria from '@/interfaces/ICategoria';
import CardCategoria from './CardCategoria.vue';
import BotaoPrincipal from './BotaoPrincipal.vue';

export default {
    name: 'SelecionarItens',
    data() {
        return {
            categorias: [] as ICategoria[]
        }
    },
    async created() {
        this.categorias = await obterCategorias();
    },
    components: { CardCategoria, BotaoPrincipal },
    emits: ['adicionarItem', 'removerItem', 'buscarDestinos']
}
</script>

<template>

    <section class="selecionar-itens">
        <h1 class="cabecalho titulo-itens">Selecione:</h1>

        <p class="paragrafo-lg instrucoes">Explore lugares incríveis onde já estive e atividades fantásticas que já fiz
            aqui no Brasil!</p>

        <ul class="categorias">
            <li v-for="categoria in categorias" :key="categoria.nome">
                <CardCategoria :categoria="categoria" @adicionar-item="$emit('adicionarItem', $event)"
                    @remover-item="$emit('removerItem', $event)" />
            </li>
        </ul>

        <p class="paragrafo dica">
            <img src="../assets/imagens/icones/icone-dica.png" alt="">
            Pense nas suas atividades favoritas para encontrar o destino perfeito!
        </p>

        <BotaoPrincipal texto="Buscar destinos!" @click="$emit('buscarDestinos')" />
    </section>

</template>

<style scoped>
.selecionar-itens {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-itens {
    color: var(--azul-profundo);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
}

.categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.dica {
    align-self: center;
    margin-top: 2rem;
    margin-bottom: 3.5rem;
    background: var(--cinza-claro);
    border-radius: 5px;
    padding: 10px;
}

@media only screen and (max-width: 767px) {
    .dica {
        margin-bottom: 2.5rem;
    }
}
</style>