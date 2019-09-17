<template>
  <SafaComboBox
    style="min-width: 100%;"
    :m="m"
    :c="c"
    :align="align"
    :height="height"
    :width="width"
    :value="value"
    :label="label"
    :dense="dense"
    :placeholder="placeholder"
    :helper="helper"
    :items="items"
    :DtoName="DtoName"
    :Domain="Domain"
    :HideValue="HideValue"
    @inputer="checkInfo"
    @selectedVal="selectedVal"
  />
</template>

<script>
export default {
  name: "DomainCombo",
  data() {
    return {
      m: "e",
      c: "1",
      align: "left",
      width: "100px",
      height: "100px",
      value: "",
      label: "",
      dense: true,
      placeholder: "انتخاب",
      helper: "تصحیح شود",
      items: [
        { title: "گاز", id: "1" },
        { title: "آب", id: "2" },
        { title: "معدن", id: "3" }
      ],
      DtoName: "",
      Domain: "",
      HideValue: true
    };
  },
  methods: {
    checkInfo(val) {
      console.log(val, "i am checkInfo");
    },
    selectedVal(p) {
      console.log(p, "i am selected val");
    }
  }
};
</script>

<style>
</style>
