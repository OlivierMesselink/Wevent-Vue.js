<template>
<the-navbar></the-navbar>
  <section id="pageWrapper">
      <the-account-component></the-account-component>
  </section>
</template>

<script>
import TheNavbar from "../TheNavbar.vue"
import TheAccountComponent from "../UI/TheAccountComponent.vue"

export default {
    components:{
        TheNavbar,
        TheAccountComponent
    }
}
</script>

<style scoped>

@media screen and (max-width: 1920px) {
  #pageWrapper {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
  }
}
</style>