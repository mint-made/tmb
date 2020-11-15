<template>
  <div class="m-auto mw-800">
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
    <h3 class="text-light">Please sign in to continue</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input
          type="text"
          placeholder="username/email"
          v-model="email"
          class="text-input"
        />
      </div>
      <div class="password">
        <input
          type="password"
          placeholder="password"
          v-model="password"
          class="text-input"
        />
      </div>
      <button class="btn btn-x mt-0">Log in</button>
    </form>
    <div class="error" v-if="error">{{ error.message }}</div>
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
      Auth.signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "Home" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  color: inherit;
}
</style>
