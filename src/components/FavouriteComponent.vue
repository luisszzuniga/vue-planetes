<template>
    <div class="underline cursor-pointer">
        <span v-if="planetsStore.getFavouritePlanetIndex(planet) === -1" @click="planetsStore.addFavouritePlanet(planet)">
            Ajouter aux favoris
        </span>
        <span v-else @click="planetsStore.removeFavouritePlanet(planet)">
            Retirer des favoris
        </span>
    </div>
</template>

<script>
import { usePlanetsStore } from '../stores/planets'

export default {
    props: ['planet'],

    data() {
        return {
            planetsStore: usePlanetsStore()
        }
    },
}
</script>

<style scoped>

</style>