<template>
  <div id="wrapper">
    <transition name="fade">
      <div :class="{ openList: listIsOpen, closedList: !listIsOpen }">
        <div id="listContent">
          <div
            id="listItem"
            v-for="listItem in list"
            :key="listItem.title"
            @mouseenter="
              moveMarker(listItem.lat, listItem.lang, listItem.title)
            "
          >
            <div
              id="listItemImage"
              :style="{ backgroundImage: 'url(' + listItem.imageLink + ')' }"
            ></div>
            <div id="listItemContent">
              <h1>{{ listItem.title }}</h1>
              <h2>{{ listItem.subtitle }}</h2>
              <p>{{ listItem.description }}</p>
              <a id="reserveButton"
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
          :options="getMarkerOptions(item.lat, item.lang, item.title)"
        />
      </GoogleMap>
    </div>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
  components: {
    GoogleMap,
    Marker,
  },
  data() {
    return {
      center: { lat: 0, lng: 0 },
      listIsOpen: true,
      list: null,
      markerOptions: null,
    };
  },
  methods: {
    closeList() {
      this.listIsOpen = !this.listIsOpen;
    },
    moveMarker(lat, lang) {
      const newLatLng = { lat: lat, lng: lang };
      this.$refs.mapRef.map.setZoom(15);
      this.$refs.mapRef.map.panTo(newLatLng);
    },
    getMarkerOptions(lat, lang, title) {
      const newLatLng = { lat: lat, lng: lang };
      return {
        position: newLatLng,
        title: title,
        label: {
          text: title,
          color: "black",
          fontSize: "20px",
          fontWeight: "bolder",
        },
        icon: {
          path:
            "m 12,2.4000002 c -2.7802903,0 -5.9650002,1.5099999 -5.9650002,5.8299998 0,1.74375 1.1549213,3.264465 2.3551945,4.025812 1.2002732,0.761348 2.4458987,0.763328 2.6273057,2.474813 L 12,24 12.9825,14.68 c 0.179732,-1.704939 1.425357,-1.665423 2.626049,-2.424188 C 16.809241,11.497047 17.965,9.94 17.965,8.23 17.965,3.9100001 14.78029,2.4000002 12,2.4000002 Z",
          fillColor: "#fe9462",
          fillOpacity: 1.0,
          strokeColor: "#000000",
          strokeWeight: 0,
          scale: 2.4,
        },
      };
    },
    loadList() {
      fetch(
        "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app/restaurants.json"
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
              title: data[id].title,
              subtitle: data[id].subtitle,
              imageLink: data[id].img,
              description: data[id].description,
              pinned: data[id].pinned,
              lat: data[id].lat,
              lang: data[id].lang,
            });
          }

          this.list = results;
        });
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
    console.log(this.list);
  },
};
</script>

<style scoped>
#wrapper {
  display: flex;
}

.openList {
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: scroll;
  background-color: var(--background);
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
  width: 60vw;
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

#listItem {
  margin: 20px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  background-color: white;
  transition: all 0.1s ease-in-out;
}

#listItem:hover {
  transform: scale(1.01);
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
</style>