import state from "./state";

// Quiz
export function setSelected(state, data) {
  state.current.selected = data;
}

export function setQuiz(state, data) {
  state.current.quiz = data;
}

// Question
export function setQuestion(state, data) {
  if (!data) state.current.question = {};

  const quiz = state.current.quiz.quiz;
  const keys = Object.keys(quiz);

  state.current.question = quiz[keys[data || state.current.index]];
}

export function setQuestionIndex(state, data) {
  state.current.index = data;
}

export function answerQuestion(state, data) {
  state.results.answered[data.id] = [];
}

// Results
export function resetResults(state, data) {
  state.results[data] = {
    total: {
      valid: 0,
      invalid: 0,
    },
    answered: {},
  };
}

export function recordAnswer(state, data) {
  state.results[data.quizId].answered[data.questionId] = data.answer;
}
