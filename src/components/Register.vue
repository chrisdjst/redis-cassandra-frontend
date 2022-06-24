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
                                            <v-form ref="form" @submit="submitForm">
                                                <v-text-field label="E-mail" v-model="credentials.email" name="email"
                                                    prepend-icon="mdi-mail" type="text" :rules="rules.email" required>
                                                </v-text-field>

                                                <v-text-field label="Nome Completo" v-model="credentials.name"
                                                    name="Nome" prepend-icon="mdi-account" type="text"
                                                    :rules="rules.name" required>
                                                </v-text-field>

                                                <v-text-field label="Usuário" v-model="credentials.username"
                                                    name="login" prepend-icon="mdi-account" type="text"
                                                    :rules="rules.username" required>
                                                </v-text-field>

                                                <v-text-field label="Senha" v-model="credentials.password" id="password"
                                                    name="password" prepend-icon="mdi-lock" type="password"
                                                    :rules="rules.password" required>
                                                </v-text-field>

                                                <v-text-field label="Confirmar Senha" v-model="credentials.cpf" id="cpf"
                                                    name="cpf" prepend-icon="mdi-lock" type="password"
                                                    :rules="rules.cpf" required>
                                                </v-text-field>
                                                <v-card-actions>
                                                    <v-btn outlined rounded block class="fonte" type="submit">
                                                        Registrar-se
                                                    </v-btn>
                                                </v-card-actions>
                                                <div align="center" block>
                                                    Já passoi uma conta? <router-link to="/">Logar-se aqui!
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
                password: [
                    v => !!v || "Senha é obrigatória.",
                    v => (v && v.length > 4) || "A senha deve ser maior que 4 caracteres."],
                cpf: [v => !!v || "CPF é obrigatório."]
                // Confirmar passowrd     passwordConfirmationRule() {return () => (this.password === this.confirmPassword) || 'Password must match'},
            },
            form: {
                name: '',
                email: '',
                cpf: '',
                password: '',
                login: ''
            }
        }
    },
    methods: {
        submitForm() {
            axios.post('/register', this.form)
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

<style>
.letras {
    left: 10%;
    top: 15%;
    bottom: 10%;
    text-align: center;
    font-family: 'Iceland';
    font-style: normal;
    font-weight: 200;
    font-size: 40px;
    line-height: 40px;
    color: #ffffff;
}

.fonte {
    font-weight: bold;
}
</style>

