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
    setTimeout(() => this.$store.dispatch("fileStore/loadFile"));
  },
  computed: {
    tableHeaders() {
      return [
        { text: "ID", value: "file_id" },
        { text: "Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "File", value: "file" }
      ];
    },
    filesState() {
      return this.$store.state.fileStore.loadedFiles;
    },
    tableProps() {
      return {
        headers: this.tableHeaders,
        data: this.filesState
      };
    }
  }
});
</script>