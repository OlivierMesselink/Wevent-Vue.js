<template>
  <div id="wrapper">
    <div id="modalBody">
      <div id="imageDiv" :style="{ backgroundImage: 'url(' + listItem.imageLink + ')' }"></div>
      <div id="contentDiv">
        <h1>{{ listItem.title }}</h1>
        <h2>{{ listItem.subtitle }}</h2>
        <p>{{ listItem.description }}</p>
      </div>
      <div id="buttonDiv">
        <base-button id="closeButton" @click="$emit('close')" buttonStyle="hollow">Sluiten </base-button>
        <base-button buttonStyle="solid" @click="$router.push(getUrl)">Bekijken</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  components: { BaseButton },
  props: ["listItem"],
  emits:['close'],
  computed:{
    getUrl(){
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth()
      var day = date.getDay()

      var today = day + '-' + month + '-' + year

      var url = "/search/" + this.listItem.city + "/" + 4 + "/" + 4 + "/friday/19:00/" + today
      return url
    }
  }
};
</script>

<style scoped>
#wrapper {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: rgba(1, 1, 1, 0.8);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
}

#modalBody {
  background-color: white;
  border-radius: 10px;
  
}

#contentDiv{
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
}

#imageDiv{
  height: 200px;
  border-radius: 10px 10px 0 0;
  background-size: cover;
  background-position: center;
}

#buttonDiv{
  padding-bottom: 40px ;
  display: flex;
  justify-content: center;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 36px;
  /* margin: 0 0 40px 0; */
  text-align: center;
  margin: 0 0 10px;
}

h2 {
  font-family: "open sans", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: var(--orange);
  margin: 5px 0px 10px 0;
  text-align: center;
}

P {
  font-family: "open sans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  width: 75%;
  margin: 10px 0 0 0 ;
  line-height: 20px;
}

#closeButton{
  margin: 0 10px 0 0;
}

</style>