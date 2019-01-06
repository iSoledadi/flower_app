<template>
    <div class="app-profile">
        <mt-header fixed title="个人中心"></mt-header>
        <div class="profile-contain">
            <!-- 登录注册按钮 -->
            <div class="profile-top">
                <div v-show="isloginout" class="profile-button">
                    <p class="text-white">Hi,欢迎来到花礼网</p>
                    <router-link class="login-button" to="/login">登录/注册</router-link>
                </div>
                <img class="user-icon" v-show="islogin" src="http://127.0.0.1:3888/img/profile/user_icon.jpg" alt="">
                <span v-show="islogin">{{this.$store.state.uid}}</span>
                <span v-show="islogin">{{this.$store.state.phone}}</span>
            </div>
            <!-- 九宫格1 -->
            <div class="profile-grid">
                <div class="profile-grid1-top d-flex justify-content-between">
                    <a href="javascript:;">我的订单</a>
                    <a href="javascript:;">全部订单<span class="mui-icon mui-icon-arrowright"></span></a>
                </div>
                <grid class="profile-grid1" :show-vertical-dividers="false">
                    <grid-item class="profile-grid-item d-flex justify-content-between">
                        <img src="http://127.0.0.1:3888/img/profile/grid1_1.png" alt="">
                        <span class="grid-center">待付款</span>
                    </grid-item>
                    <grid-item class="profile-grid-item d-flex justify-content-between">
                        <img src="http://127.0.0.1:3888/img/profile/grid1_2.png" alt="">
                        <span class="grid-center">今日配送</span>
                    </grid-item>
                    <grid-item class="profile-grid-item d-flex justify-content-between">
                        <img src="http://127.0.0.1:3888/img/profile/grid1_3.png" alt="">
                        <span class="grid-center">待评价</span>
                    </grid-item>
                </grid>
            </div>
            <!-- 九宫格2 -->
             <div class="profile-grid">
                <grid class="profile-grid1 profile-grid2"  :cols="4" :show-lr-borders="false">
                    <grid-item v-for="item in list" :key="item.id" class="profile-grid-item d-flex justify-content-between">
                        <img :src="item.img_url" alt="">
                        <span class="grid-center">{{item.title}}</span>
                    </grid-item>
                </grid>
            </div>
            <!-- 九宫格3 -->
             <div class="profile-grid">
                <grid class="profile-grid1 profile-grid2" :show-vertical-dividers="false">
                    <grid-item class="profile-grid-item d-flex justify-content-between">
                        <span class="mui-icon-extra mui-icon-extra-custom grid3-icon"></span>
                        <span class="grid-center">联系客服</span>
                    </grid-item>
                    <grid-item class="profile-grid-item d-flex justify-content-between">
                        <span class="mui-icon mui-icon-help grid3-icon"></span>
                        <span class="grid-center">帮助中心</span>
                    </grid-item>
                    <grid-item class="profile-grid-item d-flex justify-content-between">
                        <span class="mui-icon mui-icon-info grid3-icon"></span>
                        <span class="grid-center">关于花礼</span>
                    </grid-item>
                    <grid-item class="profile-grid-item d-flex justify-content-between">
                        <span class="mui-icon mui-icon-gear grid3-icon"></span>
                        <span class="grid-center">设置</span>
                    </grid-item>
                </grid>
            </div>
        </div>
    </div>
</template>
<script>
   import { Grid, GridItem } from 'vux'
   export default {
        components: {
            Grid,
            GridItem
        },
        data(){
            return{
                list:[],
                islogin:false,
                isloginout:true
            }
        },
        methods:{
            getProImg(){
                var url="http://127.0.0.1:3888/getProImg"
                this.axios.get(url).then(result=>{
                    this.list=result.data;
                })
            }
        },
        created(){
            this.getProImg();
            if(this.$store.state.uid){
                this.islogin=this.$store.state.islogin;
                this.isloginout=this.$store.state.isloginout;
            };
            if(this.$store.state.phone){
                this.islogin=this.$store.state.islogin;
                this.isloginout=this.$store.state.isloginout;
            }
        },
        watch:{
            $route(now,old) {
                if(now.path!="/login") {
                    if(this.$store.state.uid || this.$store.state.phone){
                        // this.myuser=this.$store.state.uid;
                        console.log("我是个人页，这里有uid或phone了")
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .mint-header{
        background:#fafafa;
        color:#000;
        border-bottom: 1px solid #e8e8ed;
    }
    .profile-contain{
        width:100%;
        min-height: 573px;
        margin-top: 40px;
        padding-bottom: 58px;
        background-image: url("http://127.0.0.1:3888/img/profile/profile_bg.png");
        background-repeat: no-repeat;
        background-size: 100% 9.43rem;
        background-position: top center;
    }
    .profile-top{
        width:100%;
        height:8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .login-button{
        margin-top: 0.57142857rem;
        text-align: center;
        display: block;
        width: 9rem;
        height: 2.57142857rem;
        line-height: 2.57142857rem;
        background-color: #fff;
        border-radius: 4rem;
        font-weight: 500;
    }
    .profile-grid1{
        width:100%;
        background:#fff;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        overflow: hidden;
        box-shadow: 0 0.286rem 0.43rem 0 #DEE2E5;
    }
    .profile-grid1-top{
        background:#fff;
        width: 100%;
        height: 3.14rem;
        line-height: 3.14rem;
        padding: 0 1.14rem;
        overflow: hidden;
        position: relative;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .profile-grid1-top a{
        font-size: 1rem;
        font-weight: 400;
    }
    .mui-icon{
        font-size: 18px;
    }
    .profile-grid{
        width:100%;
        height:auto;
        padding:10px 10px 0 10px;
    }
    .profile-grid-item{
        flex-direction: column;
        align-items: center;
        font-size: 0.85rem;
    }
    .profile-grid-item img{
        width:32px;
        height:32px;
    }
    .profile-grid2{
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .profile-grid2 .profile-grid-item img{
        width:20px;
        height:20px;
    }
    .profile-grid2 span{
        margin-top: 8px;
    }
    .weui-grid:before{
        border-right: none;
    }
    .grid3-icon:before{
        font-size: 20px;  
    }
    .grid3-icon{
        margin-top: 0 !important;
        width:20px;
        height:20px;
        line-height: 20px;
    }
    .user-icon{
        width:60px;
        height:60px;
        border-radius: 50%;
        border:3px solid #eee;
    }
</style>
