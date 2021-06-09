<template>
  <div id="progress-bar"></div>
  <div id="block">
    <h1>Contactgegevens</h1>

    <div id="form-body">
      <div id="name-section">
        <p class="items-margin">
          Wat is de naam van je onderneming?
          <input
            id="name"
            type="text"
            placeholder="Bijv. Restaurant 't Vogeltje"
          />
        </p>
      </div>

      <div id="location-section">
        <p class="items-margin">
          Waar is je onderneming?
          <input id="city" type="text" placeholder="Plaats" />
          <input id="street" type="text" placeholder="Straatnaam" />
          <input id="number" type="text" placeholder="Nr" />
          <input id="postal" type="text" placeholder="Postcode" />
        </p>
      </div>

      <div id="contact-section">
        <p>
          Hoe kunnen de gasten je bereiken?
        </p>

        <div class="flex-container">
          <input id="phone" type="text" placeholder="Telefoonnummer" />
          <input id="email" type="text" placeholder="E-mailadres" />
        </div>
        <input id="website" type="text" placeholder="Website" />
      </div>
    </div>

    <base-button @click="$emit('continue')" buttonStyle="pim"
      >Volgende stap</base-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        name: "",
        city: "",
        street: "",
        number: "",
        postal: "",
      },
      contact: {
        phone: "",
        email: "",
        website: "",
      },
    };
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
  background-image: url("../../../assets/progress-indicator-2.png");
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
  width: 800px;
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
