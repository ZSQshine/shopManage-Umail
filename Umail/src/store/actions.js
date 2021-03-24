import {getCartList} from '../utils/request'

export default {
    userActions(context,user){
        context.commit('changeUser',user)
      },
    // 发起购物车请求
    cartListActions(context,uid){
        getCartList({uid}).then(res=>{
            context.commit('changeCartList',res.data.list);
        })
    }
}