import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
  ],
});


export default route;