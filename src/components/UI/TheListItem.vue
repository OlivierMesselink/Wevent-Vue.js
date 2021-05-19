<template>
<div id="wrapper">
  <div
    id="listItemImage"
    :style="{ backgroundImage: 'url(' + listItem.imageLink + ')' }"
  ></div>
  <div id="listItemContent">
    <h1>{{ listItem.title }}</h1>
    <h2>{{ listItem.subtitle }}</h2>
    <p>{{ listItem.description }}</p>
    <transition name="expandContent">
      <div v-show="openCard == listItem.title" id="expandedItem">
        <h3>Selecteer een tijd:</h3>
        <div class="timeButtons">
          <toggle-button
            :solid="localSearchQuery.time == '1900'"
            @click="setTime(1900)"
            >19:00</toggle-button
          >
          <toggle-button
            :solid="localSearchQuery.time == '1915'"
            @click="setTime(1915)"
            >19:15</toggle-button
          >
          <toggle-button
            :solid="localSearchQuery.time == '1930'"
            @click="setTime(1930)"
            >19:30</toggle-button
          >
        </div>
        <div class="timeButtons">
          <toggle-button
            :solid="localSearchQuery.time == '1945'"
            @click="setTime(1945)"
            >19:45</toggle-button
          >
          <toggle-button
            :solid="localSearchQuery.time == '2000'"
            @click="setTime(2000)"
            >20:00</toggle-button
          >
          <toggle-button
            :solid="localSearchQuery.time == '2015'"
            @click="setTime(2015)"
            >20:15</toggle-button
          >
        </div>
        <input
          type="text"
          placeholder="Eventuele opmerking (allergieën etc.)."
        />
      </div>
    </transition>
    <a id="reserveButton" @click="$emit('expand')"
      ><img src="../../assets/calendar.png" />
      <p>RESERVEREN</p></a
    >
  </div>
  <div id="ListItemButtons">
    <div>
      <img
        v-if="!listItem.pinned"
        id="pinImg"
        src="../../assets/tack-inactive.png"
      />
      <img v-else id="pinImg" src="../../assets/tack-active.png" />
    </div>
    <img id="Stars" />
  </div>
</div>
</template>

<script>
export default {
  props: ["listItem", "localSearchQuery", "expandClass", "openCard", ],
  methods:{
      setTime(time){
          this.$emit('changeTime', time)
      }
  }

};
</script>

<style scoped>

#wrapper {
  margin: 20px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: white;
  transition: all 0.1s ease-in-out;
}

.openList {
  width: 1260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: scroll;
  background-color: var(--background);
  transition: all 0.2s ease-in-out;
}

.openList::-webkit-scrollbar {
  display: none;
}

.closedList {
  display: none;
  width: 0vw;
  height: 100vh;
}

.normalMap {
  width: 100%;
  height: 100vh;
  position: relative;
}

.maxMap {
  width: 100vw;
  height: 100vh;
  position: relative;
}

#backButton {
  position: absolute;
  top: 20px;
  left: 20px;
}

#backButton img {
  height: 15px;
  padding: -10px;
}

.listItem {
  margin: 20px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: white;
  transition: all 0.1s ease-in-out;
}

.listItem:hover {
  transform: scale(1.01);
}

.activeItem {
  margin: 20px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  transition: all 0.1s ease-in-out;
}

#listItemContent h1 {
  font-family: "raleway", sans-serif;
  font-weight: 900;
  font-size: 21px;
  margin-bottom: 20px;
}

#listItemContent h2 {
  font-family: "raleway", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: var(--grey);
  margin-bottom: 20px;
}

#listItemContent p {
  font-family: "open-sans", sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: var(--grey);
  line-height: 18px;
}

#listItemImage {
  width: 220px;
  align-self: stretch;
  border-radius: 10px 0 0 10px;
  background-size: cover;
  background-position: center;
  flex-grow: 0;
}

#listItemContent {
  padding: 25px;
  width: 500px;
  display: flex;
  flex-direction: column;
}

#listItemContent a {
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: var(--orange);
}

#ListItemButtons {
  padding: 40px 40px;
}

#ListItemButtons img {
  cursor: pointer;
  height: 22px;
}

#listItemContent img {
  height: 18px;
  margin: 0 10px 0 0;
}

#reserveButton {
  margin-top: 35px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

#reserveButton p {
  padding: 5px 0 0 0;
  color: var(--orange);
  font-weight: 600;
}

.label {
  position: absolute;
  font-family: "open-sans", sans-serif;
  font-weight: 800;
  font-size: 12px;
  color: var(--orange);
  margin: 0 0 20px 0;
  display: none;
}

.timeButtons {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  width: 260px;
}

#expandedItem {
  margin: 40px 0 0 0;
}

#expandedItem h3 {
  font-family: "open-sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--grey);
  margin: 0px 0 20px 0;
}

#expandedItem input {
  width: 75%;
  color: black;
  margin: 15px 0px;
  border: none;
  padding: 14px 14px;
  border-radius: 10px;
  background-color: #a6c9d831;
}

#expandedItem input::placeholder {
  font-style: italic;
}

.expandContent-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.expandContent-enter-active {
  transition: all 0.2s ease-in-out;
}

.expandContent-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.expandContent-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.expandContent-leave-active {
  transition: all 0.2s ease-in-out;
}

.expandContent-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>