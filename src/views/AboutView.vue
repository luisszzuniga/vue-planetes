<template>
  <h1>About</h1>
</template>

<script>
import { defineComponent } from 'vue'
import { usePlanetsStore } from '../stores/planets'

export default defineComponent({
  data() {
    return {
      planetsStore: usePlanetsStore()
    }
  },

  created() {
    console.log(this.planetsStore.getPlanets)
  }
})
</script>

<style scoped>
</style>
