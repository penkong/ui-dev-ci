<template>
  <div class="data-show">
    <div class="column justify-around">
      <div class="col-1 full-width row no-wrap justify-between q-mx-xl items-center content-around">
        <div class="column q-pa-1 col-3 offset-1" style="margin-right: 2rem;">
          <div class="col text-h5">سیستم مدیریت اپلیکیشن</div>
          <div class="col text-subtitle2 q-pt-md text-grey-6">شامل 15 اپلیکیشن</div>
        </div>
        <div class="application">
          <label for="application">اپلیکیشن</label>
          <select
            v-model="domainName"
            @change="onChange($event.target.value)"
            name="application"
            style="border: none;"
          >
            <option value="select" disabled selected>انتخاب کنید</option>
            <option value="water">آب</option>
            <option value="gas">گاز</option>
            <option value="mine">معدن</option>
          </select>
        </div>
      </div>
      <div
        v-if="domainName && !ciNameFromDataShow"
        class="col-10 row justify-around q-mt-sm q-gutter-y-xs"
      >
        <CiListLoader :domainName="domainName" @ciNameCatch="ciNameCatch" :key="domainName" />
      </div>
      <div class="col-10 row justify-around q-mt-sm q-gutter-y-xs" :key="domainName">
        <div class="fit row wrap justify-end items-start content-start">
          <ModalAdd
            v-if="ciNameFromDataShow"
            :domainName="domainName"
            :ciName="ciNameFromDataShow"
          />
        </div>
        <div
          v-if="domainName && ciNameFromDataShow"
          :key="domainName"
          class="col-sm-3 col-xs-10 right-table"
        >
          <CiListLoader
            :domainName="domainName"
            @ciNameCatch="ciNameCatch"
            @ciNameFromSearch="ciNameFromSearch"
          />
        </div>
        <div v-if="ciNameFromDataShow" class="col-sm-8 col-xs-10 left-table">
          <TableOfData
            :domainName="domainName"
            :ciName="ciNameFromDataShow"
            :key="ciNameFromDataShow"
          />
        </div>
      </div>
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
      domainName: "",
      ciNameFromDataShow: ""
    };
  },
  methods: {
    ciNameCatch(val) {
      this.ciNameFromDataShow = val;
    },
    onChange($event) {
      if ($event) {
        this.$set(this, "domainName", $event);
      }
    },
    ciNameFromSearch(val) {
      this.ciNameFromDataShow = val.table_name;
    }
  },
  watch: {
    domainName: "onChange"
  }
};
</script>

<style lang="scss" scoped>
.data-show {
  height: auto;
  direction: rtl;
  max-height: 30vh;
  .right-table {
    min-height: 70vh;
    max-height: 70vh;
  }
  .left-table {
    min-height: 70vh;
    max-height: 70vh;
    position: relative;
  }
  .without-ciName {
    width: 50%;
  }
  .application {
    margin-left: 2rem;
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
}
</style>
