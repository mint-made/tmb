<template>
  <div class="m-auto mw-800 px-50">
    <div class="flex my-10">
      <div class="flex align-center">
        <img
          src="../assets/icons/Icons for Tom/Sliders.png"
          alt="sliders-icon"
          class="icon"
        />
      </div>
      <div class="pl-10 text-left">
        <h1 class="text-light m-0">TECHNOLOGY MYERS BRIGGS</h1>
        <h4 class="text-light m-0 letter-spacing-3">ABOUT THIS EXCERCISE</h4>
      </div>
    </div>
    <h3 class="text-light text-left italic">
      This document is abstract and helps us decide HOW we will approach
      projects and technology so that we set up a consistent framework. There
      are two simple instructions:
    </h3>

    <div class="instructions-container">
      <div class="flex">
        <div><h1 class="text-dark text-large m-0">1</h1></div>
        <div class="flex vertical-align">
          <p class="text-light text-left m-0">
            For each line on each page, slide the orange dot to the proper
            location on the question’s continuum to describe the current state.
          </p>
        </div>
        <div class="flex vertical-align pl-10">
          <input
            type="range"
            min="1"
            max="100"
            value="30"
            class="slider slider-start"
            id="example-start"
          />
        </div>
      </div>
      <div class="flex">
        <div><h1 class="text-dark text-large m-0">2</h1></div>
        <div class="flex vertical-align">
          <p class="text-light text-left m-0">
            For each line on each page, slide the purple dot to the proper
            position on the question’s continuum to reflect your desire/goal
            state.
          </p>
        </div>
        <div class="flex vertical-align pl-10">
          <input
            type="range"
            min="1"
            max="100"
            value="30"
            class="slider slider-end"
            id="example-start"
          />
        </div>
      </div>
    </div>
    <h3 class="text-light text-left italic">
      There are no right or wrong answers, and if you’re unsure about a
      question. Just work alone. It might take 15 minutes or 2 hours.
    </h3>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style lang="scss">
/*Base Color Scheme */
$primary-blue: #7c97af;
$darker-blue: #52779c;
$darkest-blue: #2c3e50;
$white: #e7e7e7;

.instructions-container {
  max-width: 700px;
  margin: auto;
}
</style>
