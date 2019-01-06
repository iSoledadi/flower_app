<template>
    <div class="app-cart">
        <mt-header fixed title="购物车"></mt-header>
        <div class="cart-top-none">
            <img src="http://127.0.0.1:3888/img/cart/cart_none.png" alt="">
            <p>别让你的心意空空如也...</p>
            <a class="go-shop" href="javascript:;">去挑选礼物</a>
        </div>
        <!-- 猜你喜欢 -->
        <!-- <div class="cart-bottom">
            <div class="modetitle">为你推荐</div>
            <scroller lock-y scrollbar-x>
                <div class="box1">
                    <div class="box1-item" v-for="item in list" :key="item.id">
                        <img :src="item.img_url" alt="">
                        <div class="intro-title">{{item.title}}</div>
                        <div class="intro-price">￥{{item.price}}</div>
                    </div>
                </div>
            </scroller>
        </div> -->
        <div class="modetitle">为你推荐</div>
        <div class="swiper-container my-cart-bottom">
            <div class="swiper-wrapper box1">
                <div class="swiper-slide box1-item" v-for="item in list" :key="item.id">
                    <img :src="item.img_url" alt="">
                    <div class="intro-title">{{item.title}}</div>
                    <div class="intro-price">￥{{item.price}}</div>
                </div>
            </div>
            <!-- <div class="swiper-scrollbar">
                <div class="swiper-scrollbar-drag"></div>
            </div> -->
        </div>
    </div>
</template>
<script>
    // import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux';
    import Swiper from "swiper";
    export default {
        // components: {
        //     Scroller,
        //     Divider,
        //     Spinner,
        //     XButton,
        //     Group,
        //     Cell,
        //     LoadMore
        // },
        data(){
            return{
                list:[]
            }
        },
        methods:{
            getIntro(){
                var url="http://127.0.0.1:3888/getintro";
                this.axios.get(url).then(result=>{
                    this.list=result.data;
                })
            }
        },
        created(){
            // this.getIntro();
        },
        mounted(){
            this.getIntro();
            var swiper = new Swiper('.swiper-container', {
                width: 200,
                slidesPerView: 3.3,
                spaceBetween: 25,
                freeMode: true,
                observer:true,
                observeParents:true
            });
        },
        watch:{
        }
    }
</script>
<style scoped>
    /* .app-cart{
        touch-action: none;
    } */
    .mint-header{
        background:#fafafa;
        color:#000;
        border-bottom: 1px solid #e8e8ed;
    }
    .cart-top-none{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
        background:#fff;
        padding-bottom: 20px;
    }
    .go-shop{
        display:block;
        width:112px;
        height:34px;
        padding:0 20px;
        border:1px solid #ff734d;
        border-radius: 3px;
        color:#ff734d;
        line-height: 32px;
    }
    .box1 {
        height: 119px;
        position: relative;
        width: 555px;
        display: flex;
        justify-content: space-between;
        /* padding-left: 30px; */
        background:#fff;
    }
    .box1-item {
        width: 84px !important;
        height: 119px;
        background-color: #fff;
        margin-right: 0 !important;
        /* display:inline-block; */
        /* margin-left: 15px; */
        /* float: left; */
        /* text-align: center; */
        /* line-height: 100px; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .box1-item img{
        width:64px;
        height:70px;
    }
    .intro-title{
        font-size: 10px;
        line-height: 18px;
    }
    .intro-price{
        font-size: 12px;
        line-height: 18px;
    }
    .cart-bottom{
        background:#fff;
        margin-top: 10px;
        padding-top: 10px;
        height:400px;
    }
    .modetitle{
        background: #fff;
    }
    .my-cart-bottom{
        width:100%;
        height:300px;
        background:#fff;
    }
</style>
