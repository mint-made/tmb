<template>
  <div class="mw-800 m-auto px-50">
    <div class="flex my-10">
      <div class="flex align-center">
        <img
          src="../assets/icons/Sliders.png"
          alt="sliders-icon"
          class="icon"
        />
      </div>
      <div class="pl-10 text-left">
        <h1 class="text-light m-0">TECHNOLOGY MYERS BRIGGS</h1>
        <h4 class="text-light m-0 letter-spacing-3">
          BUSINESS AND VENDOR STRATEGY
        </h4>
      </div>
    </div>
    <h3 class="text-light">Please Register to continue</h3>
    <div class="error" v-if="error">{{ error.message }}</div>
    <form @submit.prevent="pressed">
      <div class="email">
        <input
          type="email"
          v-model="email"
          placeholder="email"
          class="text-input"
        />
      </div>
      <div class="password">
        <input
          type="password"
          v-model="password"
          placeholder="password"
          class="text-input"
        />
      </div>
      <button type="submit" class="btn btn-x mt-0">Register</button>
    </form>
  </div>
</template>

<script>
import { Auth } from "../firebaseInit";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    pressed() {
      Auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("here");
          this.$router.replace({ name: "Home" });
        })
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style lang="scss" scoped></style>
