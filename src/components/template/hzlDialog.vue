<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="dialog"
      :width="width"
      @close="$emit('update:show', false)"
      :show="show">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="dialog = false">确 定</el-button> -->
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
    show: {
      type: Boolean,
      default: false
    }
  }, 
  data() {
    return {
      dialog: this.show
    }
  },
  watch: {
    show() {
      this.dialog = this.show;
    }
  },
  methods: {
  },
  mounted() {

  }
}
</script>
<style scoped>

</style>


