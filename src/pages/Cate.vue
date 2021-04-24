<template>
  <div class="container">
    <div class="left">
      <!-- 侧边导航一级 -->
      <van-sidebar v-model="activeKey" @change="change">
        <van-sidebar-item v-for="item in cateList" :key="item.id" :title="item.catename" />
      </van-sidebar>
    </div>
    <!-- 二级菜单目录 -->
    <div class="right">
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="item in childList" :key="item.id" @click="skip(item.id)">
          <van-image :src="$imgBaseUrl+item.img" />
          <h5>{{item.catename}}</h5>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import {getCate} from '../request/api'
export default {
  data() {
    return {
      activeKey: 0,
      cateList:[],
      childList:[]
    };
  },
  async created() {
      let resCate=await getCate();
      this.cateList=resCate.list;
      this.change();//在已创建声明周期里获取一下数据
      // console.log(this.childList);
  },
  methods: {
      change(){
          this.childList=this.cateList[this.activeKey].children; //把切换的数据赋值给二级菜单数组
      },
      skip(id){
        this.$router.push({
          path:'/list',
          query:{
            id:id,
          }
        });
      }
  },
  components: {},
};
</script>
<style scoped>
.container {
  display: flex;
}
.left {
  width: 80px;
}
.right {
  flex: 1;
}
</style>