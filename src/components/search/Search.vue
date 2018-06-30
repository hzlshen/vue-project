<template>
    <div class="search">
     <div>
       <el-button type="text" @click="dialogFormVisible = true"><i class="el-icon-search"></i>高级搜索</el-button>
       <div class="search-body">
         <template>
           <el-dialog title="高级搜索" :visible.sync="dialogFormVisible">
             <!--</el-form-item>-->
             <div class="search-contain">
               <div class="left-search-body">
                 <template>
                   <el-row>
                     <el-button size="small" >保存</el-button>
                     <el-button size="small"  >另存</el-button>
                     <el-button size="small"  >重命名</el-button>
                     <el-button size="small" >删除</el-button>
                   </el-row>
                 </template>
               </div>
               <div class="right-search-body">
                 <template>
                   <el-row>
                     <el-button size="small" type="primary" >新增行</el-button>
                     <el-button size="small" type="success" >删除行</el-button>
                     <el-button size="small" type="danger" >全部删除</el-button>
                     <el-button size="small" type="warning" >插入行</el-button>
                   </el-row>
                 </template>
               </div>
             </div>
             <div slot="footer" class="dialog-footer">
               <el-button  size="small" @click="dialogFormVisible = false">取 消</el-button>
               <el-button type="primary" size="small" @click="dialogFormVisible = false">确 定</el-button>
             </div>
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
              dialogTableVisible: false,
              dialogFormVisible: false,
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
              formLabelWidth: '120px'
            }
        },
      methods:{

      }
    }
</script>
<style scoped>
</style>
