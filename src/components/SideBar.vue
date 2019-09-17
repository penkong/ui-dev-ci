<template>
  <div class="col-1">
    <q-drawer
      side="right"
      v-model="drawerRight"
      show-if-above
      :width="80"
      :breakpoint="300"
      content-class="bg-white"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm flex flex-center">
          <q-item-section avatar>
            <q-icon name="img:statics/CI_LOGO.svg" />
          </q-item-section>
          <br />
          <br />

          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <br />

          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>

          <br />

          <q-item-section avatar>
            <q-icon name="inbox" />
          </q-item-section>
        </div>
      </q-scroll-area>
    </q-drawer>
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

<style>
</style>
