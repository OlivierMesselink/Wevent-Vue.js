<template>
    <the-navbar></the-navbar>
  <section id="content">
    <div id="wrapper">
    <the-searchbar></the-searchbar>

    </div>
        <div id="backdrop1"></div>
    <div id="backdrop2"></div>
    <div id="backdrop3"></div>
  </section>
</template>

<script>
import TheSearchbar from "../TheSearchbar.vue";
export default {
  components: {
    TheSearchbar,
  },
};
</script>

<style scoped>
#content {
  height: 100vh;
  width: 100vw;
  display: flex;
}

#wrapper {
  display: flex;
  padding: 0 380px;
}

#backdrop1 {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url("../../assets/backdrop.png");
  z-index: -1;
}

#backdrop2 {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url("../../assets/concrete_texture.jpg");
  mix-blend-mode: hard-light;
  opacity: 15%;
  z-index: -2;
  background-size: cover;
}

#backdrop3 {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: var(--background);
  z-index: -3;
  background-size: cover;
}
</style>
