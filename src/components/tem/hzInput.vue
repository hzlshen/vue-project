<template>
  <div>
    <el-input :type="type" :size="size" v-model="inputValue" @change="inputChange"></el-input>
  </div>  
</template>
<script>
export default {
  props: ['inputValue','type','size'],
  data() {
    return {
      inputValue: ''
    }
  },
  mounted() {

  },
  methods: {
    inputChange() {
      this.$emit("input",this.inputValue)
    }
  }
}
</script>
<style>

</style>


