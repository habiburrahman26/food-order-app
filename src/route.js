import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from './pages/Login/Login.vue'
import Registration from './pages/Registration/Registration.vue'

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/signup",
      component: Registration,
    },
  ],
});


export default route;