/**
 * Created by 不动的推动者 on 2018/5/2.
 */
import {
  COLLAPSE,
  COMPANY,
  VERIFY_STATUS,
  DIALOG_FROM_AUDIT,
  DIALOG_FROM_UN_AUDIT,
  DIALOG_FROM_DIFFERENCES,
  DIALOG_FROM_DELETE,
  DIALOG_FROM_STATEMENT
}from './mutation-type'

export default {
  //侧边栏
  ['COLLAPSE'](state) {
    state.collapse = !state.collapse
  },
  //将选择的公司
  ['COMPANY'](state,obj) {
    state.companyValue = obj;
  },
  ['VERIFY_STATUS'](state,obj){
    state.verifyStatus = obj;
  },
  ['ORDER_LIST_INFO'](state,obj){
    state.orderListUUid = obj;
  },
  ['DIALOG_FROM_AUDIT'](state){
    state.dialogFromAudit = !state.dialogFromAudit;
  },
  ['DIALOG_FROM_UN_AUDIT'](state){
    state.dialogFromUnAudit = !state.dialogFromUnAudit
  },
  ['DIALOG_FROM_DIFFERENCES'](state){
    state.dialogFromDifferences = !state.dialogFromDifferences
  },
  ['DIALOG_FROM_DELETE'](state){
    state.dialogFromDelete = !state.dialogFromDelete
  },
  ['DIALOG_FROM_STATEMENT'](state){
    state.dialogFromStatement = !state.dialogFromStatement;
    console.log(state.dialogFromStatement);
  },
  ['DIALOGGET_WEB_SOCKET'](state) { //websocket
    state.dialoggetWebSocket = !state.dialoggetWebSocket;
  },

}
