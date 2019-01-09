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
    // formatter(row) {
    //   console.log(row,"rwo");
    //   return row.differenceProcessingAmount
    //   // if(row.businessDate){
    //   //   return moment(row.businessDate).format("YYYY-MM-DD");
    //   // }
    //   // if(row.status){
    //   //    return (row.status === 'Save' && '保存') || (row.status === 'Audited' && '审核');
    //   // }
    // }
  }
}
</script>
<style>

</style>
