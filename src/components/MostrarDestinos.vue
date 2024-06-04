<script lang="ts">
import { obterDestinos } from '@/http/index';
import type IDestino from '@/interfaces/IDestinos';
import BotaoPrincipal from './BotaoPrincipal.vue';
import CardDestino from './CardDestino.vue';
import type { PropType } from 'vue';
import { itensDeLista1EstaoEmLista2 } from '@/operacoes/lista'

export default {

    props: {
        itens: { type: Array as PropType<String[]>, required: true }
    },

    data() {
        return {
            destinosEncontrados: [] as IDestino[]
        }
    },
    async created() {
        const destinos = await obterDestinos();

        this.destinosEncontrados = destinos.filter((destino) => {
            //Lógica verifica destino
            //todos os itens devem estar inclusos no meu destino
            //Se sim, devemos retornar true

            const DestinoCompativel = itensDeLista1EstaoEmLista2(destino.itens, this.itens);

            return DestinoCompativel;
        })
    },
    components: { BotaoPrincipal, CardDestino },
    emits: ['editarDestino']
}
</script>

<template>
    <section class="mostrar-destinos">
        <h1 class="cabecalho titulo-destinos">Destinos</h1>

        <p class="paragrafo-lg resultados-encontrados">
            Resultados encontrados: {{ destinosEncontrados.length }}
        </p>

        <div v-if="destinosEncontrados.length" class="destinos-wrapper">
            <p class="paragrafo-lg informacoes">
                Veja as opções de destinos que encontramos com as suas preferências!
            </p>

            <ul class="destinos">
                <li v-for="destino of destinosEncontrados" :key="destino.nome">
                    <CardDestino :destino="destino" />
                </li>
            </ul>
        </div>

        <div v-else class="destinos-nao-encontradas">
            <p class="paragrafo-lg destinos-nao-encontradas__info">
                Ops, não encontramos resultados para sua lista selecionada. Vamos tentar de novo?
            </p>

            <img src="../assets/imagens/destino_nao_encontrado.png"
                alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste.">
        </div>

        <BotaoPrincipal texto="Editar lista" @click="$emit('editarDestino')" />
    </section>
</template>

<style scoped>
.mostrar-destinos {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.titulo-destinos {
    color: var(--azul-profundo);
    margin-bottom: 1.5rem;
}

.resultados-encontrados {
    color: var(--azul-profundo);
    margin-bottom: 0.5rem;
}

.destinos-wrapper {
    margin-bottom: 3.5rem;
}

.informacoes {
    margin-bottom: 2rem;
}

.destinos {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.destinos-nao-encontradas {
    margin-bottom: 2rem;
}

.destinos-nao-encontradas__info {
    margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
    .destinos-wrapper {
        margin-bottom: 2rem;
    }
}
</style>
