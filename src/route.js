import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Login from "./pages/Login/Login.vue";
import Registration from "./pages/Registration/Registration.vue";
import Order from "./pages/Order/Order.vue";

function redirectToLogin(_, _2, next) {
  const token = localStorage.getItem("token");

  if (token) {
    next();
  } else {
    next({ path: "/login" });
  }
}

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/placeOrder",
      component: Order,
      beforeEnter: redirectToLogin,
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
