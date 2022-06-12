<template>
  <v-app id="app">
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
    //
  }),
};
</script>

<style>
#app {
  background: url('./assets/Backgroud.jpg');
  background-size: cover;
}
</style>