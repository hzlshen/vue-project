<template>
    <div class="search">
     <div>
       <!-- 单一查询 -->
        <div style="float: left;padding:10px;z-index:33;">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width:450px;float: left;">
                <tbody class="el-table--scrollable-y" id="test">
                    <tr class="el-table__row" v-for="(list,index) in reconDanyiIquireList" :key="index">
                        <td width="80">
                            <div>
                                <template>
                                <el-select v-model="list.selected" @change='getMore(index)' filterable  size="mini" placeholder="请选择">
                                    <el-option
                                            v-for="item in optionData"
                                            :label="item.name"
                                            :value="item.name"
                                            :key="item.name">
                                    </el-option>
                                </el-select>
                            </template>
                            </div>
                        </td>
                        <td width="80">
                            <div style="margin-left:4px;">
                                <template>
                                <el-select v-model="list.comparing" @change="comparval" filterable size="mini" placeholder="请选择">
                                    <el-option
                                            v-for="item in compareJsonlist"
                                            :key="item.name"
                                            :label="item.name"
                                            :value="item.name">
                                    </el-option>
                                </el-select>
                            </template>
                          </div>
                        </td>
                        <td width="80">

                            <div style="margin-left:4px;">
                                <template>
                                <el-select v-show="list.logsSelect" v-model="list.valSelect" filterable  size="mini"  placeholder="请选择">
                                    <el-option
                                            v-for="item in ValData"
                                            :label="item.name"
                                            :value="item.name"
                                            :key="item.name">
                                    </el-option>
                                </el-select>
                                    <el-select v-show="list.pyType" v-model="list.platId"
                                                filterable size="mini" placeholder="请选择">
                                        <el-option
                                                v-for="item in platData"
                                                :label="item.name"
                                                :value="item.id"
                                                :key="item.id">
                                        </el-option>
                                    </el-select>
                                </template>
                                <template>
                                  <el-date-picker
                                  style="width:150px;"
                                  size="mini"
                                    v-show="list.logsDate"
                                    :disabled="disdate"
                                    v-model="list.valDate"
                                    type="date"
                                    value-format="yyyy-MM-dd"
                                    placeholder="选择日期">
                                  </el-date-picker>
                                </template>
                            </div>
                            <el-input v-model="list.valText" v-show="list.logsText" size="mini" placeholder="请输入"></el-input>
                        </td>
                    </tr>
                </tbody>
            </table>
            <el-button type="primary" style="margin-left:5px;" @click="singleInCon" size="mini">查询</el-button>
        </div>
       <el-button type="text" @click="openfilter"><i class="el-icon-search"></i>高级搜索</el-button>
       <div class="search-body">
         <template>
           <el-dialog width="69%"  title="高级搜索" :modal-append-to-body="false" :close-on-click-modal="false" :visible.sync="dialogFormVisible">
             <!--</el-form-item>-->
             <div class="search-contain">
               <div class="left-search-body">
                 <template>
                   <el-row>
                     <el-button size="small" @click="savelist">保存</el-button>
                     <el-button size="small" @click="asSave" >另存</el-button>
                     <el-button size="small"  @click="rename($event)">重命名</el-button>
                     <el-button size="small" @click="deleteKis">删除</el-button>
                   </el-row>
                 </template>
                 <div class="guolvList">
                  <ul>
                      <li v-for="(item,index) in Listdata" :class="{active1:index == num}" :key="index" @click="tabName(item,index)">
                          {{item.schemenaem}}
                      </li>
                  </ul>
                  </div>
              </div>
               <div class="right-search-body">
                 <template>
                   <el-row>
                     <el-button size="small" type="primary" @click="addTr">新增行</el-button>
                     <el-button size="small" type="success" @click="deleteTr">删除行</el-button>
                     <el-button size="small" type="danger" @click="AlldeleteTr">全部删除</el-button>
                     <el-button size="small" type="warning" @click="insertTr">插入行</el-button>
                   </el-row>
                     <div class="el-table el-table--fit el-table--border el-table--scrollable-x el-table--scrollable-y el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%; height: 280px;">
                        <div class="el-table__header-wrapper">
                            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width:100%;">
                                <thead class="has-gutter">
                                    <tr class="">

                                        <th colspan="1" rowspan="1" width="140">
                                            <div class="cell">
                                                字段
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" width="140">
                                            <div class="cell">
                                                比较
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" width="140">
                                            <div class="cell">
                                                值
                                            </div>
                                        </th>
                                        <th colspan="1" rowspan="1" width="140">
                                            <div class="cell">
                                                逻辑
                                            </div>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody class="el-table--scrollable-y" id="test">
                                    <tr class="el-table__row" v-for="(list,index) in reconciliationPlanInfoList" :key="index">

                                        <td width="140">
                                            <div>
                                                <template>
                                                <el-select v-model="list.selected" @change='getValue(index)' filterable  size="mini" placeholder="请选择">
                                                    <el-option
                                                            v-for="item in optionData"
                                                            :label="item.name"
                                                            :value="item.name"
                                                            :key="item.name">
                                                    </el-option>
                                                </el-select>
                                            </template>

                                            </div>
                                        </td>
                                        <td width="140">
                                            <div>
                                                <template>
                                                <el-select v-model="list.comparing" @change="comparval" filterable size="mini" placeholder="请选择">
                                                    <el-option
                                                            v-for="item in compareJsonlist"
                                                            :key="item.name"
                                                            :label="item.name"
                                                            :value="item.name">
                                                    </el-option>
                                                </el-select>
                                            </template>

                                            </div>

                                        </td>
                                        <td width="140">
                                            <div>
                                              <template>
                                                <el-select v-show="list.logsSelect" v-model="list.valSelect" filterable  size="mini"  placeholder="请选择">
                                                    <el-option
                                                            v-for="item in ValData"
                                                            :label="item.name"
                                                            :value="item.name"
                                                            :key="item.name">
                                                    </el-option>
                                                </el-select>
                                                <el-select v-show="list.pyType" v-model="list.platId" filterable size="mini" placeholder="请选择">
                                                    <el-option
                                                            v-for="item in platData"
                                                            :label="item.name"
                                                            :value="item.id"
                                                            :key="item.id">
                                                    </el-option>
                                                </el-select>
                                            </template>
                                              <template>
                                                <el-date-picker
                                                size="mini"
                                                  v-show="list.logsDate"
                                                  :disabled="disdate"
                                                  v-model="list.valDate"
                                                  type="date"
                                                  value-format="yyyy-MM-dd"
                                                  placeholder="选择日期">
                                                </el-date-picker>
                                              </template>
                                              <el-input v-model="list.valText" v-show="list.logsText" size="mini" placeholder="请输入"></el-input>
                                            </div>
                                        </td>
                                        <td width="140">
                                            <div>
                                                <template>
                                                <el-select v-model="list.logic" filterable  size="mini" placeholder="请选择">
                                                    <el-option
                                                            v-for="item in logsgetData"
                                                            :label="item.text"
                                                            :key="item.text"
                                                            :value="item.text">
                                                    </el-option>
                                                </el-select>
                                            </template>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div style="line-height:25px;height:30px;margin:10px auto;">
                            <div class="statusBottom">
                                <label class=" col-md-4">对账状态:</label>
                                <div class="col-md-8">
                                    <template>
                                    <el-select v-model="reconModel" filterable size="mini"
                                                placeholder="请选择">
                                        <el-option
                                                v-for="item in reconData"
                                                :label="item.name"
                                                :value="item.value"
                                                :key="item.value">
                                        </el-option>
                                    </el-select>
                                </template>

                                </div>
                            </div>
                            <div class="statusBottom">
                                <label class=" col-md-4">单据状态:</label>
                                <div class="col-md-8">
                                    <template>
                                    <el-select v-model="statusinqu" filterable size="mini"
                                                placeholder="请选择">
                                        <el-option
                                                v-for="item in statusData"
                                                :label="item.name"
                                                :value="item.value"
                                                :key="item.value">
                                        </el-option>
                                    </el-select>
                                </template>

                                </div>
                            </div>
                        </div>

                        <div style="line-height:25px;height:30px;margin:10px auto;">
                            <div class="statusBottom">
                                <label class=" col-md-4">退款状态:</label>
                                <div class="col-md-8">
                                    <template>
                                    <el-select v-model="refuncomm" filterable size="mini" placeholder="请选择">
                                        <el-option
                                                v-for="item in refundData"
                                                :label="item.name"
                                                :value="item.value"
                                                :key="item.value">
                                        </el-option>
                                    </el-select>
                                </template>

                                </div>
                            </div>
                            <div class="statusBottom">
                                <label class=" col-md-4">差异状态:</label>
                                <div class="col-md-8">
                                    <template>
                                    <el-select v-model="chayiD" filterable size="mini" placeholder="请选择">
                                        <el-option
                                                v-for="item in chayiData"
                                                :label="item.name"
                                                :value="item.value"
                                                :key="item.value">
                                        </el-option>
                                    </el-select>
                                </template>

                                </div>
                            </div>
                        </div>
                    </div>

                 </template>
               </div>
             </div>
             <div slot="footer" class="dialog-footer">
               <div style="float: left;">
                      <template>
                          <el-checkbox v-model="defaultScheme" v-show="moren" @change="checkClick">默认方案</el-checkbox>
                      </template>
                  </div>
               <el-button  size="small" @click="queryCancel">取 消</el-button>
               <el-button type="primary" size="small" @click="determine">确 定</el-button>
             </div>
           </el-dialog>
           <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
              <el-dialog
                title="保存方案"
                :visible.sync="dialogSave"
                width="30%">
                <div style="margin:0 18%;">
                  <label>输入方案名:</label>
                  <el-input size="mini" v-model="savename" @change="projectName($event)"></el-input>
                </div>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="saveCacel">取 消</el-button>
                  <el-button type="primary" @click="saveQu">确 定</el-button>
                </span>
              </el-dialog>
         </template>
       </div>
     </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
              dialogSave:false,//方案模态
                dialogFormVisible: false,//高级查询模态
                form: {
                  name: '',
                  region: '',
                  date1: '',
                  date2: '',
                  delivery: false,
                  type: [],
                  resource: '',
                  desc: ''
                },
                formLabelWidth: '120px',
                //高级查询
                reconciliationPlanInfoList: [{
                  'selected': '',
                  'comparing': '',
                  'logic': '',
                  logsSelect: false, // 值下拉
                  logsText: true, //值输入
                  logsDate: false, //日期
                  pyType: false,
                  'valDate': '',
                  'valSelect': '',
                  'valText': '',
                  'platId': '', //活的
                  advancedName: '',
                  queryType: '',
                  'reconStatus': '',
                  'invoiceStatus': '',
                  'differenseStatus': '',
                  'refundStatus': '',
                  'saveName': '',
                  'mark': '',
                  'uuid': '',
                  'pageNumber': 1, //第几页
                  'pageSize': 100, //每页展示数
                  'selectPageNumber': ''
              }],
              //单一
              reconDanyiIquireList: [{
                  'selected': '',
                  'comparing': '',
                  'logic': '',
                  logsSelect: false, // 值下拉
                  logsText: true, //值输入
                  logsDate: false, //日期
                  pyType: false,
                  'valDate': '',
                  'valSelect': '',
                  'valText': '',
                  'platId': '', //活的
                  advancedName: '',
                  queryType: '',
                  'reconStatus': '',
                  'invoiceStatus': '',
                  'differenseStatus': '',
                  'refundStatus': '',
                  'saveName': '',
                  'mark': '6',
                  'uuid': '',
                  'pageNumber': 1, //第几页
                  'pageSize': 100, //每页展示数
                  'selectPageNumber': ''
              }],
              logsgetData: [{
                  text: '并且'
              }, {
                  text: '或者'
              }],
              //重写model
              chayiD: '',
              refuncomm: '',
              statusinqu: '',
              reconModel: '',

              chayiData: [{
                      value: '',
                      name: '全部'
                  },
                  {
                      value: 'Y',
                      name: '是'
                  },
                  {
                      value: 'N',
                      name: '否'
                  },
              ],
              refundData: [{
                      value: '',
                      name: '全部'
                  },
                  {
                      value: 'UnRefund',
                      name: '未退款'
                  },
                  {
                      value: 'PartRefund',
                      name: '部分退款'
                  },
                  {
                      value: 'CompleteRefund',
                      name: '完全退款'
                  },
                  {
                      value: 'RefundException',
                      name: '退款异常'
                  },
              ],

              statusData: [{
                      value: '',
                      name: '全部'
                  },
                  {
                      value: 'Save',
                      name: '保存'
                  },
                  {
                      value: 'Audited',
                      name: '审核'
                  },
                  {
                      value: 'HandClose',
                      name: '手工关闭'
                  },
                  {
                      value: 'AtuoClose',
                      name: '自动关闭'
                  },
              ],
              reconData: [{
                      value: '',
                      name: '全部'
                  },
                  {
                      value: 'UnSettled',
                      name: '未对账'
                  },
                  {
                      value: 'Part',
                      name: '部分对账'
                  },
                  {
                      value: 'Completely',
                      name: '完全对账'
                  },
                  {
                      value: 'Exception',
                      name: '异常'
                  },
              ],
              selected: '',
              optionData:[],//一级data
              compareJsonlist: [], //二级
              ValData: [], //三级
              platData:[], //四级
              startText: '',
              saveTitle: false, //模态
              saveTitle1: false, //模态
              pagination: true, //分页
              paginations: false, //高级分页
              savename: '', //保存的名字
              disdate: false,
              Listdata: [], //保存列表
              num: -1,
              proname: '', //方案名
              renId: '', //方案uuid
              userId: '', //方案userid
              renamedele: '',
              idenName:'', //重命名标识
              savename1: '',
              defaultScheme: false, //默认方案
              indexme: '', //这是查询列表index
              indexnum:null, //接口index
              moren:true, //默认方案显示隐藏
            }
        },
      methods:{

        //模态框
        openfilter(){
          this.dialogFormVisible = true;
        },

        //select change 获取二级列表
        getMore(index){

        },
        //高级查询一级
        getValue(){

        },
        //获取三级列表
        comparval(){

        },
        //高级查询取消
        queryCancel(){
          this.dialogFormVisible = false;
        },
        //高级查询确定
        determine(){
          if (this.reconciliationPlanInfoList.length == 0) {
            this.addRow();
          }
          this.reconciliationPlanInfoList[0].differenseStatus = this.chayiD;
          this.reconciliationPlanInfoList[0].reconStatus = this.reconModel;
          this.reconciliationPlanInfoList[0].refundStatus = this.refuncomm;
          this.reconciliationPlanInfoList[0].invoiceStatus = this.statusinqu;
          var data = this.reconciliationPlanInfoList;
          //组件通讯
          this.$emit('orderSearchs', data);  //单据 --- 订单
          this.dialogFormVisible = false;
        },
        //方案名
        projectName(){

        },
        //默认方案
        checkClick(){

        },
        //方案取消
        saveCacel(){

        },
        //方案确定
        saveQu(){

        },
        //单一查询确认
        singleInCon(){

        },
        //LEFT 方案list
        //保存方案
        savelist(){

        },
        //另存
        asSave(){

        },
        //重命名
        rename(){

        },
        //删除
        deleteKis(){

        },

        //RIGHT 增删改查
        //新增
        addTr(){
          var newIndex = this.reconciliationPlanInfoList.length;
          var tr = {
            index: newIndex,
            'selected': '',
            'comparing': '',
            'logic': '',
            logsSelect: false, // 值下拉
            logsText: true, //值输入
            logsDate: false, //日期
            pyType: false,
            'valDate': '',
            'valSelect': '',
            'valText': '',
            'platId': '', //活的
            advancedName: '',
            queryType: '',
            'saveName': '',
            'mark': '',
            'pageNumber': 1, //第几页
            'pageSize': 100, //每页展示数
          };
          this.reconciliationPlanInfoList.push(tr);
        },
        //删除
        deleteTr(){
          this.reconciliationPlanInfoList.splice(index, 1);
        },
        //全部删除
        AlldeleteTr(){
          this.reconciliationPlanInfoList.splice(index);
        },
        //插入
        insertTr(){
            var tr = {
            'selected': '',
            'comparing': '',
            'valDate': '',
            'valSelect': '',
            'valText': '',
            'platId': '', //活的
            logsSelect: false, // 值下拉
            logsText: true, //值输入
            logsDate: false,
            pyType: false,
            'logic': '',
            advancedName: '',
            queryType: '',
            'saveName': '',
            'mark': '',
            'pageNumber': 1, //第几页
            'pageSize': 100, //每页展示数
          };
          this.reconciliationPlanInfoList.push(tr);
        },
        //当全部删除行的时候
        addRow: function() {
              this.reconciliationPlanInfoList = [{
                'selected': '',
                'comparing': '',
                'logic': '',
                logsSelect: false, // 值下拉
                logsText: true, //值输入
                logsDate: false, //日期
                pyType: false,
                'valDate': '',
                'valSelect': '',
                'valText': '',
                'platId': '', //活的
                advancedName: '',
                queryType: '',
                'reconStatus': '',
                'invoiceStatus': '',
                'differenseStatus': '',
                'refundStatus': '',
                'saveName': '',
                'mark': '',
                'uuid': ''
            }]
        },


      }
    }
</script>
<style scoped>
  .el-dialog__body{
  padding: 10px;
}
.el-dialog .el-input{
  width: 100%!important;
}
.statusBottom{
  width: 50%;
  float: left;
}
.col-md-4{
  width: 33.333%;
  float: left;
}
.col-md-8{
  width: 66.66%;
  float: left;
}
.guolvList {
  clear: both;
}

.guolvList ul {
  padding: 0;
}

.guolvList ul li {
  padding-left: 20px;
  cursor: pointer;
  height: 30px;
  line-height: 30px;
  list-style: none;
}
.active1 {
  background: #f5f5f5;
  color: #2EAEF0;
}
.el-dialog__footer{
  padding: 10px 20px;
}
</style>
