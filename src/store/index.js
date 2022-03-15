import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

import answers from './answers'
import example from './module-example'
import GlobalData from './global'
import testing from './testing'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      answers,
      global: GlobalData,
      // example,
      // testing
    },
    plugins: [createPersistedState()],
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
