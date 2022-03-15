qs_db.forEach((res, index) => {
  const a = res[2]
  const q = res[3]
  const a1 = res[4]
  const a2 = res[5]
  const a3 = res[6]
  const a4 = res[7]
  // const a5 = res[8]
  const answers = [
    {
      text: a1,
      valid: a + 1 == 1,
      id: 1
    },
    {
      text: a2,
      valid: a + 1 == 2,
      id: 2
    },
    {
      text: a3,
      valid: a + 1 == 3,
      id: 3
    },
    {
      text: a4,
      valid: a + 1 == 4,
      id: 4
    },
    // {
    // text: a5,
    // valid: a + 1 == 5,
    // id: 5
    // }
  ]
  list[`item_${index}`] = { title: q, answers, id: index }
})
// console.log(list)