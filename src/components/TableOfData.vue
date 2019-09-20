

<template>
  <div>
    <table class="data-table fixed_header" @load="loadDataTable">
      <thead>
        <tr>
          <th style="padding-bottom: 0.15rem;width: 8rem;text-align: center;">شماره</th>
          <th style="padding-bottom: 0.15rem;width: 34rem;text-align:center;">عنوان</th>
          <th style="padding-bottom: 0.15rem;text-align: center;">امکانات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="option in options" :key="option.ID || option.id">
          <!-- problem in data base in sql we have ID and Title in postqre we have id and title -->
          <td style="color: #c7c6c6;width: 8rem;">{{ option.ID || option.id}}</td>
          <td style="width: 34rem;">{{ option.Title || option.title }}</td>
          <td style="text-align: center;">
            <div class="dropdown">
              <button>...</button>
              <div class="dropdown-content">
                <ModalEdit
                  :idProp="option.ID || option.id"
                  :title="option.Title || option.title"
                  :domainName="domainName"
                />
                <span @click="deleteRow(option.ID || option.id)">
                  <i class="far fa-trash-alt"></i>حذف
                </span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import ModalEdit from "./ModalEdit";
import EventBus from "../helpers/event-bus";
export default {
  name: "TableOfData",
  components: {
    ModalEdit
  },
  props: {
    domainName: {
      type: String
    },
    ciName: {
      type: String
    }
  },
  data() {
    return {
      sizes: ["xs"],
      options: null
    };
  },

  mounted() {
    EventBus.$on("addedRow", payload => {
      if (this.options) {
        this.options.push(payload);
      }
    });

    this.loadDataTable(this.ciName, this.domainName);
  },
  methods: {
    async loadDataTable(name, domName) {
      console.log(name, "from load data table");
      try {
        const url = "http://localhost:5000/ci/get";
        const confObj = {
          domainName: domName,
          ciName: name.toString()
        };
        let result = await this.axios.post(url, confObj);
        const data = result.data;
        if (data) {
          this.options = data;
        }
        return this.options;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteRow(idForDelete) {
      const url = "http://localhost:5000/ci/delete";
      const idForExec = this.options.find(el => el.id === idForDelete).id;
      const confObj = {
        id: parseInt(idForExec),
        domainName: this.domainName,
        ciName: this.ciName
      };
      try {
        let result = await this.axios.post(url, confObj);
        if (result) this.loadDataTable(this.ciName, this.domainName);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
/////
.maghaze {
  position: absolute;
  z-index: 100;
  top: -1.6rem;
  font-size: 0.75rem;
  color: #c7c6c6;
  margin-left: 22rem;
}
.data-table {
  box-sizing: border-box;
  text-align: right;
  border: 0px solid inherit;
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;
  text-align: right;
  border-collapse: collapse;
  thead {
    background: #ffffff;
    background: -moz-linear-gradient(
      top,
      #ffffff 0%,
      #ffffff 66%,
      #ffffff 100%
    );
    background: -webkit-linear-gradient(
      top,
      #ffffff 0%,
      #ffffff 66%,
      #ffffff 100%
    );
    background: linear-gradient(
      to bottom,
      #ffffff 0%,
      #ffffff 66%,
      #ffffff 100%
    );
    // border-bottom: 2px solid #ffffff;
    border: none;
  }
  thead th {
    font-size: 0.8rem;
    font-weight: bold;
    color: #7a7a7a7c;
    text-align: right;
    border-left: 2px solid #f5f5f5;
  }
  thead th:first-child {
    border-left: none;
  }
  thead tr {
    display: block;
  }
  tbody {
    display: block;
    width: 100%;
    overflow: auto;
    height: 60vh;
  }
  tbody td {
    font-size: 12px;
    color: #555555;
  }

  tr:nth-child(even) {
    background: #f5f5f5;
  }
  td,
  th {
    border: 1px solid #ffffff;
    padding: 0.8rem 0.65rem;
    width: 11rem;
  }
  td button {
    color: blue;
    display: block;
    background-color: white;
    width: 6.9rem;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    transition: all 0.3s ease;
    //
    // background-color: #4caf50;
    // color: white;
    // padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: rgba(0, 73, 156, 0.623);
      background-color: rgba(0, 73, 156, 0.932);
      transform: scale(1.04);
    }
  }
  /* The container <div> - needed to position the dropdown content */
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
}
</style>
