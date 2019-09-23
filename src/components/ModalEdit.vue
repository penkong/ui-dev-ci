<template>
  <span>
    <button
      id="myBtn"
      style="border: none; background-color: inherit;outline: none; cursor: pointer;"
      @click="onOpenModal"
    >
      <i class="fas fa-pen-square"></i>
      ویرایش
    </button>
    <!-- The Modal -->
    <div id="myModal" class="modal" ref="openModal">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <h4 style="text-align: center;">ویرایش عنوان</h4>
          <span class="close" @click="closeModal" ref="closeModal">&times;</span>
        </div>
        <div>
          <form
            @submit.prevent="editRow"
            class="fit column flex flex-center justify-center"
            style="margin-top: 2rem;"
          >
            <div class="q-mb-lg q-mt-xl" style="text-align: right;">
              <label for="id" class="text-black q-ml-lg" style="font-size: 1rem;">شماره</label>
              <input
                disabled
                :value="idProp"
                type="text"
                id="id"
                name="id"
                ref="ids"
                @keydown.shift.tab.prevent
              />
            </div>
            <div class="q-mb-xs q-mt-lg">
              <label for="title" class="text-black q-ml-lg" style="font-size: 1rem;">عنوان</label>
              <input v-model="titleData" ref="titleForEdit" type="text" id="title" name="title" />
            </div>
            <div style="margin: 0 auto;text-align:center;">
              <button
                type="submit"
                class="text-white q-pa-xs"
                style="border: none;
                background-color: rgba(0, 73, 156, 0.932);
                padding: 0.7rem 6rem;border-radius: 0.5rem;"
              >ویرایش</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
// import EventBus from "../helpers/event-bus.js";
export default {
  name: "ModalEdit",
  data() {
    return {
      titleData: ""
    };
  },
  props: {
    idProp: {
      type: Number
    },
    domainName: {
      type: String
    },
    title: {
      type: String
    },
    ciName: {
      type: String
    }
  },
  mounted() {
    this.titleData = this.title;
  },
  methods: {
    onOpenModal() {
      this.$refs.openModal.style.display = "block";
    },
    closeModal() {
      this.$refs.openModal.style.display = "none";
    },
    async editRow() {
      try {
        const url = `${process.env.ciServer}/ci/addrow`;
        const confObj = {
          id: parseInt(this.idProp),
          title: this.titleData,
          domainName: this.domainName,
          ciName: this.ciName
        };
        const result = await this.axios.post(url, confObj);
        if (result.data) {
          this.$refs.openModal.style.display = "none";
        }
        const dataForTable = {
          id: parseInt(this.idProp),
          title: this.titleData
        };
        this.$emit("editedRow", dataForTable);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 7rem;
    text-align: right;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 3px;
    /* Links inside the dropdown */
  }
  .dropdown-content span {
    border-radius: 3px;
    color: rgba(0, 73, 156, 0.932);
    padding: 0.6rem 1rem;
    text-decoration: none;
    display: block;
    cursor: pointer;
    /* Change color of dropdown links on hover */
    &:hover {
      // background-color: #192442;
      color: rgb(255, 255, 255);
      i {
        color: rgba(255, 255, 255, 1);
      }
    }
    i {
      margin-left: 1rem;
      color: rgba(0, 73, 156, 0.923);
    }
  }
  /* Show the dropdown menu on hover */
  &:hover .dropdown-content {
    display: block;
  }
}

/* The Modal (background) */
#myBtn {
  &:hover {
    color: white;
  }
}

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
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 9999; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  margin-right: 22rem;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 1.5rem;
    border: 1px solid #888;
    width: 27rem;
    height: 27rem;
    z-index: 9999;
    position: relative;
    .modal-header {
      padding: 0.7rem 1rem;
      background-color: rgb(0, 94, 202);
      color: white;
      width: 100%;
      position: absolute;
      top: 0;
      text-align: right;
      right: 0;
      left: 0;
      h4 {
        text-align: right;
        margin-left: 9rem;
        // position: absolute;
        // right: 0;
      }
      span {
        // background-color: inherit;
        color: rgba(0, 73, 156, 0.923);
        position: absolute;
        top: -0.7rem;
        left: -1rem;
        padding: 0;
        margin: 0;
        /* The Close Button */
      }
      .close {
        color: #ffffff;
        position: absolute;
        left: 1rem;
        z-index: 40;
        padding: 1rem;
        margin-left: -1rem;
        float: right;
        font-size: 2rem;
        font-weight: bold;
        // background-color: #fff;
      }

      .close:hover,
      .close:focus {
        text-decoration: none;
        cursor: pointer;
      }
    }
    form {
      position: relative;
      margin-top: 3rem;
      input {
        padding: 0.5rem 1rem;
        border: 1px solid rgb(223, 223, 223);
        border-radius: 3px;
      }
      button {
        margin-top: 3rem;
        color: white;
        border: none;
        background-color: rgba(0, 73, 156, 0.932);
        padding: 0.7rem 4rem;
        border-radius: 0.5rem;
        // width: 6rem;
        // text-align: right;
        font-size: 1.4rem;
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          transform: scale(1.02);
          background-color: rgb(0, 94, 202);
        }
      }
    }
  }
}
</style>










