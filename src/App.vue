<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Log In</router-link>
      <router-link to="/">Instructions</router-link>
      <router-link to="/questionnaire">TMB-Questionnaire</router-link>
      <top-header></top-header>
    </div>
    <div id="router-view-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Top-Header";
export default {
  components: {
    "top-header": Header
  }
};
</script>
<style lang="scss">
/*Base Color Scheme */
$primary-blue: #7d98b0;
$darker-blue: #52779c;
$darkest-blue: #2c3e50;
$white: #ffffff;

@font-face {
  font-family: "Heebo";
  src: local("Heebo"),
    url("./fonts/Heebo-VariableFont_wght.ttf") format("truetype");
}

body {
  margin: 0px;
  height: 100%;
  width: 100%;
  background-image: url("../src/assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: overlay;
}

#app {
  font-family: Heebo, sans-serif, Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  font-weight: bold;
  background-color: $darkest-blue;
  z-index: 100;
  opacity: 0.9;
  padding: 14px;

  a {
    color: #ffffff;
    padding: 15px;
    text-decoration: none;

    &.router-link-exact-active {
      background-color: $primary-blue;
    }

    &:hover {
      background-color: $darker-blue;
    }
  }
}

#router-view-container {
  padding: 5px;
}

//containers
.container-light {
  max-width: 1000px;
  margin: auto;
  margin-bottom: 10px;
  border: 3px solid $darker-blue;
  border-radius: 10px;
  padding: 5px;
  background: rgba(195, 224, 243, 0.247);
}

//buttons
.btn {
  display: inline-block;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 2px solid black;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-x {
  background-color: brown;
  border-color: green;
  color: green;
  &:hover {
    background-color: green;
    color: grey;
  }
}

//Sliders
//slider
.slider {
  -webkit-appearance: none;
  width: 95%;
  height: 10px;
  background: #ffffff53;
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 5px;
  margin: 5px 5%;
}
.slider:hover {
  opacity: 1;
}
.slider:focus {
  outline: none;
}
.slider:active {
  outline: none;
}
//Firefox
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #f18d6f;
  border: 3px#f16236 solid;
  cursor: pointer;
  border-radius: 18px;
}
.slider-start::-moz-range-thumb,
.slider-start::-webkit-slider-thumb {
  background: #fbbaa0;
  border: 3px#f98c61 solid;
}
.slider-end::-moz-range-thumb {
  background: #c4bae5;
  border: 3px#9d8cd3 solid;
}

//Chrome + Safari
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #f18d6f;
  cursor: pointer;
  border-radius: 18px;
  transition: width 0.2s, height 0.2s;
}
.slider-start::-webkit-slider-thumb {
  background: #fbbaa0;
  border: 3px#f98c61 solid;
  &:hover {
    height: 26px;
    width: 26px;
    margin-top: -1px;
  }
}
.slider-end::-webkit-slider-thumb {
  background: #c4bae5;
  border: 3px#9d8cd3 solid;
  &:hover {
    height: 26px;
    width: 26px;
    margin-top: -1px;
  }
}

//button
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin: 20px 0px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 2px solid black;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-x {
  background-color: $darkest-blue;
  border-color: $darkest-blue;
  color: $white;
  &:hover {
    background-color: #7d98b08e;
    color: $darkest-blue;
  }
}
.btn-sign-out {
  background-color: $darkest-blue;
  border-color: $primary-blue;
  color: $white;
  padding: 2px 8px;
  &:hover {
    background-color: $primary-blue;
    color: $white;
  }
}

//Form Styling
input.text-input {
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 300px;
  height: 20px;
  padding: 10px;
  margin: 20px auto;
}
.error {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  width: 300px;
  margin: auto;
}

// Utility
.m-0 {
  margin: 0px;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-5 {
  margin-bottom: 5px;
}
.mb-10 {
  margin-bottom: 10px;
}
.mb-20 {
  margin-bottom: 20px;
}
.mt-0 {
  margin-top: 0px;
}
.mt-2 {
  margin-top: 10px;
}
.my-10 {
  margin: 10px 0px;
}
.m-auto {
  margin: auto;
}
.pl-5 {
  padding-left: 10px;
}
.pl-10 {
  padding-left: 10px;
}
.px-50 {
  padding: 0px 50px;
}
.text-black {
  color: rgb(0, 0, 0);
}
.text-dark {
  color: #104c7e;
}
.text-light {
  color: #ffffff;
}
.text-large {
  font-size: 50px;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.italic {
  font-style: italic;
}
.underline {
  text-decoration: underline;
}
.letter-spacing-3 {
  letter-spacing: 3px;
  line-height: 0.5;
}

.vertical-align {
  display: flex;
  align-items: center;
}
.horizontal-align {
  display: flex;
  justify-content: center;
}
.mw-800 {
  max-width: 800px;
}
.icon {
  height: 58px;
  width: auto;
}
.flex {
  display: flex;
}
.justify-center {
  justify-content: center;
}
.align-center {
  align-items: center;
}
.justify-space-between {
  justify-content: space-between;
}
.justify-space-around {
  justify-content: space-around;
}
</style>
