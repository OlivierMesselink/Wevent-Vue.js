<template>
  <div id="progress-bar"></div>
  <div id="block">
    <h1>Het registratieproces</h1>
    <h3>
      Laten we beginnen! Het registreren van je gegevens zal maar enkele minuten
      in beslag nemen. We vragen je onder andere naar je contactgegevens,
      algemene informatie over je horecaonderneming, sfeerfoto(‘s) en social
      media (eventueel).
    </h3>

    <div id="intro-body">
      <p class="items-margin">
        Hiernaast zie je de voortgangs-indicator, deze geeft aan in welk deel je
        zit van je registratie. Na het compleet maken van je registratie kan het
        enkele dagen duren voordat je restaurant bij ons in het systeem komt.
        Onze mensen gaan eerst je gegevens bekijken en checken of je invulling
        helemaal volledig en waarheidsgetrouw is ingevuld! Je aanmelding gaat
        dus eerst in behandeling en je hebt de mogelijkheid om je aanmelding te
        blijven volgen via je account. Bovendien kun je er voor kiezen om ook
        alerts (e-mail en/of mobiel) in te stellen waarmee we je een melding
        geven wanneer de status van je aanvraag is veranderd.
      </p>
    </div>

    <base-button @click="$emit('continue')" buttonStyle="pim"
      >Beginnen</base-button
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#progress-bar {
  background-image: url("../../../assets/progress-indicator-1.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 6%;
  margin-top: 6%;
  height: 60vh;
  width: 20vw;
  background-size: contain;
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
  line-height: 33px;
}

.bullet-margin {
  margin-right: 1%;
}

#block {
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  width: 1000px;
  height: 500px;
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
  line-height: 35px;
  color: var(--mediumGrey);
}
</style>
