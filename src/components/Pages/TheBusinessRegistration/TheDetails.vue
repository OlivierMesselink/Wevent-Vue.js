<template>
  <div id="progress-bar"></div>
  <div id="block">
    <h1>Details over je onderneming</h1>

    <div id="form-body">
      <div id="guest-section">
        <p class="items-margin">
          Hoeveel plek is er in totaal voor gasten?
          <input id="total-guests" type="text" placeholder="Bijv. 180" />
        </p>
      </div>

      <div id="location-section">
        <p class="items-margin">
          Vanaf en tot welk aantal gasten kan een gebruiker een reservering
          plaatsen bij je onderneming?
          <input id="min" type="text" placeholder="Plaats" />
          <input id="max" type="text" placeholder="Straatnaam" />
        </p>
      </div>

      <div id="contact-section">
        <p>
          Hoe kunnen de gasten je bereiken?
        </p>
        <input id="phone" type="text" placeholder="Selecteer" />
      </div>
    </div>

    <base-button @click="$emit('continue')" buttonStyle="pim"
      >Beginnen</base-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
#form-body #website {
  width: 40%;
  margin-bottom: 8%;
}

#form-body #phone {
  margin-right: 3%;
  width: 25%;
}

#form-body #email {
  width: 40%;
}

#form-body input {
  margin: 10px 0px;
  border: none;
  padding: 14px 14px;
  border-radius: 10px;
  background-color: #a6c9d831;
  margin-bottom: 20px;
}

input[type="text"] {
  font-size: 16px;
  color: var(--grey);
  font-family: "open sans", "sans serif";
}

#form-body input::placeholder {
  color: black;
  opacity: 15%;
  font-family: "open sans", "sans serif";
  font-size: 16px;
}

#form-body #city {
  width: 40%;
  display: flex;
}

#form-body #street {
  width: 35%;
}

#form-body #number {
  width: 8%;
  margin-right: 3%;
  margin-left: 1%;
}

#form-body #name {
  width: 75%;
}

#progress-bar {
  background-image: url("../../../assets/progress-indicator-3.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 6%;
  margin-top: 6%;
  height: 60vh;
  width: 20vw;
  background-size: contain;
}

.items-margin {
  margin-bottom: 3%;
}

#form-body {
  color: var(--grey);
  display: flex;
  flex-direction: column;
  font-family: "open sans", "sans-serif";
  font-size: 18px;
  width: 930px;
  line-height: 33px;
}

#block {
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  width: 900px;
  height: 770px;
  padding: 70px;
  margin-left: 20%;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 50px;
  margin-bottom: 4%;
}

h3 {
  font-family: "raleway", sans-serif;
  font-weight: 600;
  font-size: 24px;
  width: 1000px;
  margin-bottom: 4%;
  margin-top: 1%;
  line-height: 35px;
  color: var(--mediumGray);
}
</style>
