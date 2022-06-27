<template>
    <v-app id="app">
        <v-content>
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="3">
                        <v-card class="elevation-12 rounded-xl" dark color="#252525" max-width="500">
                            <v-list-item three-line>
                                <v-list-item-content>
                                    <div class="letras">
                                        <div class="fonte">
                                            Registrar
                                        </div>
                                        <v-card-text>
                                            <v-form ref="form">
                                                <v-text-field label="E-mail" v-model="form.email" name="email"
                                                    prepend-icon="mdi-mail" type="text" :rules="rules.email" required outlined>
                                                </v-text-field>

                                                <v-text-field label="Nome Completo" v-model="form.nome"
                                                    name="Nome" prepend-icon="mdi-account" type="text"
                                                    :rules="rules.name" required outlined>
                                                </v-text-field>

                                                <v-text-field label="Senha" v-model="form.senha" id="password"
                                                    name="senha" prepend-icon="mdi-lock" type="password"
                                                    :rules="rules.senha" required outlined>
                                                </v-text-field>

                                                <v-text-field label="CPF" v-model="credentials.cpf" id="cpf"
                                                    name="cpf" prepend-icon="mdi-lock" type="cpf"
                                                    :rules="rules.cpf" required outlined>
                                                </v-text-field>
                                                
                                                <v-card-actions>
                                                    <v-btn outlined rounded block class="fonte" v-on:click="submitForm">
                                                        Registrar-se
                                                    </v-btn>
                                                </v-card-actions>
                                                <br>
                                                <div align="center" block>
                                                    Já possui uma conta? <router-link to="/">Logar-se aqui!
                                                    </router-link>
                                                </div>
                                            </v-form>
                                        </v-card-text>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    props: {
        msg: String
    },
    data() {
        return {
            credentials: {},
            rules: {
                email: [v => !!v || "E-mail é obrigatório."],
                name: [v => !!v || "Nome é obrigatório."],
                username: [v => !!v || "Usuário é obrigatório."],
                senha: [
                    v => !!v || "Senha é obrigatória.",
                    v => (v && v.length > 4) || "A senha deve ser maior que 4 caracteres."],
                cpf: [v => !!v || "CPF é obrigatório."]
                // Confirmar passowrd     passwordConfirmationRule() {return () => (this.password === this.confirmPassword) || 'Password must match'},
            },
            form: {
                nome: '',
                email: '',
                cpf: '',
                senha: '',
                tipo_usuario: 'teste'
            }
        }
    },
    methods: {
        submitForm() {
            axios.post('http://localhost:3000/usuarios', this.form)
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)
                }).finally(() => {
                    //Perform action in always
                });
        }
    }
}
</script>