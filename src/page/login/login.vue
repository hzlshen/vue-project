<template>
    <div class="loginContainer">
      <div class="loginTitle">{{$t('h.system')}}</div>
      <div class="loginForm">
        <el-form
          :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input
              v-model="ruleForm.username"
              size="small"
              :placeholder="$t('h.accounts')"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              type="password"
              size="small"
              :placeholder="$t('h.password')">
            </el-input>
          </el-form-item>
          <el-form-item prop="mobileCode">
            <div class="captcha-wrap el-form-item">
              <el-input
                :placeholder="$t('h.code')"
                size="small"
                maxlength="6"
                v-model="ruleForm.codeNumber"
                @keyup.enter.native="submitForm('ruleForm')"></el-input>
              <div class="captcha-img">
                <img @click="getCaptchaCode" src="../../images/captcha.png" alt="" class="captcha">
              </div>
            </div>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">{{$t('h.login')}}</el-button>
          </div>
          <p style="font-size:12px;line-height:30px;color:#999;">Tips:{{$t('h.tips')}}</p>
        </el-form>
      </div>
    </div>
</template>

<script>
  import {lookOption,getcaptchas} from '../../axios/api'
    export default {
        name: 'HelloWorld',
        data () {
            return {
              showPassword: false, // 是否显示密码
              captchaCodeImg:'',
              userInfo:null,//用户信息
              alertText: null, //提示的内容
              ruleForm: {
                username: this.$t('h.administrator'),//账号
                password: '123456',//密码
                codeNumber:'wyrf',//验证码
              },
              rules: {
                username: [
                  { required: true, message: this.$t('h.placeUser'), trigger: 'blur' }
                ],
                password: [
                  { required: true, message: this.$t('h.palcePass'), trigger: 'blur' }
                ],
                codeNumber: [
                  { required: true, message: this.$t('h.palceCode'), trigger: 'blur'}
                ]
              }
            }
        },
      created(){
          this.getCaptchaCode()
      },
      mounted(){

      },
      methods: {
        //获取验证码
         getCaptchaCode(){
          console.log('刷新验证码');
          getcaptchas().then(res=>{

          }).catch(res=>{

          })
        },
        //登陆
         submitForm(formName) {
          const that = this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$router.push('/chart');

              lookOption(this.ruleForm.username,this.ruleForm.password,this.ruleForm.codeNumber).then(res=>{
               that.userInfo = res;
               //如果返回的值不正确，则弹出提示框，返回的值正确则进入home
               if(!that.userInfo.data){
                 this.$message.error(  that.userInfo.statusText);
                 that.getCaptchaCode();
               }else{
                 localStorage.setItem('lz_userName', this.ruleForm.username);
                 localStorage.setItem('lz_passNumber', this.ruleForm.password);
                 //跳转
                  this.$router.push('/chart');
               }
             });
            }else{
              return false;
            }
          })
        }
      }
    }
</script>
<style scoped>
  .loginContainer{
    position: relative;
    width: 100%;
    height: 100%;
    background: #24292e;
  }
  .loginForm{
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    padding:40px 40px 0 40px;
    width: 300px;
    /*height:160px;*/
    border-radius: 5px;
    background: #fff;
  }
  .loginTitle{
    position: absolute;
    top:50%;
    left:50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    margin-top: -210px;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
  }
  .login-btn button{
    width: 100%;
  }

  /*验证图片*/
  .captcha-wrap{
    display: flex;
    align-items: center;
    height: 30px;
    width:100%;
  }
  .captcha-wrap .el-input{
    flex: 1;
  }
  .captcha-img{
    margin-left: 10px;
    height: 100%;
    width: 100px;
  }
  .captcha{
    width: 100%;
    height: 100%;
  }

</style>
