

<template>
  <div>
    <div class="maghaze">جزییات سند مغازه</div>
    <table class="data-table fixed_header" @load="loadDataTable">
      <thead>
        <tr>
          <th style="padding-bottom: 0.15rem;">انتخاب</th>
          <th style="padding-bottom: 0.15rem;">شماره</th>
          <th style="padding-bottom: 0.15rem;">عنوان</th>
          <th style="padding-bottom: 0.15rem;">تاریخ ثبت</th>
          <th style="padding-bottom: 0.15rem;">امکانات</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="option in options" :key="option.id">
          <td>
            <input type="checkbox" name id style="border: none;" />
          </td>
          <td style="color: #c7c6c6;">{{ option.id}}</td>
          <td>{{ option.title }}</td>
          <td style="color: #c7c6c6;">data come here</td>
          <td>
            <button :key="size" v-for="size in sizes">...</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import EventBus from "../helpers/event-bus";
export default {
  name: "TableOfData",
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

    this.loadDataTable(this.ciName.table_name, this.domainName);
  },
  methods: {
    async loadDataTable(name, domName) {
      try {
        const url = "http://localhost:5000/ci/get";
        console.log(domName);
        console.log(name);
        const confObj = {
          domainName: domName,
          ciName: name
        };
        let result = await this.axios.post(url, confObj);
        // console.log(JSON.parse(result));
        const data = result.data;
        if (data) {
          this.options = data;
        }
        return this.options;
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
    width: 2rem;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    cursor: pointer;
    text-align: center;
    margin: 0 auto;
    transition: all 0.3s ease;
    &:hover {
      color: white;
      background-color: rgba(0, 73, 156, 0.623);
      transform: scale(1.04);
    }
  }
  tbody td {
    font-size: 12px;
    color: #555555;
  }
  tr:nth-child(even) {
    background: #f5f5f5;
  }
}
</style>
