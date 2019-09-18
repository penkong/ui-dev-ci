<template>
  <div class="data-show">
    <div class="column justify-around">
      <!--  -->
      <!--  -->
      <div class="col-1 full-width row no-wrap justify-around items-center content-around">
        <!--  -->

        <div class="column q-pa-1 col-3 offset-1">
          <div class="col text-h5">سیستم مدیریت اپلیکیشن</div>
          <div class="col text-subtitle2 q-pt-md text-grey-6">شامل 15 اپلیکیشن</div>
        </div>
        <!--  -->
        <div class="application">
          <label for="application">اپلیکیشن</label>
          <select @onSelect="loadDomain" name="application">
            <option value disabled selected>انتخاب کنید</option>
            <option @onSelect="loadDomain" value="AB">گاز</option>
            <option @onSelect="loadDomain" value="BC">آب</option>
            <option @onSelect="loadDomain" value="BC">معدن</option>
          </select>
        </div>
      </div>
      <!--  -->
      <!--  -->
      <div class="col-10 row justify-around q-mt-sm q-gutter-y-xs">
        <div class="row-sanad fit row wrap justify-between content-between">
          <span class="sanad">سندها</span>
          <ModalAdd />
        </div>
        <!--  -->
        <div class="col-sm-3 col-xs-10 right-table">
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
import ModalAdd from "./ModalAdd";

export default {
  name: "DataShow",
  components: {
    ModalAdd,
    CiListLoader,
    TableOfData
  },
  data() {
    return {
      domainName: ""
    };
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
  max-height: 100vh;
  .right-table {
    min-height: 70vh;
    max-height: 80vh;
  }
  .left-table {
    min-height: 70vh;
    max-height: 80vh;
    position: relative;
  }
  .application {
    label {
      margin-left: 1.5rem;
      font-size: 0.8rem;
    }
    select {
      font-size: 0.8rem;
      direction: rtl;
      text-align: center;
      outline: none;
      width: 12rem;
      padding: 0.5rem 1rem;
      appearance: none;
      border: 1px solid #ffffff;
      border-radius: 5px;
      &:hover {
        color: #04548a;
        cursor: pointer;
        background-color: #ffedd6;
      }
      &::-ms-expand {
        display: none; /* Hide the default arrow in Internet Explorer 10 and Internet Explorer 11 */
      }
      option {
        margin-right: 2rem;
        border-radius: 3px;
        background: #f5f5f5;
        appearance: none;
        color: rgb(32, 6, 6);
        cursor: pointer;
        font-family: "Shabnam-FD";
      }
    }
  }
  .row-sanad {
    .sanad {
      margin-right: 1.6rem;
    }

    span {
      color: #c7c6c6;
      font-size: 0.65rem;
    }
  }
}
</style>
