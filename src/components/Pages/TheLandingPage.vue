<template>
    <the-navbar></the-navbar>
  <section id="content">
    <the-searchbar></the-searchbar>
  </section>
</template>

<script>
import TheSearchbar from '../TheSearchbar.vue';
export default {
  components: {
    TheSearchbar
  },
}
</script>

<style scoped>
#content{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}</style>
