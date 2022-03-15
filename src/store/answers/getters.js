export function getCurrentQuiz(state) {
  return state.tests[state.current]
}
export function getCurrentQuizQuestionCount(state) {
  const keys = Object.keys(state.tests[state.current].json)
  return keys.length
}
export function getCurrentQuizName(state) {
  return state.tests[state.current].name
}
export function getCurrentQuizUID(state) {
  return state.current
}
export function getQuizList(state) {
  const list = {}
  for (let key in state.tests) {
    list[key] = {
      title: state.tests[key].name,
      count: Object.keys(state.tests[key].json).length,
      id: key,
    }
  }
  return list
}
export function getFullQuizList(state) {
  const list = {}
  for (let key in state.tests) {
    list[key] = {
      id: key,
      title: state.tests[key].name,
      count: Object.keys(state.tests[key].json).length,
      quiz: state.tests[key].json,
    }
  }
  return list
}
