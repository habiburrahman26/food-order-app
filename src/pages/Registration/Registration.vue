<template>
  <form
    @submit.prevent="formSubmit"
    class="w-[500px] mx-auto shadow mt-24 pb-10 round"
  >
    <h2 class="text-2xl font-semibold pt-6 text-center mb-6">SignUp</h2>
    <div class="w-full px-8">
      <label for="email" class="pb-1 inline-block">Email</label>
      <input class="input" type="email" name="email" v-model="email" />
    </div>
    <div class="w-full px-8 pt-2">
      <label class="pb-1 inline-block" for="password">Password</label>
      <input class="input" type="password" name="password" v-model="password" />
    </div>
    <div class="text-center pt-8">
      <button-component
        class="px-8 py-1 bg-red-800 rounded text-white hover:bg-red-700 transition-all"
        >{{ isLoading ? "Processing..." : "Sign up" }}</button-component
      >
    </div>
    <p class="text-center pt-6">
      Already have an account?
      <router-link to="/login" class="text-red-800 font-medium"
        >Login here</router-link
      >
    </p>
  </form>
</template>

<script>
import auth from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      error: null,
    };
  },
  methods: {
    formSubmit() {
      this.isLoading = true;
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.email) {
            this.$router.replace("/");
          }
          this.isLoading = false;
          console.log(user);
        })
        .catch((error) => {
          this.error = error.code;
          this.isLoading = false;
        });
    },
  },
};
</script>
