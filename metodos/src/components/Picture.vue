<template>
    <img :src = "framework" :alt = "descricao">     <!-- sintaxe resumida do v-bind é utilizar ':' antes de src de de alt -->
</template>

<script>
export default {
    name: 'Picture',
    data() {
        return {
            framework: "/img/vue3.png",
            descricao: "Imagem do framework utilizado nesta codificação"
        }
    }
}
</script>
