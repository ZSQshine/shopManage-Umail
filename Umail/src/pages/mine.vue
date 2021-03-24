<template>
  <div>
    <!-- 标签页 navBar -->
    <van-nav-bar left-arrow @click-left="$router.go(-1)"  title="会员中心"/>
    <div class="header">
        <van-image
            round
            width="10rem"
            height="10rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        <div>{{user.nickname}}</div>
    </div>
    <van-button type="danger" block @click="logout">安全退出</van-button>
    <div class="main">
      <van-cell title="我的收藏" is-link />
      <van-cell title="我的评论" is-link />
      <van-cell title="我的订单" is-link />
    </div>

  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{
      user:JSON.parse(sessionStorage.getItem('user'))
    }
  },
  computed:{
    ...mapGetters({
      // user:'user'
    })
  },
  methods:{
    logout(){
      // 清除session
      this.requestUser(null);
      this.$toast.success('安全退出')
      this.$router.push('/login')
    },
    ...mapActions({
      requestUser:'userActions',
      requestCart:'cartListActions'
    })
  },
  mounted(){
    // console.log(this.user);
    this.requestCart(this.user.uid);
  }
}
</script>

<style scoped>
.header{
  height: 200px;
  background: #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom:5px;
}
.van-button{
  border-radius: 20px;
}
</style>
