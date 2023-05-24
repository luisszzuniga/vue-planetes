<template>
    <main class="container mx-auto" v-if="planets">
        <h1 class="text-center fon-bold text-3xl py-10">Système solaire</h1>

        <div class="flex flex-col items-center">
            <template v-for="planet in planets" :key="planet.id">
                <div class="planet">
                    {{ planet.name }}
                </div>
            </template>
        </div>
    </main>
</template>

<script>
import { usePlanetsStore } from '../stores/planets'

export default {
    data() {
        return {
            planetsStore: usePlanetsStore(),
        }
    },

    computed: {
        planets() {
            // ICI ON RETOURNE LES PLANETES QUI ONT UNE PROPRIETE SEMIMAJORAXIS ET ON ORDONNE PAR CA AUSSI (ASC)
            const planets = this.planetsStore.getPlanets.sort((a, b) => {
                return a.semimajorAxis - b.semimajorAxis;
            })
            return planets;
        },
    }
}
</script>

<style scoped>
.planet {
    height: 100px;
    width: 100px;
    max-height: 700px;
    max-width: 700px;
    border-radius: 100%;
    background: green;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>