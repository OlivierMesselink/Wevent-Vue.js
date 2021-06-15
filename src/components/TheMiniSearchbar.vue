<template>
  <div
    id="searchbarWrapper"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
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
        <transition name="fade">
          <div v-if="locationBoxOpen" class="dropdown">
            <h3 id="amountH3">Selecteer locatie:</h3>
            <ul>
              <li
                v-for="location in locations"
                :key="location.id"
                @click="setLocation(location.name)"
              >
                {{ location.name }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <div id="amountDiv">
        <div @click="toggleAmount">
          <h3 id="amountH3">Met hoeveel mensen?</h3>
          <p id="amountP">
            {{ localSearchQuery.amount }}
            {{ getCorrectNoun }}
          </p>
        </div>
        <transition name="fade">
          <div v-if="amountBOxOpen" class="dropdown" id="amountDropdown">
            <h3>Aantal personen:</h3>
            <div id="changeAmountDiv">
              <fa
                class="ico"
                icon="minus-circle"
                @click="subtractAmount()"
              ></fa>
              <h2>{{ localSearchQuery.amount }}</h2>
              <fa class="ico" icon="plus-circle" @click="addAmount()"></fa>
            </div>
          </div>
        </transition>
      </div>
      <div id="budgetDiv">
        <div @click="toggleBudget">
          <h3 id="budgetH3">Wat is je budget?</h3>
          <div id="budgetIcons">
            <the-budget-rating
              :budget="localSearchQuery.budget"
            ></the-budget-rating>
          </div>
        </div>
        <transition name="fade">
          <div v-if="budgetBoxOpen" class="dropdown" id="budgetDropdown">
            <h3 id="amountH3">Selecteer je budget:</h3>
            <div id="sliderRating">
              <fa
                @click="localSearchQuery.budget = 1"
                :class="{
                  active: localSearchQuery.budget >= 1,
                  inactive: localSearchQuery.budget < 1,
                }"
                icon="euro-sign"
              ></fa>
              <fa
                @click="localSearchQuery.budget = 2"
                :class="{
                  active: localSearchQuery.budget >= 2,
                  inactive: localSearchQuery.budget < 2,
                }"
                icon="euro-sign"
              ></fa>
              <fa
                @click="localSearchQuery.budget = 3"
                :class="{
                  active: localSearchQuery.budget >= 3,
                  inactive: localSearchQuery.budget < 3,
                }"
                icon="euro-sign"
              ></fa>
              <fa
                @click="localSearchQuery.budget = 4"
                :class="{
                  active: localSearchQuery.budget >= 4,
                  inactive: localSearchQuery.budget < 4,
                }"
                icon="euro-sign"
              ></fa>
              <fa
                @click="localSearchQuery.budget = 5"
                :class="{
                  active: localSearchQuery.budget >= 5,
                  inactive: localSearchQuery.budget < 5,
                }"
                icon="euro-sign"
              ></fa>
            </div>
            <input
              v-model="localSearchQuery.budget"
              type="range"
              min="1"
              max="5"
            />
          </div>
        </transition>
      </div>
      <div id="dateDiv">
        <div @click="toggleDate">
          <h3 id="dateH3">Wanneer wil je gaan?</h3>
          <p id="dateP">{{ displayCorrectDate }} om {{ getTime }}</p>
        </div>
        <transition name="fade">
          <div v-if="dateBoxOpen" class="dropdown" id="dateDropdown">
            <DatePicker
              mode="dateTime"
              v-model="localSearchQuery.date"
              color="orange"
              :model-config="dateConfig"
              :minute-increment="5"
              is24hr
            />
          </div>
        </transition>
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
import TheBudgetRating from "./UI/TheBudgetRating.vue";
import { DatePicker } from "v-calendar";

