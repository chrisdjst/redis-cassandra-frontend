<template>
  <v-app id="app">
    <!-- Inicio botão scroll to top -->
    <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right color="primary" @click="toTop">
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    <!-- Final botão scroll to top -->
    <!-- Inicio da ToolBar -->
    <v-app-bar rounded app dark color="#252525">
      <div class="d-flex align-center">
        <v-img alt="Cassis" class="mr-2" contain src="./assets/cassis4-icon.png" transition="scale-transition"
          width="40" />
        <h1>Cassis</h1>
      </div>
      <v-spacer></v-spacer>

      <!-- Inicio do Perfil -->
      <v-dialog v-model="dialog" width="500" v-if="acesso">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon dark v-on="on" @click="pegaInfoPerfil">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="grey lighten-1">
            <v-spacer></v-spacer>
            <div class="perfil-titulo">Perfil</div>
            <v-spacer></v-spacer>
          </v-card-title>
          <br>
          <div class="perfil-bold">
            <v-text-field v-model="usuario.nome" label="Nome" class="perfil" prepend-icon="mdi-account" outlined
              :readonly="true"></v-text-field>
            <v-text-field v-model="usuario.email" label="E-mail" class="perfil" prepend-icon="mdi-mail" outlined
              :readonly="true"></v-text-field>
            <v-text-field v-model="usuario.cpf" label="CPF" class="perfil" prepend-icon="mdi-card-account-mail" outlined
              :readonly="true"></v-text-field>
            <v-text-field v-model="usuario.senha" label="Senha" class="perfil" prepend-icon="mdi-lock" outlined
              :readonly="true"></v-text-field>
            <v-text-field v-model="usuario.tipo_usuario" label="Tipo do Usuario" prepend-icon="mdi-account-box-multiple"
              class="perfil" outlined :readonly="true"></v-text-field>
          </div>
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#FF0000" text @click="dialog = false">
              Fechar
            </v-btn>
            <router-link to="/perfil">
              <v-btn color="primary" @click="dialog = false">
                Editar
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Final do Perfil -->
      <v-btn icon v-if="acesso" @click="logout" to="/">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Final da ToolBar -->

    <v-main>
      <router-view />
    </v-main>
    <!-- Inicio do Footer -->
    <v-footer dark padless width="100%">
      <v-card tile width="100%">
        <br>
        <v-card-text class="white--text footer">
          {{ new Date().getFullYear() }} — <strong>CASSIS - BANCOS DE DADOS NOSQL</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <!-- Final do Footer -->
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapGetters(["isLoggedIn", "getToken", "getEmail"])
  },

  data: () => ({
    acesso: false,
    usuario: {
      nome: '',
      cpf: '',
      senha: '',
      tipo_usuario: '',
      email: '',
    },
    fab: false,
    dialog: false,
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    logout(e) {
      e.preventDefault();
      this.acesso=false;
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('email');
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    async pegaInfoPerfil(e) {
      // this.$store.getters["getEmail"]
      const response = await fetch("https://redis-cassandra-backend.herokuapp.com/usuarios/" + sessionStorage.getItem('email'), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sessionStorage.getItem('token')
        }
      });
      const resposta = await response.json();
      const usuario = resposta[0]
      this.usuario.email = usuario.email;
      this.usuario.cpf = usuario.cpf;
      this.usuario.nome = usuario.nome;
      this.usuario.senha = usuario.senha;
      this.usuario.tipo_usuario = usuario.tipoUsuario;
    }
  },
  created() {
    this.acesso=(sessionStorage.getItem('token')?true:false);
  },
}
</script>