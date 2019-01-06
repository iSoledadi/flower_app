<template>
    <div>
        <!-- 搜索框 -->
        <div app-search>
            <mt-search v-model="value" cancel-text="取消" placeholder="请输入关键词">
            </mt-search>
        </div>
        <!-- 侧边栏 -->
        <div class="mui-content mui-row mui-fullscreen">
            <div class="mui-col-xs-3">
                <div id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
                    <a class="mui-control-item mui-active" href="#content1">热门推荐</a>
                    <a class="mui-control-item" href="#content2">鲜花</a>
                    <a class="mui-control-item" href="#content3">永生花</a>
                    <a class="mui-control-item" href="#content4">蛋糕</a>
                    <a class="mui-control-item" href="#content5">巧克力</a>
                    <a class="mui-control-item" href="#content6">特色礼品</a>
                    <a class="mui-control-item" href="#content7">礼篮</a>
                    <a class="mui-control-item" href="#content8">绿植花卉</a>
                </div>
            </div>
            <div id="segmentedControlContents" class="mui-col-xs-9">
                <!-- <div id="item1" class="mui-control-content mui-active">
                </div>
                <div id="item2" class="mui-control-content">
                </div>
                <div id="item3" class="mui-control-content">
                </div> -->
                <div id="content1" class="mui-slider-item mui-control-content mui-active">
                    <div class="search-poster">
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3888/img/search/top1.jpg" alt="">
                        </a>
                    </div>
                    <div class="mui-scroll-wrapper" data-scroll="2">
                        <div class="mui-scroll">
                            <ul class="mui-table-view">
                                <li class="mui-table-view-cell" v-for="item in list1" :key="item.id">
                                    <img :src="item.img_url" alt="">
                                    {{item.title}}
                                </li>
                            </ul>
                            <!-- <div class="mui-pull-bottom-tips">
                                <div class="mui-pull-bottom-wrapper"><span class="mui-pull-loading">上拉显示更多</span></div>
                            </div> -->
                        </div>
                        <div class="mui-scrollbar mui-scrollbar-vertical"
                            style="-webkit-transition: 500ms; transition: 500ms; opacity: 0;">
                            <div class="mui-scrollbar-indicator"
                                style="-webkit-transition: 0ms; transition: 0ms; display: block; height: 252px; -webkit-transform: translate3d(0px, 233px, 0px) translateZ(0px);"></div>
                        </div>
                    </div>
                </div>
                <div id="content2" class="mui-slider-item mui-control-content">
                    <div class="search-poster">
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3888/img/search/top2.jpg" alt="">
                            <div class="zhezhao">
                                <a href="javascript:;">
                                    浪漫告白·卡罗拉红玫瑰11枝
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="mui-scroll-wrapper scroll-wrapper-many" data-scroll="3">
                        <div class="mui-scroll" style="-webkit-transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                            <ul class="mui-table-view">
                                 <li class="mui-table-view-cell" v-for="item in list2" :key="item.id">
                                    <img :src="item.img_url" alt="">
                                    {{item.title}}
                                </li>
                            </ul>
                            <!-- <div class="mui-pull-bottom-tips">
                                <div class="mui-pull-bottom-wrapper"><span class="mui-pull-loading">上拉显示更多</span></div>
                            </div> -->
                        </div>
                        <div class="mui-scrollbar mui-scrollbar-vertical">
                            <div class="mui-scrollbar-indicator"
                                style="-webkit-transition: 0ms; transition: 0ms; display: block; height: 390px; -webkit-transform: translate3d(0px, 0px, 0px) translateZ(0px);"></div>
                        </div>
                    </div>
                </div>
                <div id="content3" class="mui-slider-item mui-control-content">
                    <div class="search-poster">
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3888/img/search/top3.jpg" alt="">
                            <div class="zhezhao">
                                <a href="javascript:;">
                                    永生花·一生一世
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="mui-scroll-wrapper" data-scroll="4">
                        <div class="mui-scroll" style="-webkit-transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                            <ul class="mui-table-view">
                                 <li class="mui-table-view-cell" v-for="item in list3" :key="item.id">
                                    <img :src="item.img_url" alt="">
                                    {{item.title}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="content4" class="mui-slider-item mui-control-content">
                    <div class="search-poster">
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3888/img/search/top4.jpg" alt="">
                            <div class="zhezhao">
                                <a href="javascript:;">
                                    美味蛋糕·让生活充满甜蜜
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="mui-scroll-wrapper">
                        <div class="mui-scroll" style="-webkit-transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                            <ul class="mui-table-view">
                                 <li class="mui-table-view-cell search4-padding" v-for="item in list4" :key="item.id">
                                    <img :src="item.img_url" alt="">
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div id="content5" class="mui-slider-item mui-control-content">
                    <div class="search-poster">
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3888/img/search/top5.jpg" alt="">
                            <div class="zhezhao">
                                <a href="javascript:;">
                                    CHOLO·玫瑰之恋巧克力礼盒 ￥139
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="mui-scroll-wrapper">
                        <div class="mui-scroll" style="-webkit-transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                            <ul class="mui-table-view">
                                 <li class="mui-table-view-cell" v-for="item in list5" :key="item.id">
                                    <img :src="item.img_url" alt="">
                                    {{item.title}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div id="content6" class="mui-slider-item mui-control-content">
                    <div class="search-poster">
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3888/img/search/top6.jpg" alt="">
                            <div class="zhezhao">
                                <a href="javascript:;">
                                    特色礼品·宝石旋转木马
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="mui-scroll-wrapper">
                        <div class="mui-scroll" style="-webkit-transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                            <ul class="mui-table-view">
                                 <li class="mui-table-view-cell" v-for="item in list6" :key="item.id">
                                    <img :src="item.img_url" alt="">
                                    {{item.title}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div id="content7" class="mui-slider-item mui-control-content">
                   <div class="search-poster">
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3888/img/search/top7.jpg" alt="">
                            <div class="zhezhao">
                                <a href="javascript:;">
                                    温情礼篮·愿祝福常相伴
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="mui-scroll-wrapper">
                        <div class="mui-scroll" style="-webkit-transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                            <ul class="mui-table-view">
                                 <li class="mui-table-view-cell">
                                    <img src="http://127.0.0.1:3888/img/search/list7_1.jpg" alt="">
                                    礼篮
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                 <div id="content8" class="mui-slider-item mui-control-content">
                    <div class="search-poster">
                        <a href="javascript:;">
                            <img src="http://127.0.0.1:3888/img/search/top8.jpg" alt="">
                            <div class="zhezhao">
                                <a href="javascript:;">
                                    绿色花卉·为你的生活加一点颜色
                                </a>
                            </div>
                        </a>
                    </div>
                    <div class="mui-scroll-wrapper">
                        <div class="mui-scroll" style="-webkit-transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                            <ul class="mui-table-view">
                                 <li class="mui-table-view-cell" v-for="item in list8" :key="item.id">
                                    <img :src="item.img_url" alt="">
                                    {{item.title}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { Search } from 'mint-ui';
    // Vue.component(Search.name, Search);
    export default {
        components:{
            "mt-search":Search
        },
        data(){
            return{
                value:"",
                list1:[],
                list2:[],
                list3:[],
                list4:[],
                list5:[],
                list6:[],
                list8:[]
            }
        },
        methods:{
            getTabBar(){
                // var controls = document.getElementById("segmentedControls");
                // var contents = document.getElementById("segmentedControlContents");
                // var html = [];
                // var i = 1,
                //     j = 1,
                //     m = 16, //左侧选项卡数量+1
                //     n = 30; //每个选项卡列表数量+1
                // for (; i < m; i++) {
                //     html.push('<a class="mui-control-item" href="#content' + i + '">选项' + i + '</a>');
                // }
                // controls.innerHTML = html.join('');
                // html = [];
                // for (i = 1; i < m; i++) {
                //     html.push('<div id="content' + i + '" class="mui-control-content"><ul class="mui-table-view">');
                //     for (j = 1; j < n; j++) {
                //         html.push('<li class="mui-table-view-cell">第' + i + '个选项卡子项-' + j + '</li>');
                //     }
                //     html.push('</ul></div>');
                // }
                // contents.innerHTML = html.join('');
                // //默认选中第一个
                // controls.querySelector('.mui-control-item').classList.add('mui-active');
                // contents.querySelector('.mui-control-content').classList.add('mui-active');
                
                var controlsElem = document.getElementById("segmentedControls");
				var contentsElem = document.getElementById("segmentedControlContents");
				var controlListElem = controlsElem.querySelectorAll('.mui-control-item');
				var contentListElem = contentsElem.querySelectorAll('.mui-control-content');
				var controlWrapperElem = controlsElem.parentNode;
				var controlWrapperHeight = controlWrapperElem.offsetHeight;
				var controlMaxScroll = controlWrapperElem.scrollHeight - controlWrapperHeight;//左侧类别最大可滚动高度
				var maxScroll = contentsElem.scrollHeight - contentsElem.offsetHeight;//右侧内容最大可滚动高度
            },
            getlist1(){
                var url="http://127.0.0.1:3888/getsearch1"
                this.axios.get(url).then(result=>{
                    this.list1=result.data;
                })
            },
            getlist2(){
                var url="http://127.0.0.1:3888/getsearch2"
                this.axios.get(url).then(result=>{
                    this.list2=result.data;
                })
            },
            getlist3(){
                var url="http://127.0.0.1:3888/getsearch3"
                this.axios.get(url).then(result=>{
                    this.list3=result.data;
                })
            },
            getlist4(){
                var url="http://127.0.0.1:3888/getsearch4"
                this.axios.get(url).then(result=>{
                    this.list4=result.data;
                })
            },
            getlist5(){
                var url="http://127.0.0.1:3888/getsearch5"
                this.axios.get(url).then(result=>{
                    this.list5=result.data;
                })
            },
            getlist6(){
                var url="http://127.0.0.1:3888/getsearch6"
                this.axios.get(url).then(result=>{
                    this.list6=result.data;
                })
            },
            getlist8(){
                var url="http://127.0.0.1:3888/getsearch8"
                this.axios.get(url).then(result=>{
                    this.list8=result.data;
                })
            }
        },
        created(){
            
        },
        mounted(){
            document.querySelector(".mint-searchbar-core").type="";
            this.getlist1();
            this.getlist2();
            this.getlist3();
            this.getlist4();
            this.getlist5();
            this.getlist6();
            this.getlist8();
            // this.getTabBar();
        }
    }
</script>
<style scoped>
    .mui-fullscreen{
        top:44px;
    }
    .search-poster{
        background:#fff;
        position: relative;
    }
    .search4-padding{
        padding:8px 5px !important;
    }
    .mui-segmented-control .mui-control-item{
        width:100% !important;
    }
    .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active{
        color: #ff734d !important;
        border-left: 3px solid #ff734d;
        background:#fff !important;
        /* border-right: 1px solid #fff; */
    }
    .mui-scroll-wrapper{
        height: 615px;
        background:#fff;
        top:105px !important;
    }
    .scroll-wrapper-many{
        height:750px;
    }
    .zhezhao{
        width:100%;
        height:100%;
        position: absolute;
        background: rgba(0,0,0,0.5);
        top:0;
        left:0;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .zhezhao a{
        color:#fff;
        font-size: 0.8rem;
    }
    .mui-table-view{
        display: flex;
        flex-wrap: wrap;
        border:none !important;
    }
</style>
