<template>
    <div class="app-detail">
        头部
        <header class="mui-bar mui-bar-nav my-nav">
            <a @click="toBack" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
            <img class="nav-logo" src="http://127.0.0.1:3888/img/nav/hualogo2.png" alt="">
        </header>
        <!-- 轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-4396px, 0px, 0px);">
                <div class="swiper-slide">
                    <img src="http://127.0.0.1:3888/img/detail/banner1.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="http://127.0.0.1:3888/img/detail/banner2.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="http://127.0.0.1:3888/img/detail/banner3.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="http://127.0.0.1:3888/img/detail/banner4.jpg" alt="">
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-fraction my-indirector">
                <div class="detial-swipe-num">
                    <span class="swiper-pagination-current"></span> / 
                    <span class="swiper-pagination-total">4</span>
                </div>
            </div>
        </div>
        <!-- 商品价格 -->
        <div class="product-title bg-white">
            <h4 class="w-75 text-left">一往情深-精品玫瑰礼盒:19枝红玫瑰，勿忘我适量 <span class="text-orange">经典爆款，年销售冠军！</span></h4>
            <span @click="islike" v-show="noLike" class="mui-icon-extra mui-icon-extra-heart"></span>
            <span @click="islike" v-show="toLike" class="mui-icon-extra mui-icon-extra-heart-filled text-orange"></span>
        </div>
        <div class="product-title-price d-flex justify-content-between bg-white">
            <h4 class="m-0 text-orange fweight-900">¥245 <s class="text-gray fweight-300">¥315</s></h4>
            <span>已售7.50万件</span>
        </div>

        <!-- 商品信息 -->
        <div class="detail-flower-word bg-white d-flex justify-content-between pt-3">
            <div>花语</div>
            <div class="word-right">你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</div>
        </div>
        <div class="detail-flower-word bg-white d-flex justify-content-between">
            <div>材料</div>
            <div class="word-right">高档礼盒装鲜花:19枝红玫瑰，勿忘我适量</div>
        </div>
        <div class="detail-flower-word bg-white d-flex justify-content-between">
            <div>配送</div>
            <div class="word-right word-heng" :class="toLine1?'line1':''">限送100多个主要城市的市区及近郊：北京,上海,深圳,广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州,清远,荆州,莆田,汉中,洛阳,湛江,九江,鞍山,大庆,秦皇岛,张家口,桂林,吉林,淄博,蚌埠,柳州,遵义,邢台,宜春,漳州,三亚,宜宾,东营,临沂,德州,开封,大同,龙岩,齐齐哈尔,连云港,新乡,黄冈,焦作,十堰,驻马店,信阳,牡丹江,黄石,宝鸡,丹东,阜阳,北海,聊城,锦州,许昌,内江,萍乡,安庆,承德,商丘,盘锦,乐山,沧州,河源,营口,平顶山,临汾,韶关,日照,新余,晋城,松原,淮北,淮南,晋中,潮州,滨州,自贡,六安,株州,濮阳,常熟,晋江,顺德,江阴,吴江,昆山,义乌,惠阳,银川,温江,燕郊,新都,涿州,南沙,宜兴,即墨,海安县,都江堰,增城,仙桃,菏泽</div>
            <span v-show="downicon" @click="removeLine" class="mui-icon mui-icon-arrowdown icon-18"></span>
            <span v-show="upicon" @click="addLine" class="mui-icon mui-icon-arrowup icon-18"></span>
        </div>
        <div class="detail-flower-word bg-white d-flex justify-content-between mb-2">
            <div>附送</div>
            <div class="word-right word-bottom">下单填写留言，即免费赠送精美贺卡！</div>
        </div>
        <div @click="isShowFlower" class="pt-3 detail-flower-word bg-white d-flex justify-content-between">
            <div>已选</div>
            <div class="word-right word-heng">{{selectName}}</div>
            <span class="mui-icon mui-icon-more icon-18"></span>
        </div>
        <div @click="selectAddress" class="detail-flower-word bg-white d-flex justify-content-between mb-2">
            <div>配送至</div>
            <div class="word-right word-bottom word-heng">
                <span class="mui-icon mui-icon-location icon-18"></span>
                {{address}}
            </div>
            <span class="mui-icon mui-icon-more icon-18"></span>
        </div>

        <!-- 选择花朵样式 -->
        <div v-transfer-dom>
            <popup v-model="showFlower">
                <div class="popup0">
                    <group>
                        <span @click="closeSelect" class="mui-icon mui-icon-closeempty close-button"></span>
                        <div class="good-select-top d-flex vertical-center">
                            <img :src="selectImg" alt="">
                            <div class="ml-3">
                                <h4 class="text-orange">¥{{selectPrice}}</h4>
                                <span class="font-14">
                                    <span class="text-gray">已选 </span>
                                    {{selectName}}
                                </span>
                            </div>
                        </div>
                        <div class="font-14 text-gray mt-3">选择</div>
                        <div class="mt-3 d-flex vertical-center flex-wrap">
                            <div v-for="(item,index) in btnList" :key="index" @click="toSelect(index)" class="select-button">
                                <div class="w-100 h-100 detail-select-button" :class="index==isSelect?'orange-button':'white-button'">
                                    {{item.text}}
                                </div>
                            </div>
                        </div>
                    </group>
                </div>
            </popup>
        </div>

        <!-- 选择地址 -->
        <div v-transfer-dom>
            <popup v-model="show6">
                <div class="popup1">
                    <group>
                        <x-address :title="title6" v-model="value6" :list="addressData" placeholder="请选择地址" inline-desc="配送地址" :popup-style="{zIndex: 502}"  @on-shadow-change="onShadowChange"></x-address>
                    </group>
                </div>
            </popup>
        </div>

        <!-- 评论区 -->
        <div class="detail-comment-top d-flex justify-content-between bg-white p-17">
            <h4>订单评价</h4>
            <div class="text-gray">
                最近已有5674条评价
                <span class="mui-icon mui-icon-arrowright icon-18"></span>
            </div>
        </div>
        <!-- 评论区 -->
        <div class="comment-content bg-white" v-for="item in commentList" :key="item.id">
            <div class="comment-user d-flex justify-content-between vertical-center p-17">
                <div class="user-logo">
                    <img :src="item.user_icon" alt="">
                    <span class="user-name">{{item.uname}}</span>
                </div>
                <div class="star-father">
                    <!-- <div class="text-star">★ ★ ★ ★ ★</div> -->
                    <div class="text-star2" :style="'width:'+item.score+'%'">★ ★ ★ ★ ★</div>
                </div>
            </div>
            <!-- 评论内容 -->
            <div class="pt-17 text-left">{{item.comment}}</div>
            <div class="text-left bg-white pt-17">
                <img class="comment-img mr-2" v-show="item.img_url1" :src="item.img_url1" alt="">
                <img class="comment-img mr-2" v-show="item.img_url2" :src="item.img_url2" alt="">
                <img class="comment-img mr-2" v-show="item.img_url3" :src="item.img_url3" alt="">
                <img class="comment-img mr-2" v-show="item.img_url4" :src="item.img_url4" alt="">
            </div>
            <p class="mt-0 text-gray comment-area font-12 text-left pt-17">
                <span class="mui-icon mui-icon-location icon-18"></span>
                {{item.address}}
            </p>
        </div>
        <div class="comment-more bg-white">
            <a class="more-button" href="javascript:;">查看更多评价</a>
        </div>

        <!-- 选择我们 九宫格 -->
        <div class="detail-choose-top bg-white mt-2">为什么选择我们</div>
        <div class="detail-choose-contain">
            <ul class="mui-table-view mui-grid-view mui-grid-9 bg-white">
                <li v-for="item in list2" :key="item.id" class="mui-table-view-cell mui-media mui-col-xs-4">
                    <a href="javascript:;">
                        <img :src="item.img_url"/>
                        <div class="mui-media-body">{{item.title}}</div>
                    </a>
                </li>
            </ul>
        </div>
        <!-- 图文详情 -->
        <h4 class="text-left bg-white p-17 mb-0">图文详情</h4>
        <div class="detail-picture" v-for="item in gridlist" :key="item.id+'-label'">
            <img :src="item.img_url" alt="">
        </div>

        <!-- 带标题的图文 -->
        <div class="detail-titleAndPic bg-white" v-for="item in list4" :key="item.id+'-pic'">
            <h4 class="p-17 detail-pTitle m-0">{{item.title}}</h4>
            <div class="pt-17 text-left font-14">{{item.info}}</div>
            <div class="pt-17">
                <img :src="item.img_url" alt="">
            </div>
        </div>

        <!-- 底部购买tabbar -->
        <div class="detail-bottom d-flex justify-content-between vertical-center bg-white">
            <div class="h-100 bottom-icon d-flex">
                <div class="w-50 d-flex flex-column justify-content-center vertical-center">
                    <span class="mui-icon-extra mui-icon-extra-custom"></span>
                    <span class="font-12">客服</span>
                </div>
                <div @click="toCart" class="w-50 d-flex flex-column justify-content-center vertical-center cart-icon">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                        <span class="mui-badge">
                            0<!-- {{$store.getters.optCartCount}} -->
                        </span>
                    </span>
                    <span class="font-12">购物车</span>
                </div>
            </div>
            <div class="h-100 bottom-button d-flex">
                <div class="w-50 d-flex justify-content-center vertical-center cart-button text-white">购物车</div>
                <div class="w-50 d-flex justify-content-center vertical-center buy-button text-white">立即购买</div>
            </div>
        </div>

        <div style="width:100%;height:80px"></div>
    </div>
