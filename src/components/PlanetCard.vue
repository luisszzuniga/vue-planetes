<template>
    <div class="planet rounded-lg overflow-hidden shadow-lg bg-gray-600 p-6 space-y-4">
        <h2 class="text-3xl mb-2 font-semibold text-white text-center">{{ planet.name }}</h2>
        <div class="details space-y-2 text-gray-300 text-sm">
            <p v-if="planet.bodyType"><span class="font-semibold text-white">Type de corps :</span> {{ planet.bodyType }}</p>
            <p v-if="planet.avgTemp"><span class="font-semibold text-white">Température moyenne :</span> {{ planet.avgTemp }}</p>
            <p v-if="planet.density"><span class="font-semibold text-white">Densité :</span> {{ planet.density }}</p>
            <p v-if="planet.inclination"><span class="font-semibold text-white">Inclinaison :</span> {{ planet.inclination }}</p>
            <p><span class="font-semibold text-white">Est-ce une planète ? :</span> <span>{{ planet.isPlanet ? 'Oui' : 'Non' }}</span></p>
            <p v-if="planet.mass"><span class="font-semibold text-white">Masse :</span> {{ planet.mass.massValue }}e{{ planet.mass.massExponent }}</p>
            <p v-if="planet.meanRadius"><span class="font-semibold text-white">Rayon moyen :</span> {{ planet.meanRadius }}</p>
            <p class="flex gap-3">
                <span class="font-semibold text-white">Lunes :</span>
                <span v-if="! planet.moons">Aucune</span>
                <ul v-else>
                    <li v-for="moon in planet.moons" :key="moon.moon">
                        {{ moon.moon }}
                    </li>
                </ul>
            </p>
            <RouterLink class="text-blue-500 hover:text-blue-600 transition duration-200 inline-block mt-4" :to="'/planet/' + planet.id">
                Plus d'informations &rarr;
            </RouterLink>


            <FavouriteComponent :planet="planet" />
        </div>
    </div>
</template>

<script>
import FavouriteComponent from './FavouriteComponent.vue';

export default {
    props: ['planet'],

    components: {
        FavouriteComponent
    }
}
</script>

<style>

</style>