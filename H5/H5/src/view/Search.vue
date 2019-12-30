<template>
  <div class="Search">
      <header class="searchHeader">

        <!-- 搜索组件 -->
        <!-- searchToggle ---- 是否显示搜索按钮（ true ---- 显示 ---- false ---- 不显示 -->
        <CustomSearch :searchToggle="searchToggle" v-on:toggle="show" />

        <!-- 历史记录 -->
        <div class="record" v-if="record">
            <div class="record-title">
                <div class="record-title-l">历史记录</div>
                <div class="record-title-r"><img v-on:click="remove" class="del" src="../assets/car/del.png" alt=""/></div>
            </div>
            <div class="record-main" >
                <div class="record-unit">啤酒</div>
                <div class="record-unit">可口可乐</div>
                <div class="record-unit">水果糖</div>
            </div>
        </div>

        <!-- 筛选 -->
        <!-- setDistributionId ---- 配送方式（ 0 ---- 全部 1 ---- 平台配送 2 ---- 商家配送） -->
        <!-- getDistributionId ---- 获取配送的Id的方法 -->
        <Screening v-if="listToggle" :setDistributionId="distributionId" v-on:getDistributionId="getDistributionId" />

      </header>

      <div class="content">
        <!-- 筛选列表 -->
        <div class="contents" ref="wrapper" :style="{ height: (wrapperHeight) + 'px' }" v-show="listToggle">
            <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                <ul class="list-container good-out" id="shop-box">
                    <li class="item-content good" v-for="(item, index) in number" :key="index">
                        <div class="good-left">
                            <img class="discount" src="../assets/common/coupon.png" alt=""/>
                            <img class="good-icon" src="../assets/car/good.png" alt=""/>
                        </div>
                        <div class="good-right">
                            <div class="good-text">六个核桃 核桃乳饮品240ml*20罐 精品型饮料</div>
                            <div class="new-price">
                                <div class="new-one"><span class="orange">￥1339.0</span><span class="unit">/箱</span></div>
                            </div>
                            <div class="select-type">
                                <div class="select-type-l">
                                    <div class="select-type-item active">箱</div>
                                    <div class="select-type-item">盒</div>
                                    <div class="select-type-item">瓶</div>
                                    <div class="select-type-item">袋</div>
                                    <div class="select-type-item">条</div>
                                </div>
                                <div class="stock-no" v-if="typeof index === 'number' && index % 2 === 0">到货提醒</div>
                            </div>
                            <div class="good-ac">
                                <span class="full-add">满赠</span>
                                <span class="full-minus">满减</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </mt-loadmore>
        </div>
    </div>
  </div>
</template>

<script>

// mint-ui框架组件
import { InfiniteScroll, Indicator, loadmore } from 'mint-ui'

// 自定义搜索框
import CustomSearch from '../components/CustomSearch'

// 自定义筛选功能
import Screening from '../components/Screening'

