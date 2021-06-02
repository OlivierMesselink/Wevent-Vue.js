<template>
  <div class="main">
    <div id="backdrop-texture"></div>
    <div id="backdrop-color"></div>
    <div id="backdrop-image"></div>
    <div id="logo-top-left"></div>
    <the-intro @continue="progress"></the-intro>
  </div>
</template>

<script>
import TheIntro from "./TheIntro.vue";

export default {
  components: { TheIntro },
  data() {
    return {
      progressCounter: false,
    };
  },
  methods: {
    progress() {
      this.progressCounter;
    },
  },
};
</script>

<style scoped>
.main {
  overflow-y: hidden;
  overflow-x: hidden;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#logo-top-left {
  position: absolute;
  background-size: contain;
  top: 8%;
  left: 6%;
  height: 10%;
  width: 10%;
  background-image: url("../../../assets/wevent_logo.png");
}

#backdrop-image {
  position: absolute;
  height: 115%;
  width: 100vw;
  background-size: cover;
  z-index: -1;
  background-image: url("../../../assets/bg-business-intro.png");
}

#backdrop-texture {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url("../../../assets/concrete_texture.jpg");
  mix-blend-mode: hard-light;
  opacity: 15%;
  z-index: -2;
}

#backdrop-color {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: var(--background);
  z-index: -3;
  background-size: cover;
}
</style>
