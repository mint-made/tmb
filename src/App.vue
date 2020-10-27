<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Instructions</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/questions">Questions</router-link>
    </div>
    <div id="router-view-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
/*Base Color Scheme */
$primary-blue: #7c97af;
$darker-blue: #52779c;
$darkest-blue: #2c3e50;

body {
  margin: 0px;
  height: 100%;
  width: 100%;
  background-image: url("../src/assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
    color: #e7e7e7;
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

// Utility
.m-0 {
  margin: 0px;
}
.mb-0 {
  margin-bottom: 0px;
}
.text-black {
  color: rgb(0, 0, 0);
}
.underline {
  text-decoration: underline;
}
.text-light {
  color: #e7e7e7;
}
.vertical-align {
  display: flex;
  align-items: center;
}
.horizontal-align {
  display: flex;
  justify-content: center;
}
.mw-1000 {
  max-width: 1000px;
}

//Sliders
//slider
.slider {
  -webkit-appearance: none;
  width: 95%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;
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
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  background: #f18d6f;
  cursor: pointer;
  border-radius: 20px;
}
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
  background: #f18d6f;
  border: 3px#f16236 solid;
}
.slider-end::-moz-range-thumb,
.slider-end::-webkit-slider-thumb {
  background: #8873b9;
  border: 3px#5a4097 solid;
}
</style>
