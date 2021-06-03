<template>
  <div id="block">
    <h1>Hoi! Welkom bij Wevent</h1>
    <h3>
      Leuk dat jij je als horecaondernemer aan komt melden bij onze service,
      want er zitten namelijk veel voordelen aan!
    </h3>

    <div id="intro-body">
      <!-- Exposure -->
      <p class="items-margin">
        <fa class="bullet-margin" icon="caret-right"></fa>
        Je hebt exposure voor je onderneming, duizenden gebruikers zien je
        voorbij komen. We rekenen bij elke reservering maar een klein bedrag per
        betaalde couvert af en een maandelijkse fee.
      </p>

      <!-- Spotlights -->
      <p class="items-margin">
        <fa class="bullet-margin" icon="caret-right"></fa>
        Je kunt op de landingspage in de spotlichten komen door ons eenmalig een
        bedrag te betalen waardoor je twee weken (!) nog meer exposure krijgt
        dan dat je al had.
      </p>

      <!-- Ratings -->
      <p class="items-margin">
        <fa class="bullet-margin" icon="caret-right"></fa>
        Je kunt op de landingspage in de spotlichten komen door ons eenmalig een
        bedrag te betalen waardoor je twee weken (!) nog meer exposure krijgt
        dan dat je al had.
      </p>

      <!-- Prevent -->
      <p class="items-margin">
        <fa class="bullet-margin" icon="caret-right"></fa>
        We voorkomen gesjoemel met ratings want de gebruiker kan je alleen een
        beoordeling geven als ze daadwerkelijk bij je zijn komen eten en/of
        drinken aan de hand van een reservering die ze hebben gemaakt met
        Wevent.
      </p>

      <!-- Ratings -->
      <p class="items-margin">
        <fa class="bullet-margin" icon="caret-right"></fa>
        Een betere beoordeling zorgt voor een betere positie in onze lijst, dit
        zorgt ervoor dat jij weet wat je wel of niet kan verbeteren aan je
        service.
      </p>
    </div>

    <base-button @click="$emit('continue')" buttonStyle="pim"
      >Yes, let's go</base-button
    >
  </div>
  <div id="backdrop-image"></div>
</template>

<script>
export default {};
</script>

<style scoped>
#backdrop-image {
  position: absolute;
  height: 115%;
  width: 100vw;
  background-size: cover;
  z-index: -1;
  background-image: url("../../../assets/bg-business-intro.png");
}

.items-margin {
  margin-bottom: 5%;
}

#intro-body {
  color: var(--grey);
  display: flex;
  flex-direction: column;
  font-family: "open sans", "sans-serif";
  font-size: 18px;
  width: 930px;
  line-height: 30px;
}

#block {
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  width: 1000px;
  height: 770px;
  padding: 70px;
  margin-left: 20%;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 50px;
}

h3 {
  font-family: "raleway", sans-serif;
  font-weight: 600;
  font-size: 24px;
  width: 1000px;
  margin-bottom: 4%;
  margin-top: 1%;
  line-height: 33px;
  color: var(--mediumGrey);
}
</style>
