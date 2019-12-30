<template>
  <div class="Index">
      <mt-tab-container v-model="tabListening" :value="tabListening">
        <mt-tab-container-item id="home">
          <Home></Home>
        </mt-tab-container-item>
        <mt-tab-container-item id="classification">
          <Classification></Classification>
        </mt-tab-container-item>
        <mt-tab-container-item id="shopping">
          <Shopping></Shopping>
        </mt-tab-container-item>
        <mt-tab-container-item id="we">
          <We></We>
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar v-model="tabListening" :value="tabListening" fixed >
        <mt-tab-item :id="item.id" v-for="item in tabbar" :key="item.id">
          <img slot="icon" :src="item.icon">
          {{item.name}}
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>

// mint-ui框架组件
import { Header, Tabbar, TabItem, TabContainerItem, TabContainer, Swipe, SwipeItem } from 'mint-ui'

// 首页
import Home from './Home.vue'

// 分类
import Classification from './Classification.vue'

// 购物车
import Shopping from './Shopping.vue'

// 我的
import We from './We.vue'

export default {
  components: {
    Header,
    Tabbar,
    TabItem,
    TabContainer,
    TabContainerItem,
    Swipe,
    SwipeItem,
    Home,
    Classification,
    Shopping,
    We
  },
  name: 'Index',
  data () {
    return {
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
      active: 'classification',
      jk: 0
    }
  },
  mounted: function () {
    if (!this.$cookie.get('active')) {
      this.$cookie.set('active', this.active, { expires: '2h' })
    } else {
      this.active = this.$cookie.get('active')
    }
  },
  methods: {},
  computed: {
    tabListening: {
      get: function () {
        return this.active
      },
      set: function (value) {
        this.$cookie.set('active', value, { expires: '2h' })
        this.active = this.$cookie.get('active')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
