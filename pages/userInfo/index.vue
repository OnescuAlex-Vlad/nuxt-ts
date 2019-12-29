<template>
  <div>
    <User />
  </div>
</template>

<script lang="ts">
import User from "../../components/User.vue";

import Vue from "vue";
export default Vue.extend({
  components: {
    User
  }
});
</script>