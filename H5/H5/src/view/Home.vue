<template>
  <div class="Home">

      <!--搜索-->
      <header>
        <CustomSearch :searchToggle="false" />
      </header>

      <!-- banner轮播图 -->
      <mt-swipe :prevent="true" :speed="300">
        <mt-swipe-item v-for="(item, index) in 3" :key="index"><img src="../assets/home/banner.jpg" alt=""></mt-swipe-item>
      </mt-swipe>

      <!--快讯-->

      <div class="notice">
          <a class="notice-inner" href="">
              <div class="notice-left"><img src="../assets/home/notice.png" alt="" /><span class="line"></span></div>
              <div class="notice-right">“周三秒杀”时间调整公告</div>
          </a>
      </div>

      <!--功能组件菜单-->
      <div class="menu">
        <ul class="menu-inner clear">
            <li class="menu-unit" v-for="(item, index) in menuList" :key="index">
                <a href="" class="menu-src">
                    <div class="menu-icon"><img :src="item.icon" alt=""/></div>
                    <div class="menu-text">{{item.text}}</div>
                </a>
            </li>
        </ul>
      </div>

      <!--广告-->
      <div class="ad">
          <a href="" class="ad-unit" v-for="(item, index) in adList" :key="index">
              <img :src="item.icon" alt="" />
          </a>
      </div>

      <!--限时秒杀-->
      <div class="kill">
        <div class="kill-title">
          <input id="buy-time" type="hidden" value="2019-05-01 15:20:00">
          <div class="kill-title-left">限时秒杀</div>
          <div class="kill-title-right">
            <div class="time-unit">
              <span>0</span><span>4</span>
            </div>
            <i class="time-gap">:</i>
            <div class="time-unit">
              <span>3</span><span>7</span>
            </div>
            <i class="time-gap">:</i>
            <div class="time-unit">
              <span>3</span><span>4</span>
            </div>
          </div>
        </div>
        <div class="kill-main">
          <div class="imgbox1">
            <mt-swipe :prevent="true" :speed="300" :auto="500000000" :showIndicators="false">
              <mt-swipe-item v-for="(item, index) in 6" :key="index">
                <div class="list-box">
                  <div class="good-inner">
                    <div class="good-unit" v-for="(item, index) in 3" :key="index">
                      <a class="good-up" href="">
                        <div class="good-img"><img src="../assets/home/limite_good.png" alt="" /></div>
                        <div class="good-text">维达(Vinda)抽纸超韧3层130抽130抽130抽</div>
                      </a>
                      <a class="good-price" href="">
                        <div class="good-price-l orange">￥1258.9</div>
                        <div class="good-price-r small">￥20.0</div>
                      </a>
                    </div>
                  </div>
                </div>
              </mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>

      <!--轮播广告-->
      <div class="advertise">
        <div class="imgbox">
          <mt-swipe :prevent="true" :speed="300" :auto="500000000" :showIndicators="false">
            <mt-swipe-item v-for="(item, index) in 3" :key="index"><img src="../assets/home/adver.png" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
      </div>

      <!--品牌专区-->
      <div class="new">
        <div class="new-title">品牌专区</div>
        <div class="new-main clear">
          <div class="new-unit-change2" v-for="(item, index) in 8" :key="index">
            <a href=""><img src="../assets/home/brand.png" alt=""/></a>
          </div>
        </div>
      </div>

      <!--新品推荐-->
      <div class="new">
        <div class="new-title">新品推荐</div>
        <div class="new-main clear">
          <div class="new-unit-change" v-for="(item, index) in 10" :key="index">
            <a class="new-up" href="">
              <div class="new-img"><img src="../assets/home/new_good.png" alt=""></div>
              <div class="new-text">维达(Vinda)抽纸超韧3层130抽130抽130抽</div>
            </a>
            <div class="new-price">
              <div class="new-price-l">
                <span class="orange">￥1258.9</span><span class="f-small">/袋</span>
              </div>
              <div class="new-price-r" ><img src="../assets/common/go_car.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>

      <!--为您推荐-->
      <div class="new">
        <div class="new-title">为您推荐
          <div class="change-btn"><img class="change-icon" src="../assets/home/refresh.png" alt="">换一批</div>
        </div>
        <div class="new-main clear">
          <div class="new-unit" v-for="(item, index) in 10" :key="index">
            <a class="new-up" href="">
              <div class="new-img"><img src="../assets/home/new_good.png" alt=""></div>
              <div class="new-text">维达(Vinda)抽纸超韧3层130抽130抽130抽</div>
            </a>
            <div class="new-price">
              <div class="new-price-l">
                <img class="new-icon" src="../assets/home/tip.png" alt="">￥1258.9/袋
              </div>
              <div class="new-price-r"><img src="../assets/common/go_car.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部tabar -->
      <!-- <mt-tab-container v-model="index" :value="index">
        <mt-tab-container-item :id="item.id" v-for="item in tabbar" :key="item.id">
          <div>{{item.id}}</div>
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar v-model="index" :value="index" fixed >
        <mt-tab-item :id="item.id" v-for="item in tabbar" :key="item.id" v-on:click="getId">
          <img slot="icon" :src="item.icon">
          {{item.name}}
        </mt-tab-item>
      </mt-tabbar> -->
  </div>
