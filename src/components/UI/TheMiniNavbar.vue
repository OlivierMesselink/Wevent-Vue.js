<template>
  <section id="navWrapper">
    <div id="navContent">
      <div id="backButton">
        <base-button buttonStyle="solid" @click="back">Terug</base-button>
      </div>
      <div @click="back" id="logo"><img :src="logoImg" /></div>
      <div id="navButtons">
        <base-button v-if="!loggedIn" buttonStyle="solid"
          >Aanmelden</base-button
        >
        <base-button @click="login" v-if="!loggedIn" buttonStyle="solid"
          >Inloggen</base-button
        >
        <div id="loggedinDiv">
          <a
            ><h3 v-if="loggedIn">
              {{ user.firstname }} <fa class="ico" icon="user-circle"></fa></h3
          ></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: this.$store.getters.getLoggedinState,
      logoImg: require("../../assets/wevent_logo.png"),
      user: this.$store.getters.getAccountData,
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#navWrapper {
  height: 8vh;
  position: relative;
  width: 100%;

  /* background-image: linear-gradient(rgba(48, 48, 48, 0.267), rgba(255, 255, 255, 0)); */
  z-index: 10;
  background-color: var(--background);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: none;
}

#navContent {
  padding: 0 380px;
  height: 100%;
  display: flex;
  flex-direction: row;
  /* background-color:var(--blue); */
  justify-content: space-between;
  align-items: center;
}

img {
  height: 55px;
  cursor: pointer;
}

#navButtons {
  display: flex;
  width: 240px;
  justify-content: space-between;
}

h3 {
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: black;
}

#loggedinDiv {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.ico {
  font-size: 36px;
  vertical-align: middle;
  margin: 0 10px;
}

#loggedinDiv {
  font-family: "open-sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--orange);
}
</style>