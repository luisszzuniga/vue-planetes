<template>
  <div class="container mx-auto">
    <main v-if="planet">
      <h1 class="text-center text-3xl my-10">{{ planet.name }}</h1>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { usePlanetsStore } from '../stores/planets'

export default defineComponent({
  data() {
    return {
      planetsStore: usePlanetsStore(),
      planetId: this.$route.params.id,
    }
  },

  created() {
    console.log(this.planet)
  },

  computed: {
    planet() {
      const planets = this.planetsStore.getPlanets;

      const planet = planets.filter((planet) =>  {
        if (planet.id === this.planetId) return true;
      })

      if (planet.length > 0) return planet[0];
      
      return null;
    }
  }
})
</script>

<style scoped>
</style>
