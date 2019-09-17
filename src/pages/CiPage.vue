<template>
  <q-page padding class="ci-page">
    <DataShow />
  </q-page>
</template>

<script>
import DataShow from "../components/DataShow";
export default {
  name: "CiPage",
  components: {
    DataShow
  }
};
</script>

<style lang="scss">
.ci-page {
  direction: rtl;
}
</style>
