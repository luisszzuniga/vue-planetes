<template>
  <div class="container mx-auto">
    <main v-if="planet">
      <h1 class="text-center text-3xl my-10">{{ planet.name }}</h1>

      <div class="flex justify-center">
        <div class="planet"></div>
      </div>

      <div class="bg-white w-1/2 mx-auto p-4 shadow-md mt-10">


        <p v-if="planet.alternativeName">
          <span class="font-bold">Alternative name: </span>{{ planet.alternativeName }}
        </p>

        <p v-if="planet.bodyType">
          <span class="font-bold">Type: </span>{{ planet.bodyType }}
        </p>

        <p v-if="planet.discoveredBy">
          <span class="font-bold">Discovered by: </span>{{ planet.discoveredBy }}
        </p>

        <p v-if="planet.discoveryDate">
          <span class="font-bold">Discovery date: </span>{{ planet.discoveryDate }}
        </p>

        <p>
          <span class="font-bold">Planet? : </span>{{ planet.isPlanet ? 'Yes' : 'Nein' }}
        </p>

        <p class="flex gap-3">
          <span class="font-bold">Moons : </span>
          <span v-if="! planet.moons">Aucune</span>
          <ul v-else>
            <li v-for="moon in planet.moons" :key="moon.moon">
              <RouterLink class="underline text-blue-600 hover:text-blue-900" :to="'/planet/' + getMoonId(moon.rel)">{{ moon.moon }}</RouterLink>
            </li>
          </ul>
        </p>

        <FavouriteComponent class="mt-10" :planet="planet" />
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { usePlanetsStore } from '../stores/planets'
import FavouriteComponent from '../components/FavouriteComponent.vue'

export default defineComponent({
  data() {
    return {
      planetsStore: usePlanetsStore(),
      planetId: this.$route.params.id
    }
  },
  computed: {
    planet() {
      this.planetId = this.$route.params.id;
      return this.planetsStore.getPlanetById(this.planetId);
    }
  },
  methods: {
    getMoonId(url) {
      // URL EX : https://api.le-systeme-solaire.net/rest/bodies/remus
      const lastIndex = url.lastIndexOf("/");
      return url.substring(lastIndex + 1);
    },
  },

  components: {
    RouterLink,
    FavouriteComponent
  }
})
</script>

<style scoped>
.planet {
  height: 150px;
  width: 150px;
  border-radius: 100%;
  background: radial-gradient(
    rgba(244, 209, 143, 1) 0%,
    rgba(238, 132, 68, 0.8) 40%,
    rgba(217, 86, 51, 0.6) 60%,
    rgba(165, 48, 90, 0.4) 80%,
    rgba(91, 38, 86, 0.2) 100%
  );
}
</style>
