<template>
  <div id="progress-bar"></div>
  <div id="block">
    <h1>Contactgegevens</h1>

    <div id="form-body">
      <div id="name-section">
        <p class="items-margin">
          Wat is de naam van je onderneming?
          <input
            v-model="register.name"
            id="name"
            type="text"
            placeholder="Bijv. Restaurant 't Vogeltje"
          />
        </p>
      </div>

      <div id="location-section">
        <p class="items-margin">
          Waar is je onderneming?
          <input
            v-model="register.city"
            id="city"
            type="text"
            placeholder="Plaats"
          />
          <input
            v-model="register.street"
            id="street"
            type="text"
            placeholder="Straatnaam"
          />
          <input
            v-model="register.number"
            id="number"
            type="text"
            placeholder="Nr"
          />
          <input
            v-model="register.postal"
            id="postal"
            type="text"
            placeholder="Postcode"
          />
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
        <p style="color: crimson" v-if="invalidInput" id="invalid">
          Vul alle velden correct in en probeer opniew.
        </p>
      </div>
    </div>

    <base-button @click="submitData" buttonStyle="pim"
      >Volgende stap</base-button
    >
  </div>
</template>

<script>
export default {
  emits: ["emitData"],
  data() {
    return {
      register: {
        name: "",
        city: "",
        street: "",
        number: "",
        postal: "",
        // phone: "",
        // email: "",
        // website: "",
      },
      invalidInput: false,
    };
  },
  methods: {
    submitData() {
      var newData = {};
      newData.subtitle =
        this.register.street +
        " " +
        this.register.number +
        " " +
        this.register.postal +
        " " +
        this.register.city;
      newData.title = this.register.name;
      if (this.formIsFilled) {
        this.$emit("emitData", newData);
      } else {
        this.invalidInput = true;
      }
    },
  },
  computed: {
    formIsFilled() {
      if (
        this.register.name == "" ||
        this.register.city == "" ||
        this.register.street == "" ||
        this.register.number == "" ||
        this.register.postal == ""
      ) {
        return false;
      } else {
        return true;
      }
    },
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
  font-size: 14px;
  color: var(--grey);
  font-family: "open sans", "sans serif";
}

#form-body input::placeholder {
  color: black;
  opacity: 15%;
  font-family: "open sans", "sans serif";
  font-size: 14px;
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
  font-size: 14px;
  line-height: 33px;
}

#block {
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  height: 650px;
  padding: 70px;
  margin-left: 20%;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 36px;
  margin-bottom: 4%;
}

h3 {
  font-family: "raleway", sans-serif;
  font-weight: 600;
  font-size: 18px;
  width: 1000px;
  margin-bottom: 4%;
  margin-top: 1%;
  line-height: 35px;
  color: var(--mediumGray);
}
</style>
