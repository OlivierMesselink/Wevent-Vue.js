<template>
  <div id="modalWrapper">
    <div id="modalBody">
      <div id="modalTop">
        <h1>Reservering:</h1>
        <div>
          <h2>{{ data.restaurant }}</h2>
          <h3>{{ data.location }}</h3>
          <h3>op: {{ data.date }}</h3>
        </div>
        <div id="boxesDiv">
          <div class="box">
            <fa class="ico" icon="clock"></fa>
            <h4>{{ data.time }} uur</h4>
          </div>
          <div class="box">
            <fa class="ico" icon="users"></fa>
            <h4>{{ data.amount }} personen</h4>
          </div>
          <div class="box">
            <fa class="ico" icon="map-marker-alt"></fa>
            <h4>{{ data.city }}</h4>
          </div>
        </div>
        <div id="buttonDiv">
          <base-button
            class="button"
            buttonStyle="solid"
            @click="addReservationToUser"
            >Bevestigen</base-button
          >
          <base-button
            class="button"
            buttonStyle="hollow"
            @click="$emit('cancel')"
            >Annuleren</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projectAuth } from "../../firebaseConfig.js";

export default {
  props: ["data"],
  data() {
    return {
      uid: null,
      user: null,
    };
  },
  methods: {
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
    addReservationToUser(){
      var currentUser = this.user
      if (!currentUser.reservations) {currentUser.reservations = []}
      currentUser.reservations.push(this.$props.data);
      this.updateUser(currentUser,this.uid)
    },
    updateUser(newUserData,userId){
      const fetchUrl =
        "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app/Customers/" +
        userId +
        ".json";
      fetch(fetchUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: newUserData.firstname,
          lastname: newUserData.lastname,
          businessAcc: newUserData.businessAcc,
          email: newUserData.email,
          reservations:newUserData.reservations,
          pinned: newUserData.pinned,
          restaurants: newUserData.restaurants
        }),
      })
        .then(this.$router.push('/'));
    }
  },
  beforeCreate() {
    projectAuth.onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid;
        this.loadUserData(user.uid)
      }
      else(this.$router.push("/login"))
    });
  },
};
</script>

<style scoped>
#modalWrapper {
  top: 0px;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;
  background-color: rgba(1, 1, 1, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
}

#modalBody {
  width: 450px;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

#modalTop {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  width: 450px;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 36px;
  /* margin: 0 0 40px 0; */
  text-align: center;
}

h2 {
  font-family: "open sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--orange);
  margin: 0 5px 10px 0;
  text-align: center;
}

h3 {
  font-family: "open sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: var(--grey);
  text-align: center;
}

h4 {
  font-family: "open sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: black;
  text-align: center;
  margin: 15px 0 0 0;
}

#timeDateDiv {
  display: flex;
}

#boxesDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.box {
  background-color: var(--background);
  height: 140px;
  width: 140px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.ico {
  font-size: 48px;
}

#buttonDiv {
  display: flex;
  width: 100%;
  justify-content: center;
}

.button {
  margin: 0 5px;
}
</style>