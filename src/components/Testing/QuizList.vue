<template>
  <div class="row justify-center content-center">
    <q-card
      flat
      bordered
      class="my-card q-pa-none column"
      v-for="(quiz, index) in quizList"
      :key="index"
    >
      <q-card-section class="q-pb-sm">
        <div class="text-h6">{{ quiz.title }}</div>
        <div class="text-subtitle2">Вопросов: {{ quiz.count }}</div>
      </q-card-section>

      <q-card-section class="q-pa-none q-mt-auto relative-position">
        <q-separator class="q-pb-auto" />
        <q-btn
          flat
          color="primary"
          class="q-ma-none start-btn vertical-bottom"
          label="Начать"
          @click="enterQuiz(quiz)"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    quizList: { type: Object, required: true },
  },
  methods: {
    ...mapActions({
      enterQuiz: "testing/enterQuiz",
    }),
  },
};
</script>

<style lang="less" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
.start-btn {
  width: 100%;
}
</style>