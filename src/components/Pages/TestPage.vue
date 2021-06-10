<template>
  <section>
    <div><base-button id="button" @click="test" buttonStyle="solid">TEST!</base-button></div>
  </section>
</template>

<script>
export default {
  methods: {
    test() {
      const fetchUrl = "http://owenhauptmeijer.pythonanywhere.com/nijmegen/4/4/monday/1900";

      fetch(fetchUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      })
        .then((response) => response.json(
          console.log(response.json)
        ))
    },
  },
};
</script>



<style scoped>
section {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  /* background-color: aqua; */
}

#button{
  transform: scale(3);
}
</style>
