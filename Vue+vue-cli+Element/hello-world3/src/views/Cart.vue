<template>
  <div class="classify">
    <h1>{{ reversedMessage }}</h1>
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item icon="home-o">1</van-tabbar-item>
      <van-tabbar-item icon="search">2</van-tabbar-item>
      <van-tabbar-item icon="friends-o">3</van-tabbar-item>
    </van-tabbar>
    <!-- <TabBar name="cart" /> -->
  </div>
</template>

<script>
// import TabBar from "@/components/TabBar";

export default {
  name: "cart",
  components: {},
  data() {
    return {
      active: this.$store.state.cartState
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      return this.$store.state.cartState;
    }
  },
  methods: {
    change() {
      this.$store.state.cartState = this.active;
    }
  }
};
</script>
