<template>     <!-- em 'template' fica o que será exibido na aplicação -->
  <div>
    <primeiro_componente/>
    <p>Estou codificando {{ codificando }}</p>    <!-- imprimindo na tela dados do componente -->
  </div>
</template>

<script>
  import primeiro_componente from './components/primeiro_componente.vue'    // importando o 'primeiro_componente'
  export default {    // exportando componente 'App'
    name: 'App',
    components: {
      primeiro_componente
    },
    data() {    // funcão 'data' contém um objeto com dados que será ultilizados no componente
      return {
        codificando: "VueJs"
      }
    }
  }
</script>
