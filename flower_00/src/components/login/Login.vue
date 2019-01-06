<template>
    <div class="app-login">
        <header id="header" class="mui-bar mui-bar-nav">
			<h1 class="mui-title">登录</h1>
		    <a @click="toBack" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
        </header>
        <div class="login-top">
            <img src="http://127.0.0.1:3888/img/nav/hualogo2.png" alt="">
        </div>
        <div class="mui-content pt-0">
            <form class="mui-input-group">
                <div class="mui-input-row">
                    <label>帐号：</label>
                    <!--  class="mui-input-clear" -->
                    <input type="text" class="mui-input-clear" placeholder="请输入邮箱或手机号" v-model="uname">
                    <!-- <span class="mui-icon mui-icon-clear"></span> -->
                </div>
                <div class="mui-input-row">
                    <label>密码：</label>
                    <input type="password" class="mui-input-password" placeholder="请输入登录密码" v-model="upwd">
                    <!-- <span class="mui-icon mui-icon-clear mui-hidden"></span> -->
                </div>
            </form>
            <div class="mui-content-padded mt-4" align="center">
                <button @click="toLogin" type="button" :disabled="disabled" class="mui-btn login-button">登陆</button>
            </div>
        </div>
        <div class="d-flex justify-content-between mt-3 pl-3 pr-3">
            <span @click="toRegister">快速注册</span>
            <span>忘记密码</span>
        </div>
        <div class="login-bottom">
            <span class="mui-icon mui-icon-qq"><span class="bottom-text"> QQ</span></span>
            <span>|</span>
            <span class="mui-icon-extra mui-icon-extra-alipay"><span class="bottom-text"> 支付宝</span></span>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui"
    export default {
        data(){
            return{
                uname:"",
                upwd:"",
                disabled:true
            }
        },
        methods:{
            toLogin(){
                var regemail=/^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/;
                var regphone=/^(\+86|0086)?\s*1[3-8]\d{9}$/;
                if(this.disabled==true){
                    Toast("账号或密码不能为空");
                }else if(!regemail.test(this.uname) && !regphone.test(this.uname)){
                    var toa=Toast("账号格式不正确");
                    setTimeout(() => {
                        toa.close();
                    }, 1000);
                };
                if(regemail.test(this.uname)){
                    var url="http://127.0.0.1:3888/emailLogin?uemail="+this.uname+"&upwd="+this.upwd;
                    this.axios.get(url).then(result=>{
                        // console.log(result);
                        if(result.data.code==1){
                            this.$store.commit("setUid",{
                                uid:result.data.uid,
                            });
                            // window.location.reload();
                            this.$router.go(-1);
                        }else{
                            console.log("登录失败")
                        }
                    })
                };
                if(regphone.test(this.uname)){
                    var url="http://127.0.0.1:3888/phoneLogin?phone="+this.uname+"&upwd="+this.upwd;
                    this.axios.get(url).then(result=>{
                        // console.log(result);
                        if(result.data.code==1){
                            this.$store.commit("setPhone",{
                                phone:result.data.phone,
                            });
                            // window.location.reload();
                            this.$router.go(-1);
                        }else{
                            console.log("登录失败")
                        }
                    })
                };
                
            },
            isWrite(){
                if(this.uname!="" && this.upwd!=""){
                    this.disabled=false;
                }else{
                    this.disabled=true;
                }
            },
            toRegister(){
                this.$router.push("/register");
            },
            toBack(){
                this.$router.go(-1);
            }
        },
        watch:{
             uname(){
                setTimeout(() => {
                    this.isWrite();
                }, 300);
             },
             upwd(){
                setTimeout(() => {
                    this.isWrite();
                }, 300);
             }
        },
        mounted(){
            mui.init();
            mui('.mui-input-row input').input();
            
        }
    }
</script>
<style scoped>
    .app-login{
        background:#fff;
        width:100%;
        height:100%;
        touch-action: none;
    }
    .login-top{
        width:100%;
        height:100px;
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top: 44px;
    }
    .login-top img{
        width:190px;
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
        color: hsla(0,0%,100%,.3);
        opacity:1;
    }
    .mui-input-group:before,.mui-input-group:after{
        height:0;
    }
    .mui-input-group .mui-input-row,input[type='text'],input[type='password']{
        height:50px;
        font-size: 14px;
    }
    .mui-input-row label{
        height:50px;
        margin-bottom: 0;
        line-height: 30px;
    }
    .login-bottom{
        width:100%;
        height:320px;
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding:0 80px;
        color:#71797f;
    }
    .login-bottom span{
        font-size: 18px;
    }
    .bottom-text{
        font-size: 14px !important;
    }
    
</style>
