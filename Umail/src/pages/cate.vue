<template>
  <div>
    <!-- -->
    <van-nav-bar left-arrow @click-left="$router.go(-1)"  title="分类"/>
    <!-- 侧边导航 -->
    <van-sidebar v-model="activeKey">
      <van-sidebar-item v-for="(item,index) in firstCate" :key="item.id" :title="item.catename" @click="changeCate(index)" />
    </van-sidebar>
    <div class="main">
        <van-grid :border="false" :column-num="3">
          <van-grid-item v-for="item in secondCate" :key="item.id" :to="`/goodsList?fid=${item.id}`">
            <van-image :src="$imgHead+item.img" class="img" />
            <p>{{item.catename}}</p>
          </van-grid-item>

        </van-grid>
    </div>
  </div>
</template>

<script>
import {getCateTree} from '../utils/request'
export default {
  data(){
    return {
      activeKey:0,
      // 一级分类列表
      firstCate:[],
      // 二级分类列表
      secondCate:[],
    }
  },
  methods:{
    requestCate(){
      getCateTree().then(res=>{
        this.firstCate = res.data.list
        this.changeCate(0)
      })
    },
    // 获取二级分类列表
    changeCate(index){
      this.secondCate = this.firstCate[index].children;
    }
  },
  mounted(){
    // 发起获取分类的请求
    this.requestCate();
  }
}
</script>

<style scoped>
.main{
  position: absolute;
  top:55px;
  right:50px;
  /* width: calc(100%-80px); */
  /* margin-left:10px; */
  text-align: right;
}
.img{
  width:100px;
}
</style>
