<template>
  <div class="order-add">
    <div class="head_search">
      <h2>订单新增</h2>
    </div>
    <template>
      <el-tabs v-model="activeNameOne">
        <!--基本信息-->
        <el-tab-pane label="基本信息" name="basicInfo">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>单据类型:</span>
                <el-select v-model="fromData.orderType" size="small" placeholder="单据类型" >
                  <el-option
                    v-for="item in orderTypeSelect"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>单据编号:</span>
                <el-input
                  placeholder="单据编号"
                  size="small"
                  v-model="fromData.billNo"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>平台:</span>
                <el-input
                  placeholder="平台"
                  size="small"
                  v-model="fromData.platform"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>销售公司:</span>
                <el-input
                  placeholder="销售公司"
                  size="small"
                  v-model="fromData.salesCompany"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>业务日期:</span>
                <el-date-picker
                  v-model="fromData.businessDate"
                  size="small"
                  type="datetime"
                  placeholder="选择日期时间">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>对账金额:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.totalAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>平台订单号:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.orderNo"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>销售部门:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.salesDepartment"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>对账状态:</span>
                <el-input
                  placeholder="对账状态"
                  size="small"
                  v-model="fromData.settleStatus"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>已对账金额:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.settleAmount"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>未对账金额:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.unsettleAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>销售员:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.salesman">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>退款状态:</span>
                <el-select v-model="fromData.reconStatus" size="small" placeholder="退款状态" >
                  <el-option
                    v-for="item in reconStatusSelect"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>已退款金额:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.settlementMoney">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>未退款金额:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.unsettlementMoney">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>单据状态:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.status"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>是否差异处理:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.differenceProcessingStatus"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>差异处理金额:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.differenceProcessingAmount"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>差异处理原因:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.differenceProcessingRamarks"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>备注:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.remarks">
                </el-input>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--订单信息-->
        <el-tab-pane label="订单信息" name="orderInfo">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>订单总金额:</span>
                <el-input
                  placeholder="订单总金额"
                  size="small"
                  v-model="fromData.orderTotalAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>订单初始支付金:</span>
                <el-input
                  placeholder="单据编号"
                  size="small"
                  v-model="fromData.orderInitAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>订单货到应收:</span>
                <el-input
                  placeholder="平台"
                  size="small"
                  v-model="fromData.platform">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>运费:</span>
                <el-input
                  placeholder="销售公司"
                  size="small"
                  v-model="fromData.salesCompany">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>订单优惠抵扣:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.totalAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>优惠券名称:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.totalAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>订单状态:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.orderNo">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>支付状态:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.salesDepartment">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>支付方式:</span>
                <el-input
                  placeholder="对账状态"
                  size="small"
                  v-model="fromData.settleStatus">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>取消理由:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.settleAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>是否有拆单:</span>
                <el-select v-model="fromData.haveOtherOrder" size="small" placeholder="是否有拆单" >
                  <el-option
                    v-for="item in haveOtherOrder"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>所属订单类型:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.salesman">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>团购验证码:</span>
                <el-select v-model="fromData.reconStatus" size="small" placeholder="退款状态" >
                  <el-option
                    v-for="item in reconStatusSelect"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>接单人:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.settlementMoney">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>操作人:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.unsettlementMoney">
                </el-input>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <!--配送信息-->
        <el-tab-pane label="配送信息" name="shippingInfo">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>订货人:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.orderer">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>订货人电话:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.ordererPhone">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>下单时间:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.deliveryTime"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>门店:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.store">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>收货人:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.receiver">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>收货人电话:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.receiverPhone">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>收货人地址:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.orderNo">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>配送方式:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.salesDepartment">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content">
                <span>配送员名称:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.totalAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>配送员手机:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.totalAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>配送时间:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.orderNo"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>所属城市:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.salesDepartment">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">

            <el-col :span="6">
              <div class="grid-content">
                <span>配送站:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.totalAmount">
                </el-input>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content">
                <span>发票内容:</span>
                <el-input
                  placeholder="请输入内容"
                  size="small"
                  v-model="fromData.totalAmount">
                </el-input>
              </div>
            </el-col>
          </el-row>

        </el-tab-pane>
        <!--其它-->
        <el-tab-pane label="其它" name="createInfo">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content">
                <span>创建人:</span>
                <el-input
                  placeholder="创建人"
                  size="small"
                  v-model="fromData.creator"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <span>修改人:</span>
                <el-input
                  placeholder="修改人"
                  size="small"
                  v-model="fromData.operator"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <span>审核人:</span>
                <el-input
                  placeholder="审核人"
                  size="small"
                  v-model="fromData.auditor"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="grid-content">
                <span>创建日期:</span>
                <el-input
                  placeholder="创建日期"
                  size="small"
                  v-model="fromData.createTime"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <span>修改日期:</span>
                <el-input
                  placeholder="修改日期"
                  size="small"
                  v-model="fromData.updateTime"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <span>审核日期:</span>
                <el-input
                  placeholder="审核日期"
                  size="small"
                  v-model="fromData.auditTime"
                  :disabled="true">
                </el-input>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </template>
    <!--表单-->
    <template>
      <el-tabs type="border-card" v-model="activeNameTwo">
        <div class="btn-wrap">
          <el-button size="small" type="primary" @click="addTr">新增</el-button>
        </div>
        <el-tab-pane label="对账计划" name="collate"> <!--collate 对账-->
          <template>
            <el-table
              :data="fromData.reconciliationPlanInfoList"
              border
              width="100%">
              <el-table-column
                prop="name"
                label="名称">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.reconciliationPlanInfoList[scope.$index].name"
                    placeholder="名称">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="money"
                label="金额">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.reconciliationPlanInfoList[scope.$index].money"
                    placeholder="金额">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="settleAmount"
                label="已对账金额">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.reconciliationPlanInfoList[scope.$index].settleAmount"
                    placeholder="已对账金额">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="unsettleAmount"
                label="未对账金额">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.reconciliationPlanInfoList[scope.$index].unsettleAmount"
                    placeholder="未对账金额">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="settlementMoney"
                label="已退款金额">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.reconciliationPlanInfoList[scope.$index].settlementMoney"
                    placeholder="已退款金额">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="unsettlementMoney"
                label="未退款金额">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.reconciliationPlanInfoList[scope.$index].unsettlementMoney"
                    placeholder="名称">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作"
                width="80px">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-tab-pane>
        <el-tab-pane label="订单明细" name="detail"><!--detail 明细-->
          <template>
            <el-table
              :data="fromData.orderReceivableSupList"
              border
              width="100%">
              <el-table-column
                prop="firstCommodityClass"
                label="一级类目名称"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].firstCommodityClass"
                    placeholder="一级类目名称">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="secondCommodityClass"
                label="二级类目名称"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].secondCommodityClass"
                    placeholder="二级类目名称">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="specification"
                label="规格"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].specification"
                    placeholder="规格">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="commodityNum"
                label="商品编码"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].commodityNum"
                    placeholder="商品编码">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="productName"
                label="产品名称(SPU名称)"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].productName"
                    placeholder="产品名称(SPU名称)">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="SKU"
                label="SKU编码"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].SKU"
                    placeholder="SKU编码">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="SKUNum"
                label="SKU值"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].SKUNum"
                    placeholder="SKU值">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="groupSKU"
                label="是否为组合商品"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].groupSKU"
                    placeholder="是否为组合商品">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="productNum"
                label="产品数量">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].productNum"
                    placeholder="产品数量">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="commission"
                label="商品门市价"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].commission"
                    placeholder="商品门市价">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="unitPrice"
                label="商品销售价"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].unitPrice"
                    placeholder="商品销售价">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="commodityOfficialPrice"
                label="商品官网价"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].commodityOfficialPrice"
                    placeholder="商品官网价">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="amount"
                label="商品实际售价(总)"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].amount"
                    placeholder="商品实际售价(总)">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="platformCoupon"
                label="商品卡券优惠金额(总)"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].platformCoupon"
                    placeholder="商品卡券优惠金额(总)">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="commodityReceivablePrice"
                label="商品应收金额"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].commodityReceivablePrice"
                    placeholder="商品应收金额">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="commodityVoucherNumber"
                label="商品代金券号"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].commodityVoucherNumber"
                    placeholder="商品代金券号">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="paymentNumber"
                label="支付号"
                width="160px">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.orderReceivableSupList[scope.$index].paymentNumber"
                    placeholder="支付号">
                  </el-input>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-tab-pane>
        <el-tab-pane label="关联信息" name="relevance"><!--relevance 关联-->
          <template>
            <el-table
              :data="fromData.receivableRelationInfoList"
              border
              width="100%">
              <el-table-column
                prop="name"
                label="名称">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.receivableRelationInfoList[scope.$index].name"
                    placeholder="名称">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="money"
                label="金额">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.receivableRelationInfoList[scope.$index].money"
                    placeholder="金额">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="relationMoney"
                label="关联金额">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.receivableRelationInfoList[scope.$index].settleAmount"
                    placeholder="已对账金额">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="transNum"
                label="交易流水号">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.receivableRelationInfoList[scope.$index].unsettleAmount"
                    placeholder="未对账金额">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="settleNum"
                label="结算单号">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.receivableRelationInfoList[scope.$index].settlementMoney"
                    placeholder="已退款金额">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="bankNum"
                label="银行流水号">
                <template slot-scope="scope">
                  <el-input
                    size="mini"
                    v-model="fromData.receivableRelationInfoList[scope.$index].name"
                    placeholder="名称">
                  </el-input>
                </template>
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作"
                width="80px">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-tab-pane>
      </el-tabs>
    </template>
    <button @click="getData">console</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {getOrderReceivable} from '../../../axios/api'
  export default {
    name: 'orderAdd',
    data () {
      return {
        getLocalDataList: null, //请求的数据
        index: null,
        activeNameOne: 'basicInfo',//v-model默认选中的tab
        activeNameTwo: 'collate',//v-model默认选中的tab
        fromData: { //新增储存的数据
          /*
           * 基本信息
           * */
          orderType: null,//单据类型
          businessDate: null,//业务日期
          settleStatus: null,//对账状态
          reconStatus: null,//退款状态
          billNo: null,//单据编号
          totalAmount: null,//对账金额
          settleAmount: null,//已对账金额
          settlementMoney: null,//已退款金额
          platform: null,//平台
          orderNo: null,//平台订单号
          unsettleAmount: null,//未对账金额
          unsettlementMoney: null,//未退款金额
          salesCompany: null,//销售公司
          salesDepartment: null,//销售部门
          status: null,//单据状态
          remarks: null,//备注
          salesman: null,//销售员
          differenceProcessingRamarks: null,//差异处理原因
          differenceProcessingAmount: null,//差异处理金额
          differenceProcessingStatus: null,//是否差异处理
          /*
           * 订单信息
           * */
          orderTotalAmount: null, //订单总金额
          orderInitAmount: null, //订单初始支付金
          orderReceiveAmount: null, //订单货到应收
          freight: null, //运费
          orderDiscountAmount: null, //订单优惠抵扣
          couponName: null, //优惠券名称
          orderStatus: null, //订单状态
          payState: null, //支付状态
          payType: null, //支付方式
          cancelReason: null, //取消理由
          haveOtherOrder: null, //是否拆单
          orderTypeBelong: null, //所属订单类型
          groupPurchaseVerificationCode: null, //团购验证码
          orderPickUpEmp: null, //接单人
          orderOperator: null, //操作人
          /*
           * 配送信息
           * */
          orderer: null,//订货人
          ordererPhone: null,//订货人电话
          deliveryTime: null,//下单时间(配送时间)
          store: null,//门店
          receiver: null,//收货人
          receiverPhone: null,//收货人电话
          receiverAddress: null,//收货人地址
          delivery: null,//配送方式
          deliveryMan: null,//配送员名称
          deliveryManPhone: null,//配送员手机
          sendArea: null,//所属城市
          sendStation: null,//配送站
          invoiceContent: null,//发票内容
          /*
           * 其它
           * */
          creator: null,//创建人
          createTime: null,//创建日期
          operator: null,//修改人
          updateTime: null,//修改日期
          auditor: null,//审核人
          auditTime: null,//审核日期
          reconciliationPlanInfoList:[{//对账计划
            name: null,
            money: null,
            settleAmount: null,
            unsettleAmount: null,
            settlementMoney: null,
            unsettlementMoney: null
          }
          ],
          orderReceivableSupList:[{//订单明细
            firstCommodityClass: null,//一级类目名称
            secondCommodityClass: null,//二级类目名称
            commodityName: null,//商品名称
            specification: null,//规格
            commodityNum: null,//商品编码
            productName: null,//产品名称
            SKU: null,//SKU编码
            SKUNum: null,//SKU值
            groupSKU: null,//是否为组合商品
            productNum: null,//商品数量
            commission: null,//商品门市价
            unitPrice: null,//商品销售价
            //商品活动价(总)
            commodityOfficialPrice: null,//商品官网价
            amount: null,//商品实际售价(总)
            platformCoupon: null,//商品卡券优惠金额(总)
            commodityReceivablePrice: null,//商品应收金额
            commodityVoucherNumber: null,//商品代金券号
            paymentNumber: null,//支付号
          }],
          receivableRelationInfoList:[{//关联信息
            name: null, //名称
            money: null,//金额
            relationMoney: null,//关联金额
            transNum: null,//交易流水号
            settleNum: null ,//结算单号
            bankNum: null,//银行流水号
          }],
        },
        orderTypeSelect: [{ //单据类型
          value: '0',
          label: '平台订单'
        }, {
          value: '1',
          label: '手工订单'
        }],
        reconStatusSelect: [{ //退款状态
          value: 'Part',
          label: '部分退款'
        },{
          value: 'Completely',
          label: '完全退款'
        }],
        haveOtherOrder: [{
          value: '1',
          label: '是'
        },{
          value: '0',
          label: '否'
        }],
      }
    },
    mounted(){
      this.getLocalData()
    },
    computed: {
      ...mapState({
        orderListUUid: store => store.orderListUUid
      }),
    },
    methods: {
      getLocalData(){ // 请求数据
        getOrderReceivable().then(res => {
//            this.getLocalDataList = res.data.rows;
        })
      },
      getData(){
        console.log(this.fromData);
      },
      handleDelete(index) { //删除
        let name = this.activeNameTwo;
        if(name === 'collate'){
          this.fromData.reconciliationPlanInfoList.splice(index,1)
        }else if(name ==='relevance'){
          this.fromData.receivableRelationInfoList.splice(index,1)
        }
        console.log(index);
      },
      addTr(){ /*新增(对账计划订单明细关联信息)*/
        let name = this.activeNameTwo;
        if(name === 'collate'){
          this.fromData.reconciliationPlanInfoList.push({
            name: null,
            money: null,
            settleAmount: null,
            unsettleAmount: null,
            settlementMoney: null,
            unsettlementMoney: null,
          })
        }else if(name === 'detail'){
          this.fromData.orderReceivableSupList.push({
            firstCommodityClass: null,//一级类目名称
            secondCommodityClass: null,//二级类目名称
            commodityName: null,//商品名称
            specification: null,//规格
            commodityNum: null,//商品编码
            productName: null,//产品名称
            SKU: null,//SKU编码
            SKUNum: null,//SKU值
            groupSKU: null,//是否为组合商品
            productNum: null,//商品数量
            commission: null,//商品门市价
            unitPrice: null,//商品销售价
            //商品活动价(总)
            commodityOfficialPrice: null,//商品官网价
            amount: null,//商品实际售价(总)
            platformCoupon: null,//商品卡券优惠金额(总)
            commodityReceivablePrice: null,//商品应收金额
            commodityVoucherNumber: null,//商品代金券号
            paymentNumber: null,//支付号
          })
        }else if(name ==='relevance'){
          this.fromData.receivableRelationInfoList.push({//关联信息
            name: null, //名称
            money: null,//金额
            relationMoney: null,//关联金额
            transNum: null,//交易流水号
            settleNum: null ,//结算单号
            bankNum: null,//银行流水号
          })
        }

      }
    }
  }
</script>
<style scoped>


</style>
