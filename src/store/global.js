export default {
  state: {
    pages: [
      {
        title: "Главная страница",
        description:
          "Создан для того чтобы выбрать необходимый хуй",
        link: "/",
        skip: true,
        icon: "home"
      },
      {
        title: "Тестирование",
        description:
          "Создан для того чтобы выучить/пройти тест и закрепить знания",
        author: "ToxesFoxes",
        link: "/testing",
        btnCaption: "Начать",
      },
      {
        title: "Ответы",
        description:
          "Создан для того чтобы выучить/пройти тест и закрепить знания",
        author: "ToxesFoxes",
        link: "/answers",
        btnCaption: "Перейти",
      },
      {
        title: "Редактор тестов",
        description: "Редактор ответов на вопросы",
        author: "ToxesFoxes",
        link: "/quiz_editor",
        btnCaption: "Перейти",
      },
      {
        title: "Создания тестов",
        description: "Создание теста с нуля",
        author: "ToxesFoxes",
        link: "/quiz_creator",
        btnCaption: "Перейти",
      },
      {
        title: "Копирование Google Forms",
        description:
          "Копирование существующего теста с Google Forms и последующего редактирования",
        author: "ToxesFoxes",
        link: "/google_parser",
        btnCaption: "Перейти",
      },
    ],
  },
  namespaced: true,
  mutations: {},
  getters: {
    routerPages(state, store, storeList, getters) {
      const filtered = state.pages.filter((item) => !item.skip)
      return filtered
    },
    allPages(state, store, storeList, getters) {
      return state.pages
    }
  },
  mutations: {},
  actions: {},
}
