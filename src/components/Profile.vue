<template>
  <div class="profile">
    <div class="header">
      <div>
        <p>پروفایل کاربر</p>
        <span>ویرایش مشخصات کاربر</span>
      </div>
    </div>
    <div class="profile-data">
      <div class="user">
        <div class="card">
          <form @submit.prevent="registerUser">
            <div class="input-row">
              <div>
                <label for="firstName">نام</label>
                <input type="text" name="firstName" />
              </div>
              <div>
                <label for="lastName">نام خانوادگی</label>
                <input type="text" name="lastName" />
              </div>
            </div>
            <div class="input-row">
              <div>
                <label for="email">ایمیل</label>
                <input type="email" name="email" />
              </div>
              <div>
                <label for="phone">شماره تماس</label>
                <input type="text" name="phone" />
              </div>
            </div>
            <div class="desc">
              <label for="description">توضیحات</label>
              <textarea type="text" name="description" />
            </div>
            <button type="submit" class="register-btn">ثبت</button>
          </form>
        </div>
      </div>
      <div class="change-pass">
        <div class="left-card">
          <form @submit.prevent="registerUser">
            <div>
              <label for="oldPass">رمز عبور قبلی</label>
              <input type="text" name="oldPass" />
            </div>
            <div>
              <label for="newPass">رمز عبور جدید</label>
              <input type="text" name="newPass" />
            </div>
            <div>
              <label for="newPass">تکرار رمز عبور جدید</label>
              <input type="text" name="newPass" />
            </div>
            <button type="submit" class="change-btn">گذر واژه جدید</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  methods: {
    registerUser() {
      console.log("heelooo");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/abstract/_mixins.scss";
.profile {
  height: 100vh;
  direction: rtl;
  width: 100vw;
  overflow-y: visible;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  .header {
    height: 10rem;
    width: 91.7%;
    // background-color: blue;
    div {
      @include respond(tab-port) {
        margin-top: 7rem;
      }
      margin-top: 2.5rem;
      margin-right: 4.2rem;
      p {
        font-size: 1.5rem;
        margin-bottom: 0.3rem;
      }
      span {
        font-size: 1rem;
        color: #c4c3c3;
      }
    }
  }
  .profile-data {
    width: 91.7%;
    height: calc(100% - 3rem);
    display: flex;
    flex-direction: row;
    @include respond(tab-port) {
      flex-direction: column;
    }
    justify-content: center;
    align-items: center;
    .user {
      width: 60%;
      height: 100%;
      @include respond(tab-port) {
        width: 90%;
        height: auto;
      }
      .card {
        width: 90%;
        height: 90%;
        @include respond(tab-port) {
          height: auto;
          margin-top: 15rem;
        }
        @include respond(phone) {
          margin-top: 17rem;
        }
        background-color: #f7fafc;
        border-radius: 0.5rem;
        border: 1px solid #e6e6e6;
        form {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .input-row {
            width: 90%;
            display: flex;
            flex-direction: row;
            align-items: center;
            div {
              width: 90%;
              margin: 1rem 1rem;
              label {
                display: block;
                margin-bottom: 1rem;
              }
              input {
                border-radius: 0.25rem;
                outline: none;
                border: 1px solid #e6e6e6;
                padding: 0.5rem 1rem;
                width: 100%;
              }
            }
          }
          .desc {
            margin-top: 1rem;
            width: 100%;
            max-height: 35%;
            margin-right: 6rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            label {
              margin-bottom: 1rem;
            }
            textarea {
              border: 1px solid #e6e6e6;
              border-radius: 0.5rem;
              height: 9rem;
              max-height: 100%;
              min-width: 87%;
              max-width: 87%;
              outline: none;
            }
          }
          .register-btn {
            width: 87%;
            border: none;
            border-radius: 1rem;
            height: 8%;
            margin-top: 2rem;
            background-color: #2196f3;
            color: white;
            cursor: pointer;
            transition: all 0.4s ease-out;
            outline: none;
            @include respond(tab-port) {
              margin-bottom: 5rem;
            }
            &:hover {
              background-color: #007ee6;
              transform: scale(1.02);
            }
            &:active {
              background-color: #006cc5;
              transform: scale(0.98);
            }
          }
        }
      }
    }
    .change-pass {
      width: 30%;
      @include respond(tab-port) {
        width: 90%;
        height: auto;
      }

      height: 100%;
      .left-card {
        @include respond(tab-port) {
          height: auto;
        }
        width: 90%;
        height: 90%;
        background-color: #f7fafc;
        border-radius: 0.5rem;
        border: 1px solid #e6e6e6;
        form {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1rem;
          margin-right: 1rem;
          div {
            width: 90%;
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            label {
              margin-bottom: 1rem;
              display: block;
            }
            input {
              border-radius: 0.25rem;
              outline: none;
              border: 1px solid #e6e6e6;
              padding: 0.45rem 1rem;
              width: 90%;
            }
          }
          .change-btn {
            width: 80%;
            border: none;
            border-radius: 1rem;
            height: 8%;
            margin-top: 6.8rem;
            margin-left: 1.6rem;
            background-color: #2196f3;
            color: white;
            cursor: pointer;
            transition: all 0.4s ease-out;
            outline: none;

            @include respond(tab-port) {
              margin-bottom: 5rem;
            }
            &:hover {
              background-color: #007ee6;
              transform: scale(1.02);
            }
            &:active {
              background-color: #006cc5;
              transform: scale(0.98);
            }
          }
        }
      }
    }
  }
}
</style>