</template>

<script>

// mint-ui框架组件
import { Search, Swipe, SwipeItem, Button, Tabbar, TabItem, TabContainerItem, TabContainer } from 'mint-ui'

// 自定义搜索框
import CustomSearch from '../components/CustomSearch'

export default {
  components: {
    Search,
    Swipe,
    SwipeItem,
    Button,
    CustomSearch,
    Tabbar,
    TabItem,
    TabContainerItem,
    TabContainer
  },
  name: 'Home',
  data () {
    return {
      index: 'home',
      tabbar: [
        {
          name: '首页',
          id: 'home',
          icon: require('../assets/common/home.png')
        },
        {
          name: '分类',
          id: 'classification',
          icon: require('../assets/common/classify.png')
        },
        {
          name: '购物车',
          id: 'shopping',
          icon: require('../assets/common/car.png')
        },
        {
          name: '我的',
          id: 'we',
          icon: require('../assets/common/my.png')
        }
      ],
      menuList: [
        {
          icon: require('../assets/home/menu1.png'),
          text: '优惠套餐'
        },
        {
          icon: require('../assets/home/menu2.png'),
          text: '低价惠'
        },
        {
          icon: require('../assets/home/menu3.png'),
          text: '满赠满减'
        },
        {
          icon: require('../assets/home/menu4.png'),
          text: '领券中心'
        },
        {
          icon: require('../assets/home/menu5.png'),
          text: '平台统配'
        },
        {
          icon: require('../assets/home/menu6.png'),
          text: '商家直配'
        },
        {
          icon: require('../assets/home/menu7.png'),
          text: '供应商专区'
        },
        {
          icon: require('../assets/home/menu8.png'),
          text: '个人中心'
        }
      ],
      adList: [
        {
          icon: require('../assets/home/ad1.png')
        },
        {
          icon: require('../assets/home/ad2.png')
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*头部搜索*/

.search {
    padding: 0.26rem;
    background-color: transparent;
    transition: background-color 0.5s;
    height: auto;
    color: #000;
}

.search-out {
    width: 100%;
    height: 0.8rem;
    display: flex;
}

.bar:after {
    width: 0;
    height: 0;
}

.has-bg {
    background-color: #f0f0f0;
}

.scan {
    width: 1.06rem;
    height: 100%;
    text-align: center;
}

.scan img {
    width: 0.8rem;
    height: 0.8rem;
}

.search-inner {
    flex: 1;
    height: 0.8rem;
    background-color: #fff;
    border-radius: 20px;
    padding: 0.16rem;
    border: 1px solid #979797;
    box-sizing: border-box;
}

.search-box {
    width: 100%;
    height: 100%;
    display: flex;
}

.down {
    width: 0px;
    height: 0px;
    border-top: 5px solid #666;
    border-left: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid transparent;
    position: absolute;
    right: 0.106rem;
    top: 0.186rem;
}

.order-two {
    flex: 1;
    height: 100%;
    line-height: 0.48rem;
    padding: 0 0.16rem;
    border: none;
    outline: none;
    background-image: url(../assets/home/search.png);
    background-size: auto 0.293rem;
    background-repeat: no-repeat;
    background-position: 5px center;
    padding-left: 0.64rem;
}
  .Home{
    padding-bottom: 1.3rem;
  }
  .mint-searchbar-inner{
    border-radius: .7rem;
  }
  .mint-search{
      height: auto;
  }
  .mint-swipe{
      height: 5rem;
  }
  .mint-swipe img{
      width: 100%;
      height: 100%;
      display: block;
  }
  .Home{
      background-color: #f5f5f5;
  }
  /*快讯*/

  .notice {
    padding: 0 0.18rem;
    background: #fff;
    margin-bottom: 0.16rem;
    margin-top: 1px;
  }

  .notice-inner {
      width: 100%;
      display: flex;
      height: 1.06rem;
      text-decoration: none;
  }

  .notice-left {
      width: 1.06rem;
      height: 100%;
      position: relative;
      text-align: center;
  }

  .line {
    position: absolute;
    width: 2px;
    height: 0.64rem;
    background-color: #ff5a00;
    right: -0.2026rem;
    top: 0.213rem;
  }

  .n-tag {
      padding: 2px 5px;
      background-color: #ff5a00;
      color: #fff;
      border-radius: 4px;
  }

  .notice-left>img {
    width: 0.72rem;
    height: 1.013rem;
    margin-top: 0.05rem;
  }

  .notice-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
    line-height: 1.06rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-left: 0.53rem;
    color: #000;
    font-size: 0.34rem;
  }
  /*功能菜单组件*/
  .menu{
      width: 100%;
      background: #fff;
      border-bottom: 1px solid #e0e0e0;
  }
  .menu-inner{
      width: 100%;
      list-style: none;
      overflow: hidden;
      padding: 0;
      margin: 0;
  }
  .menu-unit{
      width: 25%;
      float: left;
  }
  .menu-src{
      width: 100%;
      display: block;
      text-decoration: none;
  }
  .menu-icon{
      width: 100%;
      height: 1.226rem;
      text-align: center;
      padding-top: 0.16rem;
  }
  .menu-icon>img{
      width: 1.06rem;
      height: 1.06rem;
  }
  .menu-text{
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      overflow: hidden;
      text-align: center;
  }
  .new-unit-change2{
      width: 25%;
      height: 2.6rem;
      float: left;
      border-right: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
      padding: 0.16rem;
      box-sizing: border-box;
  }
  .new-unit-change2 a{
      width: 100%;
      height: 100%;
      text-align: center;
      display: block;
  }
  .new-unit-change2 a img{
      width: 2.13rem;
      height: 2.13rem;
  }
  .f-small{
      font-size: 0.32rem;
  }
  /*广告*/

  .ad {
      padding: 0 0.26rem 0.16rem 0.26rem;
      display: flex;
      padding: 0.26rem 0.26rem 0;
  }

  .ad-unit {
      flex: 1;
  }

  .ad-unit:nth-child(1) {
      margin-right: 0.16rem;
  }

  .ad-unit img {
      width: 100%;
      background-color: #fff;
      height: 100%;
  }

  .small {
      font-size: 0.32rem;
      color: #c4c3c3;
  }

  /*秒杀*/

  .kill {
    box-sizing: border-box;
    padding: 0.26rem 0.26rem 0 0.26rem;
  }

  .kill-title {
    padding: 0.26rem;
    background: #fff;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .kill-title-left {
    width: auto;
    max-width: 60%;
    height: 0.64rem;
    line-height: 0.64rem;
    font-size: 0.4rem;
    color: #000;
    overflow: hidden;
    text-align: right;
  }

  .kill-title-right {
    flex: 1;
    height: 0.53rem;
    font-size: 0.32rem;
    line-height: 0.53rem;
    overflow: hidden;
    padding-left: 0.26rem;
    margin-top: 0.026rem;
  }

  .time-unit {
    float: left;
    background-color: #323232;
    color: #fff;
    border-radius: 50%;
    width: 0.53rem;
    text-align: center;
    height: 100%;
  }

  .time-unit span {
    display: inline-block;
    height: 100%;
  }

  .time-gap {
    float: left;
    padding: 0 0.106rem;
    font-style: normal;
  }

  .kill-main {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    height: 4.3rem;
  }

  .list-box{
    height: 3.2rem;width: 9.6rem;
  }

  .kill-main .swiper-slide {
    background: #fff;
  }

  .kill-main .swiper-container {
    padding-bottom: 0;
  }

  .good-inner {
    height: 100%;
  }

  .good-unit {
    width: 3.73rem;
    width: 33.333333333333336%;
    font-size: 0.346rem;
    background-color: #fff;
    padding: 0.16rem 0.16rem 0.26rem 0.16rem;
    border-right: 1px solid #f5f5f5;
    box-sizing: border-box;
    float: left;
  }

  .good-up {
    display: block;
    width: 100%;
    text-decoration: none;
  }

  .good-price-out {
    display: block;
    width: 100%;
  }

  .good-img {
    width: 100%;
    text-align: center;
  }

  .good-img img {
    max-width: 100%;
    margin: 0 auto;
  }

  .good-text {
    width: 100%;
    height: 0.53rem;
    line-height: 0.53rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #000;
  }

  .good-price {
    width: 100%;
    height: 0.53rem;
    line-height: 0.53rem;
    display: flex;
    text-decoration: none;
  }

  .good-price-l {
    flex: 1;
    height: 100%;
    overflow: hidden;
  }

  .orange {
    color: #ff5a00;
  }

  .small {
    text-decoration: line-through;
  }

  .good-price-r {
    height: 100%;
    overflow: hidden;
    padding-left: 0.16rem;
  }

  /*轮播广告*/

  .advertise {
    padding: 0.26rem 0.16rem;
    height: 2.6rem;
  }

  .advertise .mint-swipe {
    height: 100%;
  }

  .advertise .imgbox {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .advertise  img {
    width: 96.5%;
    height: 100%;
  }

  .imgbox1 {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  /*新品推荐*/

  .new {
    width: 100%;
    background-color: #fff;
    margin-bottom: 0.26rem;
  }

  .new-title {
    padding: 0 1.86rem;
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    border-bottom: 1px solid #f5f5f5;
    font-size: 0.426rem;
    color: #000;
    display: block;
    position: relative;
    font-weight: bold;
  }

  .change-btn {
    position: absolute;
    right: 0.26rem;
    height: 100%;
    top: 0;
    width: 1.6rem;
    font-size: 0.32rem;
    color: #0e69ff;
  }

  .change-icon {
    width: 0.346rem;
    height: 0.346rem;
    float: left;
    margin-top: 0.426rem;
  }

  .new-main {
    width: 100%;
    overflow: hidden;
  }

  .new-unit {
    width: 50%;
    height: 4.8rem;
    float: left;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    padding: 0.16rem;
    box-sizing: border-box;
  }

  .new-unit:nth-child(2n) {
    border-right: none;
  }

  .new-unit-change {
    width: 33.3%;
    height: 4.8rem;
    float: left;
    border-right: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    padding: 0.16rem;
    box-sizing: border-box;
  }

  .new-unit-change:nth-child(3n) {
    border-right: none;
  }

  .new-up {
    display: block;
    width: 100%;
    text-decoration: none
  }

  .new-price-out {
    display: block;
    width: 100%;
  }

  .new-img {
    width: 100%;
    height: 2.773rem;
    text-align: center;
    padding: 0 0.106rem;
  }

  .new-img img {
    width: auto;
    height: 2.66rem;
    margin: 0 auto;
  }

  .new-text {
    width: 100%;
    height: 1.06rem;
    line-height: 0.53rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #000;
  }

  .new-price {
    width: 100%;
    height: 0.64rem;
    line-height: 0.64rem;
    overflow: hidden;
    font-size: 0.346rem;
    margin-top: 0.053rem;
    display: flex;
  }

  .new-icon {
    width: 0.426rem;
    height: 0.426rem;
    float: left;
    margin-top: 0.08rem;
    margin-right: 0.08rem;
  }

  .new-price-l{
    flex: 1;
    overflow: hidden;
  }
  .new-price-r{
    width: 0.586rem;
    text-align: center;
  }
  .new-price-r img{
    width: 0.53rem;
    height: 0.53rem;
  }
</style>
