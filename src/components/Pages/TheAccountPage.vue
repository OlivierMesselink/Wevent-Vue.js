<template>
  <div id="backdrop1"></div>
  <div id="backdrop2"></div>
  <the-navbar></the-navbar>
  <section id="pageWrapper">
    <the-account-component></the-account-component>
  </section>
</template>

<script>
import TheNavbar from "../TheNavbar.vue";
import TheAccountComponent from "../UI/TheAccountComponent.vue";

export default {
  components: {
    TheNavbar,
    TheAccountComponent,
  },
};
</script>

<style scoped>
@media screen and (max-width: 2560px) {
  #pageWrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #backdrop1 {
    position: absolute;
    height: 100%;
    width: 100vw;
    background-color: var(--background);
    z-index: -2;
    overflow-y: visible;
  }

  #backdrop2 {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-image: url("../../assets/concrete_texture.jpg");
    mix-blend-mode: hard-light;
    opacity: 15%;
    z-index: -1;
    background-size: cover;
  }
}
</style>