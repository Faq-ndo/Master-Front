<template>
  <section class="wrapper">
    <div>
      <input type="text" v-model="organization" placeholder="Lemoncode" />
      <button @click="fetchUsers">Search</button>
    </div>
    <p v-if="error" style="color: red">{{ error }}</p>
    <div class="flex align-items-center justify-content-between">
      <h1>Users</h1>
      total: {{ totalUsers }}
    </div>
    <ul>
      <li
        v-for="user in list"
        :key="user.id"
        class="grid product-container card"
      >
        <router-link :to="`/detail/${user.login}`">
          <div class="product-container__content">
            <img
              :src="user.avatar_url"
              :alt="user.login"
              width="50"
              height="50"
            />
            <h1>{{ user.login }}</h1>
            <p>Organizations: {{ user.organizations.join(", ") }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { usersService } from "../services/users";
import { GitHubUser } from "../types";

export default defineComponent({
  data() {
    return {
      organization: "lemoncode",
      list: [] as GitHubUser[],
      filteredList: [] as GitHubUser[],
      error: null as string | null,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        this.list = await usersService.get(this.organization);
      } catch (err) {
        this.error = "Error fetching members. Please try again.";
        console.error("Error fetching users:", err);
      }
    },
  },
  async created() {
    await this.fetchUsers();
  },
  computed: {
    totalUsers(): number {
      return this.list.length;
    },
  },
});
</script>

<style scopped></style>