export default {
  components: {
    TheBudgetRating,
    DatePicker,
  },
  emits: ["reload"],
  data() {
    this;
    return {
      localSearchQuery: {
        location: this.$route.params.location,
        amount: this.$route.params.amount,
        budget: this.$route.params.budget,
        date: "",
        time: "",
      },
      locationBoxOpen: false,
      amountBOxOpen: false,
      budgetBoxOpen: false,
      dateBoxOpen: false,

      locations: this.$store.state.locations,

      dateConfig: {
        type: "string",
        mask: "dDD-MM-YYYY-HH:mm",
      },
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
    displayCorrectDate() {
      const searchDate = this.$route.params.longDate;
      const workDate = this.localSearchQuery.date;
      if (this.localSearchQuery.date == "") {
        return searchDate;
      } else {
        return workDate.slice(1, 11);
      }
    },
    getWeekdays() {
      var day = this.localSearchQuery.date.slice(0, 1);
      if (day == 1) {
        return "monday";
      }
      if (day == 2) {
        return "tuesday";
      }
      if (day == 3) {
        return "wednesday";
      }
      if (day == 4) {
        return "thursday";
      }
      if (day == 5) {
        return "friday";
      }
      if (day == 6) {
        return "saturday";
      } else {
        return "sunday";
      }
    },
    getTime() {
      const searchTime = this.$route.params.time;
      if (this.localSearchQuery.date == "") {
        return searchTime;
      } else {
        return this.localSearchQuery.date.slice(12, 17);
      }
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
    /* makes sure amount var does not exceed 8 or falls below 1 */
    // changeAmount(change) {
    //   this.localSearchQuery.amount = this.localSearchQuery.amount + change;
    //   if (this.localSearchQuery.amount <= 1) {
    //     this.localSearchQuery.amount = 1;
    //   }
    //   if (this.localSearchQuery.amount >= 12) {
    //     this.localSearchQuery.amount = 12;
    //   }
    // },
    subtractAmount() {
      if (this.localSearchQuery.amount > 1) {
        this.localSearchQuery.amount--;
      }
    },
    addAmount() {
      if (this.localSearchQuery.amount < 12) {
        this.localSearchQuery.amount++;
      }
    },
    setLocation(newLocation) {
      this.localSearchQuery.location = newLocation;
    },
    submitSearchQuery() {
      var location = this.localSearchQuery.location;
      var budget = this.localSearchQuery.budget;
      var amount = this.localSearchQuery.amount;
      var date = this.getWeekdays;
      var time = this.getTime;
      var longDate = this.displayCorrectDate;
      var searchUrl =
        "/search/" +
        location +
        "/" +
        budget +
        "/" +
        amount +
        "/" +
        date +
        "/" +
        time +
        "/" +
        longDate;

        this.$router.push(searchUrl)
    },
  },
  
};
</script>

<style scoped>
#searchbarWrapper {
  display: flex;
  align-items: center;
}

#searchButton {
  margin: 0 0 0 -30px;
}

#baseWrapper {
  display: flex;
  background-color: white;
  padding: 20px;
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
  color: black;
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
  margin: 40px 0 0 -40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
#amountDropdown {
  margin-right: -40px;
  display: ;
}

#changeAmountDiv {
  display: flex;
  align-items: center;
}

#changeAmountDiv .ico {
  color: var(--orange);
  font-size: 32px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

#changeAmountDiv .ico:hover {
  transform: scale(1.1);
}

#amountDiv h2 {
  font-family: "open-sans", sans-serif;
  color: var(--black);
  font-size: 42px;
  font-weight: 800;
  margin: 10px 20px;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

#amountDropdown {
  margin-left: -25px;
}

#budgetDropdown {
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin-left: -60px;
}

#sliderRating {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  margin: 20px 0 12px 0;
}

#sliderRating .active {
  color: var(--orange);
  font-size: 21px;
  transition: all 800ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  transform: translatey(-2px);
  cursor: pointer;
}

#sliderRating .inactive {
  color: var(--lightGrey);
  font-size: 21px;
  transition: all 800ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  cursor: pointer;
}

input[type="range"] {
  -webkit-appearance: none;
  margin: 10px 0 0 0;
}

input[type="range"]::-moz-range-track {
  background: var(--orange);
}

input[type="range"]::-moz-range-track {
  background: var(--orange);
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 300px;
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: var(--orange);
  margin-top: -4px;
  cursor: pointer;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #ccc;
}

#dateDropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

#todayButton {
  margin: 15px 0 0 0;
}

#dateDropdown input[type="date"] {
  font-family: "open-sans", sans-serif;
  color: var(--black);
  font-size: 15px;
  font-weight: 600;
  margin: 10px 20px;
}

#dateDropdown input[type="time"] {
  font-family: "open-sans", sans-serif;
  color: var(--black);
  font-size: 15px;
  font-weight: 600;
  margin: 10px 20px;
  padding: 4px;
}

#dateDropdown input[type="date"]::-webkit-datetime-edit,
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-clear-button {
  color: #fff;
  position: relative;
}

#dateDropdown input[type="date"]::-webkit-datetime-edit-year-field {
  position: absolute !important;
  border-left: 1px solid #8c8c8c;
  padding: 2px;
  color: #000;
  left: 56px;
  padding-right: 2px;
}

#dateDropdown input[type="date"]::-webkit-datetime-edit-month-field {
  position: absolute !important;
  border-left: 1px solid #8c8c8c;
  padding: 2px;
  padding-left: 6px;
  color: #000;
  left: 26px;
}

#dateDropdown input[type="date"]::-webkit-datetime-edit-day-field {
  position: absolute !important;
  color: #000;
  padding: 2px;
  left: 4px;
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
.fade-enter-active {
  transition: all 0.075s ease-out;
}
.fade-leave-active {
  transition: all 0.075s ease-in;
}

.fade-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>