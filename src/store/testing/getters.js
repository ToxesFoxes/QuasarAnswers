// Quiz
export function selected(state, getters, storeList, globalGetters) {
  return state.current.selected == true;
}
export function question(state, getters, storeList, globalGetters) {
  return state.current.question;
}
export function currentQuiz(state, getters, storeList, globalGetters) {
  return state.current.quiz;
}
export function currentQuizId(state, getters, storeList, globalGetters) {
  return state.current.quiz.id || null;
}
// Question
export function currentQuestion(state, getters, storeList, globalGetters) {
  return state.current.question;
}
export function questionIndex(state, getters, storeList, globalGetters) {
  return state.current.index;
}
export function questionCount(state, getters, storeList, globalGetters) {
  return state.current.quiz.count;
}
// Results
export function allResults(state, getters, storeList, globalGetters) {
  return state.results;
}
export function currentResult(state, getters, storeList, globalGetters) {
  return (
    state.results[getters.currentQuizId].answered[
      getters.questionIndex
    ] || {}
  );
}
