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

    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    fab: false
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
