<template>
  <div class="branchesDetails">
    <div class="shopInfo">
      <div>网点名称<span>西安望唐</span></div>
      <div>服务时间<span>06:00 - 22:00</span></div>
      <div>服务电话<span>13468844686</span></div>
      <div>设备地址<span>陕西省西安市雁塔区科技路西口陈家庄小区</span></div>
    </div>
    <div class="equipmentInfo">
      <div class="basisInfo"><span>产品类型</span>充电宝</div>
      <div class="basisInfo"><span>设备ID</span>HYCA100101010101010</div>
      <div class="equipmentType">
        <span>设备类型</span>
        <div>充电宝</div>
        <div>半小时</div>
      </div>
      <div class="billingInfo">
        <span>计费信息</span>
        <div class="billingPrice">
          <div><van-field placeholder="1元" /><span>/半小时</span></div>
          <div><van-field placeholder="20元" /><span>/每天(封顶)</span></div>
        </div>
      </div>
      <div class="equipmentType"><span>设备SN</span>HYCA100101010101010</div>
      <div class="bottom">
        <div class="btn">提交</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "branchesDetails",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
.branchesDetails {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 2.61rem;
  box-sizing: border-box;
  width: 100%;
  background: #f5f5f5;
  .shopInfo {
    width: 18.5rem;
    margin: 0.53rem auto;
    background: #fff;
    border-radius: 5px;
    padding: 1.2rem 1.01rem;
    box-sizing: border-box;
    div {
      display: flex;
      margin-top: 0.48rem;
      font-size: 0.7rem;
      color: #808080;
      &:first-child {
        margin-top: 0;
      }
      span {
        color: #141414;
        display: flex;
        flex-wrap: wrap;
        margin-left: 0.9rem;
        flex: 1;
        text-align: left;
      }
    }
  }

  .equipmentInfo {
    width: 18.5rem;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
    padding: 1.2rem 0;
    box-sizing: border-box;
  }

  .basisInfo {
    margin-top: 0.48rem;
    color: #141414;
    font-size: 0.7rem;
    display: flex;
    padding: 0 1.01rem;
    &:first-child {
      margin-top: 0;
    }
    span {
      color: #808080;
      margin-right: 0.9rem;
      width: 3.77rem;
      display: flex;
    }
  }

  .equipmentType {
    display: flex;
    margin-top: 0.48rem;
    color: #141414;
    font-size: 0.7rem;
    padding: 0 1.01rem;
    span {
      display: flex;
      color: #303030;
      font-size: 0.7rem;
      margin-right: 0.96rem;
      width: 3.77rem;
      align-items: center;
    }
    div {
      display: flex;
      color: #3d84c4;
      font-size: 0.7rem;
      margin-right: 0.8rem;
      width: 4rem;
      height: 1.6rem;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      border: 1px solid #3d84c4;
    }
  }

  .billingInfo {
    display: flex;
    margin-top: 0.48rem;
    padding: 0 1.01rem;
    span {
      display: flex;
      color: #303030;
      font-size: 0.7rem;
      margin-right: 0.96rem;
      width: 3.77rem;
      padding-top: 0.2rem;
    }
    .billingPrice {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: -0.13rpx;
      div {
        display: flex;
        align-items: center;
        color: #303030;
        font-size: 0.7rem;
        padding: 0;
        &:after {
          border: 0;
        }
        .van-cell {
          width: 4.42rem;
          color: #303030;
          font-size: 0.7rem;
        }
      }
    }
  }

  .bottom {
    margin-top: 0.64rem;
    padding: 1.6rem 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e0e0e0;
  }

  .btn {
    height: 2.61rem;
    display: flex;
    align-items: center;
    color: #fff;
    background: #1388ef;
    width: 16rem;
    justify-content: center;
    font-size: 0.85rem;
  }
}
</style>
