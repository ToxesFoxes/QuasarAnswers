<template>
  <q-toolbar inset class="bg-grey-4 text-black justify-center">
    <div class="text-h6 q-pr-md">Тест:</div>
    <q-btn-dropdown :label="title" class="bg-white text-black">
      <q-list>
        <q-item
          clickable
          v-close-popup
          v-for="(link, index) in tests"
          @click="changeQuiz(index)"
          :key="index"
        >
          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
    <div class="text-h6 q-ml-md">{{ count }} Вопросов</div>
  </q-toolbar>
  <div class="flex items-center column q-ma-md q-mb-xl">
    <question-card
      :version="'2.0'"
      :question="item"
      :id="index"
      v-for="(item, index) in data.json"
      :key="index"
    ></question-card>
    <floating-search></floating-search>
  </div>
</template>

<script>
import QuestionCard from "src/components/AnswerCard.vue";
import FloatingSearch from "src/components/FloatingSearch.vue";
import { mapGetters } from "vuex";
import { findString } from "src/scripts/search";

export default {
  name: "answersPage",
  components: {
    QuestionCard,
    FloatingSearch,
  },
  computed: {
    ...mapGetters({
      data: "answers/getCurrentQuiz",
      tests: "answers/getQuizList",
      title: "answers/getCurrentQuizName",
      count: "answers/getCurrentQuizQuestionCount",
    }),
  },
  methods: {
    onItemClick(value) {
      // console.log(value);
    },
    search(value) {
      // console.log("hmm");
      findString(value || this.text_search);
    },
    changeQuiz(index) {
      this.$store.commit("answers/setCurrentQuiz", index);
    },
  },
  data: () => ({
    text: "asd",
  }),
  watch: {
    text_search(val) {
      this.search(val);
      // console.log(val);
    },
  },
};
</script>
