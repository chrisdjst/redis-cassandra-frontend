<template>
    <v-content>
        <v-row align="center" justify="center">
            <v-alert elevation="7" type="success"> Logado com sucesso! </v-alert>
        </v-row>
        <br>
        <v-row align="center" justify="center">
            <router-link to="/">
                <v-btn elevation="12" dark x-large>Voltar para Login</v-btn>
            </router-link>
        </v-row>
    </v-content>
</template>