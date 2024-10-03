<script setup>
import { RouterView} from 'vue-router';
</script>

<template>
   <v-app>
    <v-app-bar color="blue-darken-4">
      <v-row items-align="center" justify="center">
        <v-btn variant="tonal" to="/">
            <v-icon icon="mdi-home"/> Home
        </v-btn>
      </v-row>
    </v-app-bar>
    <v-main class="v-main">
      <RouterView />
    </v-main>
    <v-footer color="blue-darken-4">
      <v-row align="center" justify="center">Bienvenido a Vuatify</v-row>
    </v-footer>
  </v-app>
</template>

<style scoped>
.v-main{
  min-height:90%;
}
.link{
  text-decoration: none;
}
</style>
