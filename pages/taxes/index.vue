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
    setTimeout(() => this.$store.dispatch("taxeStore/loadTaxes"));
  },
  computed: {
    tableHeaders() {
      return [
        { text: "ID", value: "taxe_id" },
        { text: "Name", value: "name" },
        { text: "Flat", value: "flat" },
        { text: "Percentage", value: "percentage" }
      ];
    },
    taxesState() {
      return this.$store.state.taxeStore.loadedTaxes;
    },
    tableProps() {
      return {
        headers: this.tableHeaders,
        data: this.taxesState
      };
    }
  }
});
</script>