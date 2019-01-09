/**
 * Created by 不动的推动者 on 2018/4/30.
 */
/*****
 * 获取数据get + 对应路由名称
 * 向后台传数据 store + 对应路由名称
 * 驼峰命名
 * *****/


import { fetch } from "./fetch"; //引用fetch.js
import api from './url'; //引用url.js


//查看用户
export const lookOption = (username,password,captcha) => fetch({//lookOption是你要调用接口的名字，issuer,userId是传进来的参数
  //api.Hallowmas 引用url.js里面的数据
  url: api.Hallowmas,
  method: 'get',//请求方法
  params:{
    // username,password,captcha//参数
  }
});
//获取公司
export const getCompany = (date,audit) => fetch({
  url:'',
  method:'',
  params:{
    date,
    audit
  }
});

//订单应收获取数据
export const getOrderReceivable = ()=>fetch({
  url: api.commonLick,
  method: 'get',
  params: {
  }
});

//cols title
export const getCols = ()=>fetch({
  url: api.cols,
  method: 'get',
  params: {
  }
});

//审核 批量审核audit
export const audit = (data)=>fetch({
  url: '',
  methods: 'get',
  params: {
    data: data
  }
})





//获取验证码
export const getcaptchas = () => fetch('', {},'POST'); //简写

//有新接口的时候像上面那样再来一次
// //修改昵称接口
// export function userID(name){
//   return fetch({
//     url:api.myself_name,
//     method:"put",
//     data:{
//       nickname:name
//     }
//   })
// }
//
//
// //取消转发赞踩接口
// export function cancelForward(articleId,type){
//   return fetch({
//     url:api.detail_article+articleId+"/forwarded_impress",
//     method:"delete",
//     params:{
//       type:type
//     }
//   })
// }

//导入
export const leadingIn = () => fetch('',{},'POST')
