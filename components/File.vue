<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>File</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="file in filesState" :key="file.id">
          <td>{{ file.file_id }}</td>
          <td>{{ file.name }}</td>
          <td>{{ file.description }}</td>
          <td>{{ file.file }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  mounted() {
    setTimeout(() => this.$store.dispatch("fileStore/loadFile"));
  },
  computed: {
    filesState() {
      return this.$store.state.fileStore.loadedFiles;
    }
  }
});
</script>