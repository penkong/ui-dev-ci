<template>
  <div>
    <button class="button" @click.prevent="show">افزودن</button>
    <modal name="modal-add" class="modal-add" @opened="opened">
      <div>
        <h2>افزودن اطلاعات</h2>
        <form @submit.prevent="addRow">
          <div>
            <label for="id">ID</label>
            <input v-model="id" type="text" id="id" name="id" ref="ids" @keydown.shift.tab.prevent />
          </div>
          <div>
            <label for="title">title</label>
            <input v-model="title" type="text" id="title" name="title" />
          </div>
          <div>
            <button type="submit" class="bg-red text-white q-pa-lg">افزودن</button>
          </div>
        </form>
      </div>
    </modal>
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



