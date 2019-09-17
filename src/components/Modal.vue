<template>
  <!-- <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">default header</div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="passData">افزودن</button>
              <button class="modal-default-button" @click="$emit('close')">بستن</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>-->
  <!-- <div>
    <form>
      <button class="modal-default-button" @click="passData">افزودن</button>
      <button class="modal-default-button" @click="$emit('close')">بستن</button>
    </form>
  </div>-->
  <div>
    <div class="container">
      <div class="interior">
        <a class="btn" href="#open-modal">👋 Basic CSS-Only Modal</a>
      </div>
    </div>
    <div id="open-modal" class="modal-window">
      <div>
        <a href="#" title="Close" class="modal-close">Close</a>
        <h1>Voilà!</h1>
        <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
        <div>
          <small>Check out</small>
        </div>
        <div>
          <a href="https://aminoeditor.com" target="_blank">👉 Amino: Live CSS Editor for Chrome</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      showModal: false
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.modal-window {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  &:hover {
    color: black;
  }
}

/* Demo Styles */

html,
body {
  height: 100%;
}

body {
  font: 600 18px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  background-image: linear-gradient(to right, #7f53ac 0, #657ced 100%);
  color: black;
}

a {
  color: inherit;
}

.container {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}

small {
  color: #aaa;
}

.btn {
  background-color: #fff;
  padding: 1em 1.5em;
  border-radius: 3px;
  text-decoration: none;
  i {
    padding-right: 0.3em;
  }
}

// .modal-mask {
//   position: fixed;
//   z-index: 9998;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: table;
//   transition: opacity 0.3s ease;
// }

// .modal-wrapper {
//   display: table-cell;
//   vertical-align: middle;
// }

// .modal-container {
//   width: 300px;
//   margin: 0px auto;
//   padding: 20px 30px;
//   background-color: #fff;
//   border-radius: 2px;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
//   transition: all 0.3s ease;
//   font-family: Helvetica, Arial, sans-serif;
// }

// .modal-header h3 {
//   margin-top: 0;
//   color: #42b983;
// }

// .modal-body {
//   margin: 20px 0;
// }

// .modal-default-button {
//   float: right;
// }

// /*
//  * The following styles are auto-applied to elements with
//  * transition="modal" when their visibility is toggled
//  * by Vue.js.
//  *
//  * You can easily play with the modal transition by editing
//  * these styles.
//  */

// .modal-enter {
//   opacity: 0;
// }

// .modal-leave-active {
//   opacity: 0;
// }

// .modal-enter .modal-container,
// .modal-leave-active .modal-container {
//   -webkit-transform: scale(1.1);
//   transform: scale(1.1);
// }
</style>
