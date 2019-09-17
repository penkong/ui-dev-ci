<template>
  <q-layout class="column ci-layout">
    <div class="col-1">
      <Header />
    </div>
    <div class="col-12">
      <div class="row">
        <div>
          <SideBar />
        </div>
        <q-page-container class="col-11 bg-grey-2" id="data-style">
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script>
import Header from "../components/Header";
import SideBar from "../components/SideBar";
export default {
  components: {
    Header,
    SideBar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#data-style {
  float: left;
}
</style>
