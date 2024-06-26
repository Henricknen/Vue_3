<template>
    <div>
        <p v-if = "estou_trabalhando">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Sou um profissional que tem habilidades de desenvolvimento do lado do cliente quanto do lado do servidor</p>
        <p>Utilizo as seguintes tecnologias</p>
        <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Sql</li>
        </ul>
        <div>
            <button @click = "showEmail">{{ texto_botao }}</button>        <!-- botão ultilizando diretiva '@click' que ativa o método por meio de um click -->
        </div>
            <p v-show = "mostrar_email">Mande uma menssagem para: {{ email }}</p>
            <p class = "classe">Acessar meu portifólio <a v-bind:href = "meu_link">Click aki</a></p>
            <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue'
export default {
  components: { Picture },
    name: 'Info',
    components: {
        Picture
    },
    data() {
        return {
            estou_trabalhando: false,
            mostrar_email: false,
            email: 'l.henrick@live.com',
            meu_link: 'https://portfoli0henricknen.netlify.app/',
            texto_botao: 'Mostrar e-mail'       // texto do botão
        }
    },
    methods: {
        showEmail() {       // quando botão for clicado este método será açionado
            this.mostrar_email = !this.mostrar_email        // o método inverte o valor de 'mostrar_email' deixando 'true' o apresentando na tela
            if(!this.mostrar_email) {       // if 'troca' a menssagem do botão
                this.texto_botao = 'Mostrar e-mail'
            } else {
                this.texto_botao = 'Esconder e-mail'
            }
        }
    }
}
</script>

<style>
    .paragrafo_pai {
        color: red;
    }
</style>