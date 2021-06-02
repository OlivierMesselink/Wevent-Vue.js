<template>
  <div id="wrapper">
    <section id="navColumn">
      <h1>Jouw account</h1>
      <h3>Welkom {{ user.firstname + " " + user.lastname }}</h3>
      <div id="navItems">
        <h4
          @click="gotoAccount"
          class="navItem"
          :class="{ underline: openTab.acc }"
        >
          Account
        </h4>
        <h4
          @click="gotoReservations"
          class="navItem"
          :class="{ underline: openTab.reservations }"
        >
          Reserveringen
        </h4>
        <h4
          @click="gotoFavo"
          class="navItem"
          :class="{ underline: openTab.favo }"
        >
          Favorieten
        </h4>
        <h4 @click="logout" class="navItem" id="logout">Uitloggen</h4>
        <span id="line"></span>
        <h4 class="navItem" id="addBusiness">Onderneming toevoegen</h4>
        <h4
          class="navItem"
          :class="{ grey: !user.businessAcc }"
          id="manageBusiness"
        >
          Ondernemingen beheren
        </h4>
      </div>
    </section>
    <section id="contentColumn">
      <transition name="tab" mode="out-in">
        <div v-if="openTab.acc" id="accountWrapper">
          <div id="accImgDiv">
            <fa id="accImg" icon="user-circle"></fa>
            <div id="imgButtonDiv">
              <base-button class="imgButton" buttonStyle="solid"
                >Aanpassen</base-button
              >
              <base-button class="imgButton" buttonStyle="hollow"
                >Verwijderen</base-button
              >
            </div>
          </div>
          <form @submit.prevent>
            <div class="inputDiv">
              <label for="name">Gebruikersnaam</label>
              <input
                :placeholder="user.firstname + ' ' + user.lastname"
                type="text"
                name="name"
                disabled
              />
            </div>
            <div class="inputDiv">
              <label for="email">Email adres</label>
              <input
                :placeholder="user.email"
                type="text"
                name="email"
                v-model="user.Email"
                disabled
              />
            </div>
            <div class="inputDiv">
              <label for="password">Wachtwoord</label>
              <div id="passwordField">
                <input
                  placeholder="**********"
                  type="text"
                  name="password"
                  disabled
                />
                <base-button buttonStyle="hollow">Aanpassen</base-button>
              </div>
            </div>
          </form>
          <div id="removeAcc">
            <div>
              <h4  >Account verwijderen</h4>
              <p>
                Als je je account verwijderd verlies je al je persoonlijke data
              </p>
            </div>
            <a @click="removeModalOpen = true">Account verwijderen</a>
          </div>
        </div>
      </transition>
      <transition name="tab" mode="out-in">
        <div v-if="openTab.reservations" id="reservationsWrapper">
          <h3 v-if="!reservations">Je hebt geen reserveringen.</h3>
        </div>
      </transition>
      <transition name="tab" mode="out-in">
        <div v-if="openTab.favo" id="favoWrapper">
          <h3 v-if="!favorites">Je hebt geen favorieten.</h3>
        </div>
      </transition>
    </section>
  </div>

  <the-modal
  v-if="removeModalOpen"
  @confirm="removeUser()"
  @cancel="removeModalOpen = false"
  title="Zeker weten?"
  subtitle="Je staat op het punt om je account te verwijderen"
  message="Wanneer je je gebruikersaccount verwijderd gaan al je persoonlijke gegevens verloren. Dus je ook je pin's vrienden en reserveringsdata. Er is later geen manier om deze data terug te krijgen."
  confirm="Verwijderen"
  cancel="Annuleren"
  ></the-modal>
</template>

<script>
import { projectAuth } from "../../firebaseConfig.js";
import TheModal from "./TheModal.vue";

