<template>
  <div id="searchbarWrapper">
    <div id="baseWrapper">
      <div id="locationDiv">
        <div @click="toggleLocation">
          <h3 id="loactionH3">Waar wil je naartoe?</h3>
          <input
            type="text"
            id="locationP"
            :placeholder="localSearchQuery.location"
          />
        </div>
        <div v-if="locationBoxOpen" class="dropdown">
          <ul>
            <li v-for="location in locations" :key="location.id">
              {{ location.name }}
            </li>
          </ul>
        </div>
      </div>
      <div id="amountDiv">
        <div @click="toggleAmount">
          <h3 id="amountH3">Met hoeveel mensen?</h3>
          <p id="amountP">
            {{ localSearchQuery.amount }}
            {{ getCorrectNoun }}
          </p>
        </div>
        <div v-if="amountBOxOpen" class="dropdown" id="amountDropdown">
          <h3>Aantal personen:</h3>
          <div id="changeAmountDiv">
            <base-button buttonStyle="solid" @click="changeAmount(-1)"
              >-</base-button
            >
            <h2>{{ localSearchQuery.amount }}</h2>
            <base-button buttonStyle="solid" @click="changeAmount(1)"
              >+</base-button
            >
          </div>
        </div>
      </div>
      <div id="budgetDiv">
        <div @click="toggleBudget">
          <h3 id="budgetH3">Wat is je budget?</h3>
          <p id="budgetP">{{ getBudget }}</p>
        </div>
        <div v-if="budgetBoxOpen" class="dropdown" id="budgetDropdown">
          <toggle-button @click="setBudget(20)" :solid="budgets[0].active"
            >€20 tot €30</toggle-button
          >
          <toggle-button @click="setBudget(30)" :solid="budgets[1].active"
            >€30 tot €40</toggle-button
          >
          <toggle-button @click="setBudget(40)" :solid="budgets[2].active"
            >€40 tot €50</toggle-button
          >
          <toggle-button @click="setBudget(50)" :solid="budgets[3].active"
            >€50 tot €60</toggle-button
          >
        </div>
      </div>
      <div id="dateDiv">
        <div @click="toggleDate">
          <h3 id="dateH3">Wanneer wil je gaan?</h3>
          <p id="dateP">
            {{ localSearchQuery.date }} om {{ localSearchQuery.time }} uur
          </p>
        </div>
        <div v-if="dateBoxOpen" class="dropdown">
          <h3>Date</h3>
        </div>
      </div>
    </div>
    <base-button
      @click="submitSearchQuery"
      id="searchButton"
      buttonStyle="solid"
      >Zoeken</base-button
    >
  </div>
</template>

<script>
import BaseButton from "./UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      localSearchQuery: {
        location: "Nijmegen - Centrum",
        amount: 2,
        budget: 20,
        date: "11-5-2021",
        time: "19:00",
      },
      locationBoxOpen: false,
      amountBOxOpen: false,
      budgetBoxOpen: false,
      dateBoxOpen: false,

      locations: this.$store.state.locations,

      budgets: [
        { value: 20, active: true },
        { value: 30, active: false },
        { value: 40, active: false },
        { value: 50, active: false },
      ],
    };
  },

  computed: {
    /* places 'persoon' or 'personen' according to the amount of customers selected */
    getCorrectNoun() {
      if (this.localSearchQuery.amount > 1) {
        return "personen";
      } else {
        return "persoon";
      }
    },
    getBudget() {
      return (
        "\u20ac " +
        this.localSearchQuery.budget +
        " tot \u20ac " +
        (this.localSearchQuery.budget + 10) +
        " p.p."
      );
    },
  },

  methods: {
    /* The following four methods make sure all other dropwowns are closed before
    opening the according dropdown */
    toggleLocation() {
      this.amountBOxOpen = false;
      this.budgetBoxOpen = false;
      this.dateBoxOpen = false;
      this.locationBoxOpen = !this.locationBoxOpen;
    },
    toggleAmount() {
      this.locationBoxOpen = false;
      this.budgetBoxOpen = false;
      this.dateBoxOpen = false;
      this.amountBOxOpen = !this.amountBOxOpen;
    },
    toggleBudget() {
      this.locationBoxOpen = false;
      this.amountBOxOpen = false;
      this.dateBoxOpen = false;
      this.budgetBoxOpen = !this.budgetBoxOpen;
    },
    toggleDate() {
      this.amountBOxOpen = false;
      this.budgetBoxOpen = false;
      this.locationBoxOpen = false;
      this.dateBoxOpen = !this.dateBoxOpen;
    },
    changeAmount(change) {
      this.localSearchQuery.amount = this.localSearchQuery.amount + change;
      if (this.localSearchQuery.amount <= 1) {
        this.localSearchQuery.amount = 1;
      }
      if (this.localSearchQuery.amount >= 8) {
        this.localSearchQuery.amount = 8;
      }
    },
    submitSearchQuery() {
      this.$store.dispatch({
        type: "updateSearchQuery",
        location: this.localSearchQuery.location,
        amount: this.localSearchQuery.amount,
        budget: this.localSearchQuery.budget,
        date: this.localSearchQuery.date,
        time: this.localSearchQuery.time,
      });
      console.log(this.$store.state.searchQuery);
    },
    setBudget(value) {
      if (value == 20) {
        this.budgets[0].active = true;
        this.budgets[1].active = false;
        this.budgets[2].active = false;
        this.budgets[3].active = false;
        this.localSearchQuery.budget = 20;
      }
      if (value == 30) {
        this.budgets[0].active = false;
        this.budgets[1].active = true;
        this.budgets[2].active = false;
        this.budgets[3].active = false;
        this.localSearchQuery.budget = 30;
      }
      if (value == 40) {
        this.budgets[0].active = false;
        this.budgets[1].active = false;
        this.budgets[2].active = true;
        this.budgets[3].active = false;
        this.localSearchQuery.budget = 40;
      }
      if (value == 50) {
        this.budgets[0].active = false;
        this.budgets[1].active = false;
        this.budgets[2].active = false;
        this.budgets[3].active = true;
        this.localSearchQuery.budget = 50;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Raleway:wght@400;500;600;700;800;900&display=swap");

#searchbarWrapper {
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
  border-right: solid 2px var(--lightGrey);
  padding: 0px 40px;
  flex-grow: 0;
  position: relative;
}

#baseWrapper > div > div:first-child {
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

#baseWrapper li {
  font-family: "open-sans", sans-serif;
  color: var(--grey);
  font-size: 14px;
  margin: 20px 0;
  cursor: pointer;
}

#baseWrapper input {
  border: none;
  font-family: "open-sans", sans-serif;
  color: var(--grey);
  font-size: 14px;
}

#baseWrapper input:focus {
  outline-width: 0;
}

.dropdown {
  position: absolute;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  margin: 60px 0 0 -40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

#searchButton {
  margin: 0 0 0 -30px;
}

#changeAmountDiv {
  display: flex;
  align-items: center;
}

#amountDiv h2 {
  font-family: "open-sans", sans-serif;
  color: var(--black);
  font-size: 42px;
  font-weight: 800;
  margin: 10px 20px;
}

#amountDropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#budgetDropdown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 220px;
}

#budgetDropdown input[type="radio"] {
  visibility: hidden;
  cursor: pointer;
}
</style>