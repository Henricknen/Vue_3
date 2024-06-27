<template>
    <div>
        <h2>Meu formulário</h2>
        <form action="" @submit = "enviar_formulario($event)">
            <div>
                <input type = "text" v-model = "nome">
            </div>
            <div>
                <input type = "text" v-model = "email">              
            </div>
            <div>
                <Submit />
            </div>
        </form>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
        <p>Conteúdo</p>
    </div>
</template>

<script>
import InputText from './form/inputText.vue'
import Submit from './form/Submit.vue'

export default {
    name: 'Form',
    components: {
        InputText,
        Submit
    },
    data() {
        name: "Luis Henrique S F";
        email: "l.henrick@live.com";
    },
    methods: {
        enviar_formulario(e) {      // 'e' previne que o formulário seja enviado
            e.preventDefault();

            const name = this.name;
            const email = this.email;

            console.log("O nome é: " + name);
            console.log("O email é: " + email);
        }
    }
}
</script>

<style scoped>
    p {
        margin: 150px;
    }
</style>