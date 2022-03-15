<template>
  <q-page padding>
    <div class="q-pa-md justify-center row q-gutter-md">
      <q-card
        flat
        bordered
        class="my-card q-pa-none column"
        v-for="(card, index) in cards"
        :key="index"
      >
        <q-card-section class="q-pb-sm">
          <div class="text-h6">{{ card.title }}</div>
          <div class="text-subtitle2">От {{ card.author }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ card.description }}
        </q-card-section>

        <q-card-section class="q-pa-none q-mt-auto relative-position">
          <q-separator class="q-pb-auto" />
          <q-btn
            flat
            color="primary"
            class="q-ma-none start-btn vertical-bottom"
            :label="card.btnCaption"
            :to="card.link"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      cards: "global/routerPages",
    }),
  },
};
</script>

<style lang="less" scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
.start-btn {
  width: 100%;
}
</style>