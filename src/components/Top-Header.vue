<template>
  <div class="signout-container">
    <div class="one-line">
      <button v-if="loggedIn" class="btn btn-sign-out" @click="signOut">
        Sign out
      </button>
    </div>
  </div>
</template>

<script>
import { Auth } from "../firebaseInit";
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  methods: {
    setupFirebase() {
      Auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      Auth.signOut().then(() => {
        this.$router.replace({ name: "login" });
      });
    },
  },
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.signout-container {
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.one-line {
}
</style>
