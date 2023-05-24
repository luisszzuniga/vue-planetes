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
      planetsStore: usePlanetsStore()
    }
  },

  components: {
    RouterView,
    AppNavbar
  },

  created() {
    SolarSystemService.get("/rest/bodies")
    .then((response) => {
      this.planetsStore.setPlanets(response.data.bodies);
    })
    .catch((error) => {
      console.log(error);
    });
  }
};
</script>

<style scoped>
</style>