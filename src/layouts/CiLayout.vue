<template>
  <q-layout class="column">
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
@import "../scss/abstract/_mixins.scss";
#data-style {
  overflow: hidden;
  max-height: 92vh;
  @include respond(big-desktop) {
    max-height: 94vh;
  }
  @include respond(phone) {
    overflow: scroll;
    max-height: fit-content;
    // height: fit-content; //
  }
  @include respond(phone-h) {
    overflow: hidden;
    max-height: auto;
  }
  @include respond(sm-phone-h) {
    overflow: hidden;
    max-height: auto;
  }
}
</style>
