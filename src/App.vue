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
  --background: #D6E0E4
}

#main {
  height: 100vh;
  width: 100vw;
  overflow: none;
  background-color: var(--background);
}

#content{
  padding: 0px 220px;
}

</style>
