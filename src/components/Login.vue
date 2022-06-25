<template>
  <v-app>
    <v-content>
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
                    Desenvolvimento Software consumindo dados NoSQL
                    <div class="teste">
                      <v-card-text>
                        <v-form ref="form" > 

                          <v-text-field label="Email" v-model="credentials.email" name="email"
                            prepend-icon="mdi-account" type="text" :rules="rules.email" required></v-text-field>

                          <v-text-field label="Senha" v-model="credentials.password" id="password" name="password"
                            prepend-icon="mdi-lock" type="password" :rules="rules.password" required></v-text-field>
                          <v-card-actions>
                            <br><br><br>
                            <v-btn outlined rounded block class="fonte" v-on:click="submitForm">
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
    </v-content>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      credentials: {
         email: '',
         password: ''
      },
      rules: {
        email: [v => !!v || "Email é obrigatório."],
        password: [
          v => !!v || "Senha é obrigatória.",
          v => (v && v.length > 4) || "A senha deve ser maior que 4 caracteres."
        ]
      },
      
    }
  },
  
  methods: {
    submitForm() 
    {
      axios.post('http://localhost:3000/login', this.credentials, 
        {'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*"})
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
.borda {
  border: 2px solid;
  border-radius: 25px;
}

.teste {
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
}

.fonte {
  font-weight: bold;
}

.risco {
  position: absolute;
  left: 4%;
  right: 60%;
  top: 18%;
  bottom: 86%;
  border: 1px solid #ffffff;
}

.login-text {
  left: 10%;
  top: 10%;
  bottom: 10%;

  font-family: 'Iceland';
  font-style: normal;
  font-weight: 200;
  font-size: 50px;
  line-height: 40px;
  color: #ffffff;
}
</style>