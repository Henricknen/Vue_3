<template>
  <div>
    <Header />
    <p class = "paragrafo_pai">Estou codificando {{ codificando }}</p>
    <LifeClycle />
    <Pessoa />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import LifeClycle from './components/LifeClycle.vue'
  import Pessoa from './components/Pessoa.vue'

  export default {
    name: 'App',
    components: {
      Header,
      LifeClycle,
      Pessoa
    },
    data() {
      return {
        codificando: "VueJs"
      }
    }
  }
</script>

<style>
  body {    /* css global */
    background-color: #333;
    color: #FFF;
  }

  a {
    color: red;
  }

  .classe {
    background-color: #000;
  }
</style>