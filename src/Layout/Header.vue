<template>
  <header class="overflow-hidden sticky">
    <nav class="bg-red-700 flex justify-between px-10 py-5 text-white">
      <h3 class="text-2xl font-semibold">Food App</h3>
      <ul class="flex items-center gap-20">
        <li>
          <button
            @click="showCart"
            class="flex items-center gap-5 bg-red-900 px-8 py-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span class="text-xl font-semibold">{{
              count
            }}</span>
          </button>
        </li>
        <li>
          <router-link
            to="/login"
            class="font-semibold rounded- ring-2 ring-red-900 ring-inset px-6 py-2 hover:bg-white hover:text-red-800 transition-all"
            >Login</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="overflow-hidden w-[110%] h-[30rem]">
      <img
        src="../assets/meals.jpg"
        alt=""
        class="w-full h-full object-cover -rotate-3 -translate-y-16 -translate-x-4"
      />
    </div>
  </header>
  <Cart v-if="show" />
</template>

<script>
import Cart from "../components/cart/Cart.vue";

export default {
  components: {
    Cart,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showCart() {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
  computed: {
    count() {
      return this.$store.getters.getCount;
    },
  },
};
</script>
