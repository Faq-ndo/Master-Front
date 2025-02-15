<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header-comp.vue";

export default defineComponent({
  components: {
    Header,
  },
});
</script>
