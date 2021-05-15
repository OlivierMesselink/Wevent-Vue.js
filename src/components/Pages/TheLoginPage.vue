<template>
<head>
    <title>Wevent.nl | Login</title>
</head>
  <section>
    <div id="loginDiv">
        <the-login-form></the-login-form>
    </div>
    <div id="imageDiv"></div>
  </section>
</template>

<script>
import TheLoginForm from '../UI/TheLoginForm.vue'

export default {
    components: {
        TheLoginForm
    },
}
</script>

<style scoped>
section{
    display: flex;
    flex-direction: row;
}

#loginDiv{
    height: 100vh;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#imageDiv{
    height: 100vh;
    width: 50%;
    background-image: url('../../assets/bar-coffee.jpg');
    background-size: cover ;
    background-position: bottom;
}

</style>