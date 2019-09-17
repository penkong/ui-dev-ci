<template>
  <q-layout class="sl" view="hHr lpr fFr">
    <q-header class="bg-white text-grey-1" height-hint="10">
      <Header />
    </q-header>

    <!-- <q-drawer v-model="right" side="right" overlay behavior="desktop">
    </q-drawer>-->
    <div class="row">
      <SideBar />
    </div>

    <q-page-container class="bg-grey-2 ml-1 mr-1">
      <router-view />
    </q-page-container>
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
.sl {
  max-height: 100vh !important;
}
</style>
