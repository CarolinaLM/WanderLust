<template>

    <header class="banner">
        <div class="apresentacao">
            <img src="../assets/imagens/logo.png" alt="Logo do Wander Lust" class="logo">

            <p class="cabecalho-lg frase-cabecalho">
                <span class="texto-turquesa">Planeje seu próximo destino</span> e descubra lugares extraordinários e
                crie memórias inesquecíveis.
            </p>
            <p class="subtitulo-lg">
                Bem-vindo ao WonderLust, Aqui estão algumas das viagens, hotéis, atividades que eu (carolina) já fiz no
                Brasil.
            </p>
        </div>

        <img src="../assets/imagens/foto-banner2.png" alt="" class="foto-banner">
    </header>

</template>

<style scoped>
.banner {
    padding: 4rem 7.5rem;
    color: var(--creme);

    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 3.25rem;
}

.logo {
    height: 4.5rem;
    margin-bottom: 3rem;
}

.frase-cabecalho {
    margin-bottom: 2rem;
}

.texto-turquesa {
    color: var(--turquesa-claro);
}

.foto-banner {
    width: 35rem;
}


@media only screen and (max-width: 1300px) {
    .banner {
        padding: 4rem 3.75rem;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

@media only screen and (max-width: 767px) {
    .banner {
        padding: 4rem 1.5rem;
    }

    .foto-banner {
        width: min(100%, 21.25rem);
    }
}
</style>