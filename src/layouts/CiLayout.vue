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
import { mapActions } from "vuex";
export default {
  components: {
    Header,
    SideBar
  },
  data() {
    return {};
  },
  created() {
    this.fetchUser();
  },
  methods: {
    ...mapActions("auth", ["fetchUser"])
  }
};
</script>

<style lang="scss">
@import "../scss/abstract/_mixins.scss";
#data-style {
  overflow: hidden;
  max-height: 92vh;
  @include respond(big-desktop) {
    max-height: 93vh;
  }
  @include respond(tab-port) {
    overflow: auto;
    max-height: auto;
    height: auto;
  }
}
</style>
