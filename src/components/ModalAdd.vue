<template>
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
    title: {
      type: String
    }
  },
  mounted() {
    // this.onMount();
  },
  methods: {
    onclick() {
      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal
      btn.onclick = function() {
        modal.style.display = "block";
      };

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
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
      background-color: #192442;
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
.modal-header {
  padding: 1rem 2rem;
  background-color: rgb(0, 94, 202);
  color: white;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  span {
    background-color: inherit;
    color: rgba(0, 73, 156, 0.923);
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
  }
}
/* The Modal (background) */
form {
  position: relative;
  input {
    padding: 0.5rem 1rem;
    border: 1px solid rgb(223, 223, 223);
    border-radius: 3px;
  }
  button {
    position: absolute;
    bottom: -10rem;
    right: 5rem;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      transform: scale(1.02);
      // color: rgb(0, 94, 202);
      background-color: rgb(0, 94, 202);
    }
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
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  height: 70%;
  z-index: 9999;
  position: relative;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 1rem;
  font-weight: bold;
  background-color: #fff;
}

.close:hover,
.close:focus {
  background-color: #fff;

  text-decoration: none;
  cursor: pointer;
}
</style>










