<template>
  <div class="header">
    <div style="margin-left: 1rem;" class="row text-left sl">
      <div class="q-pa-md" dir="rtl">
        <q-avatar class="q-mr-3">
          <img src="https://cdn.quasar.dev/img/avatar.png" class="img" />
        </q-avatar>
        <q-btn-dropdown color="white" label="کاربر محترم" class="text-blue-10 shadow-0">
          <q-list>
            <q-item
              clickable
              v-close-popup
              @click="onItemClick"
              class="font-set text-blue-10"
              dir="rtl"
            >
              <q-item-section>
                <q-item-label>تغییر تصویر کاربر</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="onLogout"
              class="font-set text-blue-10"
              dir="rtl"
            >
              <q-item-section>
                <q-item-label>خروج</q-item-label>
              </q-item-section>
            </q-item>
            <template v-slot:after>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
  </div>
  <!-- <header class="header"></header> -->
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
  img {
  }

  // .sidenav a {
  //   padding: 0.5rem 0.7rem 0.5rem 1rem;
  //   text-decoration: none;
  //   margin-right: 0.5rem;
  //   font-size: 1.5rem;
  //   color: #242323;
  //   display: block;
  // }

  // .sidenav a:hover {
  //   color: #f1f1f1;
  // }
}
@font-face {
  font-family: "Shabnam-FD";
  src: url(../css/fonts/Shabnam-FD.woff2) format("woff2");
  font-weight: normal;
  font-style: normal;
}

.font-set {
  font-family: "Shabnam-FD";
}
</style>
