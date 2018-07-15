<template>
    <div class="verify-automate">
      <h3 class="head_title">自动对账</h3>
      <getWebSocket></getWebSocket>
      <template>
        <el-row>
          <el-button size="mini" type="primary" @click="changeDisabled" :disabled="!disabled">收款对账</el-button>
          <el-button size="mini" type="primary" @click="changeDisabled" :disabled="disabled">退款对账</el-button>
        </el-row>
      </template>

      <template>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card">
              <h3>参数选择</h3>
              <el-form :model="form">
                <el-row >
                  <el-col :md="24">
                    <el-form-item label="平台:">
                      <el-select size="small" v-model="form.platform" multiple collapse-tags placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                    </el-form-item>

                  </el-col>
                  <el-col :md="24">
                    <el-form-item label="参与核销单据的业务日期小于等于:" >
                      <el-date-picker
                        size="small"
                        v-model="form.time"
                        type="date"
                        placeholder="选择日期时间">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :md="24">
                    <el-form-item label="自动产生对账记录的对账日期为:" >
                      <el-date-picker
                        size="small"
                        v-model="form.time"
                        type="date"
                        placeholder="选择日期时间">
                      </el-date-picker>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card">
              <h3>规则选择</h3>
              <el-form :model="form">
                <el-row >
                  <el-button size="mini" type="primary">上移</el-button>
                  <el-button size="mini" type="primary">下移</el-button>
                </el-row>
              </el-form>
              <template>
                <el-table
                  border
                  ref="orderTable"
                  :data="ruleList"
                  highlight-current-row
                  max-height="164"
                  style="margin-top: 10px"
                  tooltip-effect="dark"
                  @row-click="rowClickPayment">
                  <el-table-column
                    type="index"
                    label="序号"
                    width="60">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="对账方案">
                  </el-table-column>
                  <el-table-column label="选中" width="136">
                    <template slot-scope="scope">
                      <el-radio class="radio" v-model="radio"  :label="scope.$index"  @change.native="getCurrentRow(scope.$index)" >&nbsp;</el-radio>
                    </template>
                  </el-table-column>
                </el-table>
              </template>
            </el-card>
          </el-col>
        </el-row>
      </template>
      <div class="execute-btn">
        <el-row>
          <el-button size="small" @click="clickAuto" type="primary">执行对账</el-button>
          <el-button size="small" type="primary">退出</el-button>
        </el-row>
      </div>
    </div>
</template>

<script>
  import{mapState} from 'vuex'
  import getWebSocket from "../../components/getWebSocket/getWebSocket"
    export default {
        name: 'verifyAutomate',
        components:{
          getWebSocket
        },
        data () {
            return {
              disabled: true,
              radio: '1',
              dialogVisible: false,
              rulesId:'',
              form: {
                time: '',
                platform:''
              },
              options: [{
                value: '1',
                label: '支付宝'
              }, {
                value: '2',
                label: '微信'
              }, {
                value: '3',
                label: '天猫'
              }, {
                value: '5',
                label: '京东'
              }, {
                value: '9',
                label: '美团'
              }],
              value5: [],
              ruleList:[
                {
                  id:'1',
                  name:'方案一'
                },
                {
                  id:"2",
                  name:'方案二'
                }
              ]
            }
        },
        methods:{
          //点击事件
          rowClickPayment(row) {
            console.log(row.id)
            this.rulesId = row.id;
            this.$refs.orderTable.toggleRowSelection(row)
            this.radio = this.ruleList.indexOf(row);
          },
          //选中
          getCurrentRow(val) {
            console.log(val)
          },
          changeDisabled(){
              this.disabled = !this.disabled;
          },
          //执行对账
          clickAuto(){
            if (this.form.platform == '') {
              this.$message.error({message:"请选择平台",center: true});
              return false
            }
            if (this.form.time === '') {
              this.$message.error({message:"请选择业务日期",center: true});
              return false
            }

            if (this.rulesId === '') {
              this.$message.error({message:"请选择对账规则",center: true});
              return false;
            }
            this.$store.dispatch('dialoggetWebSocket')
          }
        }
    }
</script>
<style scoped>
  .container .el-row{
    margin-bottom: 0;
  }
  .container .el-row{
    height: auto;
  }
  h5{
    margin: 0;
  }
  .el-select{
    width: 220px;
  }

  .el-form-item{
    display: -webkit-box;
    display: flex;
  }
  .execute-btn{
    text-align: center;
    margin-top: 20px;
  }
  .el-dialog__body{
    height: auto;
  }

</style>
