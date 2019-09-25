<template>
  <span>
    <button
      id="myBtn"
      style="border: none; background-color: inherit;outline: none; cursor: pointer;"
      @click="onOpenModal"
    >تغییر تصویر</button>
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
            <input type="file" id="avatar" name="avatar" class="inputfile" />
            <label for="avatar">
              <span>
                <i class="fas fa-cloud-upload-alt"></i>
              </span>
            </label>
            <button
              type="submit"
              class="text-white q-pa-xs"
              style="border: none;
                background-color: rgba(0, 73, 156, 0.932);
                padding: 0.7rem 6rem;border-radius: 0.5rem;"
            >بارگذاری</button>
          </form>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
export default {
  name: "ModalUpload",
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
@import "../scss/abstract/_mixins.scss";
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
        margin-left: 15rem;
        font-size: 1.5rem;
      }
      span {
        color: rgba(0, 73, 156, 0.923);
        position: absolute;
        top: -0.3rem;
        left: -1rem;
        padding: 0;
        margin: 0;
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

      .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
      .inputfile + label {
        height: 10rem;
        width: 20rem;
        margin-top: 3rem;
        font-size: 1.25em;
        font-weight: 700;
        display: inline-block;
        border-radius: 6px;
        border: 3px dashed rgb(223, 223, 223);
        text-align: center;
        outline: none;
        cursor: pointer;
        span {
          i {
            color: rgb(196, 196, 196);
            font-size: 5rem;
            margin-top: 1rem;
          }
        }
      }
      .inputfile > i {
        color: black;
        width: 5rem;
        height: 5rem;
      }
      .inputfile:focus + label,
      .inputfile + label:hover {
        color: red;
      }
      button {
        margin-top: 5rem;
        width: 20rem;
        font-size: 1.5rem;
        @include respond(tab-port) {
          margin-top: 3rem;
        }
        color: white;
        border: none;
        background-color: rgba(0, 73, 156, 0.932);
        padding: 0.4rem 4rem;
        border-radius: 0.5rem;
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










