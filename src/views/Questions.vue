<template>
  <div class="about">
    <h2 class="text-light">
      <b>Strategy:</b> Business and Vendor Current and Goals
    </h2>
    <QuestionSlider
      v-for="question in questions"
      :key="question.topic"
      :questionData="question"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionSlider from "@/components/QuestionSlider.vue";
import { mapState } from "vuex";

export default {
  name: "Questions",
  components: {
    QuestionSlider
  },
  computed: {
    ...mapState(["questions"])
  }
};
</script>

<style lang="scss">
.about {
  padding-top: 10px;
}
</style>
