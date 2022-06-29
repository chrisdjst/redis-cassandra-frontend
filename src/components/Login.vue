<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="4">

            <img src="../assets/cassis.png" width="365">

          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="6" md="5">
            <v-hover v-slot:default="{ hover }">
              <v-card color="#252525" :elevation="hover ? 16 : 2" class="elevation-20 rounded-xl tamanho-card" dark>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="login-text">
                      Login
                    </div>
                    <div class="risco"> </div> <br>
                    <br>
                    <div class="login-text2">
                    Desenvolvimento Software consumindo dados NoSQL!
                    </div>
                    <div class="teste">
                      <v-card-text>
                        <v-form @submit="login">

                          <v-text-field label="Email" v-model="form.email" name="email"
                            prepend-icon="mdi-account" type="text" :rules="rules.email" required outlined></v-text-field>

                          <v-text-field label="Senha" v-model="form.password" id="password" name="password"
                            prepend-icon="mdi-lock" type="password" :rules="rules.password" required outlined></v-text-field>
                          <v-card-actions>
                            <br><br><br>
                            <v-btn outlined rounded block class="fonte" type="submit">
                              Acessar
                            </v-btn>
                          </v-card-actions>
                          <div align="center">
                            Novo no Cassis? <router-link to="/register">Registre-se aqui!</router-link>
                          </div>
                        </v-form>
                      </v-card-text>

                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-hover>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
import { mapMutations } from "vuex";

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [v => !!v || "Email é obrigatório."],
        password: [
          v => !!v || "Senha é obrigatória.",
        ]
      },

    }
  },

  methods: {
    ...mapMutations(["setEmail", "setToken"]),
    async login(e) {
      e.preventDefault();
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.form.email,
          password: this.form.password,
        }),
      });
      if (response.status !== 200) {
        console.log("Error: " + response.status + " - " + response.statusText);
        alert("Email ou senha incorretos!");
        this.form.password = ''
      } else {
        const { access_token } = await response.json();
        this.setToken(access_token);
        this.setEmail(this.form.email);
        this.$router.push('/inicial')
      }
    },
  }
}


</script>
