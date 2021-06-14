<template>
  <div id="block">
    <div id="main-text">
      <h1>Yes, gelukt!</h1>
      <h3>
        Je hebt alle gegevens ingevuld en je verzoek is ingediend! Binnen enkele
        dagen laten we je weten of alles klopt. Zoals op het begin is gezegd is
        er de mogelijkheid om een alert te krijgen via mail of sms wanneer de
        status van je verzoek veranderd. Deze alerts krijg je op je telefoon of
        in je e-mail box op basis van het nummer en je e-mail adres wat je net
        tijdens het registreren hebt ingevuld.
      </h3>

      <div class="option-styling">
        <div id="alert-block">
          <input
            v-model="checkboxIsTrue"
            class="checkboxes-container"
            type="checkbox"
          />
          <label for="checkbox"
            >Ja, ik wil graag een alert/melding ontvangen wanneer de status van
            mijn verzoek veranderd</label
          >
        </div>

        <div class="options" id="email-alert">
          <input
            :disabled="checkboxIsTrue == false"
            class="checkboxes-container"
            type="checkbox"
          />
          <label
            :class="{
              active: checkboxIsTrue == true,
              inactive: checkboxIsTrue == false,
            }"
            class="inactive"
            for="checkbox"
            >Via e-mail</label
          >
        </div>

        <div class="options" id="sms">
          <input
            :disabled="checkboxIsTrue == false"
            class="checkboxes-container"
            type="checkbox"
          />
          <label
            :class="{
              active: checkboxIsTrue == true,
              inactive: checkboxIsTrue == false,
            }"
            class="inactive"
            for="checkbox"
            >Via sms</label
          >
        </div>
      </div>
    </div>
    <div id="continue-btn">
      <base-button @click="$emit('next')" buttonStyle="pim"
        >Bevestigen</base-button
      >
    </div>
  </div>
  <div id="backdrop-image"></div>
</template>

<script>
export default {
  emits: ["next"],
  data() {
    return {
      checkboxIsTrue: false,
    };
  },
};
</script>

<style scoped>
#backdrop-image {
  position: absolute;
  height: 70vh;
  width: 50vw;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  top: 0;
  right: 0;
  background-image: url("../../../assets/bg-done.png");
}

#continue-btn {
  display: flex;
  margin-top: 5%;
}

.options .inactive {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 5%;
  margin-top: 1%;
  font-size: 16px;
  color: var(--lightGrey);
  font-family: "open sans", "sans serif";
  margin-left: 2%;
}

.options .active {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 5%;
  margin-top: 1%;
  font-size: 16px;
  color: var(--grey);
  font-family: "open sans", "sans serif";
  margin-left: 2%;
}

#alert-block {
  display: flex;
  align-items: center;
}

#email-alert {
  margin-top: 1%;
}

.options {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-left: 5%;
  margin-top: 1%;
}

.checkboxes-container {
  height: 20px;
  width: 20px;
  background-color: #a6c9d831;
  appearance: none;
  border-radius: 0px !important;
}

.checkboxes-container:active,
.checkboxes-container:checked:active,
.checkboxes-container:checked {
  background-image: url("../../../assets/checkmark.png") !important;
  background-repeat: no-repeat;
  background-size: 60%;
  background-position-x: 50%;
  background-position-y: 50%;
}

label {
  font-size: 16px;
  color: var(--grey);
  font-family: "open sans", "sans serif";
  margin-left: 2%;
}

#block h3 {
  width: 800px;
}

#block {
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  padding: 70px;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 36px;
}

h3 {
  font-family: "raleway", sans-serif;
  font-weight: 600;
  font-size: 18px;
  width: 1000px;
  margin-bottom: 2%;
  margin-top: 1%;
  line-height: 35px;
  color: var(--mediumGrey);
}
</style>
