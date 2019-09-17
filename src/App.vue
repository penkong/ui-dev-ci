<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "scss/abstract/variables";
@import "scss/abstract/mixins";
@import "scss/base/base";
@font-face {
  font-family: "Shabnam-FD";
  src: url(./css/fonts/Shabnam-FD.woff2) format("woff2");
  font-weight: normal;
  font-style: normal;
}

#q-app {
  font-family: "Shabnam-FD";
  padding: 0;
  margin: 0;
}
</style>
