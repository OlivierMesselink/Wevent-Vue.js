import { createRouter, createWebHistory } from "vue-router";
import TheLandingPage from "../components/Pages/TheLandingPage.vue";
import TheLoginPage from "../components/Pages/TheLoginPage.vue";
import TheListPage from "../components/Pages/TheListPage.vue";
import TheBusinessRegistration from "../components/Pages/TheBusinessRegistration/TheBusinessRegistration.vue";

const routes = [
  { path: "/", component: TheLandingPage, meta: { title: "Wevent.nl | Home" } },
  {
    path: "/login",
    component: TheLoginPage,
    meta: { title: "Wevent.nl | Login" },
  },
  {
    path: "/search",
    component: TheListPage,
    meta: { title: "Wevent.nl | Zoekopdracht" },
  },
  {
    path: "/business-registration",
    component: TheBusinessRegistration,
    meta: { title: "Wevent.nl | Je onderneming registreren" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
