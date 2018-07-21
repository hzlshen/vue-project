/**
 * Created by 不动的推动者 on 2018/5/2.
 */
import {
  COLLAPSE,
  COMPANY,
  VERIFY_STATUS
}from './mutation-type'

export default {
  getCollapse({commit}){
    commit('COLLAPSE');
  },
  getCompanyValue({commit},companyValue) { // 提交到mutations中处理
    commit('COMPANY',companyValue)
  },
  getVerifyStatus({commit},verifyStatus){ //获取
    commit('VERIFY_STATUS',verifyStatus)
  },
  storeOrderListUUid({commit},orderListInfo){ //存储
    commit('ORDER_LIST_INFO',orderListInfo)
  },
  dialogFromAudit({commit}){ //批量审核
    commit('DIALOG_FROM_AUDIT')
  },
  dialogFromUnAudit({commit}){ //批量反深恶黑
    commit('DIALOG_FROM_UN_AUDIT')
  },
  dialogFromDifferences({commit}){ //批量差异对帐
    commit('DIALOG_FROM_DIFFERENCES')
  },
  dialogFromDelete({commit}){ //批量删除
    commit('DIALOG_FROM_DELETE')
  },
  dialogFromStatement({commit}){//报表通用弹出层
    commit('DIALOG_FROM_STATEMENT')
  },
  dialoggetWebSocket({commit}){//websocket
    commit('DIALOGGET_WEB_SOCKET')
  },
}
