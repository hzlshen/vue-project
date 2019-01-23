<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialogVisible"
      :width="width"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "hzl-dialog",
  props: {
    title: {
      type: [String],
      default: "提示"
    },
    width: {
      type:[String],
      default: "40%"   
    },
    dialogVisible: {
      type: Boolean,
      default: false
    }
  }, 
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    }
  },
  mounted() {

  }
}
</script>
<style scoped>

</style>


