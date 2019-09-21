<template>
  <div class="login">
    <div class="img-container">
      <img src="statics/logo.png" alt />
    </div>
    <form @submit.prevent="loginUser">
      <div class="user">
        <input v-model="userName" type="text" name="email" placeholder="Email" />

        <span>
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </span>
      </div>
      <div class="password">
        <input v-model="password" type="password" name="pass" placeholder="Password" />
        <span>
          <i class="fa fa-lock" aria-hidden="true"></i>
        </span>
      </div>
      <div class="remember-me">
        <input type="checkbox" />
        مرا به خاطر داشته باش
      </div>
      <div class="blu-btn">
        <button type="submit">ورود</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: null
    };
  },
  methods: {
    loginUser() {
      console.log("hello");
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  font-size: 1rem;
  position: absolute;
  top: 3rem;
  right: 9rem;
  background-color: red;
  height: 40rem;
  width: 30rem;
  .img-container {
    width: 90%;
    img {
      width: 90%;
    }
  }
  form {
    .user,
    .password {
      margin: 0.5rem 1rem;
      position: relative;
      input {
        border: none;
        width: 12rem;
        height: 1rem;
        border-radius: 4px;
        padding: 1rem;
      }
      span {
        position: absolute;
        right: 0.4rem;
        top: 0;
      }
    }
    // .password {
    //   width: 8rem;
    //   height: 2rem;
    // }
    .remember-me {
      height: 2rem;
    }
    .blu-btn {
      height: 2rem;
    }
  }
}
</style>
