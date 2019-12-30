<template>
  <div class="We">
    <div class="main-body" ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
        <ul class="mui-table-view mui-grid-view">
          <li v-for="(item,index) in datas" :key="index" class="mui-table-view-cell mui-media mui-col-xs-6">
            <a>
              <img class="mui-media-object" v-lazy="item.img">
              <div class="mui-media-body" v-text="item.title"></div>
            </a>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>

// mint-ui框架组件
import {loadmore} from 'mint-ui'

export default {
  components: {
    loadmore
  },
  name: 'We',
  data () {
    return {
      datas: [
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        },
        {
          img: require('../assets/home/menu1.png'),
          title: '优惠套餐'
        }
      ],
      allLoaded: false, // 可以进行上拉
      isAutoFill: false, // 是否自动触发上拉函数
      wrapperHeight: 0,
      courrentPage: 0
    }
  },
  created () {
    // this.loadFrist()
  },
  mounted () {
    // 父控件要加上高度，否则会出现上拉不动的情况
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top
  },
  methods: {
    //   下拉刷新
    loadTop () {
      this.loadFrist()
    },
    // 上拉加载
    loadBottom () {
      this.loadMore()
    },
    // 下来刷新加载
    loadFrist () {
      setTimeout(() => {
        this.courrentPage = 0
        this.allLoaded = false // 可以进行上拉
        this.datas = this.datas
        this.$refs.loadmore.onTopLoaded()
      }, 3000)
    },
    // 加载更多
    loadMore () {
      setTimeout(() => {
        this.datas = this.datas.concat(this.datas)
        if (this.courrentPage > 2) {
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
.main-body {
  overflow: scroll;
}
</style>
