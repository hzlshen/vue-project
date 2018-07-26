<template>
    <div class="hello">
      <div class="head_search">
        <h3 class="head_title">银行流水</h3>
        <search></search>
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
                <el-table
                  border
                  v-loading="loading"
                  ref="OrderTable"
                  :data="getLocalDataList"
                  highlight-current-row
                  height="410"
                  @row-click="handleSelectedRow"
                  @selection-change="handleSelectionChange">
                  <el-table-column
                    type="selection"
                    width="60">
                  </el-table-column>
                  <el-table-column
                    prop="billNo"
                    label="单据编号"
                    width="200">

                  </el-table-column>
                  <el-table-column
                    prop="platform"
                    label="交易日期"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    prop="orderNo"
                    label="收入"
                    width="250">
                  </el-table-column>
                  <el-table-column
                    prop="totalAmount"
                    label="支出"
                    width="80">
                  </el-table-column>
                  <el-table-column
                    prop="status"
                    label="单据状态"
                    width="90"
                    :formatter="formatStatus">
                  </el-table-column>

                  <el-table-column
                    prop="settleStatus"
                    label="对账状态"
                    width="100"
                    :formatter="formatSettleStatus">
                  </el-table-column>
                  <el-table-column
                    prop="settleAmount"
                    label="已对账金额"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="unsettleAmount"
                    label="未对账金额"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="differenceProcessingStatus"
                    label="差异处理状态"
                    width="110"
                    :formatter="formatDifferenceProcessingStatus">
                  </el-table-column>
                  <el-table-column
                    prop="differenceProcessingAmount"
                    label="差异处理金额"
                    width="110">
                  </el-table-column>
                  <el-table-column
                    prop="differenceProcessingRamarks"
                    label="差异处理原因"
                    width="130">
                  </el-table-column>
                  <el-table-column
                    prop="reconStatus"
                    label="退款状态"
                    width="100"
                    :formatter="formatReconStatus">
                  </el-table-column>
                  <el-table-column
                    prop="unsettlementMoney"
                    label="未退款金额"
                    width="100">
                  </el-table-column>
                  <el-table-column
                    prop="settlementMoney"
                    label="已退款金额"
                    width="100">
                  </el-table-column>

                  <el-table-column
                    prop="orderType"
                    label="单据类型"
                    width="100"
                    :formatter="formatOrderType">
                  </el-table-column>
                  <el-table-column
                    prop="orderTotalAmount"
                    label="订单总金额"
                    width="100">
                  </el-table-column>

                </el-table>
              </template>
            </el-tab-pane>
            <el-tab-pane label="已对账" name="Completely">已对账</el-tab-pane>
            <el-tab-pane label="部份对账" name="Part">部份对账</el-tab-pane>
            <el-tab-pane label="未对账" name="UnSettled">未对账</el-tab-pane>
          </el-tabs>
        </template>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getOrderReceivable} from '../../axios/api'
  import tabs from '../../components/tabs/Tabs'
  import search from '../../components/search/Search'
  import batchAudit from '../../components/filterBox/batchAudit'
  import batchUnAudit from '../../components/filterBox/batchUnAudit'
  import batchDifferences from '../../components/filterBox/batchDifferences'
  import batchDelete from '../../components/filterBox/batchDelete'
  import btnList from '../../components/btnList/btnList'
    export default {
        name: 'HelloWorld',
        components:{
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
              handSelectDataList:[],//选中的数据
              btnInfo:[],
              message: '',
              currentPage4: 4
            }
        },
      computed: {
        ...mapState({
          verifyStatus:store=>store.verifyStatus
        })
      },
      mounted(){
        this.getLocalData()
      },
      methods:{
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

        process(row) {
          if(row.status === 'Audited'){
            row.status = 'Save'
          }
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
          return new Date(row.businessDate);
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
