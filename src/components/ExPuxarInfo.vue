<template>
    <v-main>
        <v-row align="center" justify="center">
        <div v-if="isLoggedIn">
            <v-alert v-if="isLoggedIn" elevation="7" type="success"> Logado com sucesso! </v-alert>
            O Token de acesso é: `{{ getToken }}`
            <br>
            O Email é: `{{ getEmail }}`
        </div>
        <div v-if="!isLoggedIn">
            Nao ta logado, <v-btn to="/">logar</v-btn>
            <br>
        </div>
        </v-row>
    </v-main>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: 'Teste',
    computed: {
        ...mapGetters(["isLoggedIn", "getToken", "getEmail"])
  },
  

};
</script>