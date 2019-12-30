<template>
  <div class="Shopping">
    <div class="container">
      <swiper class='swiImgs' :options="swiperOption" v-if="commodity.length!=0" ref="mySwiper">
        <swiper-slide v-for="(item, index) in commodity" data-index="index" :key="index" class="item">
          <img class='swiImg' :src='item' />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>

// mint-ui框架组件
import {} from 'mint-ui'

export default {
  components: {
  },
  name: 'Shopping',
  data () {
    return {
      commodity: [
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/911a7002e11608fb581fffcde05d5257.jpg',
        'https://boweisou.oss-cn-shenzhen.aliyuncs.com/yy/images/2_1536049430.jpg'
      ],
      imgIndex: 1,
      swiperOption: {
        notNextTick: true,
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
      }
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .commodity{
    background: #f5f5f5;
  }
  .container{
    position: relative;
  }
  .swiText {
    position: absolute;
    height: 0.5rem;
    width: 0.5rem;
    bottom: 0.2rem;
    right: 0.3rem;
    font-size: 0.33rem;
    color: #fff;
    z-index: 10;
  }
  .swiImgs {
    width: 100%;
  }
  .swiImg {
    width: 100%;
  }
</style>
