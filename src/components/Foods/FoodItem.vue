<template>
  <div
    class="w-2/5 px-2 py-2 text-gray-700 rounded shadow mx-auto mt-6 flex justify-between items-center border-b"
  >
    <div class="flex items-end gap-5">
      <img :src="image" alt="" class="w-32 object-cover rounded" />
      <div class="self-start">
        <p class="text-xl font-medium mb-2">{{ name }}</p>
        <h3 class="text-xl font-medium text-gray-500">${{ price }}</h3>
      </div>
    </div>
    <div class="self-end pb-2">
      <button
        @click="addToCart"
        class="px-6 py-2 rounded-full bg-red-800 text-white font-medium hover:bg-red-900"
      >
        Add To Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "price", "image"],
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", {
        id: this.id,
        name: this.name,
        price: this.price,
        quantity: 1,
      });
    },
  },
};
</script>
