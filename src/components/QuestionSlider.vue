<template>
  <div class="container">
    <div class="slider-question">
      <h1>{{ capitalize(questionData.topic) }}</h1>
      {{ questionData.question }}
    </div>
    <div class="slider-container">
      <div class="slider-label left-label">
        <h2>{{ questionData.label.start }}</h2>
      </div>
      <input
        type="range"
        min="1"
        max="100"
        :value="questionData.value.start"
        class="slider slider-start"
        :id="questionData.topic + '-start'"
        @mouseup="updateValue"
      />
      <input
        type="range"
        min="1"
        max="100"
        :value="questionData.value.end"
        class="slider slider-end"
        :id="questionData.topic + '-end'"
        @mouseup="updateValue"
      />
      <div class="slider-label right-label">
        <h2>{{ questionData.label.end }}</h2>
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
    updateValue: function(e) {
      console.log(e.target.value, e.target.id);
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

<style scoped lang="scss">
//general
.container {
  max-width: 1000px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  border: 3px solid salmon;
  border-radius: 10px;
  padding: 5px;
  .slider-container {
    flex-grow: 1;
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
  h2 {
    margin: 0;
  }
}
.left-label {
  justify-content: flex-start;
}
.right-label {
  justify-content: flex-end;
}

//slider
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  cursor: pointer;
  border-radius: 5px;
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
