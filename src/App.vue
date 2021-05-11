<template>
  <section>
    <img :src="imgLink" >
  </section>
</template>

<script>
export default {
  data(){
    return{
      imgLink: require('./assets/wevent_logo.png')
    }
  },
}
</script>
