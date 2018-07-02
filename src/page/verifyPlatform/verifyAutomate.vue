<template>
    <div class="verify-automate">
      <h3 class="head_title">自动对账</h3>
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
              <h5>参数选择</h5>
              <el-form :model="form">
                <el-row >
                  <el-col :md="24">
                    <el-form-item label="平台:">
                      <el-select size="small" v-model="value5" multiple placeholder="请选择">
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
              <h5>规则选择</h5>
              <el-form :model="form">
                <el-row >
                  <el-button size="mini" type="primary">上移</el-button>
                  <el-button size="mini" type="primary">下移</el-button>
                </el-row>
              </el-form>
              <template>
                <el-table
                  :data="tableData"
                  style="width: 100%">
                  <el-table-column
                    type="index"
                    label="序号"
                    width="60">
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="对账方案">
                  </el-table-column>
                  <el-table-column
                    label="选中">
                    <template slot-scope="scope">
                      <el-radio v-model="radio" :label="tableData[scope.$index].address"></el-radio>
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
          <el-button size="small" @click="dialogVisible  = true" type="primary">执行对账</el-button>
          <el-button size="small" type="primary">退出</el-button>
        </el-row>
      </div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
        <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="dialogVisible = false">关 闭</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'verifyAutomate',
        data () {
            return {
              disabled: true,
              radio: '1',
              dialogVisible: false,
              form: {
                time: '',
              },
              options: [{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }],
              value5: [],
              tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '1'
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '2'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '3'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '4'
              }]
            }
        },
        methods:{
          changeDisabled(){
              this.disabled = !this.disabled;
          },
          deleteRow(index){
            console.log(index);
          },
          handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
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
