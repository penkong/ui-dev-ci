<template>
  <q-layout class="column">
    <div class="col-1">
      <Header />
    </div>
    <div class="col-12">
      <div class="row">
        <div>
          <SideBar class="sidebar" />
        </div>
        <q-page-container class="col-11 bg-grey-2" id="profile-style">
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
  name: "ProfileLayout",
  components: {
    Header,
    SideBar
  },
  data() {
    return {
      leftDrawer: true
    };
  }
};
</script>

<style lang="scss">
@import "../scss/abstract/_mixins.scss";
#profile-style {
  overflow: hidden;
  max-height: 93vh;
  @include respond(big-desktop) {
    max-height: 93vh;
  }
  @include respond(phone) {
    max-height: auto;
    height: auto; //
  }
  @include respond(tab-port) {
    padding: 1rem 0rem;
    .sidebar {
      min-height: 140vh;
    }
    height: 140vh;
    // overflow-x: scroll;
    overflow-y: visible;
    max-height: auto;
    height: auto; //
  }
}
</style>
