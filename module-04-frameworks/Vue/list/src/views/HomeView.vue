<template>
  <div class="home">
    <UserList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from "../components/users-list.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    UserList,
  },
});
</script>