</template>
<script>
    import Swiper from "swiper";
    import {Toast} from "mint-ui";
    import { TransferDom, Popup, Group, XSwitch, XAddress, ChinaAddressData } from 'vux';
    export default {
        directives: {
            TransferDom
        },
        components: {
            Popup,
            Group,
            XSwitch,
            XAddress
        },
        data(){
            return{
                toLine1:true,
                downicon:true,
                upicon:false,
                data42: 3.5,
                commentList:[],
                list2:[],
                gridlist:[],
                list4:[],
                noLike:true,
                toLike:false,
                showFlower:false,
                btnList:[
                    {text:"一往情深"},
                    {text:"你最珍贵"},
                    {text:"暖暖"},
                    {text:"一如初见"},
                    {text:"嫣然一笑"}
                ],
                isSelect:0,
                selectImg:"http://127.0.0.1:3888/img/detail/small_select_1.jpg",
                selectName:"一往情深",
                selectPrice:245,
                show6: false,
                title6: '花礼网',
                value6: [],
                addressData: ChinaAddressData,
                address:"请选择配送地区"
            }
        },
        methods:{
            onShadowChange(ids,names) {
                // console.log(ids,names) ;  
                this.address =names[0]+' '+names[1]+' '+names[2];
            },
            selectAddress(){
                this.show6=!this.show6;
            },
            toSelect(index){
               this.isSelect=index;
               if(this.isSelect==0){
                    this.selectImg="http://127.0.0.1:3888/img/detail/small_select_1.jpg",
                    this.selectName="一往情深",
                    this.selectPrice=245
               };
               if(this.isSelect==1){
                    this.selectImg="http://127.0.0.1:3888/img/detail/small_select_2.jpg",
                    this.selectName="你最珍贵",
                    this.selectPrice=255
               };
               if(this.isSelect==2){
                    this.selectImg="http://127.0.0.1:3888/img/detail/small_select_3.jpg",
                    this.selectName="暖暖",
                    this.selectPrice=249
               };
               if(this.isSelect==3){
                    this.selectImg="http://127.0.0.1:3888/img/detail/small_select_4.jpg",
                    this.selectName="一如初见",
                    this.selectPrice=278
               };
               if(this.isSelect==4){
                    this.selectImg="http://127.0.0.1:3888/img/detail/small_select_5.jpg",
                    this.selectName="嫣然一笑",
                    this.selectPrice=278
               }
           },
           isShowFlower(){
               this.showFlower=!this.showFlower;
           },
           closeSelect(){
               this.showFlower=!this.showFlower;
           },
           toCart(){
               this.$router.push("/cart");
           },
           islike(){
               this.noLike=!this.noLike;
               this.toLike=!this.toLike;
               if(this.noLike==true){
                    var instance=Toast("取消收藏");
                    setTimeout(() => {
                        instance.close();
                    }, 1000);
               }else{
                    var instance=Toast("收藏成功");
                    setTimeout(() => {
                        instance.close();
                    }, 1000);
               }
           },
           getDetailTitlePic(){
               var url="http://127.0.0.1:3888/getDetailTitlePic";
               this.axios.get(url).then(result=>{
                   this.list4=result.data;
               })
           },
           getDetailPic(){
               var url="http://127.0.0.1:3888/getGrid3";
               this.axios.get(url).then(result=>{
                   this.gridlist=result.data;
               })
           }, 
            getDetailGrid(){
                var url="http://127.0.0.1:3888/getDetailGrid";
                this.axios.get(url).then(result=>{
                    this.list2=result.data;
                })
            },
            getComment(){
                var url="http://127.0.0.1:3888/getComment";
                this.axios.get(url).then(result=>{
                    this.commentList=result.data
                })
            },
            toBack(){
                this.$router.go(-1);
            },
            removeLine(){
                this.toLine1=false;
                this.downicon=false;
                this.upicon=true;
            },
            addLine(){
                this.toLine1=true;
                this.downicon=true;
                this.upicon=false;
            },
        },
        created(){
            
        },
        mounted(){
            var mySwiper = new Swiper('.swiper-container', {
                // loop:true,
                 observer:true,//修改swiper自己或子元素时，自动初始化swiper
               observeParents:true,//修改swiper的父元素时，自动初始化swiper
                pagination: {
        　　　　　　 el: '.swiper-pagination',
                    type: 'fraction'
                },
                onSlideChangeEnd: function(swiper){ 
                　　　swiper.update();  
                // 　　　mySwiper.startAutoplay();
                　　   mySwiper.reLoop();  
                }
            });
            this.getComment();
            this.getDetailGrid();
            this.getDetailPic();
            this.getDetailTitlePic();
        },
        
    }
