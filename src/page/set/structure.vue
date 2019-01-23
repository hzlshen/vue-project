<template>
  <div class="platform-setup">
    <h3 class="head_title">平台管理</h3>
    <div class="search-btn">
      <div class="search">
        <el-input v-model="searchText" size="mini" placeholder="请输入内容"></el-input>
        <el-button type="primary" size="mini" @click="searchClick">搜索</el-button>
      </div>
      <div class="btn-box">
        <el-button type="primary" size="mini" @click="addPlat">新增</el-button>
        <el-button type="success" size="mini" @click="modify">修改</el-button>
        <el-button type="danger" size="mini" @click="ordPlatformDele">删除</el-button>
      </div>
    </div>
    <template>
      <el-table
        fit
        border
        :data="dataPlatform"
        @row-click="platformDefult"
        highlight-current-row
        height="335">
        <el-table-column
          type="index"
          label="序号"
          width="100">
        </el-table-column>
        <el-table-column
          prop="number"
          label="渠道编码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="渠道名称"
          width="140">
        </el-table-column>
        <el-table-column
          prop="payChannelName"
          label="渠道类型"
          width="140">
        </el-table-column>
        <el-table-column
          prop="remarks"
          label="备注"
          width="280">
        </el-table-column>
        <el-table-column
          prop="mchId"
          label="商户号"
          width="140">
        </el-table-column>
        <el-table-column
          prop="companyName"
          label="所属公司"
          width="280">
        </el-table-column>

      </el-table>
    </template>
    <template>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="business.selectPageNumber"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="business.total">
        </el-pagination>
      </div>
    </template>
    <hzl-dialog :show="model"></hzl-dialog>
  </div>

</template>

<script>
  export default {
    name: "platformSetup",
    data() {
      return {
        model: false,
        // selectedId: '',//选中的id
        inputValue: '',
        dataPlatform: [
          {
            number:"666",
            name:'平台1',
            payChannelName:'幸福西饼',
            remarks:'这是个备注',
            mchId:'商户号',
            companyName:'鲁班七号公司',
            id:'1',

          }
        ], //请求data
        business: {
          pageNumber: 1, //第几页
          pageSize: 100, //每页展示数
          total: 0, //总页数
          selectPageNumber: 1 //选中的页数
        },
        searchText:'',
        selectId:''
      }
    },
    watch: {
      $route(to, from) {
        console.log(to);
        if(to.fullPath =='/payChannel'){
          this.getData();
        }
      }
    },
    mounted() {
      this.getData()
    },
    methods: {

      //新增
      addPlat(){

      },
      //修改
      modify(){
        this.model = true;
      },
      //查询
      searchClick: function() {
        var searchmin = this.searchText;
        this.getData();
      },
      getData() { //请求数据
        var searchmin = this.searchText;
        //此为请求data接口

      },
      //点击事件
      platformDefult: function(row) {
        this.selectId = row.id;
        console.log(this.selectId)
      },
      handleSizeChange(val) { // 选择请求每页页数
        this.business.pageSize = val;
        this.getData()
      },
      handleCurrentChange(val) { //翻页
        this.business.pageNumber = val;
        this.getData()
      },
      ordPlatformDele() {
        if(this.selectId) {
         //删除接口
//          {
//
//          }
        }else{
          this.$message.error('请选择要删除的平台')
        }
      }
    }
  }
</script>

<style scoped>
  .search-btn{
    display: -webkit-box;
    display: flex;
    padding: 15px 0;
  }
  .search-btn>div{
    flex: 1;
  }
  .btn-box{
    justify-content: flex-end;
    display: flex;
  }
  .search{
    display: -webkit-box;
    display: flex;
  }
  .search .el-input{
    margin-right: 10px;
    width: 150px;
  }

</style>
