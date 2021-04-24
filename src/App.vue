<template>
  <div>
    <!-- 一级路由占位 -->
    <div class="route">
      <router-view />
    </div>
<!-- Tabbar底部 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/cate">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
};
</script>

<style>
.route{
  padding-bottom: 60px;
}
</style>
