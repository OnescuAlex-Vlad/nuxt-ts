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
    setTimeout(() => this.$store.dispatch("eventStore/loadEvent"));
  },
  computed: {
    tableHeaders() {
      return [
        { text: "ID", value: "event_id" },
        { text: "Name", value: "name" },
        { text: "Date", value: "date" },
        { text: "Description", value: "description" }
      ];
    },
    eventState() {
      return this.$store.state.eventStore.loadedEvents;
    },
    tableProps() {
      return {
        headers: this.tableHeaders,
        data: this.eventState
      };
    }
  }
});
</script>