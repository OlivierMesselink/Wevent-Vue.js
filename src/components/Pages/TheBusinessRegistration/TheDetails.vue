<template>
  <div id="progress-bar"></div>
  <div id="block">
    <h1>Details over je onderneming</h1>

    <div id="form-body">
      <div id="guest-section">
        <p>
          Hoeveel plek is er in totaal voor gasten?
          <input id="total-guests" type="text" placeholder="Bijv. 180" />
        </p>

        <p>
          Vanaf en tot welk aantal gasten kan een gebruiker een reservering
          plaatsen bij je onderneming?
        </p>
        <div class="flex-container">
          <div id="min">
            <label for="min">Minimaal</label>
            <input type="text" placeholder="Bijv. 2" />
          </div>
          <div id="max">
            <label for="max">Maximaal</label>
            <input type="text" placeholder="Bijv. 12" />
          </div>
        </div>
      </div>

      <div id="restaurant-section">
        <p>
          Binnen welke (gemiddeld gezien) prijsklasse valt jouw onderneming?
        </p>
        <select id="price" name="prijsklasse">
          <option value="Selecteer een optie" selected>Selecteer</option>
          <option value="1">Goedkoop</option>
          <option value="2">Betaalbaar</option>
          <option value="3">Redelijk betaalbaar</option>
          <option value="4">Bovengemiddeld</option>
          <option value="5">Michelin</option>
        </select>

        <p>
          Binnen welke categorie valt jouw onderneming?
        </p>
        <select id="category" name="soort">
          <option value="Selecteer een optie" selected>Selecteer soort</option>
          <option value="restaurant">Restaurant</option>
          <option value="bar">Bar</option>
          <option value="hotel">Hotel</option>
          <option value="lunch">Lunch</option>
        </select>

        <p>
          Geef een korte omschrijving van het restaurant
          <textarea
            id="desc"
            type="text"
            placeholder="Bijv. Restaurant 't Vogeltje is een Turkse delicatesse zaak"
            cols="10"
            rows="4"
          ></textarea>
        </p>
      </div>
    </div>
    <div id="continue-btn">
      <base-button @click="$emit('data')" buttonStyle="pim"
        >Volgende stap</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
</style>
