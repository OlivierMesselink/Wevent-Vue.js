<template>
  <div class="wrapper">
    <the-navbar></the-navbar>
    <section class="child" id="search">
      <div id="searchWrapper">
        <div>
          <h1>Vind jouw activiteit!</h1>
          <the-searchbar></the-searchbar>
        </div>
      </div>
      <div id="backdrop1"></div>
      <div id="backdrop2"></div>
      <div id="backdrop3"></div>
      <div id="featuredDiv">
        <a :href="featured.link" target="blank">
          <p>{{ featured.title }}</p>
        </a>
      </div>
    </section>

    <section class="child">
      <the-account-ad></the-account-ad>
    </section>

    <section class="child">
      <the-featured-list></the-featured-list>
    </section>
  </div>
</template>

<script>
import TheSearchbar from "../TheSearchbar.vue";
import TheAccountAd from "../TheAccountAd.vue";
import TheFeaturedList from "../TheFeaturedList.vue";

export default {
  components: {
    TheSearchbar,
    TheAccountAd,
    TheFeaturedList
  },
  data() {
    return {
      featured: {
        title: "leip cafe",
        link: "https://www.leipcafe.nl",
      },
    };
  },
};
</script>

<style scoped>
.wrapper {
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  position: relative;
}

.child{
  scroll-snap-align: start;
}

#search {
  height: 100vh;
  width: 100vw;
  display: flex;
}

#searchWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 380px;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 58px;
  margin-bottom: 60px;
}

#backdrop1 {
  position: absolute;
  height: 100%;
  width: 100vw;
  background-image: url("../../assets/backdrop.png");
  z-index: -1;
  overflow-y: visible;
}

#backdrop2 {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url("../../assets/concrete_texture.jpg");
  mix-blend-mode: hard-light;
  opacity: 15%;
  z-index: -2;
  background-size: cover;
}

#backdrop3 {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: var(--background);
  z-index: -3;
  background-size: cover;
}

#featuredDiv {
  position: absolute;
  bottom: 40px;
  right: 40px;
}

#featuredDiv a {
  font-family: "open-sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: white;
  text-decoration: none;
}
</style>
