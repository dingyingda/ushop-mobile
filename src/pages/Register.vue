<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar
      title="用户注册"
      right-text="登录"
      left-arrow
      @click-left="$router.back()"
      @click-right="$router.push('/login')"
    />
    <!-- 表单部分 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="memberInfo.phone"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="memberInfo.nickname"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请输入昵称' }]"
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
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import {register} from '../request/api'
export default {
  data() {
    return {
        memberInfo:{
            phone:'',
            nickname:'',
            password:'',
        }
    };
  },
  created() {},
  methods: {
      async onSubmit() {
    //   console.log(this.memberInfo);
      let res=await register(this.memberInfo);
      if(res.code===200){
          this.$toast(res.msg);//消息提示
          this.$router.push('/login');
      }else{
          this.$toast(res.msg);//消息提示
      }
    },
  },
  components: {},
};
</script>
<style scoped>
</style>