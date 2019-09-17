<template>
  <q-page class="flex flex-center login-page">
    <h1>
      <Login />
    </h1>
  </q-page>
</template>

<style></style>

<script>
import Login from "../components/Login";
export default {
  name: "LoginPage",
  components: {
    Login
  }
};
</script>

<style lang="scss">
.login-page {
  direction: rtl;
}
</style>
