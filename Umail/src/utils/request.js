import axios from 'axios'
import qs from "qs";
import { Toast } from "vant";

// 基础路径
const baseUrl = '/api'

// 设置请求头
axios.interceptors.request.use(config=>{
    console.group("本次请求地址为:"+config.url)
  // 设置请求头
  const user = JSON.parse(sessionStorage.getItem('user'))
  if(user){
    // 设置请求头
    config.headers.authorization = user.token;
  }
  console.groupEnd()
  return config
})

// 设置相应拦截
axios.interceptors.response.use(res=>{
    console.group('本次响应的路径为'+res.config.url)
    if(res.data.code !== 200){
        Toast.fail(res.data.msg)
    }
    console.log(res);
    console.groupEnd()
    return res
})


// 获取分类信息
export const getCate = ()=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/getcate'
    })
}
// 获取轮播图
export const getBanner = ()=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/getbanner'
    })
}
// 获取限时秒杀
export const getSecond = ()=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/getseckill'
    })
}

// 获取商品信息
export const getGoods = ()=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/getindexgoods'
    })
}

// 获取分类树形结构
export const getCateTree = ()=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/getcatetree'
    })
}

// 获取分类商品详情
export const getCateGoods = (params)=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/getgoods',
        params
    })
}

// 一个商品信息
export const oneGood = (params)=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/getgoodsinfo',
        params
    })
}

// 注册
export const register = (data)=>{
    return axios({
        method:'post',
        url:baseUrl + '/api/register',
        data:qs.stringify(data)
    })
}
// 登录

export const login = (data)=>{
    return axios({
        method:'post',
        url:baseUrl + '/api/login',
        data:qs.stringify(data)
    })
}

// 获取购物车列表
export const getCartList = (params)=>{
    return axios({
        method:'get',
        url:baseUrl + '/api/cartlist',
        params
    })
}

// 购物车添加
export const addCart = (data)=>{
    return axios({
        method:'post',
        url:baseUrl + '/api/cartadd',
        data:qs.stringify(data)
    })
}

// 购物车删除
export const delCart = (data)=>{
    return axios({
        method:'post',
        url:baseUrl + '/api/cartdelete',
        data:qs.stringify(data)
    })
}