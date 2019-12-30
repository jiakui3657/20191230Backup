<template>
  <div class="home">
    <van-nav-bar title="百万店购" />
    <van-search
      v-model="value"
      placeholder="全球美酒 进口美食"
      shape="round"
    ></van-search>
    <van-swipe class="swiper" :autoplay="3000" @change="onChange">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>

      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
    </van-swipe>

    <TabBar name="home" />
  </div>
</template>

<style lang="less">
.swiper {
  width: 100%;
  height: 10rem;
  position: relative;
}

.custom-indicator {
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>

<script>
// @ is an alias to /src
import TabBar from "@/components/TabBar";

export default {
  name: "home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TabBar
  },
  data() {
    return {
      value: "",
      current: 0
    };
  },
  mounted: function() {},
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>
