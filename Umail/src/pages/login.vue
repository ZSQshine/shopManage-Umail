<template>
  <div>
    <van-nav-bar  right-text="去注册"  @click-right="$router.push('/register')" title="欢迎登录"/>
    <van-form @submit="signUp">
      <van-field
        v-model="user.phone"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '../utils/request';
import {mapActions,mapGetters} from 'vuex'

export default {
  data() {
    return {
      user:{
        phone: '18888888888',
        password: '123',
      }
    };
  },
  methods: {
    signUp() {
      // 发起登录请求
      login(this.user).then(res=>{
        // 将用户信息存入store 和 session
        this.requestUser(res.data.list);

        this.$toast.success(res.data.msg)
        this.$router.push('/mine')
      })
    },
    ...mapActions({
      'requestUser':'userActions'
    })
  },
};
</script>

<style>

</style>
