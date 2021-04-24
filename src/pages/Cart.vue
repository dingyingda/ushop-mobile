<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="购物车" left-arrow @click-left="$router.back()" />
    <!-- 商品部分 -->
    <van-card
      v-for="(item, index) in cartList"
      :key="item.id"
      :price="item.price"
      :title="item.goodsname"
      :thumb="$imgBaseUrl + item.img"
    >
      <template #footer>
        <van-stepper
          v-model="cartList[index].num"
          theme="round"
          button-size="22"
          disable-input
          @plus="plus(item.id)"
          @minus="minus(item.id)"
        />
        <van-button @click="del(item.id)" class="btn" type="danger" size="mini"
          >删除</van-button
        >
      </template>
    </van-card>
    <van-submit-bar class="submit" :price="sumPrice" button-text="点击付款" />
  </div>
</template>

<script>
import { getCart, delCart, editCart } from "../request/api";
export default {
  data() {
    return {
      cartList: [],
    };
  },
  computed: {
    sumPrice() {
      // let sum = 0;
      // for (let k in this.cartList) {
      //   sum += this.cartList[k].price * this.cartList[k].num * 100;
      // }
      if (this.cartList != null) {
        let sum = 0;
        this.cartList.forEach((item) => {
          sum += item.price * item.num * 100;
        });
        return sum; //返回一个计算的价格的总价格
      }

      // for (let i = 0; i < this.cartList.length; i++) {
      //   sum += this.cartList[i].price * this.cartList[i].num * 100;
      // }
    },
  },
  async created() {
    let memberInfo = JSON.parse(localStorage.getItem("memberInfo") || "{}"); //从缓存中拿数据
    let resCart = await getCart(memberInfo.uid); //等请求出的成功的结果
    this.cartList = resCart.list;
    // console.log(resCart);
    // console.log(this.cartList);
  },
  methods: {
    //增加
    async plus(id) {
      let res = await editCart(id, 2);
    },
    //减少
    async minus(id) {
      let res = await editCart(id, 1);
    },
    //删除购物车里的商品
    async del(id) {
      let res = await delCart(id);
      if (res.code === 200) {
        //重新获取购物车列表和总价
        let memberInfo = JSON.parse(localStorage.getItem("memberInfo") || "{}"); //从缓存中拿数据
        let resCart = await getCart(memberInfo.uid); //等请求出的成功的结果
        this.cartList = resCart.list;
        this.$toast(res.msg);
      }
    },
  },
  components: {},
};
</script>
<style scoped>
.btn {
  margin-top: 10px;
}
.submit {
  margin-bottom: 60px;
}
</style>