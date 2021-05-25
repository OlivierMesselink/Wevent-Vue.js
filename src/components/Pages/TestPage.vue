<template>
    <vue-scroll-snap>
    <div class="item"></div>
    <div class="item"></div>
  </vue-scroll-snap>

</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
export default {
  components: {
    VueScrollSnap,
  },
};
</script>

<style scoped>

.item{
    height: 100vh;
    width: 100vw;
    background-color: crimson;
    min-height: 100vh;
}

.item:last-child{
    background-color: dodgerblue;
}

.scroll-snap-container {
    height: 100vh;
    width: 100vw;
  }
</style>