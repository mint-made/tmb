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
      <div>
        <input type="number" min="0" max="100" step="1" v-model="minThumb" />
        <input type="number" min="0" max="100" step="1" v-model="maxThumb" />
      </div>
      <div class="range-slider">
        <input
          class="dual-slider thumb-min"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="sliderMin"
          @mouseup="eUpdateValue"
        />
        <input
          class="dual-slider thumb-max"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="sliderMax"
          @mouseup="eUpdateValue"
        />
      </div>

      <div class="slider-label right-label">
        <h3 class="m-0">{{ questionData.label.end }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DualSlider",
  props: {
    questionData: Object,
    startValue: Number,
    endValue: Number
  },
  data() {
    return {
      minThumb: this.questionData.value.start,
      maxThumb: this.questionData.value.end,
      spacing: 10,
      topic: this.questionData.topic
    };
  },
  methods: {
    ...mapActions(["updateValue"]),
    eUpdateValue: function() {
      const payload = {
        value: {
          start: this.minThumb,
          end: this.maxThumb
        },
        topic: this.topic
      };
      console.log("update value(payload =", payload);
      this.updateValue(payload);
    },
    capitalize: function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  },
  computed: {
    sliderMin: {
      get: function() {
        var val = parseInt(this.minThumb);
        return val;
      },
      set: function(val) {
        val = parseInt(val);
        if (val + this.spacing >= this.maxThumb) {
          this.maxThumb = val + this.spacing;
        }
        this.minThumb = val;
        if (this.minThumb > 100 - this.spacing) {
          this.minThumb = 100 - this.spacing;
          this.maxThumb = 100;
        } else {
          this.minThumb = val;
        }
      }
    },
    sliderMax: {
      get: function() {
        var val = parseInt(this.maxThumb);
        return val;
      },
      set: function(val) {
        val = parseInt(val);
        if (val - this.spacing <= this.minThumb) {
          this.minThumb = val - this.spacing;
        }
        this.maxThumb = val;
        if (val < this.spacing) {
          this.maxThumb = this.spacing;
          this.minThumb = 0;
        } else {
          this.maxThumb = val;
        }
      }
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

.content {
  padding: 100px;
}
.range-slider {
  width: 300px;
  margin: auto;
  text-align: center;
  position: relative;
}

.range-slider input.dual-slider {
  position: absolute;
  left: 0;
  bottom: 0;
}

input.dual-slider::-webkit-outer-spin-button,
input.dual-slider::-webkit-inner-spin-button {
  //-webkit-appearance: none;
}

input.dual-slider:invalid,
input.dual-slider:out-of-range {
  border: 2px solid #ff6347;
}

input.dual-slider {
  -webkit-appearance: none;
  width: 100%;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 12px;
    background: #2497e3;
    border-radius: 7px;
    box-shadow: none;
    border: 0;
  }
  &::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    box-shadow: 0px 0px 0px #000;
    border: 1px solid #2497e3;
    height: 28px;
    width: 28px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
  &.thumb-min::-webkit-slider-thumb {
    background: #fbbaa0;
    border: 3px#f98c61 solid;
  }
  &.thumb-max::-webkit-slider-thumb {
    background: #c4bae5;
    border: 3px#9d8cd3 solid;
  }
}
</style>
