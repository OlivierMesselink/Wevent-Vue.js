<template>
  <kinesis-container>
    <section>
      <div id="wrapper">
        <kinesis-element id="kinesis" :strength="4" type="depth">
          <transition name="flip" tag="div" mode="out-in">
            <div
              id="creditcardWrapper"
              v-bind:style="{ backgroundImage: 'url(' + getImgLink + ')' }"
              v-if="displayFront"
            >
              <div id="creditCard">
                <div id="creditContent">
                  <div id="imgDiv">
                    <img
                      id="chip"
                      src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    />
                    <img id="visa" src="../../assets/visa.png" />
                  </div>
                  <div id="number">
                    <h1 :key="cardNumber">
                      {{
                        cardNumber.slice(0, 4) +
                        " " +
                        cardNumber.slice(4, 8) +
                        " " +
                        cardNumber.slice(8, 12) +
                        " " +
                        cardNumber.slice(12, 16)
                      }}
                    </h1>
                  </div>
                  <div id="cardDetails">
                    <div id="detailsSmall">
                      <div class="small">
                        <p>Card holder</p>
                        <h2>{{ cardName }}</h2>
                      </div>
                      <div class="small">
                        <p>Expires</p>
                        <h2>{{ cardMonth }} / {{ cardYear }}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="creditcardWrapperBack"
              v-bind:style="{ backgroundImage: 'url(' + getImgLink + ')' }"
              v-else
            >
              <div id="creditCardBack">
                <div id="blackBar"></div>
                <div id="creditContentBack">
                  <h2 id="cvch2">{{ cardCvc }}</h2>
                  <div>
                    <img id="visa" src="../../assets/visa.png" />
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </kinesis-element>
        <div id="creditFormWrapper">
          <div id="creditForm">
            <label>Card number</label>
            <input
              @focus="displayFront = true"
              @click="displayFront = true"
              type="text"
              name="cardNumber"
              v-model="inputNumber"
              maxlength="16"
            />
            <label>Card holder</label>
            <input
              type="text"
              name="cardHolder"
              v-model="inputName"
              @focus="displayFront = true"
            />
            <div id="smallInput">
              <div id="expireDiv">
                <label>Expiration date</label>
                <div>
                  <select type="select" v-model="cardMonth" @click="displayFront = true" @focus="displayFront = true" >
                    <option
                      
                      v-for="month in months"
                      :key="month.id"
                      :value="month.value"
                    >
                      {{ month.id }}
                    </option>
                  </select>
                  <select
                    type="select"
                    v-model="cardYear"
                    @click="displayFront = true"
                    @focus="displayFront = true"
                  >
                    <option
                      v-for="year in years"
                      :key="year"
                      :value="year.slice(2, 4)"
                    >
                      {{ year }}
                    </option>
                  </select>
                </div>
              </div>
              <div id="CVCDiv">
                <label for="CVC">CVC</label>
                <input
                  v-model="cardCvc"
                  type="number"
                  name="CVC"
                  min="000"
                  max="9999"
                  @focus="displayFront = false"
                />
              </div>
            </div>
            <button id="confirmButton">Submit</button>
          </div>
        </div>
      </div>
    </section>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from "vue-kinesis";

export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data() {
    return {
      imgLink:
        "https://images.unsplash.com/photo-1590856847323-0e481c3b1a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      chipLink:
        "https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png",
      cardNumber: "################",
      cardName: "FULL NAME",
      cardMonth: "MM",
      cardYear: "YY",
      cardCvc: "123132",
      inputNumber: "",
      inputName: "",
      displayFront: true,
      months: [
        { id: "January", value: "01" },
        { id: "Febuary", value: "02" },
        { id: "March", value: "03" },
        { id: "April", value: "04" },
        { id: "May", value: "05" },
        { id: "June", value: "06" },
        { id: "July", value: "07" },
        { id: "August", value: "08" },
        { id: "September", value: "09" },
        { id: "October", value: "10" },
        { id: "November", value: "11" },
        { id: "December", value: "12" },
      ],
      years: ["2022", "2023", "2024", "2025", "2026"],
      imgLinks: [
        "https://images.unsplash.com/photo-1590856847323-0e481c3b1a8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1576180510889-d91ca5078e14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        "https://images.unsplash.com/photo-1576180510889-d91ca5078e14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        "https://images.unsplash.com/photo-1559755769-fb659ca76d09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1595364341192-28b7682b2e9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1611083616600-d3fdc4198aa6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1577138017060-8ed59846a432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1554188248-986adbb73be4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      ],
    };
  },
  computed: {
    getImgLink() {
      var random = Math.floor(Math.random() * 10);
      return this.imgLinks[random];
    },
  },
  watch: {
    inputNumber() {
      if (this.inputNumber == "") {
        this.cardNumber = "################";
      } else {
        this.cardNumber = this.inputNumber;
      }
    },
    inputName() {
      if (this.inputName == "") {
        this.cardName = "FULL NAME";
      } else {
        this.cardName = this.inputName;
      }
    },
  },
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,700&display=swap");

section {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4d4d4d;
}

#wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#creditcardWrapper {
  border-radius: 15px;
  box-shadow: 3px 13px 30px 0px rgba(21, 34, 67, 0.2);
  background-size: cover;
  z-index: 1;
  height: 300px;
  width: 480px;
  margin: 0 0 -60px 0;
}

