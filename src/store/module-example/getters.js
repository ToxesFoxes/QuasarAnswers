export function getOop(state) {
  return state.oop;
}
export function getQuizziz90(state) {
  return state.getQuizziz90;
}
export function getCurrentQuiz(state) {
  return state.quizList[state.current];
}
export function getCurrentQuizQuestionCount(state) {
  const keys = Object.keys(state.quizList[state.current].quiz);
  return keys.length;
}
export function getCurrentQuizName(state) {
  return state.quizList[state.current].name;
}
export function getCurrentQuizUID(state) {
  return state.current;
}
export function getQuizList(state) {
  const list = {};
  for (let key in state.quizList) {
    list[key] = {
      title: state.quizList[key].name,
      count: Object.keys(state.quizList[key].quiz).length,
      id: key,
    };
  }
  return list;
}
export function getFullQuizList(state) {
  const list = {};
  for (let key in state.quizList) {
    list[key] = {
      id: key,
      title: state.quizList[key].name,
      count: Object.keys(state.quizList[key].quiz).length,
      quiz: state.quizList[key].quiz,
    };
  }
  return list;
}
