export const state = {
    // 用户信息
    user:sessionStorage.getItem('user') ? sessionStorage.getItem('user') : null,
    // 购物车列表
    cartList:[]
}

export const mutations = {
    changeUser(state,user){
        // 将用户信息存入到store中的state里
        state.user = user;
        if(user){
          // 将用户信息存入到sessionStorage中
          sessionStorage.setItem('user',JSON.stringify(user))
        }else{
            // 移除
          sessionStorage.removeItem('user')
        }
      },
      changeCartList(state,arr){
          state.cartList = arr;
      }

}

export const getters = {
    user(state){
        return state.user;
    },
    cartList(state){
        return state.cartList;
    },
    // 返回购物车商品总数
    total(state){
        let sum = 0;
        if(state.cartList !== null){
            state.cartList.map(ele=>{
                sum += ele.num;
            })
        }
        return sum;
    },
    // 返回购物车商品总价
    totalPrice(state){
        let sum = 0;
        if(state.cartList !== null){
            state.cartList.map(ele=>{
                sum += ele.num * ele.price;
            })
        }
        return sum*100;//单位是分，乘以100
    }

}