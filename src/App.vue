<template>
  <Header/>
  <router-view></router-view>
</template>

<script>
import Header from "./Layout/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
