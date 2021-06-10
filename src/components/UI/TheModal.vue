<template>
    <div id="wrapper">
        <div id="modalWrapper">
            <h1>{{title}}</h1>
            <h3>{{subtitle}}</h3>
            <p>{{message}}</p>
            <div id="buttonDiv">
                <base-button @click="$emit('confirm')" buttonStyle="confirm">{{confirm}}</base-button>
                <base-button @click="$emit('cancel')" buttonStyle="confirmAlt">{{cancel}}</base-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['title','subtitle','message','confirm','cancel'],

    data() {
        return{

        }
    },
}
</script>

<style scoped>

#wrapper{
    top: -100px;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 100;
    background-color: rgba(1, 1, 1, .7);
    display: flex;
    justify-content: center;
    align-items: center;
}

#modalWrapper{
    background-color: white;
    border-radius: 10px;
    padding: 40px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    color: crimson;
    font-family: 'raleway', sans-serif;
    font-size: 36px;
    font-weight: 800;
}

h3{
    color: var(--grey);
    font-family: 'open sans', sans-serif;
    font-size: 18px;
    line-height: 20px;
    font-weight: 700;
    text-align: center;
    margin: 40px 0 0 0;}

p{
    color: black;
    width: 70%;
    font-family: 'open sans', sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    text-align: center;
    margin: 40px 0;
}

#buttonDiv{
    display: flex;
    justify-content: space-between;
    width: 260px;
}

</style>