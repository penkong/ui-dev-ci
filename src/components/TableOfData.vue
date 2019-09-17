

<template>
  <div class="q-pa-md">
    <table class="data-table fixed_header">
      <thead>
        <tr>
          <th>head1</th>
          <th>ID</th>
          <th>عنوان</th>
          <th>تاریخ ثبت</th>
          <th>امکانات</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="n in 100" :key="n">
          <td>cell1_1</td>
          <td>cell2_1</td>
          <td>cell3_1</td>
          <td>cell4_1</td>
          <td>
            <button :key="size" v-for="size in sizes">...</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "TableOfData",
  data() {
    return {
      sizes: ["xs"]
    };
  }
};
</script>
<style lang="scss" scoped>
/////
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
    padding: 0.3rem 0.5rem;
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
