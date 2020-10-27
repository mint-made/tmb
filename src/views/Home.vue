<template>
  <div class="home">
    <h2 class="text-light mb-0">Technology Myers Briggs</h2>
    <h4 class="text-light m-0">About this Excercise</h4>
    <h4 class="text-light">
      This document is abstract and helps us decide HOW we will approach
      projects and technology so that we set up a consistent framework. There
      are two simple instructions:
    </h4>

    <div id="container">
      <div class="instructions-container">
        <div><h1>1.</h1></div>
        <div>
          <p class="text-light">
            For each line on each page, slide the orange dot to the proper
            location on the question’s continuum to describe the current state.
          </p>
        </div>
        <div class="vertical-align">
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
      <div class="instructions-container">
        <div><h1>2.</h1></div>
        <div>
          <p class="text-light">
            For each line on each page, slide the purple dot to the proper
            position on the question’s continuum to reflect your desire/goal
            state.
          </p>
        </div>
        <div class="vertical-align">
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
    <h4 class="text-light">
      There are no right or wrong answers, and if you’re unsure about a
      question. Just work alone. It might take 15 minutes or 2 hours.
    </h4>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss">
/*Base Color Scheme */
$primary-blue: #7c97af;
$darker-blue: #52779c;
$darkest-blue: #2c3e50;

#container {
  max-width: 1000px;
  margin: auto;
  margin-bottom: 10px;
  border: 3px solid $darker-blue;
  border-radius: 10px;
  padding: 5px;
  background: rgba(195, 224, 243, 0.247);
}
.instructions-container {
  display: flex;
}
</style>
