<template>
  <section>
    <div>
      <base-button id="button" @click="test2" buttonStyle="solid"
        >TEST!</base-button
      >
    </div>
  </section>
</template>

<script>
// import axios from "axios";

export default {
  methods: {
    test() {
      const fetchUrl =
        "http://owenhauptmeijer.pythonanywhere.com/arnhem/4/4/Monday/18:00.json";
      fetch(fetchUrl)
        .then((response) => response.json)
        .then((data) => console.log(data));
    },

    test2() {
      const fetchUrl =
        "http://owenhauptmeijer.pythonanywhere.com/nijmegen/4/4/Monday/18:00";

    fetch(fetchUrl)
        .then((response) => {
          if (response.ok) {
            return response;
          }
        })
        .then((data) => {
          console.log(data.json())
        });
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

#button {
  transform: scale(3);
}
</style>
