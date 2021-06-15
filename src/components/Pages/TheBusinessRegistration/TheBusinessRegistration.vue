<template>
  <div class="main">
    <div id="backdrop-texture"></div>
    <div id="backdrop-color"></div>
    <div @click="$router.push('/')" id="logo-top-left"></div>
    <!-- <transition-group> -->
    <the-intro v-if="progressCounter == 0" @next="advanceCounter"></the-intro>
    <the-explanation
      v-if="progressCounter == 1"
      @next="advanceCounter"
    ></the-explanation>
    <the-contactdetails
      v-if="progressCounter == 2"
      @emitData="addContact($event)"
    ></the-contactdetails>
    <the-details
      v-if="progressCounter == 3"
      @emitData="addDetails($event)"
    ></the-details>
    <the-times
      v-if="progressCounter == 4"
      @emitData="addTimes($event)"
    ></the-times>
    <the-media v-if="progressCounter == 5" @next="uploadData()"></the-media>
    <the-success-page
      v-if="progressCounter == 6"
      @next="$router.push('/account')"
    ></the-success-page>
    <!-- </transition-group> -->
  </div>
</template>

<script>
import { projectAuth } from "../../../firebaseConfig.js";

import TheContactdetails from "./TheContactdetails.vue";
import TheDetails from "./TheDetails.vue";
import TheExplanation from "./TheExplanation.vue";
import TheIntro from "./TheIntro.vue";
import TheTimes from "./TheTimes.vue";
import TheMedia from "./TheMedia.vue";
import TheSuccessPage from "./TheSuccessPage.vue";

export default {
  components: {
    TheIntro,
    TheExplanation,
    TheContactdetails,
    TheDetails,
    TheTimes,
    TheMedia,
    TheSuccessPage,
  },
  data() {
    return {
      progressCounter: 0,
      userId: "",
      user: null,
      registration: {},
    };
  },
  methods: {
    advanceCounter() {
      this.progressCounter++;
    },
    addContact(payload) {
      this.registration.title = payload.title;
      this.registration.subtitle = payload.subtitle;
      this.registration.city = payload.city;
      this.progressCounter++;
    },
    addDetails(payload) {
      this.registration.attendees = payload.attendees;
      this.registration.budget = payload.budget;
      this.registration.category = payload.category;
      this.registration.description = payload.description;
      this.progressCounter++;
    },
    addTimes(payload) {
      this.registration.dates = payload;
      this.progressCounter++;
    },
    uploadData() {
      var city = this.registration.city.toLowerCase();
      const fetchUrl =
        "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app/" +
        city +
        "/restaurants/" +
        this.registration.title +
        ".json";

      fetch(fetchUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: this.registration.title,
          location: this.registration.subtitle,
          budget: this.registration.budget,
          attendees: this.registration.attendees,
          category: this.registration.category,
          dates: this.registration.dates,
          description: this.registration.description,
          rating: 3,
          lang: 5,
          lat: 51,
          imgLink: "https://loadslammer.com/wp-content/uploads/2021/01/photo-placeholder-icon-17.jpg",
          split: 0,
        }),
      }).then(this.updateUser(this.user, this.userId));
    },
    updateUser(newUserData, userId) {
      if(!newUserData.businessAcc) {newUserData.restaurants = []}
      newUserData.restaurants.push(this.registration)
      const userUrl =
        "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app/Customers/" +
        userId +
        ".json";

      fetch(userUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: newUserData.firstname,
          lastname: newUserData.lastname,
          businessAcc: true,
          email: newUserData.email,
          reservations: newUserData.reservations,
          pinned: newUserData.pinned,
          restaurants: newUserData.restaurants
        }),
      }).then(
        this.progressCounter++
      );
    },
    loadUserData(Id) {
      const url =
        "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app/Customers/" +
        Id +
        ".json";

      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.user = data;
        });
    },
  },

  beforeCreate() {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        const id = user.uid;
        this.userId = id;
        this.loadUserData(id);
      } else {
        this.$router.push("/");
      }
    });
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
  display: flex;
  flex-flow: column wrap;
  background-size: contain;
  background-repeat: no-repeat;
  top: 8%;
  left: 5%;
  height: 10vh;
  width: 10%;
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
