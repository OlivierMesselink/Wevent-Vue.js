<template>
  <section id="navWrapper">
    <div id="navContent">
      <div @click="back" id="logo"><img :src="logoImg" /></div>
      <div><h1>Restaurants in Nijmegen</h1></div>
      <div id="navButtons">
        <base-button @click="login" v-if="!loggedIn" buttonStyle="solid"
          >Inloggen</base-button
        >
        <div @click="$router.push('/account')" id="loggedinDiv" v-if="loggedIn">
          <div id="userDiv">
            <h3>{{ user.firstname + ' ' + user.lastname }} <fa class="ico" icon="user-circle"></fa></h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { projectAuth } from "../../firebaseConfig.js";

export default {
  data() {
    return {
      loggedIn: false,
      logoImg: require("../../assets/wevent_logo.png"),
      user: "",
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    back() {
      this.$router.push("/");
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
  /* this checks if the user is logged in */
  beforeCreate() {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
        const id = user.uid
        this.loadUserData(id)
      } else {
        this.loggedIn = false;
      }
    });
  },
};
</script>

<style scoped>
#navWrapper {
  height: 7vh;
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
  justify-content: space-between;
  align-items: center;
}

img {
  height: 70px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  transform: scale(.9);
}

img:hover{
  transform: scale(1);
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: black;
}

#navButtons {
  display: flex;
  /* width: 240px; */
  justify-content: space-between;
}

#userDiv {
  color: black;
  transition: all 0.2s ease-in-out;
}

#userDiv:hover {
  transform: scale(1.05);
}

h3 {
  font-family: "raleway", sans-serif;
  font-weight: 700;
  font-size: 16px;
}

#loggedinDiv {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 14px;
  color: var(--orange);
}

#loggedinDiv p {
  color: crimson;
  font-weight: 600;
  text-decoration: underline;
  transition: all 0.2s ease-in-out;
}

#loggedinDiv p:hover {
  transform: scale(1.05);
}

.ico {
  font-size: 32px;
  vertical-align: middle;
  margin: 0 15px;
}
</style>