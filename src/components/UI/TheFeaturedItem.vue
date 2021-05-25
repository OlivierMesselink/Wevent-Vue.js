<template>
    <section>
        <div id="contentWrapper">
            <div id="content"></div>
        </div>
    </section>
</template>

<script>
export default {
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
        });
    }
    },
    mounted(){
        this.loadList
    }
}
</script>

<style scoped>

#contentWrapper{
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 450px;
    height: 300px;
}

#content{
    padding: 40px;
}

</style>