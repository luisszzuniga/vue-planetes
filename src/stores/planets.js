import { defineStore, acceptHMRUpdate } from 'pinia';

export const usePlanetsStore = defineStore({
    id: 'planets',

    state: () => ({
        planets: [],
        favouritePlanets: []
    }),

    getters: {
        getPlanets(state) {
            return state.planets;
        },

        getFavouritePlanets(state) {
            return state.favouritePlanets;
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
        },

        addFavouritePlanet(planet) {
            const index = this.getFavouritePlanetIndex(planet);
            if (index === -1) {
              this.favouritePlanets.push(planet);
            }
        },

        removeFavouritePlanet(planet) {
            const index = this.getFavouritePlanetIndex(planet);
            if (index !== -1) {
                this.favouritePlanets.splice(index, 1);
            }
        },
        
        getFavouritePlanetIndex(planet) {
            return this.favouritePlanets.findIndex(favouritePlanet => favouritePlanet.id === planet.id);
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePlanetsStore, import.meta.hot));
}
