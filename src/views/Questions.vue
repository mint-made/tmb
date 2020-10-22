<template>
  <div class="about">
    <h1>Questions Page</h1>
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

<style lang="scss"></style>
