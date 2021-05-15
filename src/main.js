import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseButton from './components/UI/BaseButton.vue';
import ToggleButton from './components/UI/ToggleButton.vue';
import TheNavbar from './components/TheNavbar.vue'; 



const app = createApp(App)

app.use(store)
app.use(router)


app.component('base-button', BaseButton)
app.component('toggle-button', ToggleButton)
app.component( 'the-navbar', TheNavbar)

app.mount('#app')
