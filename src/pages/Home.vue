<template>
  <div>
    <!-- 头部部分 -->
    <van-nav-bar title="商城首页" />
    <!-- 轮播部分 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.id">
        <img class="img" :src="$imgBaseUrl + item.img" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 商品tab的部分 -->
    <van-tabs v-model="active">
      <van-tab title="热门推荐">
        <van-card
          v-for="item in goodsList[active].content"
          :key="item.id"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgBaseUrl + item.img"
        >
          <template #footer>
            <van-button icon="cart-o" type="primary" @click="add(item.id)" />
          </template>
        </van-card>
      </van-tab>
      <van-tab title="发现新品">
        <van-card
          v-for="item in goodsList[active].content"
          :key="item.id"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgBaseUrl + item.img"
        >
          <template #footer>
            <van-button icon="cart-o" type="primary"  @click="add(item.id)"/>
          </template>
        </van-card>
      </van-tab>
      <van-tab title="全部商品">
        <van-card
          v-for="item in goodsList[active].content"
          :key="item.id"
          :price="item.price"
          :title="item.goodsname"
          :thumb="$imgBaseUrl + item.img"
        >
          <template #footer>
            <van-button icon="cart-o" type="primary" @click="add(item.id)"/>
          </template>
        </van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getBanner, getGoods,addCart } from "../request/api";
export default {
  data() {
    return {
      bannerList: [],
      goodsList: [{ content: [], content: [], content: [] }],
      active: 0,
    };
  },
  async created() {
    let res = await getBanner();
    this.bannerList = res.list;
    let resGoods = await getGoods();
    this.goodsList = resGoods.list;
  },
  methods: {
    //添加购物车里的方法
    async add(goodsid){
      let memberInfo=JSON.parse(localStorage.getItem('memberInfo')||'{}');
      let resCart=await addCart(memberInfo.uid,goodsid);
      if(resCart.code===200){

      }else{
        this.$toast(resCart.msg);
      }
    }
  },
  components: {},
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  height: 240px;
}
.img {
  width: 100%;
  height: 100%;
}
</style>