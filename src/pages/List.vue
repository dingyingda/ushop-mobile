<template>
  <div>
    <!-- 头部部分 -->
    <van-nav-bar title="商品列表" left-arrow @click-left="$router.back()" />
    <!-- 商品列表部分 -->
    <van-card
      v-for="(item, index) in goodsList"
      :key="item.id"
      :price="item.price"
      :title="item.goodsname"
      :thumb="$imgBaseUrl + item.img"
      v-show="index < num"
    >
      <template #footer>
        <van-button icon="cart-o" type="primary" @click="add(item.id)" />
      </template>
    </van-card>
    <!-- 加载更多 -->
    <van-button
      v-show="num < goodsList.length ? true : false"
      @click="more"
      plain
      size="large"
      type="primary"
      >加载更多</van-button
    >
  </div>
</template>

<script>
import { goodsList } from "../request/api";
export default {
  data() {
    return {
      goodsList: [],
      num: 2,
    };
  },
  async created() {
    let res = await goodsList();
    this.goodsList = res.list.filter((item) => {
      return item.second_cateid == this.$route.query.id;
    }); //过滤出跟query.id一样的值返回出一个新数组。
  },
  methods: {
    more() {
      this.num += 2;
    },
  },
  components: {},
};
</script>
<style scoped>
</style>