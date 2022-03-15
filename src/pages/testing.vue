<template>
  <q-page padding>
    {{ selected }}

    <q-btn color="primary" icon="check" label="quit" @click="quit" />
    <quiz-list :quizList="quizList" v-if="!selected"></quiz-list>
    <quiz-question v-if="selected"></quiz-question>
  </q-page>
</template>

<script>
import QuizList from "components/Testing/QuizList.vue";
import QuizQuestion from "components/Testing/QuizQuestion.vue";
// import QuestionCard from "src/components/QuestionCard.vue";
import { mapGetters, mapMutations,mapActions } from "vuex";
import { ref } from "vue";
export default {
  components: {
    // QuestionCard,
    QuizList,
    QuizQuestion,
  },
  computed: {
    ...mapGetters({
      // data: "example/getCurrentQuiz"c,
      cards: "global/routerPages",
      quizList: "answers/getFullQuizList",
      // title: "example/getCurrentQuizName",
      // count: "example/getCurrentQuizQuestionCount",
      item: "testing/question",
      selected: "testing/selected",
    }),
  },
  methods: {
    ...mapMutations({
      update: "testing/update",
    }),
    ...mapActions({
      quit: "testing/quitQuiz",
    }),
    // async getCardRef() {
    //   setTimeout(() => {
    //     this.card = this.$refs.card;
    //   }, 300);
    // },
    // async setQuiz(quiz) {
    //   this.$store.commit("testing/enterQuiz", quiz);
    // },
    // update() {
    //   const quiz = this.data.quiz;
    //   const keys = Object.keys(quiz);
    //   this.item = quiz[keys[this.index]];
    // },
    // async nextQuestion() {
    //   var valid = false;

    //   if (this.card) valid = this.card.checkValid();
    //   // if (!valid) return;
    //   setTimeout(() => {
    //     if (this.index + 1 > this.count - 1) alert("Конец");
    //     else this.index++;
    //     this.update();
    //   }, 1000);
    // },
    async prevQuestion() {
      //   if (this.index != 0) this.index--;
      // this.update();
    },
  },
  mounted() {
    // this.update();
    // this.getCardRef();
  },
  data: () => ({}),
};
</script>

<style lang="less" scoped>
</style>