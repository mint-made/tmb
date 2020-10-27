<template>
  <div class="container">
    <div class="slider-question">
      <h1 class="m-0 underline">{{ capitalize(questionData.topic) }}</h1>
      <h3 class="m-0">{{ questionData.question }}</h3>
    </div>
    <div class="slider-container">
      <div class="slider-label left-label">
        <h3 class="m-0">{{ questionData.label.start }}</h3>
      </div>
      <input
        type="range"
        min="1"
        max="100"
        :value="questionData.value.start"
        class="slider slider-start"
        :id="questionData.topic + '-start'"
        @mouseup="eUpdateValue"
      />
      <input
        type="range"
        min="1"
        max="100"
        :value="questionData.value.end"
        class="slider slider-end"
        :id="questionData.topic + '-end'"
        @mouseup="eUpdateValue"
      />
      <div class="slider-label right-label">
        <h3 class="m-0">{{ questionData.label.end }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "QuestionSlider",
  props: {
    questionData: Object,
    startValue: Number,
    endValue: Number
  },
  methods: {
    ...mapActions(["updateValues"]),
    eUpdateValue: function(e) {
      this.updateValues({
        value: e.target.value,
        id: e.target.id
      });
    },
    capitalize: function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
};
</script>

<style lang="scss">
/*Base Color Scheme */
$primary-blue: #7c97af;
$darker-blue: #52779c;
$darkest-blue: #2c3e50;

//general
.container {
  max-width: 1000px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  border: 3px solid $darker-blue;
  border-radius: 10px;
  padding: 5px;
  background: rgba(195, 224, 243, 0.247);
  .slider-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .slider-question {
    max-width: 300px;
    min-width: 150px;
    padding: 5px;
  }
}
.slider-label {
  display: flex;
  padding: 0px 5px;
}
.left-label {
  justify-content: flex-start;
}
.right-label {
  justify-content: flex-end;
}
</style>
