<template>
    <div class="app-good">
        <header id="header" class="mui-bar mui-bar-nav">
			<h1 class="mui-title">鲜花</h1>
		    <a @click="toBack" class="mui-icon mui-icon-left-nav mui-pull-left"></a>
        </header>
        <div class="good-contain">
            <tab bar-active-color="#ff734d" active-color='#ff734d'>
                <tab-item selected @on-item-click="onItemClick">综合</tab-item>
                <tab-item @on-item-click="onItemClick">销量</tab-item>
                <tab-item @on-item-click="onItemClick">
                    价格
                    <span v-show="isSaleDown" class="mui-icon mui-icon-arrowthindown"></span>
                    <span v-show="isSaleUp" class="mui-icon mui-icon-arrowthinup"></span>
                </tab-item>
                <tab-item @on-item-click="onItemClick">新品</tab-item>
            </tab>
            <!-- 筛选 -->
            <div class="good-top">
                <div>送女友</div>
                <div>送男友</div>
                <div>送朋友</div>
                <div>送长辈</div>
                <div @click="showCanvasWrap">
                    <span v-show="toLeft" class="mui-icon mui-icon-arrowleft icon-18"></span>
                    <span v-show="toRight" class="mui-icon mui-icon-arrowright icon-18"></span>
                    筛选
                 </div>
            </div>
             <!-- 主界面具体展示内容 -->
            <div class="good-content pl-2 pr-2">
                <div @click="toDetail" class="good-card" v-for="item in goodlist" :key="item.id">
                    <div class="card-top">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="card-content d-flex justify-content-between flex-column">
                        <span v-if="item.tip" class="good-tip">{{item.tip}}</span>
                        <p class="good-title m-0">{{item.title}}</p>
                        <p class="good-price m-0 pt-2">¥{{item.price}}</p>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
</template>
<script>
    import { Tab, TabItem } from 'vux'
    export default {
       components: {
            Tab,
            TabItem
        },
       data(){
           return{
               toLeft:true,
               toRight:false,
               goodlist:[],
               isSaleUp:false,
               isSaleDown:true
           }
       } ,
       methods:{
           showCanvasWrap(){
                this.toLeft=!this.toLeft;
                this.toRight=!this.toRight;
           },
           showgoodList(){
               var url="http://127.0.0.1:3888/getGoodList?gid=0";
                this.axios.get(url).then(result=>{
                    this.goodlist=result.data;
                })
           },
           onItemClick(e){
                if(e==2){
                    this.isSaleUp=!this.isSaleUp;
                    this.isSaleDown=!this.isSaleDown;
                    if(this.isSaleDown==true){
                        e=4;
                    }
                }
                // console.log(e);
                var url="http://127.0.0.1:3888/getGoodList?gid="+e;
                this.axios.get(url).then(result=>{
                    this.goodlist=result.data;
                })
           },
           toDetail(){
                this.$router.push("/goodinfo")
           },
           toBack(){
                this.$router.go(-1);
           }
       },
       created(){
       },
       mounted(){
        //    document.getElementById("backdrop").addEventListener("tap",function(){
        //        mui('.mui-off-canvas-wrap').offCanvas('close');
        //    })
            this.showgoodList();
       }
    }
			
</script>
<style scoped>
    .app-good{
        width:100%;
        height:100%;
        /* background: #fff; */
        position: relative;
        touch-action: none;
    }
    .good-contain{
        width:100%;
        height:100%;
        /* background:#fff; */
        margin-top: 40px;
        position: relative;
    }
    .good-top{
        width:100%;
        height:48px;
        display: flex;
        justify-content: space-between;
        padding:0 25px;
        line-height: 48px;
        font-size: 0.8rem;
        background:#fff;
        /* margin-top: 40px; */
    }
    .good-top span{
        font-size: 0.8rem;
    }
    .card-top{
        width:100%;
        height:191px;
        /* border-bottom: 2px solid #f00; */
    }
    .card-top img{
        width:100%;
        height:100%;
    }
    .card-content{
        min-height: 81px;
        padding-top: 10px;
        border-top: 1px solid #c8c7cc;
    }
    .good-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 70px;
    }
    .good-card{
        position: relative;
        width:49%;
        /* min-height: 175.9px; */
        margin:10px 0 0 0;
        background:#fff;
        min-height:290px;
        text-align: left;
        padding:10px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
        border-radius: 8px;
    }
    .mui-card-content-inner{
        text-align: left;
    }
    .good-tip{
        /* border-radius: 10rem; */
        border: 1px solid #FF734C;
        color: #FF734C;
        font-size: 12px;
        /* padding: 0 0.28rem; */
        /* width:60px; */
            width: 36%;
        text-align: center;
        font-weight: 100;
        height: 16px;
        line-height: 16px;
        border-radius: 10px;
    }
    .good-title{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        /* white-space: nowrap; */
        -o-text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        font-size: 0.6rem;
        font-weight: 300;
    }
    /* .good-title:after {
        content: "...";
        float: right;
        width: 25px;
        padding-left: 5px;
        color: #000;
    } */
    .mui-card-content-inner,.mui-card-header, .mui-card-footer{
        padding:10px;
    }
    .good-price{
        color: #FF734C !important;
        font-size: 1rem;
    }
    /* .filter-item-price {
        position: relative;
        top: 0.14285714rem;
        margin-left: 0.28571429rem;
        width:8px;
        height:8px;
    }
    .filter-item-price::before {
        border-bottom-color: #f00;
        content: "";
        display: block;
        position: absolute;
        top: -1px;
        left: 0;
        width: 0;
        height: 0;
        font-size: 0;
        border: 0.28rem solid transparent;
    }
    .filter-item-price::after {
        border-top-color: #f00;
        top: 0.57rem;
        content: "";
        display: block;
        position: absolute;
        top: -1px;
        left: 0;
        width: 0;
        height: 0;
        font-size: 0;
        border: 0.28571429rem solid transparent;
    } */
    .good-contain,.mui-inner-wrap{
        height:700px;
    }
    .toAside{
        visibility: visible !important; 
        transform: translate3d(0px, 0px, 0px) !important;
    }
    .mui-icon.mui-icon-arrowthindown,.mui-icon.mui-icon-arrowthinup{
        font-size: 20px;
    }
</style>
