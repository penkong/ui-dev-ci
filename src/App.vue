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
@font-face {
  font-family: "Shabnam-FD";
  src: url(./css/fonts/Shabnam-FD.woff2) format("woff2");
  font-weight: normal;
  font-style: normal;
}

#q-app {
  font-family: "Shabnam-FD";
}
</style>
