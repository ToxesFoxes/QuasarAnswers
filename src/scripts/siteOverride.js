let btn = null
let found = false
let inter = setInterval(function () {
  btn = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.page-container > div > div > div.review-section-wrapper > div > div.question-review-list > div.question-being-viewed > div.controls-container > div > div.navigation-btns > button.items.next.flex-view.all-center")
  if (btn) {
    // clearInterval(inter);
    parseSome()
    if (!found) {
      found = true
      console.log("Active")
    }
  }
}, 100)
var list = {

}

function getAnswer(num) {
  // const num = childNum+1;
  let answer = document.querySelector(`body > div > div.root-component > div > div > div > div.page-container.page-container > div > div > div.review-section-wrapper > div > div.question-review-list > div.question-being-viewed > div.question-review-container > div.main-content > div > div.question-container.animated.fadeIn > div.options-container > div:nth-child(${num}) > span > p > span`)
  if (!answer) answer = document.querySelector(`body > div > div.root-component > div > div > div > div.page-container.page-container > div > div > div.review-section-wrapper > div > div.question-review-list > div.question-being-viewed > div.question-review-container > div.main-content > div > div.question-container.animated.fadeIn > div.options-container > div:nth-child(${num}) > span > p`)
  let check = document.querySelector(`body > div > div.root-component > div > div > div > div.page-container.page-container > div > div > div.review-section-wrapper > div > div.question-review-list > div.question-being-viewed > div.question-review-container > div.main-content > div > div.question-container.animated.fadeIn > div.options-container > div:nth-child(${num})`)
  if (!check || !answer)
    return null
  return {
    text: answer.innerHTML || "error",
    valid: check.classList.contains("is-correct") || false,
    id: num
  }
}
function getAnswers() {
  const answers = []
  const childList = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.page-container > div > div > div.review-section-wrapper > div > div.question-review-list > div.question-being-viewed > div.question-review-container > div.main-content > div > div.question-container.animated.fadeIn > div.options-container").children
  if (!childList)
    return null
  for (let i = 1; i < childList.length + 1; i++) {
    answers.push(getAnswer(i))
  }
  return answers
}
function getQuestionTitle() {
  let title = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.page-container > div > div > div.review-section-wrapper > div > div.question-review-list > div.question-being-viewed > div.question-review-container > div.main-content > div > div.question-container.animated.fadeIn > div.question > span > p > span")
  if (!title) title = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.page-container > div > div > div.review-section-wrapper > div > div.question-review-list > div.question-being-viewed > div.question-review-container > div.main-content > div > div.question-container.animated.fadeIn > div.question > span > p")
  if (!title)
    return null
  return title.innerHTML || null
}
function getQuestionNum() {
  let quetionTitle = document.querySelector("body > div > div.root-component > div > div > div > div.page-container.page-container > div > div > div.review-section-wrapper > div > div.question-review-list > div.question-being-viewed > div.question-review-container > div.main-content > div > div.top-header > div.header.text.black-text")
  if (!quetionTitle)
    return null
  let quetionNumber = JSON.stringify(quetionTitle.innerHTML).replace("\\n            ", "").replace("\\n          ", "").replace("Question ", "").replace(/\"/g, "")
  return Number(quetionNumber)
}
function parseSome() {
  const num = getQuestionNum()
  if (!num || list[`item_${num}`] || !getQuestionTitle())
    return
  const answers = getAnswers()
  const title = getQuestionTitle()
  const result = {
    title: getQuestionTitle(),
    answers,
    id: num
  }
  console.log(`Question ${getQuestionNum()}: `, result)
  list[`item_${getQuestionNum()}`] = result
}