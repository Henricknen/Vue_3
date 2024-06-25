<template>
    <div>
        <p v-if = "estou_trabalhando">Estou trabalhando no momento</p>       <!-- utilizando diretiva 'v-if' para indicar de estou ou não estou trabalhando -->
        <p v-else>Estou em busca de novas oportunidades</p>     <!-- esse paragrafo será apresentado se o v-if não for sastifeita -->
        <p>Sou um profissional que tem habilidades de desenvolvimento do lado do cliente quanto do lado do servidor</p>
        <p>Utilizo as seguintes tecnologias</p>
        <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>PHP</li>
            <li>Sql</li>
            <p v-show = "mostrar_email">Mande uma menssagem para: {{ email }}</p>       <!-- diretiva 'v-show' mostra o email enquanto a propriedade for true -->
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Info',
    data() {
        return {
            estou_trabalhando: false,     // só será exibido se o valor for 'true'
            mostrar_email: true,
            email: 'l.henrick@live.com'
        }
    }
}
</script>
