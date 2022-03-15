<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ title }} </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Доступные тесты </q-item-label>

        <QuizLink
          v-for="link in quizList"
          :key="link.title"
          :uid="link.id"
          :caption="`${link.count} вопросов`"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import QuizLink from "components/EssentialLink.vue";
import { ref } from "vue";
import { findString } from "src/scripts/search";
import { mapGetters } from "vuex";

export default {
  name: "MainLayout",

  components: {
    QuizLink,
  },

  computed: {
    ...mapGetters({
      quizList: "example/getQuizList",
      title: "example/getCurrentQuizName",
    }),
  },

  methods: {
    search(value) {
      findString(value || this.text_search);
    },
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },

  data: () => ({
    leftDrawerOpen: ref(false),
  }),

  watch: {
    text_search(val) {
      this.search(val);
      console.log(val);
    },
  },
};
</script>
