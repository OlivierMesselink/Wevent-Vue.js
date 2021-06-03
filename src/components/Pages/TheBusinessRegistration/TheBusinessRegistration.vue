<template>
  <div class="main">
    <div id="backdrop-texture"></div>
    <div id="backdrop-color"></div>
    <div id="logo-top-left"></div>
    <!-- <transition-group> -->
    <the-intro v-if="progressCounter == 0" @continue="progress"></the-intro>
    <the-explanation
      v-if="progressCounter == 1"
      @continue="progress"
    ></the-explanation>
    <the-contactdetails v-if="progressCounter == 2" @continue="progress">
    </the-contactdetails>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import TheContactdetails from "./TheContactdetails.vue";
import TheExplanation from "./TheExplanation.vue";
import TheIntro from "./TheIntro.vue";

export default {
  components: { TheIntro, TheExplanation, TheContactdetails },
  data() {
    return {
      progressCounter: 0,
    };
  },
  methods: {
    progress() {
      this.progressCounter++;
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
  background-repeat: no-repeat;
  top: 8%;
  left: 5%;
  height: 10vh;
  width: 100vw;
  background-image: url("../../../assets/wevent_logo.png");
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
