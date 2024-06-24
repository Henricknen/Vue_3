<template>
  <div>
    <p>Estou codificando {{ codificando }}</p>    <!-- imprimindo na tela dados do componente -->
    <LifeClycle/>
  </div>
</template>

<script>
  import LifeClycle from './components/LifeClycle.vue'    // importando componente 'LifeClycle'
  export default {
    name: 'App',
    components: {
      LifeClycle      // indica que este componente está sendo ultilizado
    },
    data() {
      return {
        codificando: "VueJs"
      }
    }
  }
</script>
