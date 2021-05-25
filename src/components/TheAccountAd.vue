<template>
  <section id="account">
    <div id="accountWrapper">
      <div id="accLeftColumn">
        <h1>Maak een account aan!</h1>
        <div id="accCardsDiv">
          <div class="accCard">
            <fa class="ico" icon="comments"></fa>
            <h3>Chat met vrienden</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <div class="accCard">
            <fa class="ico" icon="receipt"></fa>
            <h3>Rekeningen delen</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <div class="accCard">
            <fa class="ico" icon="certificate"></fa>
            <h3>Kortingsacties</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <div class="accCard">
            <fa class="ico" icon="poll"></fa>
            <h3>Event polls</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
      <div id="accLeftColumn">
        <img src="../assets/mockup_mbook.png" />
      </div>
    </div>
    <div id="backdrop2"></div>
    <div id="backdrop3"></div>
  </section>
</template>

<style scoped>
#account {
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-y: hidden;
}

#accountWrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 380px;
  width: 100%;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 58px;
  margin-bottom: 60px;
}

#accCardsDiv {
  display: grid;
  grid-template-columns: 260px 0px;
  grid-gap: 40px;
}

.accCard {
  height: 220px;
  width: 220px;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.accCard:hover {
  transform: scale(1.05);
}

.accCard h3 {
  font-family: "raleway", sans-serif;
  font-weight: 700;
  font-size: 18px;
}

.accCard p {
  text-align: center;
  font-family: "open-sans", sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: var(--grey);
  width: 90%;
}

.ico {
  font-size: 52px;
  color: var(--orange);
}

#accLeftColumn img {
  height: 600px;
}

#backdrop2 {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/concrete_texture.jpg");
  mix-blend-mode: hard-light;
  opacity: 15%;
  z-index: -1;
  background-size: cover;
}

#backdrop3 {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: var(--background);
  z-index: -3;
  background-size: cover;
}
</style>