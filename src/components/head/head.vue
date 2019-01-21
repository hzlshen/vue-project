<template>
  <header class="head">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="getCollapse">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">{{$t('h.system')}}</div>

    <div class="company">
    <template >
      <el-select v-model="companyValue" placeholder="请选择"  size="small" @change="getCompanyValue(companyValue)">
        <el-option
          v-for="(item,index) in companyList"
          :key="index"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </template>
    </div>
    <div class="top-nav">
      <!--全屏显示-->
      <template>
        <el-tooltip class="full" effect="dark" :content="$t('h.full')" placement="bottom">
          <div>
            <i class="el-icon-rank"></i>
          </div>
        </el-tooltip>
      </template>

      <!--消息中心-->
      <template>
        <el-tooltip class="news" effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
          <div>
            <i class="el-icon-bell"></i>
            <span class="msg" v-if="message"></span>
          </div>
        </el-tooltip>
      </template>
      <!--退出or设置-->
      <template>
        <el-dropdown placement="bottom">
          <span class="el-dropdown-link">
            <i class="el-icon-setting el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>关于我</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </template>

      <template>
        <div class="full" @click="changeLangEvent()">
          <span class="lan">{{language}}</span>
        </div>
      </template>

    </div>
  </header>
</template>
<script>
  import {mapState,mapActions} from 'vuex';
  import {getCompany} from '../../axios/api'
    export default {
        name: 'Head',
        data () {
            return {
              message:1,//消息
//              companyValue:null,
              companyList:[
                {
                  value: '选项1',
                  label:'公司一',
                },
                {
                  value: '选项2',
                  label:'公司二',
                }
              ],
              language: localStorage.getItem("lang") || "EN"
            }
        },
      mounted(){

      },
      computed: {
        ...mapState({
          companyValue:state=>state.companyValue,
        }),
      },
      methods:{
        ...mapActions(["getCollapse", "getCompanyValue"]),//简写
         changeLangEvent() {
             console.log(this.$i18n);
             console.log(1111);
              // this.baseLan()
              if (this.language == "EN") {
                localStorage.setItem("locale", "zh");
                this.$i18n.locale = localStorage.getItem("locale");
                this.$message({
                  message: "切换为中文！",
                  type: "success"
                });
                localStorage.setItem("lang", "ZH");
                this.language = "ZH";
                location.reload();
              } else if (this.language == "ZH") {
                localStorage.setItem("locale", "en");
                this.$i18n.locale = localStorage.getItem("locale");
                this.$message({
                  message: "Switch to English!",
                  type: "success"
                });
                localStorage.setItem("lang", "EN");
                this.language = "EN";
                location.reload();
              }
          }
      }
    }
</script>
<style scoped>
  .lan {
    display: inline-block;
    cursor: pointer;
    width: 22px;
    height: 22px;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    background: #fff;
    border-radius: 50%;
    color: #24292e;
  }
</style>
