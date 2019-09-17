<template>
  <div class="row">
    <div class="sidenav col-1">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#clients">Clients</a>
      <a href="#contact">Contact</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>

<style>
.sidenav {
  height: 100vh;
  /* width: 160px; */
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(196, 196, 196);
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #242323;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
</style>
