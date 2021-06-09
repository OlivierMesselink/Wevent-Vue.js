<template>
  <div id="progress-bar"></div>
  <div id="block">
    <h1>Openingstijden</h1>

    <div id="form-body">
      <div id="monday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Maandag</label>
        <span class="van-span">Van</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
        <span class="tot-span">tot</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
      </div>

      <div id="dinsdag" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Dinsdag</label>
        <span class="van-span">Van</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
        <span class="tot-span">tot</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
      </div>

      <div id="wednesday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Woensdag</label>
        <span class="van-span">Van</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
        <span class="tot-span">tot</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
      </div>

      <div id="thursday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Donderdag</label>
        <span class="van-span">Van</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
        <span class="tot-span">tot</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
      </div>

      <div id="friday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Vrijdag</label>
        <span class="van-span">Van</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
        <span class="tot-span">tot</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
      </div>

      <div id="saturday" class="row">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Zaterdag</label>
        <span class="van-span">Van</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
        <span class="tot-span">tot</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
      </div>
      <div id="sunday" class="row items-margin">
        <input class="checkboxes-container" type="checkbox" />
        <label class="label-day" for="checkbox">Zondag</label>
        <span class="van-span">Van</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
        <span class="tot-span">tot</span>

        <input type="text" class="time-input" placeholder="Uur" />
        <label class="label-time" for="text">:</label>
        <input type="text" class="time-input" placeholder="Min" />
      </div>

      <div id="continue-btn">
        <base-button @click="$emit('data')" buttonStyle="pim"
          >Volgende stap</base-button
        >
      </div>
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
