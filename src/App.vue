<template>
  <section id="main">
    <div id="content">
      <the-searchbar></the-searchbar>
    </div>
  </section>
</template>

<script>
import TheSearchbar from "./components/TheSearchbar.vue";

export default {
  components: {
    TheSearchbar,
  },
  data() {
    return {
      data: this.$store.state.searchQuery,
    };
  },
};
</script>


<style>
:root {
  --grey: #737373;
  --lightGrey: #c4c4c4;
  --orange: #fe9462;
  --lightOrange: #edb295;
  --blue: #86b9cf;
  --lightBlue: #a6c9d8;
  --background: #d6e0e4;
}

#main {
  height: 100vh;
  width: 100vw;
  overflow: none;
  background-image: url("../src/assets/blob-scene-haikei.svg");
  background-size: cover;
  display: flex;

  align-items: center;
}

#content {
  padding: 0px 220px;
}
</style>
