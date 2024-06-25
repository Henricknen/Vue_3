<template>
    <h1>Sou um profissional: {{ hardskill }}</h1>        <!-- ultilizando propriedade 'nome' -->
</template>

<script>
export default {
    name: 'LyfeCycle',    
    data() {
        return {
            hardskill: 'Back End...'       // criando dado 'Full Stack...' em propriedade nome
        }
    },
    created() {     // novo item 'created'
      setTimeout(()=> {   // função 'setTimeout' condiciona a troca após um certo tempo definido
        this.hardskill = "Front End..."
      }, 1000)
    },
    mounted() {
      setTimeout(()=> {
        this.hardskill = "Full Stack..."
      }, 2000)
    }
}
</script>