<template>
  <div class="column justify-center content-center">
    <div class="q-my-sm text-h6">Вопрос {{ index + 1 }} из {{ count }}:</div>
    <question-card
      v-if="question != null"
      :version="'2.0'"
      :question="question"
      class="my-card"
      ref="card"
    ></question-card>
    <div class="row justify-center">
      <q-btn
        class="q-mr-sm"
        color="primary"
        outline
        label="Прошлый"
        @click="prev"
      />
      <q-btn
        class="q-ml-sm"
        color="primary"
        outline
        label="Следующий"
        @click="next"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import QuestionCard from "src/components/Testing/QuestionCard.vue";

export default {
  components: {
    QuestionCard,
  },
  props: {},
  computed: {
    ...mapGetters({
      some: "testing/currentQuiz",
      index: "testing/questionIndex",
      count: "testing/questionCount",
      question: "testing/currentQuestion",
    }),
  },
  methods: {
    ...mapMutations({
      setCurrentQuestion: "testing/setCurrentQuestion",
      setQuestionIndex: "testing/setQuestionIndex",
    }),
    ...mapActions({
      nextQuestion: "testing/nextQuestion",
      prevQuestion: "testing/prevQuestion",
    }),
    next() {
      var results = this.card.checkValid();
      setTimeout(() => {
        this.nextQuestion(results.answers);
      }, 1000);
    },
    prev() {
      if (this.index > -1) this.index - 1;
      this.prevQuestion();
    },
    async getCardRef() {
      setTimeout(() => {
        this.card = this.$refs.card;
      }, 300);
    },
    data: () => ({
      card: null,
    }),
  },
  mounted() {
    this.getCardRef();
  },
};
</script>

<style>
</style>