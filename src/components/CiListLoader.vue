<template>
  <div class="ci-list" dir="rtl">
    <q-linear-progress
      indeterminate
      stripe
      :buffer="0"
      :value="0.99"
      v-if="progressBar"
      color="light-blue-6"
      :key="domainName"
      class="q-mt-sm"
    />
    <table ref="table" v-if="!progressBar" class="data-table">
      <thead>
        <tr>
          <th style="font-size: 0.6rem;">
            انتخاب نوع سند
            <input
              class="input-field"
              type="text"
              placeholder="جست و جو"
              v-model="searchTerm"
            />
            <i class="fas fa-search" @click="callSearchTerm"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(option, index) in options" :key="index">
          <td @click="ciNameCatch(option)" style="cursor:pointer;">{{ option.table_desc }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "CiListLoader",
  props: {
    domainName: {
      type: String,
      validator: v => ["water", "gas", "mine"].includes(v)
    }
  },
  data() {
    return {
      text: "",
      options: null,
      searchTerm: "",
      progressBar: false
    };
  },
  created() {
    this.loadCiList();
  },
  methods: {
    callSearchTerm() {
      this.options = this.options.filter(
        el => el.table_desc === this.searchTerm
      );
    },
    async loadCiList() {
      try {
        this.progressBar = true;
        const url = `${process.env.ciServer}/ci/getcilist`;
        const result = await this.axios.post(url, {
          domainName: this.domainName
        });
        const data = result.data;
        if (data) {
          this.options = data;
        }
        this.progressBar = false;
        return this.options;
      } catch (error) {
        console.log(error);
      }
    },
    ciNameCatch(option) {
      this.$emit("ciNameCatch", option.table_name);
    }
  }
};
</script>
<style lang="scss" scoped>
.ci-list {
  overflow: auto;
  height: 70vh;
  .tables {
    direction: rtl;
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
    tbody {
      display: block;
      width: 100%;
      overflow: auto;
      height: 60vh;
    }
    td {
      width: 100vw;
      border: 1px solid #ffffff;
      padding: 0.6rem 0.5rem;
      cursor: pointer;
      // width: 100vw;
    }
    th {
      border: 1px solid #ffffff;
      padding: 0.3rem 0.5rem;
      // width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        padding: 0 3px;
        padding-top: px;
        margin: 0 1rem;
        cursor: pointer;
      }
      input {
        border: 1px solid #d8d8d8;
        border-radius: 5px;
        margin-right: 2rem;
        width: 50%;
        outline: none;
        padding: 0.3rem 0.65rem;
      }
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
    }
    tbody td {
      font-size: 12px;
      color: #555555;
    }
    tr:nth-child(even) {
      background: #f5f5f5;
    }
    thead tr {
      display: block;
    }
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
    tfoot td {
      font-size: 1rem;
    }
  }
}
</style>
