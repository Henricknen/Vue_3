const MyNameApp = {
    data() {
        return {
            name: "Luis Henrique S F",
            framework: "",
            input_name: ""      // 'input_name' está ligado ao formulário
        }
    },
    methods: {      // em 'methods' é onde fica as funções da aplicação
        submitForm(e) {
            e.preventDefault();

            this.framework = this.input_name;
        }

    }
}

Vue.createApp(MyNameApp). mount("#app");
