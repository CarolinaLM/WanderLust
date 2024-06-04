<script lang="ts">

import Tag from './Tag.vue';

export default {
    components: { Tag },
    props: {
        item: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado

            if (this.selecionado) {
                this.$emit('adicionarItem', this.item);
            } else {
                this.$emit('removerItem', this.item);
            }
        }
    },
    emits: ['adicionarItem', 'removerItem']
}

</script>

<template>

    <button class="item" @click="aoClicar" :aria-pressed="selecionado">
        <Tag :texto="item" :ativa="selecionado" />
    </button>

</template>

<style scoped>
.item {
    cursor: pointer;
}
</style>