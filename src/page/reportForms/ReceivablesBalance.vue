<template>
    <div class="order-receivable">
      <h3 class="head_title">收款对账余额表</h3>
      <batchStatement></batchStatement>
      <template>
        <el-row>
          <el-button size="mini" type="primary" @click="transformStatus">条件查询</el-button>
          <el-button size="mini" type="primary">导出</el-button>
        </el-row>
      </template>
      <template>
        <el-form :model="form">
          <el-row >
            <el-col  :md="8" >
              <el-form-item label="业务日期" :label-width="formLabelWidth">
                <div class="block">
                  <el-date-picker
                    size="small"
                    v-model="form.time"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
                    </el-date-picker>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
      <template>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <h5>订单应收未对账</h5>
              <el-form :model="form">
                <el-row >
                  <el-col  :md="12" >
                    <el-form-item label="期初余额:" :label-width="formLabelWidth">
                      <el-input size="mini"  placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col  :md="12" >
                    <el-form-item label="本期总金额:" :label-width="formLabelWidth">
                      <el-select size="small" v-model="form.documentsState" placeholder="请选择单据状态">
                        <el-option label="全部" value="shanghai"></el-option>
                        <el-option label="保存" value="Save"></el-option>
                        <el-option label="审核" value="Audited"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row >
                  <el-col  :md="12" >
                    <el-form-item label="本期已对账:" :label-width="formLabelWidth">
                      <el-input size="mini"  placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col  :md="12" >
                    <el-form-item label="对后期末余额:" :label-width="formLabelWidth">
                      <el-select size="small" v-model="form.documentsState" placeholder="请选择单据状态">
                        <el-option label="全部" value="shanghai"></el-option>
                        <el-option label="保存" value="Save"></el-option>
                        <el-option label="审核" value="Audited"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <template>
                <h5>订单明细</h5>
                <el-table
                  border
                  v-loading="loading"
                  ref="OrderTable"
                  :data="getLocalDataList"
                  highlight-current-row
                  height="300">
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
                    prop="businessDate"
                    label="业务日期"
                    width="100"
                    :formatter="formatTime">
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
                    prop="orderTotalAmount"
                    label="订单总金额"
                    width="100">
                  </el-table-column>
                </el-table>
              </template>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <h5>交易流水未对账</h5>
              <el-form :model="form">
                <el-row >
                  <el-col  :md="12" >
                    <el-form-item label="期初余额:" :label-width="formLabelWidth">
                      <el-input size="mini"  placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col  :md="12" >
                    <el-form-item label="本期总金额:" :label-width="formLabelWidth">
                      <el-select size="small" v-model="form.documentsState" placeholder="请选择单据状态">
                        <el-option label="全部" value="shanghai"></el-option>
                        <el-option label="保存" value="Save"></el-option>
                        <el-option label="审核" value="Audited"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row >
                  <el-col  :md="12" >
                    <el-form-item label="本期已对账:" :label-width="formLabelWidth">
                      <el-input size="mini"  placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col  :md="12" >
                    <el-form-item label="对后期末余额:" :label-width="formLabelWidth">
                      <el-select size="small" v-model="form.documentsState" placeholder="请选择单据状态">
                        <el-option label="全部" value="shanghai"></el-option>
                        <el-option label="保存" value="Save"></el-option>
                        <el-option label="审核" value="Audited"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <template>
                <h5>流水明细</h5>
                <el-table
                  border
                  v-loading="loading"
                  ref="OrderTable"
                  :data="getLocalDataList"
                  highlight-current-row
                  height="300">
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
                    prop="businessDate"
                    label="业务日期"
                    width="100"
                    :formatter="formatTime">
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
                    prop="orderTotalAmount"
                    label="订单总金额"
                    width="100">
                  </el-table-column>
                </el-table>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </template>
    </div>
</template>

<script>
  import {getOrderReceivable} from '../../axios/api'
  import moment from 'moment'

  import batchStatement from '../../components/filterBox/batchStatement'
    export default {
        name: 'orderReceivable',
        components: {
          batchStatement
        },
        data () {
            return {
              formLabelWidth: '120px',
              loading: true,
              form: {
                time: '',//时间
                documentsState: '',//单据状态
                checkState: '', //对账状态
                differenceStatus: '',//差异处理状态
                refundStatus: '',//退款状态
                platform: '',//平台
                company: '',//公司
              },
              getLocalDataList: [], //请求的数据
            }
        },
        mounted(){
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
          //数格式转换
          formatTime(row) { //转换时间
            if(row.businessDate){
              return moment(row.businessDate).format("YYYY-MM-DD");
            }
          },
        }
    }
</script>
<style scoped>
  .el-row .el-date-editor,.el-input,.el-select{
    width: 100%;
    max-width: 300px;
  }
  .el-form-item{
  margin-bottom:0;
}
  .container .el-row{
    height:auto;
  }
  .el-row{
    margin-bottom: 0;
  }
  h5{
    margin: 0;
  }
  .el-table{
    margin-top: 8px;
  }
</style>
