<template>
  <div class="container mx-auto w-3/5 mt-10">
    <div class="users" v-if="!loading">
      <div v-for="user in users" :key="user.id" class="user">
        <a target="_blank" :href="`https://osu.ppy.sh/u/${user.id}`">{{ user.username }}</a>
        {{ user.scores }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { User } from '../types';
import { userConverter } from '../firestore/converters';

export default Vue.extend({
  data() {
    return {
      users: [] as User[],
      loading: true,
    }
  },
  async created() {
    this.users = await this.getUsers();
    this.loading = false;
  },
  methods: {
    async getUsers(): Promise<User[]> {
      const users: User[] = [];
      const usersSnap = await this.$fire.firestore.collection('users').withConverter(userConverter).get();

      if (!usersSnap.empty) {
        usersSnap.forEach((doc: QueryDocumentSnapshot) => {
          const user = doc.data() as User;
          users.push(user);
        });
      }

      return users;
    }
  }
})
</script>

<style lang="postcss">
html, body {
  @apply h-full text-white;
  background-color: #1C1719;
}

.users {
  @apply px-6 py-3;
  background-color: #2A2226;
  box-shadow: 0 1px 3px rgb(0 0 0 / 25%);
}
</style>
