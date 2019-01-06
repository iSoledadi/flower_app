<template>
    <div class="app-home">
        <!-- 导航栏 -->
        <header class="mui-bar mui-bar-nav my-nav" :style="'background:rgba(247,247,247,'+cc+')'">
            <span @click="toSearch" :class="isscroll?'toblack':'towhite'" class="mui-icon mui-icon-search nav-search"></span>
            <img class="nav-logo" src="http://127.0.0.1:3888/img/nav/hualogo2.png" alt="">
            <router-link :class="isscroll?'toblack':'towhite'" to="/login">登录</router-link>
        </header>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9 d-flex justify-content-between">
            <li class="mui-table-view-cell mui-media">
                <router-link to="/goodlist">
                    <img src="http://127.0.0.1:3888/img/grid/grid1.png" />
                    <div class="mui-media-body">
                    鲜花</div>
                </router-link>
                </li>
            <li class="mui-table-view-cell mui-media">
                <router-link to="/goodlist">
                    <img src="http://127.0.0.1:3888/img/grid/grid2.png" />
                    <div class="mui-media-body">
                永生花</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img src="http://127.0.0.1:3888/img/grid/grid3.png" />
                    <div class="mui-media-body">蛋糕</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img src="http://127.0.0.1:3888/img/grid/grid4.png" />
                    <div class="mui-media-body">礼品</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img src="http://127.0.0.1:3888/img/grid/grid5.png" />
                    <div class="mui-media-body">巧克力</div>
                </a>
            </li>
        </ul>
        <!-- 一秒选花 -->
        <section class="scene">
            <div class="modetitle">一秒选花</div>
            <div class="scene-list">
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene1.png" alt="">
                        <span class="scene-item-title">送恋人</span>
                    </a>
                </div>
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene2.png" alt="">
                        <span class="scene-item-title">送长辈</span>
                    </a>
                </div>
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene3.png" alt="">
                        <span class="scene-item-title">送朋友</span>
                    </a>
                </div>
            </div>
            <div class="scene-list">
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene4.png" alt="">
                        <span class="scene-item-title">生日祝福</span>
                    </a>
                </div>
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene5.png" alt="">
                        <span class="scene-item-title">表白求婚</span>
                    </a>
                </div>
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene6.png" alt="">
                        <span class="scene-item-title">开业商务</span>
                    </a>
                </div>
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene7.png" alt="">
                        <span class="scene-item-title">周年纪念</span>
                    </a>
                </div>
            </div>
            <div class="scene-list d-flex justify-content-between">
                 <a class="scene-item scene-item-bg">
                    <p class="scene-item-name">热销榜</p>
                    <p class="scene-item-desc">集万千宠爱</p>
                    <div class="scene-item-bottom">
                        <span class="scene-item-bottom-label">大家都在买</span>
                        <span class="scene-item-bottom-text">热销7.5万束</span>
                    </div>
                </a>
                 <a class="scene-item scene-item-bg">
                    <p class="scene-item-name">特价专区</p>
                    <p class="scene-item-desc">超值好货</p>
                    <div class="scene-item-bottom">
                        <span class="scene-item-bottom-label">限时直降</span>
                        <span class="scene-item-bottom-text">¥128 <s>¥215</s></span>
                    </div>
                </a>
            </div>
            <div class="scene-list">
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene10.png" alt="">
                        <span class="scene-item-pange">新品来袭</span>
                    </a>
                </div>
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene11.png" alt="">
                        <span class="scene-item-pange">品味之选</span>
                    </a>
                </div>
                <div class="scene-item">
                    <a href="javascript:;">
                        <img src="http://127.0.0.1:3888/img/home/home_scene12.png" alt="">
                        <span class="scene-item-pange">设计师甄选</span>
                    </a>
                </div>
            </div>
        </section>
        <!-- 商品介绍 -->
        <section class="product">
            <ul class="mui-table-view product-contain" v-for="item in productlist" :key="item.id">
                <h3 class="product-title" v-if="item.title">{{item.title}}</h3>
                <li class="mui-table-view-cell mui-media w-100">
                    <a href="javascript:;">
                        <img class="mui-pull-left product-img" :src="item.img_url">
                        <div class="mui-media-body product-info">
                            <p class='mui-ellipsis product-name'>{{item.name}}</p>
                            <p class='mui-ellipsis'>{{item.introduce}}</p>
                            <p class="product-tips">{{item.tip}}</p>
                            <hr>
                            <p class='mui-ellipsis product-adv'>{{item.adv}}</p>
                            <hr>
                            <div class="mui-table-view-cell mui-media product-price">
                                <img class="mui-pull-right product-cart" src="http://127.0.0.1:3888/img/home/product_cart.png" alt="">
                                <div class="mui-media-body">
                                    <p class='mui-ellipsis'>
                                        <strong>¥{{item.newPrice}}</strong>
                                        <s>¥{{item.oldPrice}}</s>
                                    </p>
                                    <p class='mui-ellipsis'>{{item.sale}}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
        <!-- 返回顶部 -->
        <div v-show="isTop" class="to-top" @click="toTop(15)">
            <img src="http://127.0.0.1:3888/img/home/toTop.png" alt="">
        </div>
        
        <!-- <div class="test">
           
        </div> -->
        
    </div>
