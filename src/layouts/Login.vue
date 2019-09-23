<template>
  <q-layout class="styled">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../scss/abstract/_mixins.scss";
.styled {
  overflow: hidden;
  position: relative;
  max-height: 100vh;
  background-image: url("../statics/bg-image.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
