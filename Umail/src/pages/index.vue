<template>
  <div>
      <!-- 二级路由出口 -->
      <router-view></router-view>
      <!-- 底部栏 -->
      <van-tabbar v-model="active" active-color="#ff00cc">
      <van-tabbar-item icon="wap-home" to='/home'>首页</van-tabbar-item>
      <van-tabbar-item icon="coupon" to='/cate'>分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" to='/cart' :badge='total'>购物车</van-tabbar-item>
      <van-tabbar-item icon="manager" to='/mine'>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      active:3,
    }
  },
  computed:{
    ...mapGetters({
      'total':'total'
    })
  },
  methods:{
    act(){

    }
  }
}
</script>

<style>

</style>