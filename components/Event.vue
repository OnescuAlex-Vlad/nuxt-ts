<template>
  <div class="container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in eventState" :key="event.id">
          <td>{{ event.event_id }}</td>
          <td>{{ event.name }}</td>
          <td>{{ event.date }}</td>
          <td>{{ event.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  mounted() {
    setTimeout(() => this.$store.dispatch("eventStore/loadEvent"));
  },
  computed: {
    eventState() {
      return this.$store.state.eventStore.loadedEvents;
    }
  }
});
</script>

