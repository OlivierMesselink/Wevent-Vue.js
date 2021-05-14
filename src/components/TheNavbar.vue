<template>
  <section id="navWrapper">
    <div id="navContent">
      <div id="logo">
          <img :src="logoImg">
      </div>
      <div id="navButtons">
        <base-button v-if="!loggedIn" buttonStyle="hollow">Aanmelden</base-button>
        <base-button v-if="!loggedIn" buttonStyle="solid">Inloggen</base-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data(){
        return{
            loggedIn: this.$store.state.isLoggedin,
            logoImg: require('../assets/wevent_logo.png')
        }
    }
}
</script>

<style scoped>
#navWrapper {
  position: absolute;
  width: 100%;
}

#navContent {
  padding: 0 220px;
}

#navButtons {
  display: flex;
  width: 240px;
  justify-content: space-between;
}
</style>