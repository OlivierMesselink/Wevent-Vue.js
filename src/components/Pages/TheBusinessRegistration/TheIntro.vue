<template>
  <div id="block">
    <div id="text-content">
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
          voorbij komen. We rekenen bij elke reservering maar een klein bedrag
          per betaalde couvert af en een maandelijkse fee.
        </p>

        <!-- Spotlights -->
        <p class="items-margin">
          <fa class="bullet-margin" icon="caret-right"></fa>
          Je kunt op de landingspage in de spotlichten komen door ons eenmalig
          een bedrag te betalen waardoor je twee weken (!) nog meer exposure
          krijgt dan dat je al had.
        </p>

        <!-- Ratings -->
        <p class="items-margin">
          <fa class="bullet-margin" icon="caret-right"></fa>
          Je kunt op de landingspage in de spotlichten komen door ons eenmalig
          een bedrag te betalen waardoor je twee weken (!) nog meer exposure
          krijgt dan dat je al had.
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
          Een betere beoordeling zorgt voor een betere positie in onze lijst,
          dit zorgt ervoor dat jij weet wat je wel of niet kan verbeteren aan je
          service.
        </p>
      </div>

      <base-button @click="$emit('continue')" buttonStyle="solid"
        >Yes, let's go</base-button
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.items-margin {
  margin-bottom: 2%;
}

#intro-body {
  margin-left: 6%;
  margin-top: 2%;
  color: var(--grey);
  font-family: "open sans", "sans-serif";
  font-size: 18px;
  width: 880px;
  line-height: 23px;
}

.bullet-margin {
  margin-right: 1%;
}

#block {
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  margin-left: 15%;
  width: 1200px;
  height: 800px;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 50px;
  margin-top: 5%;
  margin-left: 6%;
}

h3 {
  font-family: "raleway", sans-serif;
  font-weight: 600;
  font-size: 27px;
  width: 700px;
  margin-top: 1%;
  margin-left: 6%;
  line-height: 35px;
  color: var(--mediumGray);
}
</style>
