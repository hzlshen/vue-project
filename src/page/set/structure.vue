<template>
    <div class="structure">
      <h3 class="head_title">平台管理</h3>
      <template>
        <el-input
          size="mini"
          placeholder="输入关键字进行过滤"
          v-model="filterText">
        </el-input>
      </template>
      <div>
      </div>

    </div>
</template>

<script>
  export default {
      name: 'structure',
      components: {
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
