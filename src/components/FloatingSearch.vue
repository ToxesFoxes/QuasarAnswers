<template>
  <div class="search_container bg-primary fixed q-pa-xs">
    <!-- <q-icon name="arrow_back" class="search_prev text-white" size="md" /> -->
    <q-input
      dark
      dense
      standout
      placeholder="Поиск"
      v-model="text_search"
      input-class="text-right"
      class="q-ma-xs q-pa-xs"
      @keyup.enter="search(text_search)"
    >
    </q-input>
    <q-btn
      color="primary text-white q-ma-xs q-ml-sm q-pa-xs"
      icon="search"
      size="md"
      outline
      @click="search(text_search)"
    />
  </div>
</template>

<script>
import { findString } from "src/scripts/search";
export default {
  data: () => ({
    text_search: "",
  }),

  methods: {
    search(value) {
      findString(value || this.text_search);
    },
  },
};
</script>

<style lang="less" scoped>
.search_container {
  width: 100%;
  max-width: 320px;
  bottom: 1em;
  height: 70px;
  width: calc(100% - 2.1em);
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>