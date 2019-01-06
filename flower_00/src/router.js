import Vue from 'vue'
import Router from 'vue-router'

import Home from "./components/tabbar/Home.vue"
import Search from "./components/tabbar/Search.vue"
import Cart from "./components/tabbar/Cart.vue"
import Profile from "./components/tabbar/Profile.vue"
import Login from "./components/login/Login.vue"
import Register from "./components/register/Register.vue"
import GoodList from "./components/goods/GoodList.vue"
import GoodDetail from "./components/goods/GoodDetail.vue"
import ToBlank from "./components/ToBlank.vue"

Vue.use(Router)

export default new Router({
    routes:[
        {path:"/",redirect:"/home"},
        {path:'/home',component:Home},
        {path:'/search',component:Search},
        {path:"/cart",component:Cart},
        {path:"/profile",component:Profile},
        {path:'/login',component:Login},
        {path:"/register",component:Register},
        {path:"/goodlist",component:GoodList},
        {path:"/goodinfo",component:GoodDetail},
        {path:"/blank",component:ToBlank}
    ]
})