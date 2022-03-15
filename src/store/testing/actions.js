export function enterQuiz(store, data) {
  store.commit("setSelected", true);
  store.commit("setQuiz", data);
  console.log(store);
  console.log(data);
  store.commit("setQuestionIndex", 0);
  store.commit("resetResults", data.id);
  store.commit("setQuestion", 0);
  // console.log(store.getters.currentQuizId, data.id);
}

export function quitQuiz(store) {
  store.commit("setSelected", false);
  store.commit("setQuestion", null);
}

export function nextQuestion(store, data) {
  const { count, index, id } = {
    id: store.getters.currentQuizId,
    count: store.getters.questionCount,
    index: store.getters.questionIndex,
  };
  const newIndex = index + 1 <= count ? index + 1 : 0;

  store.commit("recordAnswer", {
    quizId: id,
    questionIndex: index,
    answer: data,
  });
  store.commit("setQuestionIndex", newIndex);
  store.commit("setQuestion", newIndex);
}

export function prevQuestion(store) {
  const { count, index } = {
    count: store.getters.questionCount,
    index: store.getters.questionIndex,
  };
  const newIndex = index - 1 > -1 ? index - 1 : 0;
  store.commit("setQuestionIndex", newIndex);
  store.commit("setQuestion", newIndex);
}
