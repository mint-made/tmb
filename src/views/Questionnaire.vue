<template>
  <div class="mw-800 m-auto px-50">
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
          BUSINESS APPROACH TO TECH
        </h4>
      </div>
    </div>
    <h2 class="text-light text-left">
      <b>Strategy:</b> Business and Vendor Current and Goals
    </h2>
    <div :key="question.topic" v-for="question in questions">
      {{ question.topic }}, {{ question.value.start }}, {{ question.value.end }}
    </div>

    <dual-slider
      v-for="question in questions"
      :key="question.topic"
      :questionData="question"
    ></dual-slider>

    <div class="container">
      <button @click="submitData" class="btn btn-x" id="btn-submit">
        Submit Questionnaire
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DualSlider from "@/components/Dual-Slider.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Questions",
  components: {
    DualSlider
  },
  computed: {
    ...mapState(["questions"])
  },
  methods: {
    ...mapActions({
      logValues: "logValues"
    }),
    submitData() {
      this.logValues();
      this.$router.push({
        name: "Questionnaire-Complete"
      });
    }
  }
};
</script>

<style lang="scss">
/*Base Color Scheme*/
$navDarker: #0f292f;
$darker: #153c44;
$dark: #026670;
$viridian: #14a098;
$mint: #9fedd7;
$sand: #fef9c7;
$lemon: #fce181;
$steel: #edeae5;
$steel-2: #cccccc;
$telemagenta: #cb2d6f;
$purple: #501f3a;
$green: rgb(0, 173, 0);

.about {
  padding-top: 10px;
}
#btn-submit {
  margin-bottom: 100px;
}
</style>

/* import QuestionSlider from "@/components/QuestionSlider.vue"; register the
component

<question-slider
  v-for="question in questions"
  :key="question.topic"
  :questionData="question"
/>

*/
