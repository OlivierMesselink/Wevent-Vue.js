<template>
  <section id="navWrapper">
    <div id="navContent">
      <div id="logo">
        <img :src="logoImg" />
      </div>
      <div id="navButtons">
        <base-button v-if="!loggedIn" buttonStyle="hollow">Aanmelden</base-button        >
        <base-button @click="login" v-if="!loggedIn" buttonStyle="hollow">Inloggen</base-button>
        <div id="loggedinDiv">
          <a><h3 v-if="loggedIn">Hallo {{ user.firstname }}</h3></a>
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
      logoImg: require("../assets/wevent_logo.png"),
      user: this.$store.getters.getAccountData,
    };
  },
  methods:{
    login(){
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
#navWrapper {
  padding: 40px 0px; /* <- REMOVE THIS BEFORE BUILD/USE! */
  position: absolute;
  width: 100%;
  background-image: linear-gradient(rgba(48, 48, 48, 0.267), rgba(255, 255, 255, 0))
}

#navContent {
  padding: 0 380px;
  display: flex;
  flex-direction: row;
  /* background-color:var(--blue); */
  justify-content: space-between;
  align-items: center;
}

img {
  height: 70px;
}

#navButtons {
  display: flex;
  width: 240px;
  justify-content: space-between;
}

h3 {
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: var(--orange);
}

#loggedinDiv{
  display: flex;
  align-items: center;
}

#loggedinDiv{
  font-family: "open-sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--orange);
}
</style>