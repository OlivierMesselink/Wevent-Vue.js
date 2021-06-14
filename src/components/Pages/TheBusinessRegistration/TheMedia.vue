<template>
  <div id="progress-bar"></div>

  <section>
    <div id="block">
      <h1>Social media & afbeelding(en)</h1>
      <h3>
        Verbind hier met je social media-kanalen (optioneel)
      </h3>
      <div class="logos">
        <img
          src="../../../assets/instagram-logo.png"
          alt="instagram-logo"
          id="instagram"
        />

        <img
          src="../../../assets/facebook-logo.png"
          alt="facebook-logo"
          id="facebook"
        />

        <img
          src="../../../assets/twitter-logo.png"
          alt="twitter-logo"
          id="twitter"
        />
        <img
          src="../../../assets/untappd-logo.png"
          alt="untappd-logo"
          id="untappd"
        />
      </div>

      <h3>
        Voeg minstens een hoofdafbeelding toe van je onderneming die we kunnen
        gebruiken als sfeerfoto
      </h3>
      <div id="upload-main-image">
        <base-button buttonStyle="pim">Voeg hoofdafbeelding toe</base-button>
        <p>Nog geen bestand geupload</p>
      </div>

      <base-button id="disabled" buttonStyle="disabled"
        >Voeg meer sfeerfoto's toe</base-button
      >
      <p id="max-mb">Maximale bestandsgrootte 7MB</p>

      <div id="continue-btn">
        <base-button id="next-btn" @click="$emit('next')" buttonStyle="pim"
          >Verzoek indienen</base-button
        >
      </div>
    </div>
  </section>
  <div id="backdrop-image"></div>
</template>

<script>
import BaseButton from "../../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  emits: ["next"],
};
</script>

<style scoped>
#max-mb {
  font-style: italic;
  margin-top: 2%;
  color: var(--lightGrey);
}

#next-btn {
  margin-top: 6%;
}

#disabled {
  pointer-events: none;
  margin-top: 5%;
}

#upload-main-image {
  display: flex;
  flex-flow: row;
  align-items: center;
}

#upload-main-image p {
  margin-left: 4%;
}

.logos {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 6%;
}

.logos img {
  width: 13%;
  margin-right: 30px;
}
#continue-btn {
  display: flex;
}

#backdrop-image {
  position: absolute;
  height: 90vh;
  width: 40vw;
  top: 40%;
  left: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  background-image: url("../../../assets/bg-socials.png");
}

#progress-bar {
  background-image: url("../../../assets/progress-indicator-5.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 6%;
  margin-top: 6%;
  height: 60vh;
  width: 20vw;
  background-size: contain;
}

#block {
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  width: 680px;
  /* height: 770px; */
  padding: 80px;
  margin-left: 10%;
  display: inline-block;
}

p {
  font-family: "raleway", sans-serif;
  font-size: 16px;
  color: var(--grey);
  display: inline-flex;
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
  width: 700px;
  margin-bottom: 4%;
  margin-top: 1%;
  line-height: 33px;
  color: var(--mediumGrey);
}
</style>
