<template>
  <div class="Screening">

      <!-- 筛选 -->
    <div class="screen-up">
        <div class="screen-unit orange" v-on:click="platformToggle">
            <div class="screen-unit-inner">
                <span class="screen-text">{{platformText}}</span><img class="terrace-icon" src="../assets/classify/ping_down.png"
                    alt="" />
            </div>
        </div>
        <div class="screen-unit">
            <div class="screen-unit-inner">销量
                <span class="sale">
                    <span class="sale-up"><img src="../assets/classify/sale_up.png" alt="" /></span>
                    <span class="sale-down"><img src="../assets/classify/sale_down.png" alt="" /></span>
                </span>
            </div>
        </div>
        <div class="screen-unit" v-on:click="popupToggle">
            <div class="screen-unit-inner choice">
                <img class="choice-img" src="../assets/classify/choice.png" alt="" />筛选
            </div>
        </div>
    </div>

    <!-- 筛选 * 平台 -->
    <div class="screen-down" v-if="platform">
        <div class="terrace-unit" v-for="(item, index) in platformList" :key="index">
            <div :class="item.id === platformId ? 'terrace-cur' : '' " v-on:click="platformTab(item.id, item.text)" class="terrace-inner">{{item.text}}</div>
        </div>
    </div>

    <!-- 筛选 * 弹框 -->
    <mt-popup
      v-model="popupVisible"
      position="right">
        <div class="panel panel-right panel-cover panel-change" id='choice-all'>
          <div class="filtrate">
            <div class="price">
              <div class="price-title">价格区域</div>
              <div class="price-list">
                <input type="text" class="price-in" placeholder="最低价" />
                <span class="price-gap">-</span>
                <input type="text" class="price-in" placeholder="最高价" />
              </div>
            </div>
            <div class="brand">
              <div class="brand-title">
                <div class="brand-title-l">品牌</div>
                <div class="brand-title-r" onclick="brandBtn(this)"><img src="../assets/common/down.png" alt="" /></div>
              </div>
              <div class="brand-main clear brand-small">
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit brand-unit-change" onclick="allBtn()">全部品牌<img src="../assets/common/go.png" alt="" /></div>
              </div>
            </div>
            <div class="brand">
              <div class="brand-title">
                <div class="brand-title-l">供应商</div>
                <div class="brand-title-r" onclick="brandBtn(this)"><img src="../assets/common/down.png" alt="" /></div>
              </div>
              <div class="brand-main clear brand-small">
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit">
                  <div class="brand-inner">康师傅</div>
                </div>
                <div class="brand-unit brand-unit-change" onclick="allBtn2()">全部供应商<img src="../assets/common/go.png" alt="" /></div>
              </div>
            </div>
            <div class="choose">
              <div class="choose-list">
                <div class="choose-list-l"><img src="../assets/common/choice_no.png" alt="" class="choose-icon" /></div>
                <div class="choose-list-r">仅显示会员价</div>
              </div>
              <div class="choose-list">
                <div class="choose-list-l"><img src="../assets/common/choice_no.png" alt="" class="choose-icon" /></div>
                <div class="choose-list-r">仅显示有货</div>
              </div>
            </div>
            <div class="btn-group">
              <div class="btn-unit resect" onclick="resectBtn()">重置</div>
              <div class="btn-unit close-panel sure">确定</div>
            </div>
          </div>
          <div class="all">
            <div class="all-title">
              <div class="all-title-l" onclick="backBtn()"><img src="../assets/common/go_left.png" alt="" /></div>
              <div class="all-title-m">全部品牌</div>
              <div class="all-title-r">确定</div>
            </div>
            <div class="all-main">
              <div class="origin-title">A</div>
              <div class="origin-list origin-cur">AUTO</div>
              <div class="origin-list">安森</div>
              <div class="origin-title">B</div>
              <div class="origin-list">百事可乐</div>
              <div class="origin-list">冰峰</div>
              <div class="origin-list">百事可乐</div>
              <div class="origin-list">冰峰</div>
              <div class="origin-title">C</div>
              <div class="origin-list">初元</div>
              <div class="origin-list">纯悦</div>
              <div class="origin-list">初元</div>
              <div class="origin-list">纯悦</div>
              <div class="origin-title">D</div>
              <div class="origin-list">达利园</div>
              <div class="origin-list">丹凤</div>
              <div class="origin-list">达利园</div>
              <div class="origin-list">丹凤</div>
            </div>
          </div>
        </div>
    </mt-popup>
  </div>
