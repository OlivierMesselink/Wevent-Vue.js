<template>
  <div id="wrapper">
    <transition name="listFade">
      <div :class="{ openList: listIsOpen, closedList: !listIsOpen }">
        <div id="listContent">
          <the-list-item
            v-for="listItem in list"
            :key="listItem.title"
            :listItem="listItem"
            :localSearchQuery="localSearchQuery"
            @mouseenter="
              moveMarker(listItem.lat, listItem.lang, listItem.title)
            "
            :ExpandClass="{
              listItem: openCard != listItem.title,
              activeItem: openCard == listItem.title,
            }"
            :openCard="openCard"
            @expand="expandItem(listItem.title)"
            @changeTime="setTime"
          ></the-list-item>
        </div>
      </div>
    </transition>
    <div :class="{ normalMap: listIsOpen, maxMap: !listIsOpen }">
      <GoogleMap
        api-key="AIzaSyBB1DuzHUMiX1M4ZVWf4sKYvGceHWVWpEM"
        style="width: 100%; height: 100%; position: relative"
        ref="mapRef"
        :center="center"
        :zoom="15"
        :disableDefaultUi="true"
      >
        <CustomControl ControlPosition="TOP_RIGHT">
          <base-button
            @click="closeList"
            id="backButton"
            :buttonStyle="getButtonstyle"
            >{{ getButtonTxt }}</base-button
          >
        </CustomControl>
        <Marker
          v-for="item in list"
          :key="item.title"
          :options="
            getMarkerOptions(
              item.lat,
              item.lang,
              item.title,
              getMarkerColor(item.title),
              getMarkerSize(item.title),
              getMarkerZindex(item.title)
            )
          "
        />
      </GoogleMap>
    </div>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
import BaseButton from "../UI/BaseButton.vue";
import TheListItem from "../UI/TheListItem.vue";

export default {
  components: {
    GoogleMap,
    Marker,
    BaseButton,
    TheListItem,
  },
  data() {
    BaseButton;
    return {
      localSearchQuery: {
        amount: 2,
        time: "1900",
        date: "",
      },
      center: { lat: 51.84768967381224, lng: 5.854428604054124 },
      listIsOpen: true,
      list: null,
      markerOptions: null,
      openCard: "",
      selectedMarker: "",
    };
  },
  methods: {
    closeList() {
      this.listIsOpen = !this.listIsOpen;
    },
    moveMarker(lat, lang, title) {
      const newLatLng = { lat: lat, lng: lang };
      this.$refs.mapRef.map.setZoom(16);
      this.$refs.mapRef.map.panTo(newLatLng);
      this.selectedMarker = title;
    },
    getMarkerOptions(lat, lang, title, markerColor, size, Zindex) {
      const newLatLng = { lat: lat, lng: lang };
      return {
        position: newLatLng,
        title: title,
        icon: {
          path:
            "M20,0C9,0,0,9,0,20c0,14.8,20,38.7,20,38.7s20-24,20-38.7C40.1,9,31.1,0,20,0z M20,30.4	c-5.7,0-10.4-4.6-10.4-10.4S14.3,9.7,20,9.7s10.4,4.6,10.4,10.4S25.8,30.4,20,30.4z",
          fillColor: markerColor,
          fillOpacity: 1.0,
          strokeColor: "#edb295",
          strokeWeight: 0,
          scale: size,
          zIndex: Zindex,
          optimized: false, 
        },
      };
    },
    loadList() {
      fetch(
        "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app/nijmegen/restaurants.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              title: data[id].id,
              subtitle: data[id].location,
              imageLink: data[id].imgLink,
              description: data[id].description,
              lat: data[id].lat,
              lang: data[id].lang,
            });
          }

          this.list = results;
        });
    },
    expandItem(cardName) {
      if (this.openCard == cardName) {
        this.openCard = "";
      } else {
        this.openCard = cardName;
      }
    },
    setTime(time) {
      this.localSearchQuery.time = time;
      console.log(time);
    },
    getMarkerColor(title) {
      if (this.selectedMarker == title) {
        return "#fe9462";
      } else {
        return "#86b9cf";
      }
    },
    getMarkerSize(title) {
      if (this.selectedMarker == title) {
        return 1.3;
      } else {
        return 1;
      }
    },
    getMarkerZindex(title) {
      if (this.selectedMarker == title) {
        return 999;
      } else {
        return 0;
      }
    },
  },
  computed: {
    getButtonTxt() {
      if (this.listIsOpen) {
        return "Vergroten";
      } else {
        return "Toon lijst";
      }
    },
    getButtonstyle() {
      if (this.listIsOpen) {
        return "solid";
      } else {
        return "solid";
      }
    },
  },
  mounted() {
    this.loadList();
  },
};
</script>

<style scoped>
#wrapper {
  display: flex;
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

.listFade-enter-from {
  transform: translateX(-400px);
}

.listFade-enter-to {
  transform: translateX(0px);
}

.listFade-enter-active {
  transition: all 0.2s ease-in-out;
}
</style>