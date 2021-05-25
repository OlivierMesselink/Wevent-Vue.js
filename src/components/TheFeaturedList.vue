<template>
  <section id="featuredWrapper">
    <div id="featuredContent">
      <h1>Uitgelicht</h1>
      <div id="list">
          <the-featured-item v-for="listItem in list" :key="listItem.title"></the-featured-item>
      </div>
    </div>
  </section>
</template>


<script>
import TheFeaturedItem from "./UI/TheFeaturedItem.vue";

export default {
    components:{
        TheFeaturedItem
    },
    data(){
        return{
            list: ''
        }
    },
    methods:{
        loadList() {
      fetch(
        "https://vuejs-e4bad-default-rtdb.europe-west1.firebasedatabase.app/nijmegen/restaurants.json"
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
            });
          }

          this.list = results;
          console.log(results)
        });
    }
    },
    mounted(){
        this.loadList;
        console.log(this.list)
    }
}
</script>

<style scoped>
#featuredWrapper {
  height: 100vh;
  width: 100vw;
  background-color: var(--background);
}

#featuredContent {
  padding: 0px 380px;
  height: 100%
  ;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-family: "raleway", sans-serif;
  font-weight: 800;
  font-size: 58px;
  margin-bottom: 60px;
}
</style>