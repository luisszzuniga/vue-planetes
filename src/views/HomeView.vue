<template>
  <div class="container mx-auto">
    <h1 class="text-center text-3xl my-10">Les planètes</h1>

    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900">
        Avec lune
        <select v-model="filters.hasMoon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          <option value="default">-- Filtrer --</option>
          <option value="0">Non</option>
          <option value="1">Oui</option>
        </select>
      </label>
    </div>

    <div>
      <label class="block mb-2 text-sm font-medium text-gray-900">
        Est une planète ?
        <select v-model="filters.isPlanet" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          <option value="default">-- Filtrer --</option>
          <option value="0">Non</option>
          <option value="1">Oui</option>
        </select>
      </label>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <PlanetCard v-for="planet in filteredPlanets" :key="planet.id" :planet="planet"/>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import PlanetCard from '../components/PlanetCard.vue'
import { usePlanetsStore } from '../stores/planets'

export default {
  data() {
    return {
      planetsStore: usePlanetsStore(),
      filters: {
        hasMoon: "default",
        isPlanet: "default"
      }
    }
  },

  components: {
    RouterLink,
    PlanetCard
  },

  computed: {
    filteredPlanets() {
      const DEFAULT = "default";

      return this.planetsStore.getPlanets.filter((planet) => {
        // FILTRE AVEC ET SANS LUNE
        if (
          this.filters.hasMoon !== DEFAULT &&
          Boolean(Number(this.filters.hasMoon)) !== Boolean(planet.moons)
        ) {
          return false;
        }

        // FILTRE IS PLANET
        if (
          this.filters.isPlanet !== DEFAULT &&
          Boolean(Number(this.filters.isPlanet)) !== Boolean(planet.isPlanet)
        ) {
          return false;
        }

        return true;
      })
    }
  }
}
</script>

<style scoped>

</style>