<template>
  <div id="app">
    <router-view/>
    <!-- 底部tabbar -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
      <router-link class="mui-tab-item-llb"  to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link @click.native="toCart" class="mui-tab-item-llb" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
				  <span class="mui-badge">
					 0<!-- {{$store.getters.optCartCount}} -->
					</span>
				</span>
				<span class="mui-tab-label">
				购物车 </span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/profile">
				<span class="mui-icon mui-icon-contact">
        </span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    <!-- <tabbar class="vux-tabbar">
      <tabbar-item selected link="/home">
        <img slot="icon" src="http://127.0.0.1:3888/img/home/home_icon_new.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/search">
        <img slot="icon" src="">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar> -->
  </div>
</template>

<script>
// import { Tabbar, TabbarItem } from 'vux'
export default {
  // components: {
  //   Tabbar,
  //   TabbarItem
  // },
  name: 'App',
  data(){
    return{
      
    }
  },
  methods:{
    saveState() {
        sessionStorage.setItem('state', JSON.stringify(this.$store.state));
    },
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true
      });
    },
    toCart(){
      // this.reload();
      // this.$router.push("/cart");
      // console.log(123)
      // location.reload();
      // this.$router.push('/personal_base');
      // this.$router.go(0);
      // this.isCart=true;
      // this.$router.replace({
      //     path:'/toblank'
      // })
    }
  },
  mounted(){
    window.addEventListener('unload', this.saveState)
  },
  
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif,"黑体"; */
  font-family: SourceHanSansCN, -apple-system, Verdana, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.vux-tabbar{
  position: fixed !important;
  left: 0 !important;
  bottom: 0 !important;
}
.mui-bar{
  -webkit-box-shadow: none !important;
}
.mui-tab-item-llb.router-link-exact-active.router-link-active{
  color: #ff734d !important;
}


.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #ff734d;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon:active
{
    background: none;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab{
  bottom:-3px !important;
}
/* .mui-tab-item-llb.mui-plus-hidden, .mui-tab-item-llb.mui-wechat-hidden
{
    display: table-cell !important;
}
.mui-plus .mui-tab-item-llb.mui-plus-visible, .mui-wechat .mui-tab-item-llb.mui-wechat-visible
{
    display: table-cell !important;
} */

</style>
