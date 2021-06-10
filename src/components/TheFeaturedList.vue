<template>
  <section id="featuredWrapper">
    <transition name="fade">
    <the-event-modal
      @close="modal = null"
      v-if="modal"
      :listItem="modal"
    ></the-event-modal>
    </transition>
    <div id="backdrop"></div>
    <div id="featuredContent">
      <h1>Uitgelicht</h1>
      <div id="list">
        <the-featured-item
          v-for="listItem in list.slice(0, 8)"
          :key="listItem.title"
          :item="listItem"
          @click="modal = listItem"
        ></the-featured-item>
      </div>
    </div>
  </section>
</template>


<script>
import TheFeaturedItem from "./UI/TheFeaturedItem.vue";
import TheEventModal from "./UI/TheEventModal.vue";

export default {
  components: {
    TheFeaturedItem,
    TheEventModal,
  },
  data() {
    return {
      list: "",
      modal: null,
    };
  },
  methods: {
    loadList() {
      fetch(
        "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app/featured.json"
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              title: data[id].id,
              subtitle: data[id].location,
              imageLink: data[id].imgLink,
              description: data[id].description,
              lat: data[id].lat,
              lang: data[id].lang,
              category: data[id].category,
              rating: data[id].rating,
            });
          }
          this.list = results;
        });
    },
  },
  mounted() {
    this.loadList();
  },
};
</script>

<style scoped>

.fade-enter-from {
  opacity: 0;

}
.fade-enter-active {
  transition: all 0.075s ease-out;
}
.fade-leave-active {
  transition: all 0.075s ease-in;
}

.fade-leave-to {
  opacity: 0;

}


@media only screen and (min-width: 2160px) {
  #featuredWrapper {
    height: 100vh;
    width: 100vw;
    background-color: var(--background);
    position: relative;
  }

  #featuredContent {
    padding: 0px 380px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: "raleway", sans-serif;
    font-weight: 800;
    font-size: 58px;
    margin-bottom: 60px;
  }

  #list {
    display: grid;
    width: 100%;
    grid-template-columns: 380px 380px 380px 380px;
    row-gap: 30px;
    justify-content: space-between;
  }

  #backdrop {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/concrete_texture.jpg");
    mix-blend-mode: hard-light;
    opacity: 15%;
    z-index: 0;
    background-size: cover;
  }

}

@media only screen and (max-width: 1920px) {
  #featuredWrapper {
    height: 100vh;
    /* padding: 80px; */
    width: 100vw;
    background-color: var(--background);
  }

  #featuredContent {
    padding: 0px 120px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: "raleway", sans-serif;
    font-weight: 800;
    font-size: 58px;
    margin-bottom: 60px;
  }

  #list {
    display: grid;
    width: 1280px;
    grid-template-columns: 25% 25% 25% 25%;
    row-gap: 30px;
    justify-content: space-between;
  }

  #backdrop {
    position: absolute;
    height: 100vh;
    width: 100vw;
    background-image: url("../assets/concrete_texture.jpg");
    mix-blend-mode: hard-light;
    opacity: 15%;
    z-index: 0;
    background-size: cover;
  }
}
</style>