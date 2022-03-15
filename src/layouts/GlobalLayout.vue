<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> Центр тестирования </q-toolbar-title>
        <q-breadcrumbs>
          <q-breadcrumbs-el
            v-for="(page, index) in pageList"
            :key="index"
            :label="page.title"
            :to="page.link"
            :icon="page.icon"
          />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
  <div class="col items-center q-ma-none q-gutter-xs"></div>
</template>

<script>
import { mapGetters } from "vuex";
import { ref } from "vue";

export default {
  computed: {
    ...mapGetters({
      routerPages: "global/allPages",
    }),
  },
  methods: {
    update(newPath) {
      const path = newPath || this.$router.currentRoute._value.path;
      this.pageList = this.routerPages.filter(
        (item, index) => item.link == path || index == 0
      );
    },
  },
  mounted() {
    this.update();
  },
  beforeRouteUpdate(to) {
    // console.log(to)
    this.update(to.path);
  },
  data: () => ({
    pageList: [],
  }),
  watch: {},
};
</script>

<style>
</style>