</script>
<style scoped>
    .app-detail{
        width:100%;
        height:100%;
        /* background: #fff; */
    }
    .my-nav{
        border-bottom: 1px solid #eee;
    }
    .nav-logo{
        width: 150px;
        height: 20px;
        margin-top: 12px;
        vertical-align: top;
    }
    .swiper-container{
        margin-top: 22px;
    }
    .swipe-bottom-num{
        position: fixed;
        right:20px;
        top:450px;
    }
    .my-indirector{
        width:12%;
        left:auto;
        right:3%;
        background:rgba(233,233,233,.9);
        border-radius: 6px;
    }
    .detial-swipe-num{
        width:30px;
        background:#00aeff;
    }
    .product-title{
        width:100%;
        height:64px;
        margin-top: 10px;
        padding:12px 17px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .product-title h4{
        font-size: 14px;
        line-height: 20px;
    }
    .product-title-price{
        padding:0 17px 12px 17px;
        margin-bottom: 10px;
    }
    .product-title-price s{
        font-size: 14px;
    }
    .detail-flower-word{
        font-size: 12px;
        padding:0 17px 12px 17px;
    }
    .word-right{
        width:87%;
        text-align: left;
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
    }
    .word-bottom{
        border:none;
    }
    .line1{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        height:26px;
    }
    .word-heng{
        width:76.5%;
    }
    .detail-comment-top{
        align-items: center;
    }
    .comment-content{
        border-bottom: 1px solid #ccc;
    }
    .user-logo img{
        width:22px;
        height:22px;
        border-radius: 50%;
        vertical-align: top;
    }
    .star-father{
        width:73px;
        position: relative;
        height:20px;
    }
    .text-star{
        color:#e2e2e2;
        position: relative;
        height:16px;
        font-size: 11.5px;
    }
    .text-star2{
        color:#FF734C;
        position: absolute;
        overflow: hidden;
        top:0;
        left:0;
        height:16px;
        font-size: 11.5px;
    }
    .comment-pic{
        width:100%;
        height:85px;
    }
    .comment-img{
        width:85px;
        height:85px;
    }
    .testColor{
        width:50px;
        height:50px;
    }
    .comment-more{
        padding:16px 17px 25px 8px;
    }
    .more-button{
        border:1px solid #000;
        width:100px;
        border-radius: 3px;
        font-size: 14px;
        padding:5px;
    }
    .detail-choose-top{
        padding:25px 17px 15px 17px;
        width:100%;
        font-size: 17px;
    }
    .mui-media-body{
        font-size: 12px !important;
    }
    .mui-table-view-cell img{
        width:64px !important;
        height:64px !important;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        padding:11px 6px !important;
    }
    .detail-pTitle{
        font-weight: 900;
    }
    .detail-bottom{
        width:100%;
        height:52px;
        z-index: 9999;
        position: fixed;
        left:0;
        bottom:0;
    }
    .bottom-icon{
        width:40%;
        border-top: 1px solid #E9ECF0;
    }
    .cart-icon{
        position: relative;
    }
    .cart-icon::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 0;
        border-left: 1px solid #E9ECF0;
    }
    .bottom-button{
        width:60%;
    }
    .cart-button{
        background:#3d4d42;
    }
    .buy-button{
        background:#ff734c;
    }
    .mui-icon .mui-badge{
        left:65%;
    }
    .vux-popup-dialog{
        bottom:52px;
    }
    .close-button{
        position: absolute;
        top:-6px;
        right:-6px;
        font-size: 30px;
        font-weight: 400;
    }
    .popup0 {
        padding-bottom:15px;
        min-height:200px;
        padding-left: 16px;
        padding-right: 16px;
        background:#fff;
    }
    .good-select-top img{
        width:80px;
        height:87px;
    }
    .vux-popup-dialog{
        background:#fff;
    }
    .weui-cells:before,.weui-cells:after{
        border-bottom: none !important;
    }
    .select-button{
        width:33.33%;
        height:46px;
        padding:0 17px 14px 17px;
    }
    .detail-select-button{
        text-align: center;
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 14px;
        border-radius: 3px;
    }
    .white-button{
        border: 1px solid #fff;
        background:#eee;
    }
    .orange-button{
        border: 1px solid #FF734C;
        color:#FF734C;
        background:#fff;
    }
    .popup1 {
        width:100%;
        height:100%;
    }
    
</style>