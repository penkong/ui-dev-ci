<template>
  <div class="login">
    <div class="img-container">
      <img src="statics/logo.png" alt />
    </div>
    <form @submit.prevent="loginUser">
      <div class="first-input">
        <input v-model="username" type="text" name="email" placeholder="نام کاربری" />
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </div>
      <div>
        <input v-model="password" type="password" name="password" placeholder="کلمه عبور" />
        <i class="fa fa-lock" aria-hidden="true"></i>
      </div>
      <p>
        <input type="checkbox" ref="checkbox" @click="rememberMe($event)" />
        <span @click="checkBox">مرا به خاطر داشته باش</span>
      </p>
      <button type="submit">
        <span>ورود</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: null,
      toggler: false
    };
  },
  methods: {
    async loginUser() {
      if (this.username && this.password) {
        const confObj = {
          username: this.username,
          password: this.password,
          remember: this.toggler
        };
        // const url = "http://192.168.100.181:1234/users/login";
        // const logUser = await this.axios.post(url, confObj);
        console.log(confObj, "login config");
      }
      this.username = "";
      this.password = null;
    },
    rememberMe($event) {
      console.log($event.target.value);
      if ($event.target.value === "on") {
        this.toggler = true;
      }
    },
    checkBox() {
      this.$refs.checkbox.checked = !this.toggler;
      this.toggler = !this.toggler;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/abstract/_mixins.scss";
.login {
  font-size: 1rem;
  position: absolute;
  top: 5rem;
  right: 9rem;
  @include respond(phone) {
    right: 2rem;
    height: 45rem;
    width: 40rem;
  }
  background-color: rgb(255, 255, 255);
  border-radius: 1rem;
  height: 35rem;
  width: 30rem;

  .img-container {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    height: 8rem;
    img {
      // margin-top: 2rem;
      width: 90%;
    }
    @include respond(phone) {
      margin-bottom: 3rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      position: relative;
      input {
        outline: none;
        width: 22.5rem;
        direction: rtl;
        height: 1rem;
        background-color: #f0f0f0;
        border-radius: 0.7rem;
        padding: 1.5rem 3rem 1.5rem 3rem;
        border: 1px solid #b6b6b6;
        &::placeholder {
          color: #b6b6b6;
        }
      }
      .first-input {
        margin-top: 6rem;
        margin-bottom: 0 !important;
      }
      i {
        position: absolute;
        margin-right: 0.8rem;
        right: 0.4rem;
        top: 2.4rem;
        color: #b6b6b6;
      }
    }

    p {
      input {
        color: #2196f3;
        margin-left: 0.5rem;
      }
      span {
        color: #2196f3;
      }
      width: 73%;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      height: 3rem;
      outline: none;
      align-items: center;
      flex-direction: row;
      @include respond(phone) {
        margin-bottom: 3rem;
        margin-right: 6.5rem;
      }
    }

    button {
      background-color: #2196f3; /* Green */
      color: rgb(255, 255, 255);
      border-radius: 0.9rem;
      width: 22rem;
      height: 3rem;
      border: none;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      text-decoration: none;
      font-size: 16px;
      position: relative;
      text-align: center;
      cursor: pointer;
      transition: all 0.4s ease-out;
      outline: none;
      &:hover {
        background-color: #007ee6;
        transform: scale(1.02);
      }
      &:active {
        background-color: #006cc5;
        transform: scale(0.98);
      }
      span {
        outline: none;
        position: absolute;
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 1.5rem;
        right: 9rem;
        top: -1.6rem;
      }
    }
  }
}
</style>
