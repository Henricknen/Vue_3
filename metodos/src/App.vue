<template>
  <div>
    <p>Estou codificando {{ codificando }}</p>
    <LifeClycle />
    <Pessoa />    <!-- importando componente 'Pessoa' -->
  </div>
</template>

<script>
  import LifeClycle from './components/LifeClycle.vue'
  import Pessoa from './components/Pessoa.vue'

  export default {
    name: 'App',
    components: {
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
