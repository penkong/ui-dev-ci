<template>
  <div class="data-show">
    <div class="column justify-around">
      <!--  -->
      <!--  -->
      <div class="col-1 row justify-around" style="height: 4rem">
        <!--  -->
        <div class="col-4 col-md-4 column q-pa-1">
          <div class="col">سیستم مدیریت اپلیکیشن</div>
          <div class="col">شامل 15 اپلیکیشن</div>
        </div>
        <!--  -->
        <div class="col-4 col-md-4">
          <DomainCombo />
        </div>
        <div class="col-4 col-md-4 text-left q-ml-lg">
          <q-btn color="orange" text-color="white" label="افزودن" />
        </div>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->
      <!--  -->
      <div class="col-10 row justify-around q-mt-sm q-gutter-y-xs">
        <!--  -->
        <div class="col-sm-4 col-xs-10 right-table">
          <CiListLoader />
        </div>
        <!--  -->
        <div class="col-sm-8 col-xs-10 left-table">
          <TableOfData />
        </div>
      </div>
      <!--  -->
      <!--  -->
    </div>
  </div>
</template>

<script>
import CiListLoader from "./CiListLoader";
import TableOfData from "./TableOfData";
import DomainCombo from "./DomainCombo";
export default {
  name: "DataShow",
  components: {
    DomainCombo,
    CiListLoader,
    TableOfData
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.data-show {
  height: auto;
  direction: rtl;
  .right-table {
    min-height: 70vh;
    max-height: 80vh;
  }
  .left-table {
    min-height: 70vh;
    max-height: 80vh;
  }
}
</style>
