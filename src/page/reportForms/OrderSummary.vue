<template>
    <div class="orderSummary">
      <h3 class="head_title">订单执行汇总表</h3>
      <batchStatement></batchStatement>
      <template>
        <el-row>
          <el-button size="small" type="primary" @click="transformStatus">条件查询</el-button>
          <el-button size="small" type="primary">导出</el-button>
        </el-row>
      </template>
      <template>
        <el-card class="box-card">
          <el-form :model="form">
            <el-row >
              <el-col  :md="8" >
                <el-form-item label="业务日期" :label-width="formLabelWidth">
                    <div class="block">
                      <el-date-picker
                        size="small"
                        v-model="form.time"
                        type="datetimerange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :default-time="['12:00:00']">
                      </el-date-picker>
                    </div>
                  </el-form-item>
              </el-col>
              <el-col  :md="8" >
                <el-form-item label="单据状态" :label-width="formLabelWidth">
                  <el-select size="small" v-model="form.documentsState" placeholder="请选择单据状态">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="保存" value="Save"></el-option>
                    <el-option label="审核" value="Audited"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col  :md="8" >
                <el-form-item label="对账状态" :label-width="formLabelWidth">
                  <el-select disable size="small" v-model="form.checkState" placeholder="请选择对账状态">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="未对账" value="UnSettled"></el-option>
                    <el-option label="部份对账" value="Part"></el-option>
                    <el-option label="全部对账" value="Completely"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :md="8">
                <el-form-item label="是否差异处理" :label-width="formLabelWidth">
                  <el-select disable size="small" v-model="form.differenceStatus" placeholder="请选择是否差异处理">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="是" value="Y"></el-option>
                    <el-option label="否" value="N"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="8">
                <el-form-item label="退款状态" :label-width="formLabelWidth">
                  <el-select disable size="small" v-model="form.refundStatus" placeholder="请选择退款状态">
                    <el-option label="全部" value="shanghai"></el-option>
                    <el-option label="未退款" value="UnSettled"></el-option>
                    <el-option label="部分退款" value="Part"></el-option>
                    <el-option label="全部退款" value="Completely"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :md="8">
                <el-form-item label="来源平台" :label-width="formLabelWidth">
                  <el-input disable size="mini" v-model="form.platform" placeholder="请输入来源平台"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :md="8">
                <el-form-item label="销售公司" :label-width="formLabelWidth">
                  <el-input  disable size="mini" v-model="form.company" placeholder="请输入内容"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </template>
      <template>
        <el-table
          border
          v-loading="loading"
          ref="OrderTable"
          :data="getLocalDataList"
          highlight-current-row
          height="300"
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

        </el-table>


      </template>
      <template>
        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </template>
    </div>
</template>

<script>
  import {getOrderReceivable} from '../../axios/api'
  import batchStatement from '../../components/filterBox/batchStatement'
    export default {
        name: 'orderSummary',
        components: {
          batchStatement
        },
        data () {
            return {
              formLabelWidth: '120px',
              form: {
                time: '',//时间
                documentsState: '',//单据状态
                checkState: '', //对账状态
                differenceStatus: '',//差异处理状态
                refundStatus: '',//退款状态
                platform: '',//平台
                company: '',//公司
              },
              currentPage4:0,
              loading: true,
              getLocalDataList: [],//请求的数据
            }
        },
        mounted() {
          this.getLocalData()
        },
        methods: {
          transformStatus(){
            this.$store.dispatch('dialogFromStatement')
          },
          getLocalData(){
            getOrderReceivable().then(res=>{
              console.log(123);
              if(res.status === 200){
                this.getLocalDataList = res.data.rows;
                this.loading = false;
              }

            })
          },
          //点击行
          handleSelectedRow(row){
            this.$refs.OrderTable.toggleRowSelection(row);
          },
          handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
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

          formatOrderType(row) {
            //退款状态
            return (row.orderType === '0' && '平台订单') || (row.orderType === '1' && '手工订单')
          },
        }
    }
</script>
<style scoped>
  .el-row .el-date-editor,.el-input,.el-select{
    width: 100%;
    max-width: 220px;
  }
  .box-card .el-row{
    margin-bottom: 0;
  }
  .el-form-item{
    margin-bottom: 10px;
  }
  .box-card{
    margin-bottom: 20px;
    padding-bottom: 0;
  }
</style>
