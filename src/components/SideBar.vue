<template>
  <div class="row shadow-1">
    <nav class="sidenav col-1">
      <router-link to="/ci">
        <img src="statics/CI_LOGO.svg" alt="ci-manager" />
      </router-link>
      <router-link to="/">Services</router-link>
      <router-link to="/">Clients</router-link>
      <router-link to="/">Contact</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      drawerRight: false
    };
  }
};
</script>

<style lang="scss" scoped>
.sidenav {
  height: 100vh;
  /* width: 160px; */
  // position: fixed;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  padding-top: 1.5rem;
  z-index: 100;
}

.sidenav a {
  padding: 0.5rem 0.7rem 0.5rem 1rem;
  text-decoration: none;
  margin-right: 0.5rem;
  font-size: 1.5rem;
  color: #242323;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
</style>
