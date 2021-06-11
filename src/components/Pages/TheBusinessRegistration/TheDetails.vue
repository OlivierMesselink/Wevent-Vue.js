<template>
  <div id="progress-bar"></div>
  <div id="block">
    <h1>Details over je onderneming</h1>

    <div id="form-body">
      <div id="guest-section">
        <p>
          Hoeveel plek is er in totaal voor gasten?
          <input
            ref="total"
            id="total-guests"
            type="text"
            placeholder="Bijv. 180"
          />
        </p>

        <p>
          Vanaf en tot welk aantal gasten kan een gebruiker een reservering
          plaatsen bij je onderneming?
        </p>
        <div class="flex-container">
          <div id="min">
            <label for="min">Minimaal</label>
            <input
              ref="min"
              type="text"
              placeholder="Bijv. 2"
              v-model="register.attendees.min"
            />
          </div>
          <div id="max">
            <label for="max">Maximaal</label>
            <input
              ref="max"
              type="text"
              placeholder="Bijv. 12"
              v-model="register.attendees.max"
            />
          </div>
        </div>
      </div>

      <div id="restaurant-section">
        <p>
          Binnen welke (gemiddeld gezien) prijsklasse valt jouw onderneming?
        </p>
        <select
          id="price"
          name="prijsklasse"
          v-model="register.budget"
          ref="budget"
        >
          <option value="0" selected>Selecteer</option>
          <option value="1">Goedkoop</option>
          <option value="2">Betaalbaar</option>
          <option value="3">Redelijk betaalbaar</option>
          <option value="4">Bovengemiddeld</option>
          <option value="5">Michelin</option>
        </select>

        <p>Binnen welke categorie valt jouw onderneming?</p>
        <select id="category" name="soort" v-if="false">
          <option value="0" selected>Selecteer soort</option>
          <option value="restaurant">Restaurant</option>
          <option value="bar">Bar</option>
          <option value="hotel">Hotel</option>
          <option value="lunch">Lunch</option>
        </select>
        <div id="iconList">
          <div>
            <fa
              class="ico"
              icon="beer"
              :class="{ active: register.category.bar }"
              @click="register.category.bar = !register.category.bar"
            ></fa>
          </div>
          <div>
            <fa
              class="ico"
              icon="coffee"
              :class="{ active: register.category.lunch }"
              @click="register.category.lunch = !register.category.lunch"
            ></fa>
          </div>
          <div>
            <fa
              class="ico"
              icon="utensils"
              :class="{ active: register.category.restaurant }"
              @click="
                register.category.restaurant = !register.category.restaurant
              "
            ></fa>
          </div>
          <div>
            <fa
              class="ico"
              icon="bed"
              :class="{ active: register.category.hotel }"
              @click="register.category.hotel = !register.category.hotel"
            ></fa>
          </div>
          <div>
            <fa
              class="ico"
              icon="film"
              :class="{ active: register.category.movie }"
              @click="register.category.movie = !register.category.movie"
            ></fa>
          </div>
        </div>
        <p>
          Geef een korte omschrijving van het restaurant
          <textarea
            ref="description"
            id="desc"
            type="text"
            placeholder="Bijv. Restaurant 't Vogeltje is een Turkse delicatesse zaak"
            cols="10"
            rows="4"
            v-model="register.description"
          ></textarea>
        </p>
      </div>
      <p style="color: crimson" v-if="invalidInput" id="invalid">
        Vul alle velden correct in en probeer opniew.
      </p>
    </div>
    <div id="continue-btn">
      <base-button @click="submitData" buttonStyle="pim"
        >Volgende stap</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  emits: ["emitData"],
  data() {
    return {
      register: {
        attendees: {
          min: "",
          max: "",
        },
        budget: "",
        category: {
          bar: false,
          hotel: false,
          lunch: false,
          restaurant: false,
          movie: false,
        },
        description: null,
        invalidInput: false,
      },
    };
  },
  methods: {
    submitData() {
      this.$emit("emitData", this.register);
    },
  },
};
</script>

<style scoped>
#continue-btn {
  display: flex;
}

textarea {
  resize: none;
  border-radius: 10px;
  background-color: #a6c9d831;
  border: none;
  font-family: "open sans", "sans serif";
  display: flex;
  width: 80%;
  color: black;
  padding: 10px;
  color: var(--grey);
  margin: 10px 0px;
}

textarea::placeholder {
  color: black;
  opacity: 15%;
}

#restaurant-section {
  margin-top: 5%;
  margin-bottom: 4%;
}

#form-body #total-guests {
  width: 10%;
  /* margin-bottom: 5%; */
  display: flex;
}

.flex-container {
  display: flex;
  flex-flow: column wrap;
}

.flex-container input {
  margin-left: 3% !important;
  margin-bottom: 2% !important;
  width: 15%;
}

select {
  width: 35%;
  /* Dropdown-arrow styling */
  appearance: none;
  background-image: url("../../../assets/caret-down.png");
  background-repeat: no-repeat;
  background-position-x: 90%;
  background-position-y: 50%;
  background-size: 5%;
}

#form-body input,
select {
  margin: 10px 0px;
  border: none;
  padding: 14px 14px;
  border-radius: 10px;
  background-color: #a6c9d831;
  margin-bottom: 25px;
}

input[type="text"],
select {
  font-size: 14px;
  color: var(--grey);
  font-family: "open sans", "sans serif";
}

input::placeholder {
  color: black;
  opacity: 15%;
  font-family: "open sans", "sans serif";
  font-size: 14px;
}

#progress-bar {
  background-image: url("../../../assets/progress-indicator-3.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 6%;
  margin-top: 6%;
  height: 60vh;
  width: 20vw;
  background-size: contain;
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
  padding: 60px;
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
  font-size: 24px;
  width: 1000px;
  margin-bottom: 4%;
  margin-top: 1%;
  line-height: 35px;
  color: var(--mediumGray);
}

.ico {
  width: 28px;
  color: white;
  background-color: var(--background);
  border-radius: 10px;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.active {
  background-color: var(--orange);
}

#iconList {
  margin: 15px 0 10px 0;
  display: flex;
  width: 280px;
  justify-content: space-between;
  /* background-color: crimson; */
}
</style>
