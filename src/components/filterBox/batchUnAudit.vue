<template>
    <div class="batch-UnAudit">
      <template>
        <el-dialog title="批量反审核" :close-on-click-modal="false" :append-to-body="true" :close-on-press-escape="false" :visible.sync="dialogFromUnAudit" :before-close="dialog_close">
          <el-form :model="form">
            <el-form-item label="单据类型" :label-width="formLabelWidth">
              <el-select size="small" v-model="form.documentsType" placeholder="请选择活动区域">
                <el-option label="平台订单" value="shanghai"></el-option>
                <el-option label="手工订单" value="beijing"></el-option>
              </el-select>
            </el-form-item>
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
            <el-form-item label="平台" :label-width="formLabelWidth">
              <el-select size="small" v-model="form.platform" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="单据状态" :label-width="formLabelWidth">
              <el-select size="small" v-model="form.documentsState" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="对账状态" :label-width="formLabelWidth">
              <el-select size="small" v-model="form.checkState" placeholder="请选择活动区域">
                <el-option label="保存" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>

          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button size="mini" @click="cancel">取 消</el-button>
            <el-button size="mini" type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </template>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'batchUnAudit',
        data () {
            return {
              form: {
                documentsType: '',//单据类型
                time: '',//时间
                platform: '',//平台
                documentsState: '',//单据状态
                checkState: '',//对账状态
              },
              formLabelWidth: '120px'
            }
        },
      computed:{
        ...mapState({
          dialogFromUnAudit:state=>state.dialogFromUnAudit
        })
      },
      methods:{
        cancel() {
            this.$store.dispatch('dialogFromUnAudit')
        },
        dialog_close() {
          this.$store.dispatch('dialogFromUnAudit')
        },
      }
    }
</script>
<style scoped>

</style>
