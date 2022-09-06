<template>
  <div
    class="w-[550px] absolute top-[85px] right-12 z-50 bg-white px-6 py-3 rounded-lg text-gray-800"
  >
    <div
      class="border-b-2 border-red-800 py-4 flex justify-between items-center"
      v-for="item in cartItems"
      :key="item.id"
    >
      <div class="flex gap-4">
        <div>
          <h3 class="text-lg font-medium">
            {{ item.name }}
          </h3>
          <span class="border-2 p-1 text-sm">X {{ item.quantity }}</span>
        </div>
        <div class="self-start">
          <!-- - -->
          <button
            @click="removeItem(item.id)"
            class="text-base font-semibold border py-1 px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          </button>
          <!-- + -->
          <button
            @click="addToCart(item.id, item.name, item.price)"
            class="text-base font-semibold border-2 ml-2 py-1 px-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>

      <p class="font-medium text-lg">${{ item.totalPrice }}</p>
    </div>
    <div class="text-right">
      <p class="text-lg font-medium">Total Price: ${{ getTotalPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.getItems;
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },
  methods: {
    addToCart(id, name, price) {
      this.$store.commit("addToCart", {
        id: id,
        name: name,
        price: price,
        quantity: 1,
      });
    },
    removeItem(id) {
      this.$store.commit("removeFromCart", {
        id: id,
      });
    },
  },
};
</script>
