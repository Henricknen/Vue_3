<template>     <!-- em 'template' fica o que será exibido na aplicação -->
    <div>
        <h1>Olá vue!</h1>
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
    </div>
</template>

<script>
    export default {        // expondo para o projeto o 'Primeiro Componente'
        name: 'Primeiro Componente',
        data() {        // função 'data' armazena dados
            return {
                nome: "Luis Henrique S. F.",
                profissao: "Programador"
            }
        }
    }
</script>
