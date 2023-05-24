<template>
  <main class="container mx-auto">
    <h1 class="text-center text-3xl text-center font-bold my-10">Mes favoris</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <PlanetCard  v-for="planet in favouritePlanets" :key="planet.id" :planet="planet"/>
    </div>
  </main>
</template>

<script>
import PlanetCard from '../components/PlanetCard.vue';
import { usePlanetsStore } from '../stores/planets';

export default {
    components: {
        PlanetCard
    },

    data() {
        return {
            planetsStore: usePlanetsStore()
        }
    },

    computed: {
        favouritePlanets() {
            return this.planetsStore.getFavouritePlanets;
        }
    }
}
</script>

<style>

</style>