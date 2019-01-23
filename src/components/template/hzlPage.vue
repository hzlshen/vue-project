<template>
  <div class="right">
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="currentPage"
      :page-sizes="[20, 50, 80, 120]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>  
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: {
    currentPage: {
      type: [String,Number],
      default: 1
    },
    pageSize: {
      type: [String, Number],
      default: 20
    },
    total: {
      type: [String , Number],
      default: 50
    }
  },
  methods: {
    sizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    currentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style>
  .right {
    text-align: right;
  }
</style>

