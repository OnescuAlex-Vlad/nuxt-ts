<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Flat</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="taxe in taxesState" :key="taxe.id">
          <td>{{ taxe.taxe_id }}</td>
          <td>{{ taxe.name }}</td>
          <td>{{ taxe.flat }}</td>
          <td>{{ taxe.percentage }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  mounted() {
    setTimeout(() => this.$store.dispatch("taxeStore/loadTaxes"));
  },
  computed: {
    taxesState() {
      return this.$store.state.taxeStore.loadedTaxes;
    }
  }
});
</script>