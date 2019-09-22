<template>
  <div class="row shadow-1">
    <nav class="sidenav col-1">
      <router-link to="/">
        <img src="statics/CI_LOGO.svg" alt="ci-manager" />
      </router-link>
      <router-link to="/ci" class="gutters">
        <i class="fas fa-home"></i>
      </router-link>
      <router-link to="/profile" class="gutters">
        <i class="fas fa-user-cog"></i>
      </router-link>
      <router-link to="/" class="gutters">
        <i class="fas fa-sign-out-alt"></i>
      </router-link>
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
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  padding-top: 0.5rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  .gutters {
    margin-bottom: 1.5rem;
  }
  a {
    padding: 0.5rem 0.7rem 0.5rem 1rem;
    text-decoration: none;
    margin-right: 0.5rem;
    font-size: 1.5rem;
    color: #242323;
    display: block;
    transition: all 0.6s ease;
    &:hover {
      transform: scale(1.1);
      color: #006fb9;
    }
    &:active:not(:first-child),
    &:focus:not(:first-child) {
      transform: scale(1.1);
      padding: 0.5rem 4rem 0.5rem 3rem;
      background-color: #f5f5f5;
      color: #006fb9;
    }
  }
}
</style>
