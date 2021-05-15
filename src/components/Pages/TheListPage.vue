<template>
  <div id="wrapper">
    <div :class="{ openList: listIsOpen, closedList: !listIsOpen }">
      <div id="listContent">
        <div></div>
      </div>
    </div>
    <div :class="{ normalMap: listIsOpen, maxMap: !listIsOpen }">
      <GoogleMap
        api-key="AIzaSyBB1DuzHUMiX1M4ZVWf4sKYvGceHWVWpEM"
        style="width: 100%; height: 100%; position: relative"
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
        <Marker :options="{ position: center }" />
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
      center: { lat: 51.847313558404274, lng: 5.860571401815774 },
      listIsOpen: true,
    };
  },
  methods: {
    closeList() {
      this.listIsOpen = !this.listIsOpen;
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
};
</script>

<style scoped>
#wrapper {
  display: flex;
}

.openList {
  width: 40vw;
  height: 100vh;
}

.closedList {
  width: 0vw;
  height: 100vh;
}

.normalMap {
  width: 65vw;
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
</style>