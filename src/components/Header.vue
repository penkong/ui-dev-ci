<template>
  <div class="header">
    <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn" :key="userForHeader">
          <i class="fa fa-caret-down"></i>
          {{ userForHeader }}
        </button>
        <div class="dropdown-content">
          <ModalUpload class="upload" />
          <a @click="logout">خروج</a>
        </div>
      </div>
      <img src="https://cdn.quasar.dev/img/avatar.png" class="img" />
    </div>
  </div>
</template>

<script>
import EventBus from "../helpers/event-bus";
import { mapActions, mapGetters } from "vuex";
import ModalUpload from "../components/ModalUpload";
export default {
  name: "Header",
  components: {
    ModalUpload
  },
  data() {
    return {
      userInfos: null,
      userIn: "ناحیه کاربری"
    };
  },
  computed: {
    ...mapGetters("auth", ["userForHeader"])
  },
  methods: {
    ...mapActions("auth", ["logout"])
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
        a,
        .upload {
          font-family: "Shabnam-FD";
          direction: rtl;
          float: none;
          color: black;
          padding: 0.5rem 1rem;
          text-decoration: none;
          display: block;
          text-align: right;
        }
        & a:hover .upload:hover {
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
