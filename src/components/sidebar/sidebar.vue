<template>
    <div id="sidebar-left">
      <el-menu
        :collapse="collapse"
        class="el-menu-vertical-demo"
        background-color="#323443"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened router>
        <template v-for="(item,index) in sidebarInfo">
            <el-submenu :index="item.index" :key="item.index" v-if="item.subNav">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <el-menu-item-group>
                <!--<template slot="title">分组一</template>-->
                <el-menu-item :index="list.index" v-for="(list,index) in item.subNav" :key="list.index">{{list.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.index" :key="item.index" v-else>
              <template>
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </template>
            </el-menu-item>
        </template>
      </el-menu>

    </div>
</template>

<script>
  import {mapState,mapActions} from 'vuex'
    export default {
        name: 'sidebar',
        data () {
            return {
              indexPath:[],//保存点击过的页面路由信息
              sidebarInfo:[//左侧导航条信息
                {
                  icon: 'el-icon-setting',
                  index: 'chart',
                  title: '我的账户'
                },
                /**
                 * inquiry 单据查询
                 * **/
                {
                  icon: 'el-icon-tickets',
                  index:'1',
                  title: '单据查询',
                  subNav:[
                    {
                      index:'/orderReceivable',
                      title:'订单应收'
                    },
                    {
                      index:'/transactionFlow',
                      title:'交易流水'
                    },
                    {
                      index:'/systemStatement',
                      title:'系统对账单'
                    },
                    {
                      index:'/bankFlow',
                      title:'银行流水'
                    }
                  ]
                },
                /**
                 * verifyPlatform 对账平台
                 * **/
                {
                  icon: 'el-icon-date',
                  index:'2',
                  title: '对账平台',
                  subNav:[
                    {
                      index: '/verifyReceivables',
                      title: '收款手动对账'
                    },
                    {
                      index: '/verifyAutomate',
                      title: '收款自动对账'
                    },
                    {
                      index:'/verifyBankStatement',
                      title:'银行对账'
                    }
                  ]
                },
                /**
                 * verifyRecord 对账记录
                 * **/
                {
                  icon: 'el-icon-goods',
                  title: '对账记录',
                  index:'3',
                  subNav:[
                    {
                      index:'/verifyReceivablesRecord',
                      title:'收款对账'
                    },
                    {
                      index:'/verifyBankStatementRecord',
                      title:'银行对账'
                    }
                  ]
                },
                /**
                 * reportForms报表
                 * **/
                {
                  icon: 'el-icon-star-off',
                  title: '报表',
                  index:'4',
                  subNav:[
                    {
                      index:'/OrderSummary',
                      title:'订单执行总表'
                    },
                    {
                      index:'/ReceivablesBalance',
                      title:'收款对账余额表'
                    }
                  ]
                },
                {
                  icon: 'el-icon-more',
                  title: '设置',
                  index:'5',
                  subNav:[
                    {
                      index:'/Structure',
                      title:'组织架构'
                    },
                    {
                      icon: 'el-icon-star-off',
                      index:'11',
                      title:'角色权限',
                      subNav: [
                        {
                          title: '角色管理',
                          index : '角色管理'
                        }
                      ]
                    },
                    {
                      index:'12',
                      title:'合作伙伴'
                    },
                    {
                      index:'13',
                      title:'系统设置'
                    },
                    {
                      index:'14',
                      title:'订单导入规则'
                    },
                    {
                      index:'15',
                      title:'交易导入规则'
                    }
                  ]
                },
              ]
            }
        },
      computed:{
        ...mapState({
          collapse:state=>state.collapse
        }),
//        collapse(){
//          return this.$store.state.collapse
//        },
      },
      methods:{

      },
    }
</script>
<style scoped>

</style>
