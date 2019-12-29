<template>
  <div>
    <Event />
  </div>
</template>

<script lang="ts">
import Event from "../../components/Event.vue";

import Vue from "vue";
export default Vue.extend({
  components: {
    Event
  }
});
</script>