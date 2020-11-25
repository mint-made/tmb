<template>
  <div class="question-container mb-20">
    <div class="slider-question">
      <div class="flex align-center mb-5">
        <img class="icon" :src="questionData.icon" alt="" />
        <h2 class="m-0 text-left text-light pl-10">
          {{ capitalize(questionData.topic) }}
        </h2>
      </div>
      <p class="m-0 text-left text-light">{{ questionData.question }}</p>
    </div>
    <div class="slider-container">
      <div class="flex justify-center">
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
      </div>

      <div class="slider-label flex justify-space-between">
        <h4 class="m-0 text-light text-left label">
          {{ capitalize(questionData.label.start) }}
        </h4>
        <h4 class="m-0 text-light text-right label">
          {{ capitalize(questionData.label.end) }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'DualSlider',
  props: {
    questionData: Object,
    startValue: Number,
    endValue: Number,
  },
  data() {
    return {
      minThumb: this.questionData.value.start,
      maxThumb: this.questionData.value.end,
      spacing: 6,
      topic: this.questionData.topic,
    };
  },
  methods: {
    ...mapActions(['updateValue']),
    eUpdateValue: function() {
      const payload = {
        value: {
          start: this.minThumb,
          end: this.maxThumb,
        },
        topic: this.topic,
      };
      console.log('update value(payload =', payload);
      this.updateValue(payload);
    },
    capitalize: function(word) {
      return word.toUpperCase();
    },
    generateImageUrl: function(iconName) {
      return '../assets/icons/' + iconName;
    },
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
      },
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
      },
    },
  },
};
</script>

<style lang="scss">
/*Base Color Scheme */
$primary-blue: #7c97af;
$darker-blue: #52779c;
$darkest-blue: #2c3e50;

//general

.question-container {
  min-height: 120px;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  padding: 5px;
  .slider-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 450px;
    .range-slider {
      width: 100%;
      text-align: center;
      position: relative;
      margin-bottom: 10px;
    }
    .slider-label {
      .label {
        max-width: 150px;
      }
    }
  }
  .slider-question {
    max-width: 290px;
    padding-right: 25px;
  }
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

// input.dual-slider {
//   -webkit-appearance: none;
//   width: 100%;
//   background-color: transparent;
//   &:focus {
//     outline: none;
//   }
//   &::-webkit-slider-runnable-track {
//     width: 100%;
//     height: 10px;
//     background: #ffffff53;
//     border-radius: 7px;
//     box-shadow: none;
//     border: 0;
//   }
//   &::-webkit-slider-thumb {
//     z-index: 2;
//     position: relative;
//     box-shadow: 0px 0px 0px #000;
//     border: 1px solid #2497e3;
//     height: 25px;
//     width: 25px;
//     border-radius: 18px;
//     background: #a1d0ff;
//     cursor: pointer;
//     -webkit-appearance: none;
//     margin-top: -8px;
//     transition: width 0.2s, height 0.2s;
//     &:hover {
//       height: 26px;
//       width: 26px;
//       margin-top: -9px;
//     }
//   }
// }

// Slider thumb config
@mixin thumb {
  z-index: 2;
  position: relative;
  border: 1px solid #2497e3;
  height: 25px;
  width: 25px;
  border-radius: 18px;
  background: #a1d0ff;
  cursor: pointer;
  margin-top: -8px;
  transition: width 0.2s, height 0.2s;
  pointer-events: auto;
  &:hover {
    height: 26px;
    width: 26px;
    margin-top: -9px;
  }
}
// Runnable track config
@mixin track {
  width: 100%;
  height: 10px;
  background: #ffffff53;
  border-radius: 7px;
  box-shadow: none;
  border: 0;
  pointer-events: none;
}
input.dual-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  // Track selectors
  &::-webkit-slider-runnable-track {
    @include track;
  }
  &::-moz-range-track {
    @include track;
  }
  &::-ms-track {
    @include track;
  }
  // Thumb selectors
  &::-moz-range-thumb {
    @include thumb;
    width: 20px;
    height: 20px;
    &:hover {
      height: 21px;
      width: 21px;
    }
  }
  &::-webkit-slider-thumb {
    @include thumb;
    -webkit-appearance: none;
  }
  &::-ms-track {
    @include thumb;
  }
}

// Thumb min/max color and border config
@mixin thumbMin() {
  background: #fbbaa0;
  border: 3px#f98c61 solid;
}
@mixin thumbMax() {
  background: #c4bae5;
  border: 3px#9d8cd3 solid;
}
input.thumb-min {
  &::-webkit-slider-thumb {
    @include thumbMin;
  }
  &::-moz-range-thumb {
    @include thumbMin;
    position: relative;
    z-index: 5;
  }
  &::-ms-track {
    @include thumbMin;
  }
}
input.thumb-max {
  &::-webkit-slider-thumb {
    @include thumbMax;
  }
  &::-moz-range-thumb {
    @include thumbMax;
  }
  &::-ms-track {
    @include thumbMax;
  }
}
</style>
