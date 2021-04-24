<template>
  <div>
    <!-- 头部部分 -->
    <van-nav-bar title="用户中心" left-arrow @click-left="back" />
    <div class="header">
      <van-image
        class="img"
        round
        width="10rem"
        height="10rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <h5 v-text="nickname"></h5>
    </div>
    <!-- 安全退出 -->
    <div class="btn">
      <van-button type="danger" block @click="quit">安全退出</van-button>
    </div>
    <!--    折合部分  -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="我的收藏" name="1"></van-collapse-item>
      <van-collapse-item title="我的评论" name="2"></van-collapse-item>
      <van-collapse-item title="我的订单" name="3"></van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: JSON.parse(localStorage.getItem("memberInfo") || "{}").nickname,
      activeNames: [],
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.back();
      localStorage.removeItem("memberList");
    },
    quit() {
      this.$toast("退出成功!"); //消息提示
      localStorage.removeItem("memberList"); //删除会员信息存在缓存中
      this.$router.push("/login"); //跳转页面到登录
    },
  },
  components: {},
};
</script>
<style scoped>
.header {
  height: 240px;
  background-color: #ddd;
  text-align: center;
  margin-bottom: 10px;
  padding-top: 20px;
}
.header h5 {
  font-size: 20px;
}
.btn {
  padding: 0 10px;
  margin-bottom: 20px;
}
</style>