export default {
  components:{
    TheModal
  },
  data() {
    return {
      user: {},
      userId: "",
      openTab: {
        acc: true,
        favo: false,
        reservations: false,
      },
      reservations: null,
      favorites: null,
      authUser: {},
      removeModalOpen: false
    };
  },
  methods: {
    logout() {
      projectAuth
        .signOut()
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
    /* series of methods to switch between tabs */
    gotoAccount() {
      this.openTab.reservations = false;
      this.openTab.favo = false;
      this.openTab.acc = true;
    },
    gotoFavo() {
      this.openTab.reservations = false;
      this.openTab.acc = false;
      this.openTab.favo = true;
    },
    gotoReservations() {
      this.openTab.favo = false;
      this.openTab.acc = false;
      this.openTab.reservations = true;
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
          console.log(data);
          console.log(this.user);
        });
    },
    removeUser() {
      var user = projectAuth.currentUser;
      user
          .delete()
          .then(function () {
            this.$router.push("/")
          })
          .catch(function (error) {
            alert(error)
          });

    },
  },
  /* this checks if the user is logged in */
  beforeCreate() {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        const Id = user.uid;
        this.authUser = user;
        this.loadUserData(Id);
      } else {
        this.$router.push("/");
      }
    });
  },
};
</script>

<style scoped>
@media screen and (max-width: 1920px) {
  #wrapper {
    display: flex;
    justify-content: center;
    margin: 100px 0px 0 0;
  }

  #navColumn {
    text-align: right;
    margin: 0 100px 0 0;
  }

  h1 {
    font-family: "raleway", sans-serif;
    font-size: 56px;
    font-weight: 900;
  }

  h3 {
    font-family: "open sans", sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: var(--grey);
    margin-top: 12px;
  }

  #navItems {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }

  h4 {
    font-family: "open sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  #line {
    border-bottom: 1px solid var(--lightBlue);
    width: 40%;
    margin: 25px 0 40px 0;
    align-self: flex-end;
  }

  .navItem {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .navItem:hover {
    text-decoration: underline;
  }

  #logout {
    color: crimson;
  }

  #contentColumn {
    width: 550px;
    height: 650px;
    background-color: white;
    border-radius: 10px;
    padding: 40px;
    display: flex;
    flex-direction: column;
  }

  #contentColumn form {
    display: flex;
    flex-direction: column;
    border-top: 1px var(--background) solid;
    border-bottom: 1px var(--background) solid;
    padding: 40px 0;
    margin: 40px 0;
  }

  #contentColumn input {
    width: 95%;
    color: black;
    margin: 15px 0px;
    border: none;
    padding: 14px 14px;
    border-radius: 10px;
    background-color: #a6c9d831;
    margin-bottom: 40px;
  }

  #contentColumn label {
    font-family: "open sans", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }

  .inputDiv {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #passwordField {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  #passwordField input {
    margin: 10px 20px 0 0;
  }

  #removeAcc {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .grey {
    color: var(--lightGrey);
    cursor: default;
  }

  .grey:hover {
    text-decoration: none;
  }

  #removeAcc p {
    margin: 10px 0 0 0;
    width: 80%;
    font-family: "open sans", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
  }

  #removeAcc a {
    text-align: center;
  }

  #removeAcc a {
    color: crimson;
    font-family: "open sans", sans-serif;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    padding: 12px 20px;
    border: white 3px solid;
    transition: all 0.15s ease-in-out;
    border-radius: 10px;
    width: 42%;
  }

  #removeAcc a:hover {
    background-color: crimson;
    color: white;
    border: crimson 3px solid;
    box-shadow: 0px 0px 20px 0px rgba(255, 59, 59, 0.3);
    transform: scale(1.05);
  }

  #accImgDiv {
    display: flex;
    align-items: center;
    font-size: 100px;
    line-height: 0px;
    color: var(--background);
  }

  #accImg {
    margin: 0 20px 0 0;
  }

  #imgButtonDiv {
    display: flex;
  }

  .imgButton {
    margin: 0px 0px 0 10px;
  }

  .underline {
    text-decoration: underline;
  }

  /* .tab-enter-from,
  .tab-leave-to {
    opacity: 0;
  }

  .tab-enter-to,
  .tab-leave-from {
    opacity: 1;
  }

  .tab-enter-active,
  .tab-leave-active {
    transition: all 0.1s ease-in-out;
  } */
}
</style>