for (let i in list) {
  list[i].id = ++id
  const answers = list[i].answers
  for (let a in answers)
    answers[a].id = ++iid
  iid = 0
}