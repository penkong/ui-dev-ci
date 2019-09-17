<template>
  <div class="header">
    <div style="margin-left: 1rem;" class="row text-left sl">
      <!-- <q-select
        transition-show="scale"
        transition-hide="scale"
        borderless
        standout="bg-grey-3 text-white q-pa-0 float-right"
        v-model="model"
        :options="options"
        :dense="dense"
        class="col-xl-3 col-sm-3"
      >


        <template v-slot:prepend>
          <q-icon v-if="model !== ''" name="close" @click.stop="model = ''" class="cursor-pointer" />
        </template>
      </q-select>-->
      <div class="q-pa-md" dir="rtl">
        <q-avatar class="q-mr-xs">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
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
@font-face {
  font-family: "Shabnam-FD";
  src: url(../css/fonts/Shabnam-FD.woff2) format("woff2");
  font-weight: normal;
  font-style: normal;
}

.font-set {
  font-family: "Shabnam-FD";
}

.header {
  .q-menu .scroll {
    font-family: "Shabnam-FD";
    direction: rtl;
  }
  margin-right: auto;
  width: 100vw;
}
</style>
