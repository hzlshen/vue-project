<template>
  <div class="update-PWD">
     <el-form
          :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="oldpassword">
            <label for="">原密码:</label>
            <el-input
              type="password"
              v-model="ruleForm.oldpassword"
              size="small"
              placeholder="原密码:"></el-input>
          </el-form-item>
          <el-form-item prop="newpassword">
            <label for="">新密码:</label>
            <el-input
              v-model="ruleForm.newpassword"
              type="password"
              size="small"
              placeholder="新密码:">
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <label for="">确认密码:</label>
            <el-input
              v-model="ruleForm.password"
              type="password"
              size="small"
              placeholder="确认密码:">
            </el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </div>

        </el-form>
  </div>
</template>

<script>
    export default {
        name: "updatePWD",
        data(){
            return{
              showPassword: false, // 是否显示密码
              captchaCodeImg:'',
              userInfo:null,//用户信息
              alertText: null, //提示的内容
              ruleForm: {
                oldpassword: '111111',//旧密码
                newpassword: '666666',//密码
                password:'666666',//确认密码
              },
              rules: {
                oldpassword: [
                  { required: true, message: '请输入原密码', trigger: 'blur' }
                ],
                newpassword: [
                  { required: true, message: '请输入密码', trigger: 'blur' }
                ],
                password: [
                  { required: true, message: '请确认密码', trigger: 'blur' }
                ]
              },
            }
        },
        mounted(){

        },
        methods:{
          submitForm(ruleForm){
            this.$refs[ruleForm].validate((valid) => {
            if(valid){
              this.$message({type:'success',center:true,message:"修改成功!!!"})
              this.ruleForm = {
                oldpassword: '',//旧密码
                newpassword: '',//密码
                password:'',//确认密码
              };
            }else{
              this.$message({type:'warning',center:true,message:"请填写..."})
              return false;
            }
            })
          }

        },
    }
</script>

<style scoped>
  .el-input{
    width: 32%
  }
  .el-form-item{
    /* text-align: center; */
    padding-left: 35%;
  }
  label{
    display: inline-block;
    width: 60px;
  }
  .login-btn{
    text-align: center;
  }
  /* .el-form-item__error{
    left: 20%;
  } */

</style>
