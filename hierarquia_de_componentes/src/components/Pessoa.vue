<template>
    <div>
        <h2>Está é a descrição de: {{ nome }}</h2>
        <Info />        <!-- importando componente 'Info' -->
        <Info />            <!-- replicando componente -->
        <Form />
    </div>
</template>

<script>
    import Info from './Info'
    import Form from './Form'
    export default {
        name: 'Pessoa',
        components: {
            Info,        // reutilizando componente importado
            Form
        },
        data() {
            return {
                nome: 'Luis Henrique S. F.'
            }
        }
    }
</script>
