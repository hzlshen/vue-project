<template>
    <div class="tags" v-if="isShowTags">
      <div class="tag-box">
        <ul>
          <li v-for="(item,index) in indexPath"  :class="{'active':item.name === activeValue}" :key="index">
            <router-link class="tab-item"  :class="{active:activeValue===index}"  :to="{path:item.path}" >
              <span>{{item.name}}</span>
            </router-link>
            <span class="tag_delete" @click="closeTag(index)"><i class="el-icon-close"></i></span>
          </li>
        </ul>
      </div>
     <div class="tag-close-box">
       <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          标签设置<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
         <el-dropdown-menu slot="dropdown">
           <el-dropdown-item command="a">关闭其它</el-dropdown-item>
           <el-dropdown-item command="b">关闭所有</el-dropdown-item>
         </el-dropdown-menu>
       </el-dropdown>
     </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        data () {
            return {
              activeValue: '',//当前选中的路由名称
              indexPath: [],//将点击过的路由信息添加进来
              isShowTags: true, //标签设置 关闭所有隐藏
            }
        },
      created(){
        this.setTags(this.$route);//获取页面的路由信息
      },
      watch: {
        $route(newValue){ //监听路由的变化获取最新的路由信息
          this.setTags(newValue);
        }
      },
      methods:{
        setTags(route){ //判断刚刚点击的路由是否存在，如果不存在保存
          this.activeValue = route.meta.title;
          const isExist = this.indexPath.some(item=>{
            return item.path === route.path
          });

          !isExist && this.indexPath.unshift({
            name:route.meta.title,
            path:route.path
          });
          console.log(this.indexPath.length);
          if(this.indexPath.length > 8){
            this.indexPath.splice(this.indexPath.length-1,1)
          }

        },
        closeTag(index){
            //删除当前点击的tag
          const closePath = this.indexPath.splice(index,1)[0];
          //获取删除后当前下标的tag(如果当前下标有选择当前否则选前一个)
          const item =  this.indexPath[index]?this.indexPath[index]:this.indexPath[index-1];
          if(item){//存在执行
            //如果删除的的元素path等于当前路由path 执行改变路由
            closePath.path === this.$route.path && this.$router.push(item.path);
          }else{//不存在跳转到我的账户
            this.$router.push('/chart');
          }
        },
        handleCommand(command) {
          console.log(command);
            command === 'a' ? this.indexPath = [{name:this.$route.meta.title,path:this.$route.path}] : this.indexPath =[];
          if(!this.indexPath.length){
                this.isShowTags = false;
            }
        }
      }
    }
</script>
<style scoped>


</style>
