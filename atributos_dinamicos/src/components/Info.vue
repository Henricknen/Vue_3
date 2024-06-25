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
            <p v-show = "mostrar_email">Mande uma menssagem para: {{ email }}</p>
            <p>Acessar meu portifólio <a v-bind:href = "meu_link">Click aki</a></p>     <!-- atributo 'v-bind' interpreta o que está na propriedade meu_link como um dado dinâmico -->
            <Picture />
        </ul>
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
            mostrar_email: true,
            email: 'l.henrick@live.com',
            meu_link: 'https://portfoli0henricknen.netlify.app/'        // atributo 'meu_link' contém o link do meu portifólio
        }
    }
}
</script>
