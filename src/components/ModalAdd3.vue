<template>
  <div>
    <span>
      <button class="button" id="myBtn" @click="onClick">افزودن</button>
      <!-- The Modal -->
      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="modal-header">
            <h4 style="text-align: center;">افزودن به لیست</h4>
            <span class="close">&times;</span>
          </div>
          <div>
            <form class="fit column flex flex-center justify-center" style="margin-top: 2rem;">
              <div class="q-mb-lg q-mt-xl" style="text-align: right;">
                <label for="id" class="text-black q-ml-lg" style="font-size: 1rem;">شماره</label>
                <input type="text" id="id" name="id" ref="ids" @keydown.shift.tab.prevent />
              </div>
              <div class="q-mb-xs q-mt-lg">
                <label for="title" class="text-black q-ml-lg" style="font-size: 1rem;">عنوان</label>
                <input v-model="title" type="text" id="title" name="title" />
              </div>
              <div style="margin: 0 auto;text-align:center;">
                <button
                  type="submit"
                  class="text-white q-pa-xs"
                  style="border: none;
                background-color: rgba(0, 73, 156, 0.932);
                padding: 0.7rem 6rem;border-radius: 0.5rem;"
                >افزودن</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import EventBus from "../helpers/event-bus.js";
export default {
  name: "ModalAdd",
  data() {
    return {
      showModal: false,
      id: null,
      title: ""
    };
  },
  methods: {
    show() {
      this.$modal.show("modal-add");
    },
    // this.$modal.show("modal-register");
    // this.$modal.hide("modal-login");
    async addRow() {
      const url = "http://localhost:5000/ci/addrow";
      const dataForTable = { id: parseInt(this.id), title: this.title };
      try {
        const result = await this.axios.post(url, {
          id: parseInt(this.id),
          title: this.title,
          domainName: "water",
          ciName: "ci_ac_input"
        });
        if (result) {
          console.log(result.data[0]);
          EventBus.$emit("addedRow", dataForTable);
          this.hide();
          this.id = null;
          this.title = "";
        }
      } catch (error) {
        console.log(error);
      }
    },
    hide() {
      this.$modal.hide("modal-add");
    },
    beforeOpen($event) {
      console.log($event.params);
    },
    opened() {
      this.$refs.ids.focus();
    }
  }
};
</script>
<style lang="scss" scoped>
.button {
  display: block;
  border-radius: 3px;
  color: white;
  background-color: orange;
  border: none;
  padding: 0 1rem;
  height: 30px;
  cursor: pointer;
  margin-left: 1.75rem;
  transition: 0.3s all ease-in;
  &:hover {
    background-color: rgb(165, 107, 0);
    transform: scale(1.04);
  }
}
.modal-add .v--modal-overlay {
  position: absolute;
  left: 0;
}
.v--modal-box .v--modal {
  position: absolute;
  top: 0;
  left: 0;
}
.modal-add {
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    margin-left: auto;
  }
}
</style>



