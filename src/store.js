import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
      items: [],
    };
  },
  mutations: {
    addToCart(state, payload) {
      const existingItem = state.items.find((item) => item.id === payload.id);

       //increase count number
      state.count = state.count + payload.quantity;

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + payload.quantity;
        existingItem.totalPrice =
          +existingItem.totalPrice + +existingItem.price;
        const indexNumber = state.items.findIndex(
          (item) => item.id === payload.id
        );
        state.items[indexNumber] = existingItem;
      } else {
        state.items.push({ ...payload, totalPrice: +payload.price });
      }
    },
    removeFromCart(state, payload) {
      const existingItem = state.items.find((item) => item.id === payload.id);
      const indexNumber = state.items.findIndex(
        (item) => item.id === payload.id
      );

      //reduce count number
      state.count = state.count - 1;

      if (existingItem.quantity === 1) {
        state.items.splice(indexNumber, 1);
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice =
          +existingItem.totalPrice - +existingItem.price;
        state.items[indexNumber] = existingItem;
      }
    },
  },
  getters: {
    getItems(state, _) {
      return state.items;
    },
    getCount(state) {
      return state.count;
    },
    getTotalPrice(state) {
      return state.items.reduce((prevVal, currVal) => {
        return prevVal + currVal.totalPrice;
      }, 0);
    },
  },
});

export default store;
