<template>
  <div class="data-show">
    <div class="column justify-around">
      <!--  -->
      <!--  -->
      <div
        class="col-2 full-width row no-wrap justify-between items-center content-around"
        style="height: 4rem"
      >
        <!--  -->

        <div class="column q-pa-1 col-3 offset-1">
          <div class="col text-h5">سیستم مدیریت اپلیکیشن</div>
          <div class="col text-subtitle2 q-pt-md text-grey-6">شامل 15 اپلیکیشن</div>
        </div>
        <!--  -->
        <div class="row no-wrap justify-between items-center content-around">
          <div class="dropdown">
            <button class="dropbtn">اپلیکیشن</button>
            <div class="dropdown-content">
              <a href="#">آب</a>
              <a href="#">گاز</a>
              <a href="#">معدن</a>
            </div>
          </div>
          <button class>افزودن</button>
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

export default {
  name: "DataShow",
  components: {
    CiListLoader,
    TableOfData
  },
  data() {
    return {};
  },
  methods: {
    onItemClick() {
      console.log("Clicked on an Item");
    },
    onLogOut() {
      console.log("on log out");
    }
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
  .dropdown {
  }
  button {
    display: block;
    border-radius: 3px;
    color: white;
    background-color: orange;
    border: none;
    padding: 0 1rem;
    height: 50%;
    cursor: pointer;
    transition: 0.3s all ease-in;
    &:hover {
      background-color: rgb(165, 107, 0);
    }
  }
}
</style>
