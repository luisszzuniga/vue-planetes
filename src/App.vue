<template>
  <header>
    <AppNavbar />
  </header>

  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
import AppNavbar from './components/AppNavbar.vue';
import SolarSystemService from "./services/SolarSystemService";
import { usePlanetsStore } from "./stores/planets";

export default {
  data() {
    return {
      plantesStore: usePlanetsStore()
    }
  },

  components: {
    RouterView,
    AppNavbar
  },

  mounted() {
    SolarSystemService.get("/rest/bodies")
    .then((response) => {
      plantesStore.setPlanets(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
};
</script>

<style>
</style>