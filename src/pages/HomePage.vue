<template>

</template>

<script>

export default {
  setup(){
    // return { anything you want to use up in the template must be passed through here }
  }
}

</script>

//        V   this stuff needs to go away when rewriting the homepage layout

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
