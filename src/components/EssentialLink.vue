<template>
  <q-item clickable @click="change(uid)">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    uid: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    }
  },
  methods: {
    change(uid) {
      this.$store.commit("example/setCurrentQuiz", uid);
    }
  }
});
</script>
