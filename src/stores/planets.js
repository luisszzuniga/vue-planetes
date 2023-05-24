import { defineStore, acceptHMRUpdate } from 'pinia';

export const usePlanetsStore = defineStore({
    id: 'planets',

    state: () => ({
        planets: [],
    }),

    getters: {
        getPlanets(state) {
            return state.planets;
        }
    },

    actions: {
        setPlanets(planets) {
            this.planets = planets;
        },

        getPlanetById(planetId) {
            const planet = this.planets.filter((planet) =>  {
              if (planet.id === planetId) return true;
            })
      
            if (planet.length > 0) return planet[0];
            
            return null;
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePlanetsStore, import.meta.hot));
}
