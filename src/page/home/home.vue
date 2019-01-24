<template>
    <div id="Home">
      <head-top></head-top>
      <div class="wrapper">
        <sidebar></sidebar>
          <div class="main" :class="{'content-collapse':collapse}">
            <tags></tags>
            <div class="container">
              <!--<tabs></tabs>-->
              <transition name="move" mode="out-in">
                <keep-alive>
                  <router-view></router-view>
                </keep-alive>
              </transition>
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->
</template>

<script>
  import {mapState} from 'vuex'
  import headTop from '../../components/head/head'
  import sidebar from '../../components/sidebar/sidebar'
  import tags from '../../components/tags/tags'
    export default {
      name: 'Home',
      components:{
        headTop,
        sidebar,
        tags,
      },
      data () {
        return {
            aa:null
        }
      },
      computed:{
        ...mapState({
          collapse:store=>store.collapse
        }),
//        author(){
//              return this.$store.state.messages
//          }
      },
      methods:{
      }
    }
</script>
<style scoped>

</style>
