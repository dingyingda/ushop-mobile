<template>
  <div>
    <!-- 头部部分 -->
    <van-nav-bar
      title="用户登录"
      right-text="注册"
      left-arrow
      @click-left="$router.back()"
      @click-right="$router.push('/register')"
    />
    <!-- 登录的表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="memberInfo.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="memberInfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import {login} from '../request/api'
export default {
  data() {
    return {
      memberInfo: {
        phone: "18811112222",
        password: "123456",
      },
    };
  },
  created() {},
  methods: {
     async onSubmit() {
         let resLogin=await login(this.memberInfo);
         if(resLogin.code===200){
            this.$toast(resLogin.msg);//消息提示
            localStorage.setItem('memberInfo',JSON.stringify(resLogin.list));//把会员信息存在缓存中
            this.$router.push('/user');
         }else{
             this.$toast(resLogin.msg);
         }
    },
  },
  components: {},
};
</script>
<style scoped>
</style>