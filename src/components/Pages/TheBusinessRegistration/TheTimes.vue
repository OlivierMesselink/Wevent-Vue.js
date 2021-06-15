<template>
  <div id="progress-bar"></div>
  <div id="block">
    <h1>Openingstijden</h1>

    <div id="form-body">
      <div id="monday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Maandag</label>
        <span class="van-span">Van</span>

        <input
          v-model="register.monday.from1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.monday.from2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
        <span class="tot-span">tot</span>

        <input
          v-model="register.monday.to1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.monday.to2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
      </div>

      <div id="dinsdag" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Dinsdag</label>
        <span class="van-span">Van</span>

        <input
          v-model="register.tuesday.from1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.tuesday.from2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
        <span class="tot-span">tot</span>

        <input
          v-model="register.tuesday.to1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.tuesday.to2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
      </div>

      <div id="wednesday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Woensdag</label>
        <span class="van-span">Van</span>

        <input
          v-model="register.wednesday.from1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.wednesday.from2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
        <span class="tot-span">tot</span>

        <input
          v-model="register.wednesday.to1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.wednesday.to2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
      </div>

      <div id="thursday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Donderdag</label>
        <span class="van-span">Van</span>

        <input
          v-model="register.thursday.from1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.thursday.from2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
        <span class="tot-span">tot</span>

        <input
          v-model="register.thursday.to1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.thursday.to2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
      </div>

      <div id="friday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Vrijdag</label>
        <span class="van-span">Van</span>

        <input
          v-model="register.friday.from1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.friday.from2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
        <span class="tot-span">tot</span>

        <input
          v-model="register.friday.to1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.friday.to2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
      </div>

      <div id="saturday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Zaterdag</label>
        <span class="van-span">Van</span>

        <input
          v-model="register.saturday.from1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.saturday.from2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
        <span class="tot-span">tot</span>

        <input
          v-model="register.saturday.to1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.saturday.to2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
      </div>
      <div id="sunday" class="row items-margin">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Zondag</label>
        <span class="van-span">Van</span>

        <input
          v-model="register.sunday.from1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.sunday.from2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
        <span class="tot-span">tot</span>

        <input
          v-model="register.sunday.to1"
          type="text"
          class="time-input"
          placeholder="Uur"
        />
        <label class="label-time" for="text">:</label>
        <input
          v-model="register.sunday.to2"
          type="text"
          class="time-input"
          placeholder="Min"
        />
      </div>
      <div id="continue-btn">
        <base-button @click="bundleData" buttonStyle="pim"
          >Volgende stap</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["emitData"],
  data() {
    return {
      register: {
        monday: {
          from1: "",
          from2: "",
          to1: "",
          to2: "",
        },
        tuesday: {
          from1: "",
          from2: "",
          to1: "",
          to2: "",
        },
        wednesday: {
          from1: "",
          from2: "",
          to1: "",
          to2: "",
        },
        thursday: {
          from1: "",
          from2: "",
          to1: "",
          to2: "",
        },
        friday: {
          from1: "",
          from2: "",
          to1: "",
          to2: "",
        },
        saturday: {
          from1: "",
          from2: "",
          to1: "",
          to2: "",
        },
        sunday: {
          from1: "",
          from2: "",
          to1: "",
          to2: "",
        },
      },
    };
  },
  methods: {
    bundleData() {
      var monday = this.getMonday;
      var tuesday = this.gettuesday;
      var wednesday = this.getWednesday;
      var thursday = this.getThursday;
      var friday = this.getFriday;
      var saturday = this.getSaturday;
      var sunday = this.getSunday;
      var dates = {
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
      };

      this.$emit("emitData", dates);
    },
  },
  computed: {
    getMonday() {
      var from = this.register.monday.from1 + ":" + this.register.monday.from2;
      var till = this.register.monday.to1 + ":" + this.register.monday.to2;
      var except = false;
      var monday = { from, except, till };
      return monday;
    },
    gettuesday() {
      var from =
      this.register.tuesday.from1 + ":" + this.register.tuesday.from2;
      var till = this.register.tuesday.to1 + ":" + this.register.tuesday.to2;
      var except = false;
      var tuesday = { from, except, till };
      return tuesday;
    },
    getWednesday() {
      var from =
      this.register.wednesday.from1 + ":" + this.register.wednesday.from2;
      var till =
      this.register.wednesday.to1 + ":" + this.register.wednesday.to2;
      var except = false;
      var wednesday = { from, except, till };
      return wednesday;
    },
    getThursday() {
      var from =
      this.register.thursday.from1 + ":" + this.register.thursday.from2;
      var till = this.register.thursday.to1 + ":" + this.register.thursday.to2;
      var except = false;
      var thursday = { from, except, till };
      return thursday;
    },
    getFriday() {
      var from = this.register.friday.from1 + ":" + this.register.friday.from2;
      var till = this.register.friday.to1 + ":" + this.register.friday.to2;
      var except = false;
      var friday = { from, except, till };
      return friday;
    },
    getSaturday() {
      var from =
      this.register.saturday.from1 + ":" + this.register.saturday.from2;
      var till = this.register.saturday.to1 + ":" + this.register.saturday.to2;
      var except = false;
      var saturday = { from, except, till };
      return saturday;
    },
    getSunday() {
      var from = this.register.sunday.from1 + ":" + this.register.sunday.from2;
      var till = this.register.sunday.to1 + ":" + this.register.sunday.to2;
      var except = false;
      var sunday = { from, except, till };
      return sunday;
    },
  },
};
</script>

<style scoped>
#continue-btn {
  display: flex;
}

.time-input {
  width: 4% !important;
}

.van-span {
  margin-right: 2%;
  margin-left: 2%;
}

.tot-span {
  margin-right: 2%;
  margin-left: 2%;
}

.row {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 3%;
}

.label-day {
  margin-left: 4%;
  margin-right: 6%;
  width: 94.422px;
}

.label-time {
  margin-left: 1%;
  margin-right: 1%;
}
.checkboxes-container {
  height: 20px;
  width: 20px;
  background-color: #a6c9d831;
  appearance: none;
  border-radius: 0px !important;
}

.checkboxes-container:active,
.checkboxes-container:checked:active,
.checkboxes-container:checked {
  background-image: url("../../../assets/checkmark.png") !important;
  background-repeat: no-repeat;
  background-size: 60%;
  background-position-x: 50%;
  background-position-y: 50%;
}

#form-body input {
  margin: 10px 0px;
  border: none;
  padding: 14px 14px;
  border-radius: 10px;
  background-color: #a6c9d831;
}

input[type="text"] {
  font-size: 14px;
  color: var(--grey);
  font-family: "open sans", "sans serif";
}

#form-body input::placeholder {
  color: black;
  opacity: 15%;
  font-family: "open sans", "sans serif";
  font-size: 14px;
}

#progress-bar {
  background-image: url("../../../assets/progress-indicator-4.png");
  background-repeat: no-repeat;
  position: absolute;
  left: 6%;
  margin-top: 6%;
  height: 60vh;
  width: 20vw;
  background-size: contain;
}

.items-margin {
  margin-bottom: 6%;
}

#form-body {
  color: var(--grey);
  display: flex;
  flex-direction: column;
  font-family: "open sans", "sans-serif";
  font-size: 14px;
  width: 930px;
  line-height: 33px;
  margin-left: 4%;
}

#block {
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  width: 750px;
  height: 780px;
  padding: 70px;
  margin-left: 20%;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 36px;
  margin-bottom: 4%;
  margin-left: 4%;
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
