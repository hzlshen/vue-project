<template>
    <div class="structure">
      <h3 class="head_title">组织架构</h3>
      <template>
        <el-input
          size="mini"
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
      </template>
      <div>
      </div>
      <el-row>
        <el-col :span="6">
          <div class="treeBox">
            <!--<treeView class="item" :tree="treeData"></treeView>-->
            <ul >
              <!-- <treeView class="item" :model="treeData"></treeView> -->
            </ul>
          </div>
        </el-col>
        <el-col :span="10">6</el-col>
      </el-row>

    </div>
</template>

<script>
  // import treeView from '../../components/treeView/treeView'
  export default {
      name: 'structure',
      components: {
        // treeView
      },
      data () {
        return {
          filterText: '',
          radioValue: '',
          treeData: [{
            name: '幸福商城有限公司',
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
          },{
              name:'aaa'
          }],
        }
      },
      watch: {
        filterText(val) {

        }
      },
      computed: {

      },
      methods: {

      },
    }
</script>
<style scoped>

  .el-collapse,.el-input{
    width: 300px;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
  .treeBox {
    border: 1px solid #E5E5E5;
    margin-top: 20px;
    width: 310px;

    background: #fffef9;
  }

</style>
