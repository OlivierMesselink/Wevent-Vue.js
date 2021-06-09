<template>
  <div class="main">
    <div id="backdrop-texture"></div>
    <div id="backdrop-color"></div>
    <div @click="$router.push('/')" id="logo-top-left"></div>
    <!-- <transition-group> -->
    <the-intro v-if="progressCounter == 0" @data="addData(payload)"></the-intro>
    <the-explanation
      v-if="progressCounter == 1"
      @data="addData(payload)"
    ></the-explanation>
    <the-contactdetails v-if="progressCounter == 2" @data="addData(payload)">
    </the-contactdetails>
    <the-details
      v-if="progressCounter == 3"
      @data="addData(payload)"
    ></the-details>
    <the-times v-if="progressCounter == 4" @data="addData(payload)"></the-times>
    <!-- </transition-group> -->
  </div>
</template>

<script>
// import { projectAuth } from "../../firebaseConfig.js";

import TheContactdetails from "./TheContactdetails.vue";
import TheDetails from "./TheDetails.vue";
import TheExplanation from "./TheExplanation.vue";
import TheIntro from "./TheIntro.vue";
import TheTimes from "./TheTimes.vue";

export default {
  components: {
    TheIntro,
    TheExplanation,
    TheContactdetails,
    TheDetails,
    TheTimes,
  },
  data() {
    return {
      progressCounter: 0,
      registration: {
        //   category: {
        //     bar: false,
        //     restaurant: false,
        //     hotel: false,
        //     lunch: false,
        //   },
        //   attendees: {
        //     max: "",
        //     min: "",
        //   },
        //   budget: "",
        //   dates: {
        //     monday: {
        //       expect: null,
        //       from: "",
        //       till: "",
        //     },
        //     tuesday: {
        //       expect: null,
        //       from: "",
        //       till: "",
        //     },
        //     wednesday: {
        //       expect: null,
        //       from: "",
        //       till: "",
        //     },
        //     thursdag: {
        //       expect: null,
        //       from: "",
        //       till: "",
        //     },
        //     friday: {
        //       expect: null,
        //       from: "",
        //       till: "",
        //     },
        //     saturday: {
        //       expect: null,
        //       from: "",
        //       till: "",
        //     },
        //     sunday: {
        //       expect: null,
        //       from: "",
        //       till: "",
        //     },
        //   },
        //   name: "",
        //   description: "",
        //   city: "",
        //   street: "",
        //   number: "",
        //   postal: "",
        //   imgLink: "",
        //   lang: "",
        //   lat: "",
        //   rating: "",
        //   split: null,
      },
    };
  },
  methods: {
    addData(payload) {
      console.log(payload);
      this.registration = this.registration + payload;
      console.log(this.registration);
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
  cursor: pointer;
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
