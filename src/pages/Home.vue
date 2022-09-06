<template>
  <section class="pb-10 overflow-hidden">
    <div class="overflow-hidden w-[110%] h-[30rem]">
      <img
        src="../assets/meals.jpg"
        alt=""
        class="w-full h-full object-cover -rotate-3 -translate-y-16 -translate-x-4"
      />
    </div>
    <div
      class="bg-[#383838] text-white text-center relative max-w-3xl px-8 py-10 rounded -top-20 mx-auto -mt-14 shadow-md shadow-gray-800/50"
    >
      <h2 class="text-xl font-medium mb-2">Delicious Food, Delivered To You</h2>
      <p class="mb-2">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>

    <p v-if="isLoading" class="text-center font-semibold text-xl">Loading...</p>
    <p
      v-else-if="error !== null"
      class="text-center font-semibold text-xl text-red-500"
    >
      {{ error }}
    </p>
    <food-item
      v-else
      v-for="food in foods"
      :key="food.idMeal"
      :id="food.idMeal"
      :name="food.strMeal"
      :price="food.price"
      :image="food.strMealThumb"
    >
    </food-item>
  </section>
</template>

<script>
import FoodItem from "../components/Foods/FoodItem.vue";

export default {
  components: {
    FoodItem,
  },
  data() {
    return {
      foods: [],
      isLoading: true,
      error: null,
    };
  },
  methods: {
    async getFood() {
      try {
        const res = await fetch("../../public/meals.json");
        const data = await res.json();
        this.foods = data;
      } catch (err) {
        this.error = "Somthing went wrong! Please try again";
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getFood();
  },
};
</script>
