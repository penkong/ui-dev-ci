<template>
  <div class="header">
    <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn">
          <i class="fa fa-caret-down"></i>
          ناحیه کاربری
        </button>
        <div class="dropdown-content">
          <router-link to="/">تغییر تصویر</router-link>
          <router-link to="/logout">خروج</router-link>
        </div>
      </div>
      <img src="https://cdn.quasar.dev/img/avatar.png" class="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      model: null,
      options: ["تغییر تصویر", "خروج"],
      dense: true,
      denseOpts: true
    };
  },
  methods: {
    onItemClick() {
      console.log("Clicked on an Item");
    },
    onLogOut() {
      console.log("on log out");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/abstract/_mixins.scss";
.header {
  z-index: 5;
  background-color: rgb(255, 255, 255);
  z-index: 100;
  .navbar {
    overflow: hidden;
    font-family: Arial;
    margin-left: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .dropdown {
      float: left;
      overflow: hidden;
      & .dropbtn {
        font-size: 0.8rem;
        border: none;
        outline: none;
        color: rgba(54, 54, 54, 0.603);
        padding: 0.5rem 2.7rem;
        margin-left: 2rem;
        background-color: white;
        font-family: "Shabnam-FD";
        /* Important for vertical align on mobile phones */
        margin: 0;
      }
      &:hover .dropdown-content {
        display: block;
      }
      .dropdown-content {
        margin-left: 2rem;
        width: 10rem;
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 7.9rem;
        z-index: 5;
        a {
          font-family: "Shabnam-FD";
          direction: rtl;
          float: none;
          color: black;
          padding: 0.5rem 1rem;
          text-decoration: none;
          display: block;
          text-align: right;
        }
        & a:hover {
          background-color: rgb(255, 242, 218);
        }
      }
    }
    img {
      height: 2.5rem;
      width: 2.5rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 50%;
      margin-left: 0.3rem;
    }
    & a:hover,
    .dropdown:hover .dropbtn {
      background-color: rgb(255, 242, 218);
    }
  }
}
</style>
