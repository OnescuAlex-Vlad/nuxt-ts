<template>
  <div>
    <table-component :tableProps="tableProps" />
  </div>
</template>

<script>
import TableComponent from "../../components/TableComponent.vue";

import Vue from "vue";
export default Vue.extend({
  components: {
    TableComponent
  },
  mounted() {
    setTimeout(() => this.$store.dispatch("userStore/loadUser"));
  },
  computed: {
    tableHeaders() {
      return [
        { text: "ID", value: "id" },
        { text: "User ID", value: "userId" },
        { text: "Age", value: "age" },
        { text: "Salary", value: "salary" },
        { text: "Position", value: "position" },
        { text: "Thumbnail", value: "thumbnail" }
      ];
    },
    usersState() {
      return this.$store.state.userStore.loadedUsers;
    },
    tableProps() {
      return {
        headers: this.tableHeaders,
        data: this.usersState
      };
    }
  }
});
</script>