#creditCard {
  height: 300px;
  border-radius: 15px;
  background-color: rgba(1, 1, 1, 0.38);
}

#creditcardWrapperBack {
  border-radius: 15px;
  box-shadow: 3px 13px 30px 0px rgba(21, 34, 67, 0.2);
  background-size: cover;
  z-index: 1;
  height: 300px;
  width: 480px;
  margin: 0 0 -60px 0;
}

#creditCardBack {
  height: 300px;
  border-radius: 15px;
  background-color: rgba(1, 1, 1, 0.38);
  padding: 40px 0;
  box-sizing: border-box;
}

#cvch2 {
  padding: 15px 20px;
  background-color: white;
  border-radius: 10px;
  color: black;
  box-shadow: 3px 13px 30px 0px rgba(21, 34, 67, 0.2);

}

#creditContentBack {
  height: inherit;
  padding: 0 40px;
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#blackBar {
  width: 100%;
  height: 60px;
  background-color: rgba(1, 1, 1, 0.9);
}

#kinesis {
  position: relative;
  z-index: 2;
}

#creditContent {
  box-sizing: border-box;
  padding: 40px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#imgDiv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#chip {
  height: 50px;
}

#visa {
  height: 30px;
}

#cardDetails {
  width: inherit;
  display: flex;
  flex-direction: column;
}

#detailsSmall {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

h2,
h1 {
  font-family: "Lato", sans-serif;
  color: white;
  font-weight: 900;
}

label {
  font-family: "Lato", sans-serif;
  color: white;
  font-weight: 500;
}

h1 {
  font-size: 31px;
  letter-spacing: 2px;
  font-weight: 500;
}

p {
  font-family: "Lato", sans-serif;
  color: rgb(163, 163, 163);
  font-weight: 500;
  margin: 0 0 4px 0;
}

#creditFormWrapper {
  width: 600px;
  background-color: white;
  box-shadow: 3px 13px 30px 0px rgba(21, 34, 67, 0.2);
  border-radius: 15px;
  padding: 70px 40px 40px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#creditForm {
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: white;
}

input,
select {
  background-color: transparent;
  border: solid 1px grey;
  padding: 10px;
  border-radius: 5px;
}

select {
  margin: 0 20px 0 0;
}

label {
  color: black;
  margin: 20px 0 10px 0;
  font-size: 14px;
}

#smallInput {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
}

#expireDiv {
  display: flex;
  flex-direction: column;
}

#CVCDiv {
  display: flex;
  flex-direction: column;
}

#confirmButton {
  background-color: #01497e;
  border-radius: 5px;
  border: 1px solid #01497e;
  padding: 16px 10px;
  font-family: "Lato", sans-serif;
  color: white;
  font-weight: 900;
  font-size: 16px;
  margin: 40px 0 20px 0;
  box-shadow: 3px 13px 30px 0px #00246654;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

#confirmButton:hover {
  transform: scale(1.01);
}

.flip-enter-from,
.flip-leave-to {
  transform: rotateY(85deg);
}

.flip-enter-active {
  transition: all 0.18s cubic-bezier(0.71, 0.03, 0.56, 0.85);
}
.flip-leave-active {
  transition: all 0.18s cubic-bezier(0.71, 0.03, 0.56, 0.85);
}

.flip-enter-to,
.flip-leave-from {
  transform: rotateY(0deg);
}
</style>
