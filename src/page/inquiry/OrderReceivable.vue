<template>
    <div class="bill" v-once>
      <div class="head_search">
        <h3 class="head_title">订单应收</h3>
        <!-- 传回父组件 -->
        <search @orderSearchs="fliterOrder"></search>
        <batchAudit></batchAudit>
        <batchUnAudit></batchUnAudit>
        <batchDifferences></batchDifferences>
        <batchDelete></batchDelete>
      </div>
      <div class="container">
        <template>
          <el-tabs type="border-card" v-model="activeName">
            <!--按钮-->
            <el-row>
              <btnList></btnList>
            </el-row>
            <el-tab-pane label="全部" name="Whole">
              <template>
                <hzl-table
                :DataList="getLocalDataList"
                :height="420"
                :cols="colsData"
                >
                </hzl-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="已对账" name="Completely">
              <template>
                <hzl-table
                :DataList="getLocalDataList"
                :height="420"
                :cols="colsData"
                >
                </hzl-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="部份对账" name="Part">
              <template>
                <hzl-table
                :DataList="getLocalDataList"
                :height="420"
                :cols="colsData"
                >
                </hzl-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="未对账" name="UnSettled">
              <template>
                <hzl-table
                :DataList="getLocalDataList"
                :height="420"
                :cols="colsData"
                >
                </hzl-table>
              </template>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
      <template>
        <hzl-page></hzl-page>
      </template>

    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import moment from 'moment'
  import {getOrderReceivable,getCompany, getCols} from '../../axios/api'
  import search from '../../components/search/Search'
  import batchAudit from '../../components/filterBox/batchAudit'
  import batchUnAudit from '../../components/filterBox/batchUnAudit'
  import batchDifferences from '../../components/filterBox/batchDifferences'
  import batchDelete from '../../components/filterBox/batchDelete'
  import btnList from '../../components/btnList/btnList'
  export default {
        name: 'bill',
        components: {
          search,//高级搜索
          batchAudit,//批量审核框
          batchUnAudit,//批量反审核框
          batchDifferences,//批量差异对帐
          batchDelete,//批量删除
          btnList,//按钮
        },
        data () {
            return {
              loading: true,
              activeName: 'Whole',
              getLocalDataList:[],//请求的数据
              colsData: [],
              handSelectDataList:[],//选中的数据
              btnInfo:[],
              message: '',
              currentPage4: 4,
            }
        },
        computed: {
          ...mapState({
            verifyStatus:store=>store.verifyStatus,
          })
        },
        mounted(){
          this.getLocalData()
          this.colsUpate()
        },
        created() {
          
        },
        methods:{

          //高级查询
          fliterOrder(value){
            console.log(JSON.stringify(value),"这是高级查询组件传回来的...")
          },

          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
          },
          handleClick() {
            alert('button click');
          },
            /*请求数据*/
           getLocalData(){
             getOrderReceivable().then(res=>{
               console.log(res);
               if(res.status === 200){
                 this.getLocalDataList = res.data.rows;
                 this.loading = false;
               }

             })
           },
           /*请求数据*/
           colsUpate(){
             getCols().then(res=>{
               console.log(res.data);
                 this.colsData = res.data;
                 this.loading = false;
             })
           },

          getRowInfo(row){//获取点击的信息然后跳转
            //let index = this.getLocalDataList.indexOf(row);
            this.$store.dispatch('storeOrderListUUid',row.uuid);
            this.$refs.OrderTable.toggleRowSelection(row);
            this.$router.push({
              name: 'orderDetail',
              params: {id: row.uuid}
            })
          },
          //点击行
          handleSelectedRow(row){
            this.$refs.OrderTable.toggleRowSelection(row);
          },
          //当选择项发生变化时会触发该事件
          handleSelectionChange(val){
            this.handSelectDataList = val;
          },

          //数格式转换
          formatTime(row) { //转换时间
            if(row.businessDate){
              return moment(row.businessDate).format("YYYY-MM-DD");
            }
          },
          formatStatus(row) { //单据状态
            return (row.status === 'Save' && '保存') || (row.status === 'Audited' && '审核');
          },
          formatSettleStatus(row) { //对账状态
            return (row.settleStatus === "UnSettled" && '未对账') || (row.settleStatus === "Part" && '部分对账') || (row.settleStatus === 'Completely' && '完全对账');
          },
          formatDifferenceProcessingStatus(row) { //差异处理状态
            return (row.differenceProcessingStatus === "Y" && '是') || (row.differenceProcessingStatus === "N" && '否');
          },
          formatReconStatus(row) { //退款状态
            return (row.reconStatus === 'UnSettled' && '未退款') || (row.reconStatus === 'Part' && '部分退款') || (row.reconStatus === 'Completely' && '完全退款')
          },
          formatOrderType(row) { //退款状态
            return (row.orderType === '0' && '平台订单') || (row.orderType === '1' && '手工订单')
          },
        },


    }
</script>
<style scoped>

</style>
