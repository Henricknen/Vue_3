<template>
    <div>
        <p v-if = "estou_trabalhando">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de novas oportunidades</p>
        <p>Sou um profissional que tem habilidades de desenvolvimento do lado do cliente quanto do lado do servidor</p>
        <p>Utilizo as seguintes tecnologias</p>
        <ul>
            <li v-for = "(tecnologias, index) in minhas_tecnologias" :key = "index">{{ tecnologias }}</li>      <!-- diretiva v-for itera sobre o array 'minhas_tecnologias' -->
        </ul>

        <p>Tecnologias front end:</p>
        <ul>
            <li v-for = "front_end in tecnologias_front_end" :key = "front_end.id">     <!-- diretiva v-for itera sobre o array 'tecnologias_front_end' com chave 'id' -->
                {{ front_end.tecnologia }}
            </li>
        </ul>

        <p>Tecnologias back end:</p>
        <ul>
            <li v-for = "back_end in tecnologias_back_end" :key = "back_end.id">        <!-- diretiva 'v-for' itera sobre o array 'tecnologias_back_end' com chave 'id' -->
                {{ back_end.tecnologia }}
            </li>
        </ul>

        <div>
            <button @click = "showEmail">{{ texto_botao }}</button>
        </div>

        <p v-show = "mostrar_email">Mande uma mensagem para: {{ email }}</p>

        <p class = "classe">Acessar meu portfólio <a v-bind:href = "meu_link">Clique aqui</a></p>

        <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue'

export default {
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
            texto_botao: 'Mostrar e-mail',
            minhas_tecnologias: ['JavaScript', 'PHP', 'Html', 'Sql', 'Css', 'Laravel', 'Vue'],      // lista de 'array'
            tecnologias_front_end: [
                { id: 1, tecnologia: 'JavaScript' },        // lista de objetos
                { id: 2, tecnologia: 'Html' },
                { id: 3, tecnologia: 'Css' },
                { id: 4, tecnologia: 'Vue' }
            ],
            tecnologias_back_end: [
                { id: 5, tecnologia: 'PHP' },
                { id: 6, tecnologia: 'Sql' },
                { id: 7, tecnologia: 'Laravel' }
            ]
        }
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            this.texto_botao = this.mostrar_email ? 'Esconder e-mail' : 'Mostrar e-mail'
        }
    }
}
</script>

<style>
.paragrafo_pai {
    color: red;
}
</style>
