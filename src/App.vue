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
      <v-dialog v-model="dialog" width="350" v-if="isLoggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon dark v-on="on" >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-card>
          
          <v-card-title class="grey lighten-1" >
            <v-spacer></v-spacer><div class="perfil-titulo">Perfil</div><v-spacer></v-spacer>
          </v-card-title>


          <v-card-text>
            <br>
            <div class="perfil-bold">
            <div class="perfil">Nome</div> getname <br><br>
            <div class="perfil">Email</div> getname <br><br>
            <div class="perfil">CPF</div> getname <br><br>
            <div class="perfil">Tipo de usuario</div> getname <br><br>
            <div class="perfil">Senha</div> getname <br><br>
            </div>
          </v-card-text>

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
      <v-btn icon v-if="isLoggedIn" @click="logout" to="/">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- Final da ToolBar -->
    <v-main>
      <router-view />
    </v-main>

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
    fab: false,
    dialog: false,
    logout(e) {
      e.preventDefault();
      location.reload();
    }
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
}
</script>