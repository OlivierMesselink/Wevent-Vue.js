<template>
  <div id="wrapper">
    <div id="searchbarBase">
      <div id="baseWrapper">
        <div id="locationDiv">
          <h3 id="loactionH3">Waar wil je naartoe?</h3>
          <p id="locationP">{{ localSearchQuery.location }}</p>
        </div>
        <div id="amountDiv">
          <h3 id="amountH3">Met hoeveel mensen?</h3>
          <p id="amountP">
            {{ localSearchQuery.amount }}
            {{ MoreThanOnePerson }}
          </p>
        </div>
        <div id="budgetDiv">
          <h3 id="budgetH3">Wat is je budget?</h3>
          <p id="budgetP">{{ localSearchQuery.budget }}</p>
        </div>
        <div id="dateDiv">
          <h3 id="dateH3">Wanneer wil je gaan?</h3>
          <p id="dateP">{{ localSearchQuery.date }}</p>
        </div>
      </div>
      <base-button id="searchButton" buttonStyle="solid">Zoeken</base-button>
    </div>

    <div id="searchbarInput">
      <div id="inputWrapper">
        <div id="locationInputDiv">
          <h3>Selecteer een locatie</h3>
          <p>Nijmegen - Centrum</p>
        </div>
        <div id=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      localSearchQuery: {
        location: "Nijmegen - Centrum",
        amount: 2,
        budget: "€ 20 tot 40 p.p.",
        date: "11-5-2021",
      },
    };
  },

  computed: {
    MoreThanOnePerson() {
      if (this.localSearchQuery.amount > 1) {
        return "personen";
      } else {
        return "persoon";
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Raleway:wght@400;500;600;700;800;900&display=swap");

#wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#searchbarBase {
  display: flex;
  align-items: center;
}

#baseWrapper {
  display: flex;
  background-color: white;
  padding: 40px 40px;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  width: auto;
}

#baseWrapper > div {
  border-right: solid 1px var(--lightGrey);
  padding: 0px 40px;
  flex-grow: 0;
  cursor: pointer;
}

#baseWrapper > div:last-child {
  border-right: none;
}

#baseWrapper h3 {
  font-family: "Raleway", sans-serif;
  color: var(--grey);
  font-size: 16px;
  font-weight: 800;
  margin: 0px 0px 10px 0px;
}

#baseWrapper p {
  font-family: "open-sans", sans-serif;
  color: var(--grey);
  font-size: 14px;
}

#searchButton {
  margin: 0 0 0 -40px;
}

#searchbarInput {
  margin: 20px 0 0 0;
  background-color: white;
  display: flex;
  padding: 40px;
  border-radius: 10px;
}

#inputWrapper h3 {
  font-family: "Raleway", sans-serif;
  color: var(--grey);
  font-size: 16px;
  font-weight: 800;
  margin: 0 0 10px 0;
}

#inputWrapper p {
  font-family: "open-sans", sans-serif;
  color: var(--grey);
  font-size: 14px;
}
</style>