<template>

  <footer class="rodape paragrafo">
    Desenvolvido por Carolina Lima - 2024 | Projeto fictício.
  </footer>

</template>

<style scoped>
.rodape {
  background: var(--azul-profundo);
  padding: 1.5rem 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 1300px) {
  .rodape {
    padding: 1.5rem 3.75rem;
  }
}

@media only screen and (max-width: 767px) {
  .rodape {
    padding: 1.5rem;
  }
}
</style>