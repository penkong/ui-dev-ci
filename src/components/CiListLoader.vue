<template>
  <div class="ci-list q-pa-md" dir="rtl">
    <q-markup-table :separator="separator" flat bordered class="tables shadow-1">
      <thead>
        <tr>
          <th>
            <q-input
              dir="rtl"
              v-model="text"
              class="text-right"
              borderless
              standout="q-pa-none q-ma-none"
              label="انتخاب سند"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="n in 50" :key="n">
          <td class="text-left">سلام</td>
        </tr>
        <tr></tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>


<script>
export default {
  name: "CiListLoader",
  data() {
    return {
      separator: "horizontal",
      text: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.ci-list {
  overflow: auto;
  height: 70vh;
  .tables {
    direction: rtl;
  }
}
</style>
