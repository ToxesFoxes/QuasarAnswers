
const routes = [
  {
    path: '/',
    component: () => import('layouts/GlobalLayout.vue'),
    children: [
      {
        path: '', component: () => import('src/pages/Index.vue')
      },
      {
        path: '/answers', component: () => import('src/pages/answers.vue'),
      },
      {
        path: '/testing', component: () => import('src/pages/testing.vue')
      },
      {
        path: '/quiz_editor', component: () => import('src/pages/quiz_editor.vue')
      },
      {
        path: '/quiz_creator', component: () => import('src/pages/quiz_creator.vue')
      },
      {
        path: '/google_parser', component: () => import('src/pages/google_parser.vue')
      },
    ]
  },
  // {
  //   path: '/answers',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('src/pages/answers.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
