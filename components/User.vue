<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>UserId</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Position</th>
          <th>Thumbnail</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usersState" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.userId }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.salary }}</td>
          <td>{{ user.position }}</td>
          <td>{{ user.thumbnail }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  mounted() {
    setTimeout(() => this.$store.dispatch("userStore/loadUser"));
  },
  computed: {
    usersState() {
      return this.$store.state.userStore.loadedUsers;
    }
  }
});
</script>