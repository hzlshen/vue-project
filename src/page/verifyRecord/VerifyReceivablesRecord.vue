<template>
  <div class="bill">
    <div class="head_search">
      <h3 class="head_title">对账记录收款对账</h3>
      <el-button type="primary" size="mini">反对帐</el-button>
      <el-button type="primary" size="mini">批量反对帐</el-button>
      <!-- 传回父组件 -->
      <search @orderSearchs="fliterOrder"></search>
    </div>
    <div class="container">
      <template>
        <el-table
          border
          v-loading="loading"
          ref="OrderTable"
          :data="getLocalDataList"
          highlight-current-row
          height="410"
          @row-click="handleSelectedRow"
          @select="handleSelectionSingle"
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
            label="平台"
            width="200">
          </el-table-column>
          <el-table-column
            prop="orderNo"
            label="平台订单号"
            width="250">
          </el-table-column>
          <el-table-column
            prop="totalAmount"
            label="总金额"
            width="80">
          </el-table-column>
          <el-table-column
            prop="status"
            label="单据状态"
            width="90"
            :formatter="formatStatus">
          </el-table-column>
          <el-table-column
            prop="businessDate"
            label="业务日期"
            width="100"
            :formatter="formatTime">
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
          <el-table-column
            prop="commission"
            label="佣金"
            width="100">
          </el-table-column>
          <el-table-column
            prop="integral"
            label="积分"
            width="100">
          </el-table-column>
          <el-table-column
            prop="platformCoupon"
            label="平台优惠卷"
            width="110">
          </el-table-column>
          <el-table-column
            prop="companyCoupon"
            label="公司优惠卷"
            width="110">
          </el-table-column>
          <el-table-column
            prop="insurance"
            label="保险"
            width="100">
          </el-table-column>
          <el-table-column
            prop="freight"
            label="运费"
            width="100">
          </el-table-column>
          <el-table-column
            prop="sellerPayment"
            label="买家支付金额"
            width="110">
          </el-table-column>
        </el-table>
      </template>
    </div>
    <template>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totals">
        </el-pagination>
      </div>
    </template>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import moment from 'moment'
  import {getOrderReceivable,getCompany} from '../../axios/api'
  import search from '../../components/search/Search'
  export default {
    name: 'bill',
    components: {
      search,//高级搜索
    },
    data () {
      return {
        loading: true,
        activeName: 'Whole',
        getLocalDataList:[],//请求的数据
        handSelectDataList:[],//选中的数据
        btnInfo:[],
        message: '',
        totals:0,
        currentPage4: 4,
        uuidList: [],
        treeData: {
          name: 'My Tree',
          children: [
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' ,
                      children: [
                        { name: 'wwww' },
                        { name: 'eeee' }
                      ]}
                  ]
                },
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    computed: {
      ...mapState({
        verifyStatus:store=>store.verifyStatus,
      })
    },
    mounted(){
      this.getLocalData()
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
            this.totals = res.data.total;
            this.loading = false;
          }

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
        if (row) {
          var newId = row.billNo;
          var selectArr = [];
          this.getLocalDataList.forEach((value) => {
            if (value.billNo === newId) {
              selectArr.push(value);
              if (typeof value.checked === 'undefined') {
                this.$set(value, 'checked', true)
              } else {
                value.checked = !value.checked;
              }
            }

          });
          if (selectArr) {
            selectArr.forEach((value) => {
              this.$refs.OrderTable.toggleRowSelection(value, value.checked);
            })
          }
        }
      },
      handleSelectionSingle(val) { //点击checkbox选中
        if (val.length > 0) {
          var listArr = [];
          var item = val[val.length - 1];
          var setNo = item.billNo;
          this.getLocalDataList.forEach((value, index) => {
            if (value.billNo === setNo) {
              if (typeof value.checked === 'undefined') {
                this.$set(value, 'checked', true);
              } else {
                value.checked = !value.checked;
              }
              listArr.push(value);
            }
          });
          console.log(listArr);
          listArr.forEach((value, index) => {
            this.$refs.OrderTable.toggleRowSelection(value, value.checked);
          })
        }
      },
      //当选择项发生变化时会触发该事件
      handleSelectionChange(val,rows){
        if (rows) {
          rows.forEach((value, index) => {
            if (this.uuidList.indexOf(value.id) === -1) {
              this.uuidList.push(value.id)
            }
          })
        } else {
          this.uuidList = []
        }
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
