<template>
  <div>
    <!-- ref="OrderTable -->
    <el-table 
      border
      v-loading="loading"
      :data="DataList"
      highlight-current-row
      :height="height"
      @row-click="handleSelectedRow"
      @selection-change="handleSelectionChange">
      <el-table-column
        v-for="item in cols" 
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        >
      </el-table-column>
    </el-table>  
  </div>  
</template>
<script>
export default {
  props: {
    DataList: {
      type: Array,
      default: []
    },
    cols: {
      type: Array,
      default: []
    },
    loading: {
      type: Boolean,
      default: false
    },
    height: {
      type: [Array,Number],
      default: '410'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleSelectedRow() {

    },
    handleSelectionChange() {

    }
  }
}
</script>
<style>

</style>
