<template>
  <div>
    <el-input :type="type" :size="size" v-model="inputValue" :placeholder="placeholder" @change="inputChange"></el-input>
  </div>  
</template>
<script>
export default {
  // value type size placeholder
  props: ['inputValue','type','size','placeholder'],
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


