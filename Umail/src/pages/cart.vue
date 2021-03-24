<template>
  <div class="cart">
    <van-nav-bar left-arrow @click-left="$router.go(-1)"  title="购物车"/>
    <div class="container">
        <template v-if="cartList !== null">
            <van-card
              v-for="item in cartList"
              :key="item.id"
              :price="item.price"
              :title="item.goodsname"
              :thumb="$imgHead+item.img"
            >
              <template #footer>
                <van-stepper v-model="item.num" theme="round" button-size="22" disable-input />
                <van-button type="primary" size="mini" @click="del(item.id)">删除</van-button>
              </template>
            </van-card>
            <van-submit-bar :price="totalPrice" button-text="提交订单"  />
        </template>
        <van-empty
            v-else
            class="custom-image"
            image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
            description="购物车是空的"
          />

    </div>

  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import {delCart} from '../utils/request'
export default {
  data(){
    return{
      user:JSON.parse(sessionStorage.getItem('user'))
    }
  },
  methods:{
    ...mapActions({
      'requestCart':'cartListActions'
    }),
    del(id){
      // 发起删除请求
      delCart({id}).then(res=>{
        this.$toast.success(res.data.msg);
        // 刷新列表
        this.requestCart(this.user.uid);
      })
    }

  },
  computed:{
    ...mapGetters({
      'cartList':'cartList',
      'totalPrice':'totalPrice',
    })
  },
  mounted(){
    if(this.user){
      this.requestCart(this.user.uid)
    }
  }
}
</script>

<style scoped>
.cart{
  margin-bottom: 90px;
}
.van-submit-bar{
  margin-bottom: 50px;
}
.custom-image .van-empty__image {
    width: 90px;
    height: 90px;
  }
</style>