export default {
  components: {
    CustomSearch,
    InfiniteScroll,
    Screening,
    Indicator,
    loadmore
  },
  name: 'Search',
  data () {
    return {
      searchToggle: true,
      record: true,
      listToggle: false,
      number: 10,
      distributionId: 0,
      allLoaded: false, // 可以进行上拉
      isAutoFill: false, // 是否自动触发上拉函数
      wrapperHeight: 0,
      courrentPage: 0
    }
  },
  mounted () {
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight = document.documentElement.clientHeight - 2.386 * 40
    console.log(document.documentElement.clientHeight, this.$refs.wrapper.getBoundingClientRect().top)
    // this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    // console.log(document.documentElement.clientHeight, this.$refs.wrapper.getBoundingClientRect().top)
  },
  methods: {
    remove: function () {
      this.record = false
    },
    show: function (data) {
      console.log(data)
      this.record = data
      this.listToggle = !data
    },
    getDistributionId: function (distributionId) {
      console.log(distributionId)
      if (distributionId === '0') {
        this.number = 10
      } else if (distributionId === '1') {
        this.number = 5
      } else {
        this.number = 3
      }
      this.allLoaded = false
    },
    // 上拉加载
    loadBottom () {
      console.log('111')
      this.loadMore()
    },
    // 加载更多
    loadMore () {
      setTimeout(() => {
        this.number = this.number + 10
        if (this.number > 50) {
          this.allLoaded = true // 若数据已全部获取完毕
        }
        this.courrentPage = this.courrentPage++
        this.$refs.loadmore.onBottomLoaded()
      }, 3000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .searchHeader{
        position: fixed;
        width: 100%;
        z-index: 1111;
        background: #f5f5f5;
    }
    .Search {
        height: 100%;
        position: absolute;
        width: 100%;
        background: #f5f5f5;
    }
    .content {
        width: 100%;
        background-color: #fff;
        padding-top: 2.5rem;
        box-sizing: border-box;
    }
    .record{
        width: 100%;
        background-color: #fff;
        padding: 0.16rem 0.26rem;
        margin-bottom: 0.16rem;
        box-sizing: border-box;
    }
    .record-title{
        width: 100%;
        height: 0.96rem;
        line-height: 0.96rem;
        display: flex;
    }
    .record-title-l{
        flex: 1;
        height: 100%;
        overflow: hidden;
    }
    .record-title-r{
        width: 0.64rem;
        height: 100%;
        text-align: center;
    }
    .del{
        width: 0.426rem;
        height: 0.426rem;
    }
    .record-main{
        width: 100%;
    }
    .record-unit{
        width: 1.866rem;
        height: 0.693rem;
        line-height: 0.693rem;
        text-align: center;
        overflow: hidden;
        display: inline-block;
        border: 1px solid #e0e0e0;
        margin-right: 0.16rem;
        font-size: 0.32rem;
        margin-bottom: 0.16rem;
    }
    .bar-nav~.content {
        top: 1.333rem;
    }

    /*页面主体内容*/
    .contents {
        width: 100%;
        position: absolute;
        overflow: scroll;
    }
    .contents #shop-box {
        list-style: none;
        padding: 0 !important;
        margin: 0 !important;
    }
    .bar-nav~.content {
        top: 2.4rem;
    }
    .list-block-change{
        margin: 0;
    }
    .list-block-change .item-content{
        padding: 0;
        padding-left: 0.266rem;
        align-items: flex-start;
        display: flex;
        box-sizing: border-box;
    }
    .good{
        width: 100%;
        font-size: 0.346rem;
        background-color: #fff;
        display: flex;
    }
    .good-left{
        width: 2.88rem;
        padding: 0.266rem 0.0533rem 0.0533rem;
        position: relative;
    }
    .discount{
        position: absolute;
        top: 0.32rem;
        left: 0;
        width: 0.8rem;
        height: 0.8rem;
        display: none;
    }
    .good-icon{
        width: 2.666rem;
    }
    .good-right{
        flex: 1;
        border-bottom: 1px solid #e0e0e0;
        padding: .266rem 0.266rem 0.266rem 0;
        position: relative;
    }
    .good-text{
        width: 100%;
        height: 1.066rem;
        line-height: 0.533rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .good-info{
        width: 100%;
        height: 0.64rem;
        display: flex;
    }
    .good-ac{
        height: 0.533rem;
        overflow: hidden;
        top: 0;
        right: -0.533rem;
    }
    .good-price{
        flex: 1;
        height: 100%;
        line-height: 0.693rem;
        overflow: hidden;
        font-size: 0.4rem;
        text-align: left;
    }
    .unit{
        font-size: 12px;
        color: #c4c3c3;
    }
    .full-add {
        padding: 0 5px;
        background-color: #3b9ce3;
        color: #fff;
        display: inline-block;
        margin-right: 0.16rem;
        font-size: 8px;
        height: 0.373rem;
        line-height: 0.4rem;
        height: 0.4rem;
    }
    .full-minus {
        padding: 0 5px;
        background-color: #ff804a;
        color: #fff;
        display: inline-block;
        font-size: 8px;
        height: 0.373rem;
        line-height: 0.4rem;
        height: 0.4rem;
    }
    .good-number{
        width: 100%;
        display: flex;
        height: .8rem;
        line-height: .666rem;
        padding-top: 0.106rem;
    }
    .good-stock{
        width: 64%;
        height: 100%;
        overflow: hidden;
    }
    .g-btns{
        width: 35%;
        height: 100%;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        display: none;
    }
    .minus,.add{
        width:26%;
        height: 100%;
        float: left;
        text-align: center;
    }
    .minus{
        border-right: 1px solid #e0e0e0;
    }
    .add{
        border-left: 1px solid #e0e0e0;
    }
    .minus>img,.add>img{
        width: 0.346rem;
        height: 0.346rem;
    }
    .list-block .goods-num[type=text]{
        width: 48%;
        float: left;
        display: block;
        height: 100%;
        line-height: 0.64rem;
        text-align: center;
        outline: none;
        border: none;
    }
    .red{
        color: #f50e19;
    }
    .stock-no{
        width: 35%;
        height: 100%;
        border: 1px solid #ff5a00;
        border-radius: 4px;
        color: #ff5a00;
        text-align: center;
        overflow: hidden;
    }
    .low .good-ac{
        display: none;
    }
    .low .discount{
        display: block;
    }
    .good-time{
        width: 100%;
        height: 0.533rem;
        line-height: 0.533rem;
        font-size: 0.32rem;
        color: #c4c3c3;
        overflow: hidden;
    }
    .car-btn{
        width: 35%;
        height: 100%;
        text-align: right;
    }
    .car-btn img{
        width: 0.64rem;
        height: 0.64rem;
    }
    .my-input{
        display: none;
    }
    .bar-tab{
        display: none;
    }
    .select-type {
        display: flex;
        margin: 0.213rem 0;
    }

    .select-type-l {
        flex: 1;
        display: flex;
    }

    .select-type-item {
        width: 0.64rem;
        height: 0.64rem;
        border: 1px solid rgba(153, 153, 153, 1);
        line-height: 0.64rem;
        text-align: center;
        color: rgba(153, 153, 153, 1);
        border-radius: 50%;
        margin-right: .213rem;
    }
    .select-type-item.active{
        border: 1px solid #FF5A00;
        color: #FF5A00;

    }
    .new-price-r img{
        width: 0.64rem;
    }
    .new-price .new-one{
        text-align: right;
    }
    .new-price .orange{
        font-size: 0.453rem;
    }
    .infinite-scroll-preloader {
        margin: .266rem;
        text-align: center;
    }
    .preloader {
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        -webkit-transform-origin: 50%;
        transform-origin: 50%;
        -webkit-animation: preloader-spin 1s steps(12,end) infinite;
        animation: preloader-spin 1s steps(12,end) infinite;
    }
    .preloader:after {
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background-image: url(../assets/classify/loading.svg);
        background-position: 50%;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    @-webkit-keyframes preloader-spin{
        100%{
            -webkit-transform:rotate(360deg)
        }
    }
    @keyframes preloader-spin{
        100%{
            -webkit-transform:rotate(360deg);
            transform:rotate(360deg)
        }
    }
</style>
