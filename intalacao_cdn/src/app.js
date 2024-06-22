const MyNameApp = {
    data() {        // propriedade 'data' retorna um objeto com os dados para o front end da aplicação
        return {
            name: "Luis Henrique S F",       // propriedade name que estará disponivél no html
            framework: "Vue 3"
        }
    }
}

Vue.createApp(MyNameApp). mount("#app");        // instançiando o Vue ultilizando os dados da constante 'MyNameApp', 'mount("#app")' monta a aplicação vue na página html
