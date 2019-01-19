<template>
  <div>
     <el-select v-model="select" :placeholder="placeholder" :size="size" @change="hanleChange">
      <el-option
        v-for="item in list"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>  
</template>
<script>
export default {
  name: "hzl-select",
  props: {
    value: {
      type: String,
      default: []
    },
    placeholder: {
      type: String,
      default: '请选择...'
    },
    size: {
      type: String,
      default: 'small'
    },
    list: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      select: ""
    }
  },
  methods: {
    hanleChange() {
      this.$emit('input', this.select)
    }
  }
}
</script>
<style>

</style>


