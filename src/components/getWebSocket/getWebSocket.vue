<template>
  <div class="batch-statement">
    <template>
      <el-dialog width="42%" style="min-height:100px;" title="提示" :close-on-click-modal="false" :show-close="false" :close-on-press-escape	="false" :visible.sync="dialoggetWebSocket" :before-close="dialog_close" :modal-append-to-body="false">
        <div class="progressClass">
          <el-progress :text-inside="true" status="socketStatus" :stroke-width="18" :percentage="socketSchedule"></el-progress>
        </div>
        <div style="margin-top:10px;height:15px;text-align:center">{{socketDatatext}}</div>
        <div slot="footer" class="dialog-footer">
          <el-button size="mini" type="primary" @click="determine" :disabled="guanbi">确 定</el-button>
        </div>
      </el-dialog>
    </template>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import api from '../../axios/url.js'
  export default {
    name: 'getWebSocket',
    data () {
      return {
        socketDatatext:'',  //文字
        socketStatus:'', //状态
        guanbi:false,
        socketSchedule:70, //百分比
      }
    },
    computed:{
      ...mapState({
        dialoggetWebSocket:state=>state.dialoggetWebSocket
      })
    },
    watch: {
      $route(to, from) {
        //由于路由的原因，现在还有一种websocket可能失效，从对账记录到订单列表：to  orderReceivable from verifyReceivablesRecord
        console.log(to);
        //到订单查询，除了自动对账界面和对账记录界面
        if(to.fullPath =='/orderReceivable'){
          if(from.fullPath !='/verifyAutomate'&&from.fullPath !='/verifyReceivablesRecord'){
            this.websockets();
          }
        }

        //到对账记录界面 来自订单查询
        if(to.fullPath =='/verifyReceivablesRecord'){
          if(from.fullPath =='/orderReceivable'){
              this.close();
          }
        }
        //到自动对账，来自交易流水
        if(to.fullPath =='/verifyAutomate'){
          if(from.fullPath =='/transactionFlow'){
            this.close();
          }
          this.websockets();
        }
        //来自订单上传
        if(from.fullPath =='/orderUpload'){
          this.close();
        }

        //来自自动对账，到交易流水
        if(from.fullPath =='/verifyAutomate'){
          if(to.fullPath =='/transactionFlow'){
            this.close();
          }
        }
      }
    },
    created: function(){
      this.websockets();
    },
    methods: {
      websockets() {
        var socket=localStorage.getItem("socket");
        var that = this;
        let  websocket=new WebSocket(api.ws+ "/ws");
        if(socket!="open"){
          websocket.onopen = function(evnt) {
            console.log("open websocket");
            localStorage.setItem("socket","open");
            websocket.send('Holle');
          };
        }
        //发送消息
        websocket.onmessage = function(event) {
          var data = JSON.parse(event.data);
          if(JSON.parse(event.data)!={}&&JSON.parse(event.data)!=''&&JSON.parse(event.data)!='undefined '){
            that.socketSchedule = parseFloat(JSON.parse(event.data).process);
          }
          that.socketStatus = JSON.parse(event.data).status;
          that.socketDatatext = JSON.parse(event.data).text;
          if (JSON.parse(event.data).status === 'Ongoing') {
            that.guanbi = true;
          } else {
            that.guanbi = false;
          }
        }
        websocket.onclose = function(evnt) {
          localStorage.setItem("socket","close");
          console.log(" clsoe websocket");
        };
        //路由切换
        this.$router.afterEach(function () {
          localStorage.setItem("socket","close");
          websocket.close();
        })
        this.close=function(){
          localStorage.setItem("socket","close");
          websocket.close();
        }
      },
      shutDown(){
      },
      cancel(){ //取消
        this.$store.dispatch('dialoggetWebSocket')
      },
      determine(){ //确定
        this.$store.dispatch('dialoggetWebSocket')
        this.$emit('socketStatus',this.guanbi)
        //清空
        this.socketDatatext ='';  //文字
        this.socketStatus =''; //状态
        this.guanbi = false;
        this.socketSchedule =0;
//        location.reload();
      },
      dialog_close() {
        this.$store.dispatch('dialoggetWebSocket')
      },
      getCookie(name){
        name = name + "="
        var start = document.cookie.indexOf(name),
          value = null;
        if(start>-1){
          var end = document.cookie.indexOf(";",start);
          if(end == -1){
            end = document.cookie.length;
          }
          value = document.cookie.substring(start+name.length,end);
        }
        return value;
      }
    }
  }
</script>
<style scoped>
  .el-dialog .el-input{
    max-width: 300px;
  }
  .progressClass{
    margin: auto 40px;
  }

</style>


