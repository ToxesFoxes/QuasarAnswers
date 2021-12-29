import quizziz90 from './tests/quizizz90'
import quizziz100 from './tests/quizizz100'
import ks_quizizz100 from './tests/ks-quizizz100'
import oop from './tests/oop'
import web from './tests/web'

export default {
  quizList: {
    quizziz90: {
      name: 'Quizziz 90 Инф. безоп',
      quiz: quizziz90
    },
    quizziz100: {
      name: 'Quizziz 100 Инф. безоп',
      quiz: quizziz100
    },
    ks_quizizz100: {
      name: 'Quizziz 100 КС',
      quiz: ks_quizizz100
    },
    oop: {
      name: 'ООП',
      quiz: oop
    },
    web: {
      name: 'Web программирование',
      quiz: web
    },
  },
  current: 'quizziz100'
}