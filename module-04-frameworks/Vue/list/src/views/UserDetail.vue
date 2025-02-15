<template>
  <section>
    <h1>User Detail</h1>
    <div v-if="user">
      <p>Login: {{ user.login }}</p>
      <p>Name: {{ user.name }}</p>
      <p>Followers: {{ user.followers }}</p>
      <p>following: {{ user.following }}</p>
      <p>Bio: {{ user.bio }}</p>
    </div>
    <p v-else>Loading...</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { usersService } from "../services/users";
import { GitHubUser } from "../types";

export default defineComponent({
  setup() {
    const route = useRoute();
    const user = ref<null | GitHubUser>(null);

    const fetchUser = async () => {
      try {
        const login = route.params.login as string;
        user.value = await usersService.getUser(login);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    onMounted(() => {
      fetchUser();
    });

    return {
      user,
    };
  },
});
</script>

<style scoped>
.user-details {
  text-align: center;
}
</style>
