<template>
  <button @click="getSomething">Get Something</button>
  <div class="" v-for="s in something" :key="s.id"></div>
  <!--                        ^^^ this name (typically the plural) matches the object/array in the appstate -->
  <!-- the above div passes the data to the component below  -->
  <!--               VVV  this name reflects the name of the class in the props of the component -->
  <SomethingCard :something="s" />
</template>

<script>
import { AppState } from "../AppState.js";
import Pop from "../utils/Pop.js";
// import appstate here
// import computed here

export default {
  // private functions
        async function getSomething() {
        try {
          await somethingService.getSomething;
        } catch (error) {
          logger.error("[getting items]", error);
          Pop.error(error);
        }
        }
  // props go here in the component files, and are accessible even though they do not get returned
  // eg.:
  props: {
    something: {}
  },

  // lifecycle hooks go here:
  onMounted(()=> getSomething())
  setup() {
    // place all functions in here this is our new controller, so do all the async, trycatch stuff we usually do in the controller.

    // anything you want to use up in the template must be passed through here V
    return {
      // aka public, stuff the user needs
      something: computed(() => AppState.something),
      // you can return the functions here from the private section if you want the user to access them
      // or you can write the entire function here is you don't need them accessible by hooks
      getSomething
      },
    };
  },
</script>

//        V   this stuff needs to go away when rewriting the homepage layout

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
