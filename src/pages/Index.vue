<template>
  <q-page class="flex items-center column q-ma-md q-mb-xl">
    <question-card
      :version="'2.0'"
      :question="item"
      v-for="(item, index) in data.quiz"
      :key="index"
    ></question-card>
    <floating-search></floating-search>
  </q-page>
</template>

<script>
import QuestionCard from "src/components/QuestionCard.vue";
import FloatingSearch from "src/components/FloatingSearch.vue";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  components: {
    QuestionCard,
    FloatingSearch,
  },
  computed: {
    ...mapGetters({
      data: "example/getCurrentQuiz",
    }),
  },
};
</script>
