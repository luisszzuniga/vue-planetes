import { defineStore, acceptHMRUpdate } from 'pinia';

export const usePlanetsStore = defineStore({
    id: 'planets',

    state: () => ({
        planets: [],
    }),

    getters: {
        getPlanets(state) {
            return state.planets;
        },
    },

    actions: {
        setPlanets(planets) {
            this.planets = planets;
        }
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(usePlanetsStore, import.meta.hot));
}
