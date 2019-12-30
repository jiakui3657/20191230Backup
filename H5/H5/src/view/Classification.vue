<template>
  <div class="Classification">
    <!-- 搜索组件 -->
    <!-- searchToggle ---- 是否显示搜索按钮（ true ---- 显示 ---- false ---- 不显示 -->
    <CustomSearch class="customSearch" :searchToggle="false" />

    <!-- 筛选 -->
    <!-- setDistributionId ---- 配送方式（ 0 ---- 全部 1 ---- 平台配送 2 ---- 商家配送） -->
    <!-- getDistributionId ---- 获取配送的Id的方法 -->
    <Screening class="Screening" :setDistributionId="distributionId" v-on:getDistributionId="getDistributionId" />

    <!-- 分类内容区 -->
    <div class="contents">
      <div class="goods">
        <ul class="goods-left">
          <li class="goods-unit" :class="index === item.id ? 'goods-cur' : ''" v-for="(item) in goodsList" :key="item.id" v-on:click="goodsToggle(item.id)"><span class="goods-unit-inner">{{item.text}}</span></li>
        </ul>
        <div class="goods-right">
          <div class="goods-class">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide :class="goodsClassIndex == item.id ? 'name-cur' : ''" v-for="(item) in goodsClassList" :key="item.id">{{item.text}}</swiper-slide>
            </swiper>
          </div>
          <div class="content infinite-scroll infinite-scroll-bottom" data-distance="100">
            <!-- 商品列表-->
            <div class="list-block goods-inner" ref="wrapper" :style="{ height: (wrapperHeight) + 'px' }">
              <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                <ul class="list-container clear">
                  <li class="list list-change" v-for="(item, index) in number" :key="index">
                    <div class="new-unit">
                      <a class="new-up" href="javascript:void(0);">
                        <div class="new-img">
                          <img class="new-good" src="../assets/classify/good.png" alt="">
                          <div class="full"><span class="full-add">满赠</span><span class="full-minus">满减</span></div>
                        </div>
                        <img class="new-state" src="../assets/home/热卖.png" alt="">
                      </a>
                      <div class="new-down">
                        <a class="new-text seconds" href="javascript:void(0);">维达(Vinda)抽纸超韧3层130抽130抽130抽</a>
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
                          <div class="new-price-r"><img src="../assets/common/go_car.png" alt=""></div>
                        </div>
                        <div class="list-full">
                          <span class="list-full-add">满赠</span><span class="list-full-minus">满减</span>
                        </div>
                        <div class="date">生产日期：2019年5月24日</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </mt-loadmore>
            </div>
          </div>
        </div>
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
    Screening,
    InfiniteScroll,
    Indicator,
    loadmore
  },
  name: 'Classification',
  data () {
    return {
      swiperOption: {
        notNextTick: false,
        initialSlide: 0,
        slidesPerView: 4,
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        on: {
          tap: (event) => {
            // 获取整个swiper组件
            let swiper = this.$refs.mySwiper.swiper
            // swiper可显示区域的宽
            let swiperWidth = swiper.width
            // swiper相对于整体偏移的长度
            let maxTranslate = swiper.virtualSize - swiper.width
            // 需要滚动的范围（滚动到最右侧）
            let maxWidth = maxTranslate + swiperWidth / 2
            // 当前点击的slide
            let slide = swiper.slides[swiper.clickedIndex]
            // 当前点击的slide相对于左侧的距离
            let slideLeft = slide.offsetLeft
            // 当前点击的slide的宽度
            let slideWidth = slide.clientWidth
            // 被点击slide的移动的中心点
            let slideCenter = slideLeft + slideWidth / 2
            // 移动时的动画
            swiper.setTransition(300)
            console.log(slideCenter, maxWidth, maxTranslate)
            this.goodsClassIndex = swiper.clickedIndex
            if (slideCenter < swiperWidth / 2) {
              // 当前元素相对于左侧的距离 + 当前可视化的宽 / 2 < 当前可视化区域 / 2 时移动距离为：0
              swiper.setTranslate(0, 1000, false)
            } else if (slideCenter > maxWidth) {
              // 当前元素相对于左侧的距离 + 当前可视化的宽 / 2 > 偏移的距离 + 可视化区域的宽 / 2 时移动距离为：-偏移的距离（应为是相对于右侧偏移所以是负值）
              swiper.setTranslate(-maxTranslate)
            } else {
              // 正常情况下移动距离为 偏移的距离（应为是相对于右侧偏移所以是负值）
              let nowTlanslate = slideCenter - swiperWidth / 2
              swiper.setTranslate(-nowTlanslate)
            }
          }
        }
      },
      distributionId: 0,
      index: 0,
      goodsList: [
        {
          id: 0,
          text: '酒'
        },
        {
          id: 1,
          text: '饮料'
        },
        {
          id: 2,
          text: '奶制品'
        },
        {
          id: 3,
          text: '冲调饮料'
        },
        {
          id: 4,
          text: '饼干蛋糕'
        },
        {
          id: 5,
          text: '休闲小食'
        },
        {
          id: 6,
          text: '零食糖果'
        },
        {
          id: 7,
          text: '营养保健'
        },
        {
          id: 8,
          text: '节气食品'
        },
        {
          id: 9,
          text: '身体护理'
        },
        {
          id: 10,
          text: '口腔护理'
        }
      ],
      goodsClassList: [
        {
          id: 0,
          text: '白酒'
        },
        {
          id: 1,
          text: '红酒'
        },
        {
          id: 2,
          text: '啤酒'
        },
        {
          id: 3,
          text: '保健酒'
        },
        {
          id: 4,
          text: '洋酒'
        },
        {
          id: 5,
          text: '其他酒1'
        },
        {
          id: 6,
          text: '其他酒2'
        },
        {
          id: 7,
          text: '其他酒3'
        },
        {
          id: 8,
          text: '其他酒4'
        },
        {
          id: 9,
          text: '其他酒5'
        },
        {
          id: 10,
          text: '其他酒6'
        },
        {
          id: 11,
          text: '其他酒7'
        }
      ],
      goodsClassIndex: 0,
      wrapperHeight: 0,
      allLoaded: false, // 可以进行上拉
      isAutoFill: false, // 是否自动触发上拉函数
      number: 10
    }
  },
  mounted: function () {
    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top - 55
    console.log(document.documentElement.clientHeight, this.$refs.wrapper.getBoundingClientRect().top)
    if (!this.$cookie.get('active')) {
      console.log(this.$cookie.get('active'))
      this.$cookie.set('active', 'home', { expires: '2h' })
    }
  },
  methods: {
    getDistributionId: function (data) {
      console.log(data)
      this.index = 0
      console.log(this.index)
    },
    goodsToggle: function (id) {
      console.log(id)
      this.index = id
      this.goodsClassIndex = 0
      let swiper = this.$refs.mySwiper.swiper
      swiper.setTranslate(0, 1000, false)
    },
    // 上拉加载
    loadBottom () {
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
  .Classification {
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    /* position: fixed;
    top: 0;
    width: 100%; */
    height: 100vh;
    overflow: hidden;
  }

  .Screening {
    position: absolute;
    top: 1.32rem;
    width: 100%;
    z-index: 1111;;
  }

  /*页面主体内容*/
  .contents {
    width: 100%;
    flex: 1;
    overflow: hidden;
    padding-bottom: 55px;
    padding-top: 1.066rem;
  }

  .goods {
    width: 100%;
    display: flex;
    height: 100%;
  }

  .goods-left {
    width: 2.133rem;
    overflow-y: auto;
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: scroll;
  }

  .goods-unit {
    height: .64rem;
    box-sizing: content-box;
    text-align: center;
    overflow: hidden;
    background-color: #f5f5f5;
    font-size: 0.346rem;
    padding: 0.373rem 0;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }

  .goods-cur {
    background-color: #fff;
    color: #ff5a00;
    border-right: none;
  }

  .goods-unit-inner {
    display: inline-block;
    height: .64rem;
    line-height: .64rem;
    text-align: center;
    width: 100%;
    overflow: hidden;
  }
  .goods-right {
    flex: 1;
    overflow-y: auto;
    height: 100%;
    overflow-x: hidden;
    position: relative;
  }

  .list-block ul:before {
    width: 0;
    height: 0;
  }

  .list-block ul:after {
    width: 0;
    height: 0;
  }

  .list-block ul {
    background-color: #f5f5f5;
    width: 100%;
  }

  .list-block {
    margin: 0;
    /* padding-top: 1.386rem; */
    overflow-y: auto;
  }

  .swiper-container {
    width: 100%;
    height: 1.386rem;
    background-color: #fff;
    box-sizing: content-box;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
    overflow: hidden;
  }

  .goods-tip-inner {
    height: 100%;
  }

  .swiper-slide {
    display: inline-block;
    height: 1.386rem;
    line-height: 1.386rem;
    text-align: center;
  }
  .name-cur {
    border-bottom: 2px solid #ff5a00;
    color: #ff5a00;
    box-sizing: border-box;
  }
  /* 商品列表页 */
  .list-block-change {
    margin: 0;
  }

  .list-block .list {
    width: 100%;
    background-color: #fff;
    font-size: 0.346rem;
    padding: 0;
    display: inherit;
    border-bottom: 1px solid #e0e0e0;
  }

  .list-block ul {
    background-color: transparent;
    padding: 0;
    margin: 0;
  }

  .list-change .new-unit {
    padding: 0.16rem 0.16rem 0 0.16rem;
    display: flex;
    background-color: #fff;
    position: relative;
  }

  .list-change .new-up {
    width: 2.133rem;
    height: 2.133rem;
    position: relative;
  }

  .new-img {
    text-align: center;
    padding: 0.266rem 0.106rem 0.106rem 0.106rem;
    position: relative;
  }

  .list-change .new-state {
    width: .8rem;
    height: .8rem;
    position: absolute;
    left: -7px;
    top: -6px;
  }

  .list-change .new-good {
    width: 100%;
    height: 100%;
    margin-top: 0.106rem;
  }

  .list-change .full {
    display: none;
      position: absolute;
    bottom: 0.106rem;
    right: -0.149rem;
  }

  .full-add {
    padding: 0 5px;
    background-color: #3b9ce3;
    color: #fff;
    display: inline-block;
    margin-right: 0.533rem;
    font-size: 8px;
    height: 0.373rem;
    line-height: 0.4rem;
  }

  .full-minus {
    padding: 0 5px;
    background-color: #ff804a;
    color: #fff;
    display: inline-block;
    font-size: 8px;
    height: 0.373rem;
    line-height: 0.4rem;
  }

  .list-change .new-down {
    flex: 1;
    padding-left: 0.16rem;
  }

  .new-text {
    width: 100%;
    height: 1.066rem;
    line-height: .533rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-decoration: none;
    color: #000;
  }

  .seconds::before {
    content: "秒";
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.16rem;
    margin-right: 0.066rem;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 0, 0);
    border-radius: 2px;
  }

  .new-price {
    text-align: right;
    overflow: hidden;
  }

  .new-one {
    width: 100%;
    height: .64rem;
    line-height: .64rem;
    overflow: hidden;
  }

  .new-price .orange {
    font-size: 0.453rem;
    color: #ff5a00;
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
    width: .64rem;
    height: .64rem;
    border: 1px solid rgba(153, 153, 153, 1);
    line-height: .64rem;
    text-align: center;
    color: rgba(153, 153, 153, 1);
    border-radius: 50%;
    margin-right: .213rem;
  }

  .select-type-item.active {
    border: 1px solid #FF5A00;
    color: #FF5A00;
  }

  .new-price-r {
    width: .666rem;
  }

  .new-price-r img {
    width: .64rem;
    height: .64rem;
    float: right;
    margin-top: 0.053rem;
  }

  .date {
    font-size: 0.373rem;
    margin-bottom: 0.16rem;
  }

  .unit {
    font-size: 12px;
    color: #c4c3c3;
  }
</style>
