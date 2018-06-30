<template>
    <div class="btn-list">
      <el-dropdown split-button type="primary" size="mini" @click="getBtnInfo($event)">
        导入
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >
            <span @click="getBtnInfo($event)">导出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" size="mini" @click="getBtnInfo($event)">
        审核
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >
            <div @click="getBtnInfo($event)">批量审核</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" size="mini" @click="getBtnInfo($event)">
        反审核
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >
            <div @click="getBtnInfo($event)">批量反审核</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" plain size="mini" @click="getBtnInfo($event)">
        差异对帐
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >
            <div @click="getBtnInfo($event)">批量差异对帐</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button size="mini" type="primary"  @click="getBtnInfo($event)">新增</el-button>
      <el-button size="mini" type="primary"  @click="getBtnInfo($event)">接口获取</el-button>
      <el-dropdown split-button type="primary"  size="mini" @click="getBtnInfo($event)">
        删除
        <el-dropdown-menu slot="dropdown" >
          <el-dropdown-item >
            <div @click="getBtnInfo($event)">批量删除</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<script>
    export default {
        name: 'btnList',
        data () {
            return {}
        },
      methods:{
        /*所有按钮共用一个点击事件*/
        getBtnInfo(e){
          let name = e.target.innerText;
          this.message = name;
          let boolean =
            name === '导入' ||
            name === '导出' ||
            name === '接口获取' ||
            name === '新增' ||
            name === '批量审核' ||
            name === '批量反审核' ||
            name === '批量差异对帐' ||
            name === '批量删除';
          if(boolean){
            switch (name) {
              case '导入':
                this.$router.push('/Upload');
                break;
              case '导出':
                console.log('导出');
                break;
              case '接口获取':
                console.log('接口获取');
                break;
              case '新增':
                this.$router.push('/orderAdd');
                break;
              case '批量审核':
                this.$store.dispatch('dialogFromAudit');
                break;
              case '批量反审核':
                this.$store.dispatch('dialogFromUnAudit');
                break;
              case '批量差异对帐':
                this.$store.dispatch('dialogFromDifferences');
                break;
              case '批量删除':
                this.$store.dispatch('dialogFromDelete');
                break;
            }
          }else{
            if(this.handSelectDataList.length){
              console.log(name,1);
              switch (name) {
                case '审核':
                  this.duff(this.handSelectDataList);
                  console.log('审核');
                  break;
                case '反审核':
                  console.log('反审核');
                  break;
                case '差异对帐':
                  console.log('差异对帐');
                  break;
                case '删除':
                  console.log('删除');
                  break;
              }
            }else{
              this.$message.error('请选择需要' + this.message + '的数据');
            }
          }
        },
      }
    }
</script>
<style scoped>

</style>
