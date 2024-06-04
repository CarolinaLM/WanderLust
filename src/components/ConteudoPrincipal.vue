<script lang="ts">

import MostrarDestinos from './MostrarDestinos.vue';
import SelecionarItens from './SelecionarItens.vue'
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';

type Pagina = 'SelecionarItens' | 'MostrarDestinos';

export default {
    data() {
        return {
            itens: [] as string[],
            conteudo: 'SelecionarItens' as Pagina
        }
    },
    components: { SelecionarItens, Tag, SuaLista, MostrarDestinos },
    methods: {
        adicionarItem(item: string) {
            this.itens.push(item)
        },
        removerItem(item: string) {
            this.itens = this.itens.filter(SuaLista => item !== SuaLista);
        },
        navegar(pagina: Pagina) {
            this.conteudo = pagina
        }
    },
}

</script>

<template>

    <main class="conteudo-principal">
        <SuaLista :itens="itens" />

        <KeepAlive include="SelecionarItens">
            <SelecionarItens v-if="conteudo === 'SelecionarItens'" @adicionar-item="adicionarItem"
                @remover-item="removerItem" @buscar-destinos="navegar('MostrarDestinos')" />
            <MostrarDestinos v-else-if="conteudo === 'MostrarDestinos'" :itens="itens"
                @editar-destino="navegar('SelecionarItens')" />
        </KeepAlive>

    </main>

</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>