<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="wap-home-o" to="/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="classify" icon="apps-o" to="/classify"
        >分类</van-tabbar-item
      >
      <van-tabbar-item name="near" icon="diamond-o" to="/near"
        >附近</van-tabbar-item
      >
      <van-tabbar-item name="cart" icon="cart-o" to="/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item name="we" icon="user-o" to="/we">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    name: String
  },
  components: {},
  data() {
    return {
      active: this.name
    };
  }
};
</script>
