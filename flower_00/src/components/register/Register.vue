<template>
    <div class="app-register">
        <header id="header" class="mui-bar mui-bar-nav">
			<h1 class="mui-title">{{registerTitle}}</h1>
		    <a @click="toBack" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
        </header>
        <tab :line-width=4 bar-active-color="#ff734d" active-color='#ff734d' v-model="index" class="register-top">
            <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" @click.native="testTitle" :key="index">{{item}}</tab-item>
        </tab>
        <swiper v-model="index" height="300px" :show-dots="false">
            <swiper-item>
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <input type="text" class="mui-input-clear" placeholder="请输入手机号">
                    </div>
                    <div class="mui-input-row">
                        <input type="password" class="mui-input-clear" placeholder="请输入短信验证码">
                    </div>
                    <div class="mui-input-row">
                        <input type="password" class="mui-input-password" placeholder="请设置密码">
                    </div>
                </form>
                <div class="mui-content-padded mt-4" align="center">
                    <button type="button" disabled="disabled" class="mui-btn login-button">注册</button>
                </div>
            </swiper-item>
            <swiper-item>
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <input type="text" class="mui-input-clear" placeholder="请输入邮箱">
                    </div>
                    <div class="mui-input-row">
                        <input type="password" class="mui-input-password" placeholder="请设置密码">
                    </div>
                </form>
                <div class="mui-content-padded mt-4" align="center">
                    <button type="button" disabled="disabled" class="mui-btn login-button">注册</button>
                </div>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
    import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
    const list = () => ['手机注册', '邮箱注册']
    export default {
        components: {
            Tab,
            TabItem,
            Swiper,
            SwiperItem
        },
        data(){
            return{
                registerTitle:"手机注册",
                item1:true,
                item2:false,
                list2: list(),
                demo2: '美食',
                index: 0
            }
        },
        methods:{
            testTitle(e){
                this.registerTitle=e.target.innerText;
            },
            toBack(){
                this.$router.go(-1);
            }
        },
        mounted(){
            mui.init();
            mui('.mui-input-row input').input();
        }
    }
</script>
<style scoped>
    .app-register{
        width:100%;
        height:100%;
        background:#fff;
        padding-bottom: 50px;
        touch-action: none;
    }
    .register-top{
        margin-top: 44px;
        width:100%;
    }
     .login-button{
        width:344px;
        height:46px;
        background: #ff734c;
        border: 1px solid #ff734c;
        font-size: 16px;
        box-shadow: 0 4px 8px 0 #ffb6a2;
        border-radius: 100px;
        color:#fff;
        outline: none;
    }
    .mui-content{
        background:#fff;
    }
    .mui-btn:disabled{
        color: hsla(0,0%,100%,.5);
        opacity:1;
    }
    .mui-input-group:before,.mui-input-group:after{
        height:0;
    }
    .mui-input-group .mui-input-row,input[type='text'],input[type='password']{
        height:50px;
        font-size: 14px;
    }
</style>
