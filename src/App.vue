<template>
  <main class="container-fluid bg-dark">
    <router-view />
  </main>
  <!-- placing the modal here makes it available on every page! -->
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
