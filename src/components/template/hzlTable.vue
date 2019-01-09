<template>
  <div>
    <!-- ref="OrderTable -->
    <el-table 
      border
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
        :type="item.type"
        >
      </el-table-column>
    </el-table>  
  </div>  
</template>
<script>
import moment from 'moment'
export default {
  props: {
    DataList: {
      type: Array,
      default() {
        return []
      }
    },
    cols: {
      type: Array,
      default() {
        return []
      }
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
  mounted() {
  },
  watch: {
  },
  methods: {
    handleSelectedRow() {

    },
    handleSelectionChange() {
    },
  }
}
</script>
<style>

</style>
