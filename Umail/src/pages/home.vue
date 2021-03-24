<template>
  <div>
      <van-nav-bar  title="首页"/>
       <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(itm,idx) in banner" :key="idx">
        <img :src="$imgHead + itm.img" alt="">
      </van-swipe-item>
    </van-swipe>
     <van-tabs v-model="active">
      <van-tab title="热门推荐">
        <van-card
            v-for="item in goods[0].content"
            :key="item.id"
            :price="item.price"
           
            :title="item.goodsname"
            :thumb="$imgHead + item.img"
            tag='热卖'
          >
            <template #footer>
              <van-button type="primary" size="small" icon="cart-o" @click="addCart(item.id)"></van-button>
            </template>
          </van-card>
      </van-tab>
      <van-tab title="发现新品">
         <van-card
            v-for="item in goods[1].content"
            :key="item.id"
            :price="item.price"
           
            :title="item.goodsname"
            :thumb="$imgHead + item.img"
            tag='新品'
          >
            <template #footer>
              <van-button type="primary" size="small" icon="cart-o" @click="addCart(item.id)"></van-button>
            </template>
          </van-card>
      </van-tab>
      <van-tab title="全部商品">
         <van-card
            v-for="item in goods[2].content"
            :key="item.id"
            :price="item.price"
           
            :title="item.goodsname"
            :thumb="$imgHead + item.img"
          >
            <template #footer>
              <van-button type="primary" size="small" icon="cart-o" @click="addCart(item.id)"></van-button>
            </template>
          </van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {getBanner,getGoods,addCart} from '../utils/request'
import {mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return{
      active:0,
      banner:[],//存放轮播图
      goods:[{content:[]},{content:[]},{content:[]}],//存放商品
      uid:JSON.parse(sessionStorage.getItem('user')).uid,
    }
  },
  methods:{
    // 请求轮播图
    requestBanner(){
      getBanner().then(res=>{
        this.banner = res.data.list;
      })
    },
    // 请求商品
    requestGoods(){
      getGoods().then(res=>{
        this.goods = res.data.list;
      })
    },
    // 请求添加购物车
    addCart(id){
      let form = {
        uid:JSON.parse(sessionStorage.getItem('user')).uid,
        goodsid:id,
        num:1
      }
      // 发起请求
      addCart(form).then(res=>{
        this.$toast.success(res.data.msg);
        // 
        this.requestCart(form.uid);
      })

    },
    ...mapActions({
      requestCart:'cartListActions'
    })
  },
  mounted(){
    this.requestBanner();
    this.requestGoods();
     this.requestCart(this.uid);
  }
}
</script>

<style scoped>
.van-tab__pane{
  margin-bottom:50px;
}
 .my-swipe .van-swipe-item {
    color: #fff;
    /* font-size: 20px; */
    height: auto;
    line-height: 150px;
    text-align: center;
    background-color: #333;
  }
  img{
    width:100%;

  }
</style>