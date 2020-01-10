<template>
  <v-data-table :headers="tableProps.headers" :items="tableProps.data">
    <template slot="items" slot-scope="props">
      <template v-for="(el, key, index) in tableProps.headers">
        <td :key="index">{{ props.item[el.value] }}</td>
      </template>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ["tableProps"]
};
</script>