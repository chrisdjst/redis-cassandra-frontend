<template>
  <v-app id="app">
    <!-- Inicio botão scroll to top -->
    <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right color="primary" @click="toTop">
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    <!-- Final botão scroll to top -->
    <v-app-bar rounded app dark color="#252525">
      <div class="d-flex align-center">
        <v-img alt="Cassis" class="mr-2" contain src="./assets/cassis4-icon.png" transition="scale-transition"
          width="40" />
        <h1>Cassis</h1>
      </div>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon dark v-on="on" v-if="isLoggedIn">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Perfil
          </v-card-title>

          <v-card-text>
            Nome <br> {{ getname }} <br> Email <br> {{ getEmail }} <br> 
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-btn icon v-if="isLoggedIn">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
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
    dialog: false
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