</template>

<script>

// mint-ui框架组件
import { Popup } from 'mint-ui'

export default {
  props: [
    'setDistributionId'
  ],
  components: {
    Popup
  },
  name: 'Screening',
  data () {
    return {
      platformList: [
        {
          id: '0',
          text: '全部'
        },
        {
          id: '1',
          text: '平台统配'
        },
        {
          id: '2',
          text: '商家直配'
        }
      ],
      platformId: null,
      platformText: null,
      platform: false,
      popupVisible: false
    }
  },
  methods: {
    platformToggle: function () {
      this.platform = !this.platform
    },
    platformTab: function (id, text) {
      this.platformId = id
      this.platformText = text
      this.platform = false
      this.$emit('getDistributionId', this.platformId)
    },
    popupToggle: function () {
      this.popupVisible = true
    }
  },
  watch: {
    popupVisible (newVal, oldVal) {
      if (newVal === true) {
        document.body.style.height = '100%'
        document.body.style.overflow = 'hidden'
        document.body.style.position = 'fixed'
      } else {
        document.body.style.height = 'auto'
        document.body.style.overflow = 'auto'
        document.body.style.position = 'relative'
      }
    }
  },
  mounted: function () {
    this.platformId = this.platformList[this.setDistributionId].id
    this.platformText = this.platformList[this.setDistributionId].text
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mint-popup {
      width: 85%;
      height: 100%;
    }
    .Screening {
        border-bottom: 1px solid #e0e0e0;
        background-color: #fff;
    }
    .screen-up{
        width: 100%;
        height: 1.066rem;
        line-height: 1.066rem;
        display: flex;
        font-size: 0.346rem;
    }
    .screen-unit{
        flex: 1;
        text-align: center;
        height: 100%;
        overflow: hidden;
    }
    .orange{
        color: #ff5a00;
    }
    .screen-unit-inner{
        width: 75%;
        height: 100%;
        margin: 0 auto;
        text-align: center;
        position: relative;
    }
    .terrace-icon{
        width: 0.32rem;
        height: 0.32rem;
        display: block;
        position: absolute;
        right: -0.053rem;
        top: 0.373rem;
    }
    .sale{
        width: 0.533rem;
        height: 100%;
        display: block;
        position: absolute;
        right: 0.16rem;
        top: 0;
    }
    .sale-up,.sale-down{
        width: 100%;
        display: block;
        text-align: center;
        height: 50%;
        position: relative;
    }
    .screen-down{
        width: 100%;
        padding: 0.266rem 0;
        overflow: hidden;
    }
    .terrace-unit{
        width: 33.3%;
        padding: 0.133rem 0;
        float: left;
    }
    .terrace-inner{
        width: 80%;
        height: 100%;
        line-height: 0.64rem;
        height: 0.64rem;
        font-size: .34rem;
        background-color: #f4f4f4;
        text-align: center;
        overflow: hidden;
        margin: 0 auto;
        border: 1px solid transparent;
        border-radius: 4px;
    }
    .terrace-cur{
        color: #ff5a00;
        border-color: #ff5a00;
        background-color: #fff;
    }
    .choice-img{
        width: 0.32rem;
        height: 0.32rem;
        position: absolute;
        top: 0.4rem;
        left: 0.32rem;
    }
    .sale-up img{
        width: 0.32rem;
        height: 0.32rem;
        position: absolute;
        top: 0.266rem;
        left: 0.0533rem;
    }
    .sale-down img{
        width: 0.32rem;
        height: 0.32rem;
        position: absolute;
        top: 0rem;
        left: 0.0533rem;
    }
/*筛选弹框*/
.panel-change{
    background-color: #f4f4f4;
    color: #000;
    height: 100%;
    overflow-y: auto;
}
.panel-overlay-change{
    background-color: #000;
    opacity: 0.3;
}
.filtrate{
    width: 100%;
    height: 100%;
}
.price{
    width: 100%;
    background-color: #fff;
    margin-bottom: 0.16rem;
}
.price-title{
    height: 0.96rem;
    line-height: 0.96rem;
    padding: 0 0.266rem;
    overflow: hidden;
}
.price-list{
    padding: 0.16rem 0.266rem 0.373rem 0.266rem;
    display: flex;
}
.price-in{
    width: 45%;
    height: .8rem;
    text-align: center;
    border: none;
    outline: none;
    border: 1px solid #e0e0e0;
    line-height: .8rem;
}
.price-gap{
    width: 10%;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
}
.brand{
    background-color: #fff;
    margin-bottom: 0.16rem;
    padding-bottom: 0.16rem;
}
.brand-title{
    height: 1.066rem;
    line-height: 1.066rem;
    padding: 0 0.266rem;
    overflow: hidden;
    display: flex;
}
.brand-title-l{
    flex: 1;
    height: 100%;
    overflow: hidden;
}
.brand-title-r{
    width: 0.533rem;
    height: 100%;
}
.brand-title-r img{
    width: 0.373rem;
    height: auto;
    float: right;
    margin-top: 0.266rem;
}
.brand-main{
    padding: 0 0.16rem 0 0.16rem;
    overflow: hidden;
    max-height: 3.626rem;
}
.brand-unit{
    width: 33.3%;
    height: 0.64rem;
    line-height: 0.586rem;
    float: left;
    margin-bottom: 0.266rem;
}
.brand-unit-change{
    height: 100%;
    overflow: hidden;
    text-align: center;
    position: relative;
}
.brand-unit-change img{
    width: 0.426rem;
    position: absolute;
    top: 0.106rem;
}
.brand-inner{
    width: 90%;
    height: 100%;
    background-color: #f4f4f4;
    text-align: center;
    overflow: hidden;
    margin: 0 auto;
    border: 1px solid transparent;
    border-radius: 4px;
}
.brand-cur{
    color: #ff5a00;
    border-color: #ff5a00;
    background-color: #fff;
}
.brand-small{
    height: 1.813rem;
}
.choose{
    width: 100%;
}
.choose-list{
    height: 1.066rem;
    display: flex;
    padding: 0 0.266rem;
    background-color: #fff;
    margin-bottom: 0.16rem;
}
.choose-list-l{
    width: 1.066rem;
    height: 100%;
}
.choose-icon{
    width: 0.4rem;
    height: 0.4rem;
    display: block;
    float: left;
    margin-top: 0.309rem;
    margin-left: 0.053rem;
}
.choose-list-r{
    flex: 1;
    height: 100%;
    line-height: 1.06rem;
    text-align: right;
    overflow: hidden;
}
.choose-cur{
    color: #ff5a00;
}
.btn-group{
    width: 100%;
    position: fixed;
    height: 1.066rem;
    line-height: 1.066rem;
    display: flex;
    bottom: 0;
    border-top: 1px solid #e0e0e0;
    font-size: 0.373rem;
}
.btn-unit{
    flex: 1;
    height: 100%;
    overflow: hidden;
    text-align: center;
}
.resect{
    background-color: #fff;
}
.sure{
    background-color: #ff5a00;
    color: #fff;
}
.all{
    width: 100%;
    height: 100%;
    display: none;
}
.all-title{
    height: 1.066rem;
    line-height: 1.066rem;
    display: flex;
    background: #fff;
    padding: 0 0.16rem;
}
.all-title-l{
    width: 0.8rem;
    height: 100%;
    font-size: 0.346rem;
}
.all-title-l img{
    width: 0.533rem;
    float: left;
    margin-top: 0.24rem;
}
.all-title-m{
    flex: 1;
    height: 100%;
    overflow: hidden;
    text-align: center;
}
.all-title-r{
    width: .8rem;
    height: 100%;
    overflow: hidden;
    text-align: center;
    color: #ff5a00;
}
.all-main{
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
.origin-title{
    height: .533rem;
    line-height: .533rem;
    overflow: hidden;
    padding: 0 0.533rem;
}
.origin-list{
    height: 0.96rem;
    line-height: 0.96rem;
    overflow: hidden;
    padding: 0 0.266rem;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
}
.origin-cur{
    color: #ff5a00;
}
</style>