</template>
<script>
    export default {
        methods:{
            toSearch(){
                this.$router.push("/search");
            },
            getBanner(){
                var url="http://127.0.0.1:3888/banner"
                this.axios.get(url).then(result=>{
                    this.list=result.data;
                    // console.log(result.data)
                })
            },
            handleScroll(){
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                // var offsetTop = document.querySelector('#searchBar').offsetTop
                if (scrollTop > 50) {
                    this.isscroll=true
                } else {
                    this.isscroll = false
                };
                if(scrollTop>200){
                    this.isTop=true;
                }else{
                    this.isTop=false;
                }
                this.cc=scrollTop>160?1:(scrollTop/160);
                
            },
            getProduct(){
                var url="http://127.0.0.1:3888/getproduct"
                this.axios.get(url).then(result=>{
                    this.productlist=result.data;
                })
            },
            toTop(i){
                //参数i表示间隔的幅度大小，以此来控制速度
                document.documentElement.scrollTop-=i;
                if (document.documentElement.scrollTop>0) {
                    var c=setTimeout(()=>this.toTop(i),16);
                }else {
                    clearTimeout(c);
                }
            }
        },
        data(){
            return{
                list:[],
                isscroll:false,
                productlist:[],
                isTop:false,
                cc:0
            }
        },
        created(){
            this.getBanner();
            this.getProduct();
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed(){
            window.removeEventListener('scroll', this.handleScroll)
        },
        watch:{
            $route(now,old) {
                if(now.path!="/login") {
                    if(this.$store.state.uid || this.$store.state.phone){
                        // this.myuser=this.$store.state.uid;
                        console.log("我是主页，这里有uid或phone了")
                    }
                }
            }
        }
    }
</script>
<style scoped>
    .app-home{
        /* touch-action: pan-y; */
        overflow: hidden;
        padding-bottom: 60px;
    }
    .mint-swipe{
        width:100%;
        height:228px;
    }
    .mint-swipe img{
        /* width:100%; */
        height:100%;
        display: block;
        /* width:375px; */
    }
    .test{
        height:4000px;
        background:#789;
    }
    .my-nav{
        -webkit-box-shadow: none;
        box-shadow: none;
        font-size: 14px;
        /* line-height: 44px; */
    }
    .nav-search{
        position: fixed;
        left:14px;
    }
    .my-nav a{
        position:fixed;
        top: 12px;
        /* display: inline-block; */
        right:14px;
        
    }
    .towhite{
        color:#fff;
    }
    .toblack{
        color:black;
    }
    .nav-logo{
        width:150px;
        height:20px;
        margin-top: 12px;
        vertical-align: top;
    }
    .mui-table-view-cell img{
        width:36px;
        height:36px;
    }
    .mui-media-body{
        font-size: 0.85rem !important;
    }
    .scene-list{
        display: flex;
        padding:0 6px;
    }
    .scene-item{
        position: relative;
        margin:0 0.14rem;
        /* height:130px; */
        border-radius: 0.28rem;
        overflow: hidden;
        display: block;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 0%;
    }
    .scene-item a{
        width:100%;
        height:100%;
        position: relative;
        display: block;
    }
    .scene-item-title{
        position: absolute;
        top:5px;
        left:0;
        right:0;
        text-align: center;
        font-size: 14px;
    }
    .scene>.scene-list+.scene-list {
        margin-top: 0.57rem;
    }
    .scene-item.scene-item-bg{
        display: block;
        position: relative;
        /* box-sizing: border-box; */
        text-align: left;
        width:182px;
        /* height:153px; */
        padding: 12px;
        border:1px solid #E9ECF0;
        background-image: url("http://127.0.0.1:3888/img/home/home_scene8.png");
        margin: 0;
        height: 9.57rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }
    .scene-item-name{
        margin:0;
    }
    .scene-item-desc {
        font-size: 0.78rem;
        color: #71797F;
        margin:0;
    }
    .scene-item-bottom {
        position: absolute;
        bottom: 0.86rem;
        left: 0.86rem;
        z-index: 1;
        font-size: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-right: 25px;
    }
    .scene-item-bottom-label{
        display: inline-flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        border-radius: 2rem;
        background: #FF734C;
        padding: 0 0.3rem;
        color: #fff;
        text-align: center;
        /* margin-right: 2rem; */
    }
    .scene-item.scene-item-bg:nth-child(2n) {
        /* border-left: 0; */
        background-image: url("http://127.0.0.1:3888/img/home/home_scene9.png");
    }
    .scene-item-bottom-text>s {
        color: #B4BABF;
    }
    .scene-item-pange {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(35, 38, 40, 0.8);
        color: #fff;
        text-align: center;
        font-size: 0.86rem;
        padding: 0.28rem 0;
    }
    .product{
        margin: 10px;
    }
    .product-contain{
        margin-bottom: 10px;
        box-shadow: 0 5px 10px 1px rgba(120, 120, 120, 0.3);
    }
    .product-title {
        width:100%;
        font-size: 1.1rem;
        padding: 1.2rem 0;
        text-align: center;
        font-weight: normal;
        margin:0;
    }
    .product-img{
        width:176px !important;
        height:auto !important;
    }
    .product-info{
        padding-left: 20px;
        margin-top: 18px;
    }
    .mui-media-body p{
        text-align: left;
        margin-top: 0;
        font-size: 0.75rem;
        font-weight: 300;
    }
    .product-name{
        font-size: 0.85rem !important;
        font-weight: 500 !important;
    }
    .product-adv{
        font-size: 0.65rem !important;
        font-weight: 500 !important;
    }
    .mui-media-body hr{
        margin:10px 0;
    }
    .product-tips{
        color:#FF734C;
        font-size: 10px !important;
        border:0.8px solid #FF734C;
        border-radius: 10px !important;
        margin-top: 5px !important;
        width:38% !important;
        height:16px;
        line-height: 16px;
        text-align: center !important;
    }
    .product-price{
        padding:0;
    }
    .product-cart{
        width:20px !important;
        height:20px !important;
        margin-top: 15px;
    }
    .mui-ellipsis strong{
        font-size: 1.28571429rem;
        color: #FF734C;
        font-weight: 500;
    }
    .mui-ellipsis s{
        font-size: 0.71428571rem;
        color: #71797F;
        margin-left: 0.42857143rem;
    }
    .to-top{
        width:36px;
        height:36px;
        background:#fff;
        border-radius: 50%;
        text-align: center;
        position: fixed;
        right:20px;
        bottom:80px;
        box-shadow: 0 3px 6px 0 #dee2e5;
        cursor: pointer;
        z-index: 666;
    }
    .to-top img{
        width:20px;
        height:20px;
        margin-top: 8px;
    }
    .mui-grid-view.mui-grid-9{
        padding-top: 3%;
    }
    
</style>