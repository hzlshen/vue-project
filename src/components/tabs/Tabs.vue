<template>
    <div class="tabs">
      <template>
        <el-tabs v-model="verifyStatus" @tab-click="handleClick">
          <el-tab-pane v-for="(item,index) in tabs" :label="item.label" :name="item.name" :key="index"></el-tab-pane>
        </el-tabs>
      </template>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
        data () {
            return {
              tabs:[
                {label:'全部', name:'Whole'},
                {label:'已对账', name:'Completely'},
                {label:'部份对账', name:'Part'},
                {label:'未对账', name:'UnSettled'}
              ]
            }
        },
      watch: {
        $route(newValue){
            if(newValue){
              this.$store.dispatch('getVerifyStatus','Whole');
            }
        }
      },
      computed: {
        verifyStatus:{
          get: function(){
            return this.$store.state.verifyStatus
          },
          set: function(){

          }
        }
      },
      methods: {
        handleClick(tab) {
            this.$store.dispatch('getVerifyStatus',tab.name);
        }
      }
    }
</script>
<style scoped>

</style>
