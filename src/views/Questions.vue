<template>
  <div class="">
    <h2 class="text-light">
      <b>Strategy:</b> Business and Vendor Current and Goals
    </h2>
    <QuestionSlider
      v-for="question in questions"
      :key="question.topic"
      :questionData="question"
    />
    <button @click="submitData" class="btn btn-x">Submit</button>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionSlider from "@/components/QuestionSlider.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Questions",
  components: {
    QuestionSlider
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
$primary-blue: #7c97af;
$darker-blue: #52779c;
$darkest-blue: #2c3e50;
$white: #e7e7e7;

.btn-x {
  background-color: $darkest-blue;
  border-color: $darkest-blue;
  color: $white;
  &:hover {
    background-color: $primary-blue;
    color: $darkest-blue;
  }
}
</style>
