<template>
  <div>
    <!-- 标签页 navBar -->
    <van-nav-bar left-arrow @click-left="$router.go(-1)"  title="商品列表"/>
    <div v-if="goodsList !== null">
        <van-card
        v-for="item in goodsList"
        :key="item.id"
        :price="item.price"
        :title="item.goodsname"
        :thumb="$imgHead+item.img"
      >
        <template #footer>
          <van-button size="small" icon="cart-o" type="primary" @click="addCart(item.id)"></van-button>
        </template>
      </van-card>
    </div>
      <van-empty
          v-else
          class="custom-image"
          image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
          description="暂无数据"
        />

  </div>
</template>

<script>
import { getCateGoods,addCart} from '../utils/request'
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      goodsList:[],
    }
  },
  methods:{
    requestGoodsList(){
      // 接收参数
      const fid = this.$route.query.fid
      // 发起请求
      getCateGoods({fid}).then(res=>{
        this.goodsList = res.data.list
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
      requestCart:'cartListActions',
    })
  },
  mounted(){
    // 发起获取商品列表请求
    this.requestGoodsList()
  }
}
</script>

<style scoped>
 .custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>
