<template>
    <div class="batch-statement">
      <template>
        <el-dialog title="条件查询" :close-on-click-modal="false" :append-to-body="true" :close-on-press-escape="false" :visible.sync="dialogFromStatement" :before-close="dialog_close" :modal-append-to-body="false">
          <el-form :model="form">
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
            <el-form-item label="单据状态" :label-width="formLabelWidth">
              <el-select size="small" v-model="form.documentsState" placeholder="请选择单据状态">
                <el-option label="全部" value=""></el-option>
                <el-option label="保存" value="Save"></el-option>
                <el-option label="审核" value="Audited"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="对账状态" :label-width="formLabelWidth">
              <el-select size="small" v-model="form.checkState" placeholder="请选择对账状态">
                <el-option label="全部" value=""></el-option>
                <el-option label="未对账" value="UnSettled"></el-option>
                <el-option label="部份对账" value="Part"></el-option>
                <el-option label="全部对账" value="Completely"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否差异处理" :label-width="formLabelWidth">
              <el-select size="small" v-model="form.differenceStatus" placeholder="请选择是否差异处理">
                <el-option label="全部" value=""></el-option>
                <el-option label="是" value="Y"></el-option>
                <el-option label="否" value="N"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="退款状态" :label-width="formLabelWidth">
              <el-select size="small" v-model="form.refundStatus" placeholder="请选择退款状态">
                <el-option label="全部" value=""></el-option>
                <el-option label="未退款" value="UnSettled"></el-option>
                <el-option label="部分退款" value="Part"></el-option>
                <el-option label="全部退款" value="Completely"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="来源平台" :label-width="formLabelWidth">
              <el-input size="mini" v-model="form.platform" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="销售公司" :label-width="formLabelWidth">
              <el-input size="mini" v-model="form.company" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button size="mini" type="primary" @click="determine">确 定</el-button>
            <el-button size="mini" @click="cancel">取 消</el-button>
          </div>
        </el-dialog>
      </template>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
        name: 'batchStatement',
        data () {
            return {
              form: {
                time: '',//时间
                documentsState: '',//单据状态
                checkState: '', //对账状态
                differenceStatus: '',//差异处理状态
                refundStatus: '',//退款状态
                platform: '',//平台
                company: '',//公司
              },
              formLabelWidth: '120px',
            }
        },
      computed:{
        ...mapState({
          dialogFromStatement:state=>state.dialogFromStatement
        })
      },
      methods: {
        cancel(){ //取消
          this.$store.dispatch('dialogFromStatement')
        },
        determine(){ //确定
          console.log(this.form);
        },
        dialog_close() {
          this.$store.dispatch('dialogFromStatement')
        },
      }
    }
</script>
<style scoped>
  .el-dialog .el-input{
    max-width: 300px;
  }


</style>
