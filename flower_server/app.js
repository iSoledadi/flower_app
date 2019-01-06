const express=require("express");
const pool=require("./pool");
const bodyParser=require("body-parser");

var app=express();
const cors=require("cors");
app.use(cors({
    origin:["http://127.0.0.1:8080",
    "http://localhost:8080"
    ],
    credentials:true
}))

app.listen(3888);
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({
    extended:false
}))

// 查找轮播图
app.get("/banner",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/banner/banner1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3888/img/banner/banner2.jpg"},
        {id:3,img_url:"http://127.0.0.1:3888/img/banner/banner3.jpg"}
    ];
    res.send(obj);
})

//查找商品列表
app.get("/getproduct",(req,res)=>{
    var obj=[
        {id:1,title:"爱情鲜花推荐",img_url:"http://127.0.0.1:3888/img/home/home_product1.jpg",name:"一往情深",introduce:"精品玫瑰礼盒:19枝红玫瑰，勿忘我适量",tip:"元旦迎新",adv:"经典爆款，年销售冠军！",newPrice:245,oldPrice:315,sale:"已销售7.5万件"},
        {id:2,img_url:"http://127.0.0.1:3888/img/home/home_product2.jpg",name:"不变的承诺",introduce:"99枝红玫瑰",tip:"精品优选",adv:"经典99枝，鼎力推荐！",newPrice:520,oldPrice:599,sale:"已销售1.6万件"},
        {id:3,img_url:"http://127.0.0.1:3888/img/home/home_product3.jpg",name:"一心一意",introduce:"玫瑰11枝，粉色勿忘我0.3扎",tip:"畅销爆款",adv:"经典款式 精选爆款",newPrice:139,oldPrice:189,sale:"已销售7.5万件"}
    ];
    res.send(obj);
})

// 搜索商品列表一
app.get("/getsearch1",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/search/list1_1.jpg",title:"鲜花"},
        {id:2,img_url:"http://127.0.0.1:3888/img/search/list1_2.jpg",title:"蛋糕"},
        {id:3,img_url:"http://127.0.0.1:3888/img/search/list1_3.jpg",title:"永生花"},
        {id:4,img_url:"http://127.0.0.1:3888/img/search/list1_4.jpg",title:"特色礼品"},
        {id:5,img_url:"http://127.0.0.1:3888/img/search/list1_5.jpg",title:"设计师款"},
        {id:6,img_url:"http://127.0.0.1:3888/img/search/list1_6.jpg",title:"商务鲜花"},
        {id:7,img_url:"http://127.0.0.1:3888/img/search/list1_7.jpg",title:"巧克力"},
        {id:8,img_url:"http://127.0.0.1:3888/img/search/list1_8.jpg",title:"礼篮"},
        {id:9,img_url:"http://127.0.0.1:3888/img/search/list1_9.jpg",title:"绿色花卉"},
        {id:10,img_url:"http://127.0.0.1:3888/img/search/list1_10.jpg",title:"企业团购"}
    ];
    res.send(obj);
})
app.get("/getsearch2",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/search/list2_1.jpg",title:"全部"},
        {id:2,img_url:"http://127.0.0.1:3888/img/search/list2_2.jpg",title:"爱情鲜花"},
        {id:3,img_url:"http://127.0.0.1:3888/img/search/list2_3.jpg",title:"老师长辈"},
        {id:4,img_url:"http://127.0.0.1:3888/img/search/list2_4.jpg",title:"友情鲜花"},
        {id:5,img_url:"http://127.0.0.1:3888/img/search/list2_5.jpg",title:"生日鲜花"},
        {id:6,img_url:"http://127.0.0.1:3888/img/search/list2_6.jpg",title:"探病慰问"},
        {id:7,img_url:"http://127.0.0.1:3888/img/search/list2_7.jpg",title:"商务鲜花"},
        {id:8,img_url:"http://127.0.0.1:3888/img/search/list2_8.jpg",title:"祝福庆贺"},
        {id:9,img_url:"http://127.0.0.1:3888/img/search/list2_9.jpg",title:"婚庆鲜花"},
        {id:10,img_url:"http://127.0.0.1:3888/img/search/list2_10.jpg",title:"道歉鲜花"},
        {id:11,img_url:"http://127.0.0.1:3888/img/search/list2_11.jpg",title:"哀思鲜花"},
        {id:12,img_url:"http://127.0.0.1:3888/img/search/list2_12.jpg",title:"港澳台鲜花"},
        {id:13,img_url:"http://127.0.0.1:3888/img/search/list2_13.jpg",title:"传情花束"},
        {id:14,img_url:"http://127.0.0.1:3888/img/search/list2_14.jpg",title:"创意花盒"},
        {id:15,img_url:"http://127.0.0.1:3888/img/search/list2_15.jpg",title:"瓶插花"},
        {id:16,img_url:"http://127.0.0.1:3888/img/search/list2_16.jpg",title:"精致花篮"},
        {id:17,img_url:"http://127.0.0.1:3888/img/search/list2_17.jpg",title:"开业花篮"},
        {id:18,img_url:"http://127.0.0.1:3888/img/search/list2_18.jpg",title:"设计师款"}
    ];
    res.send(obj);
})
app.get("/getsearch3",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/search/list2_1.jpg",title:"全部"},
        {id:2,img_url:"http://127.0.0.1:3888/img/search/list3_2.jpg",title:"永生瓶花"},
        {id:3,img_url:"http://127.0.0.1:3888/img/search/list3_3.jpg",title:"经典花盒"},
        {id:4,img_url:"http://127.0.0.1:3888/img/search/list3_4.jpg",title:"特色永生花"},
        {id:5,img_url:"http://127.0.0.1:3888/img/search/list3_5.jpg",title:"巨型玫瑰"}
    ];
    res.send(obj);
})
app.get("/getsearch4",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/search/list4_1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3888/img/search/list4_2.jpg"},
        {id:3,img_url:"http://127.0.0.1:3888/img/search/list4_3.jpg"},
        {id:4,img_url:"http://127.0.0.1:3888/img/search/list4_4.jpg"},
        {id:5,img_url:"http://127.0.0.1:3888/img/search/list4_5.jpg"},
        {id:6,img_url:"http://127.0.0.1:3888/img/search/list4_6.jpg"},
        {id:7,img_url:"http://127.0.0.1:3888/img/search/list4_7.jpg"},
        {id:8,img_url:"http://127.0.0.1:3888/img/search/list4_8.jpg"},
        {id:9,img_url:"http://127.0.0.1:3888/img/search/list4_9.jpg"},
        {id:10,img_url:"http://127.0.0.1:3888/img/search/list4_10.jpg"},
        {id:11,img_url:"http://127.0.0.1:3888/img/search/list4_11.jpg"},
        {id:12,img_url:"http://127.0.0.1:3888/img/search/list4_12.jpg"}
    ];
    res.send(obj);
})
app.get("/getsearch5",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/search/list2_1.jpg",title:"全部"},
        {id:2,img_url:"http://127.0.0.1:3888/img/search/list5_2.jpg",title:"进口巧克力"},
        {id:3,img_url:"http://127.0.0.1:3888/img/search/list5_3.jpg",title:"巧罗巧克力"},
        {id:4,img_url:"http://127.0.0.1:3888/img/search/list5_4.jpg",title:"巧蔻巧克力"}
    ];
    res.send(obj);
})
app.get("/getsearch6",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/search/list2_1.jpg",title:"全部"},
        {id:2,img_url:"http://127.0.0.1:3888/img/search/list6_2.jpg",title:"音乐盒"},
        {id:3,img_url:"http://127.0.0.1:3888/img/search/list6_3.jpg",title:"金箔花"},
        {id:4,img_url:"http://127.0.0.1:3888/img/search/list6_4.jpg",title:"水晶内雕"},
        {id:5,img_url:"http://127.0.0.1:3888/img/search/list6_5.jpg",title:"首饰/美妆"},
        {id:6,img_url:"http://127.0.0.1:3888/img/search/list6_6.jpg",title:"巧克力"},
        {id:7,img_url:"http://127.0.0.1:3888/img/search/list6_7.jpg",title:"公仔/睡枕"},
        {id:8,img_url:"http://127.0.0.1:3888/img/search/list6_8.jpg",title:"摆件/其他"},
        {id:9,img_url:"http://127.0.0.1:3888/img/search/list6_9.jpg",title:"礼品卡"}
    ];
    res.send(obj);
})
app.get("/getsearch8",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/search/list2_1.jpg",title:"全部"},
        {id:2,img_url:"http://127.0.0.1:3888/img/search/list8_2.jpg",title:"多肉盆栽"},
        {id:3,img_url:"http://127.0.0.1:3888/img/search/list8_3.jpg",title:"绿色植物"},
        {id:4,img_url:"http://127.0.0.1:3888/img/search/list8_4.jpg",title:"盆栽花卉"}
    ];
    res.send(obj);
})

// 购物车推荐商品
app.get("/getintro",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/cart/intro_1.jpg",title:"心连心",price:239},
        {id:2,img_url:"http://127.0.0.1:3888/img/cart/intro_2.jpg",title:"好幸运",price:520},
        {id:3,img_url:"http://127.0.0.1:3888/img/cart/intro_3.jpg",title:"多彩的季节",price:399},
        {id:4,img_url:"http://127.0.0.1:3888/img/cart/intro_4.jpg",title:"邂逅浪漫",price:520},
        {id:5,img_url:"http://127.0.0.1:3888/img/cart/intro_5.jpg",title:"母爱",price:178},
        {id:6,img_url:"http://127.0.0.1:3888/img/cart/intro_6.jpg",title:"忘情巴黎",price:298}
    ];
    res.send(obj);
})

// 获取个人中心九宫格2信息
app.get("/getProImg",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/profile/grid2_1.png",title:"优惠券"},
        {id:2,img_url:"http://127.0.0.1:3888/img/profile/grid2_2.png",title:"会员积分"},
        {id:3,img_url:"http://127.0.0.1:3888/img/profile/grid2_3.png",title:"生日提醒"},
        {id:4,img_url:"http://127.0.0.1:3888/img/profile/grid2_4.png",title:"我的收藏"},
        {id:5,img_url:"http://127.0.0.1:3888/img/profile/grid2_5.png",title:"收货地址"},
        {id:6,img_url:"http://127.0.0.1:3888/img/profile/grid2_6.png",title:"余额"}
    ];
    res.send(obj);
})

// 获取评论消息
app.get("/getComment",(req,res)=>{
    var obj=[
        {id:1,user_icon:"http://127.0.0.1:3888/img/user/user_1.jpg",uname:"栗*",score:91,comment:"女朋友很喜欢！",img_url1:"http://127.0.0.1:3888/img/user/comment_1.jpg",address:"陕西渭南市韩城市"},
        {id:2,user_icon:"http://127.0.0.1:3888/img/user/user_2.jpg",uname:"李*",score:96,comment:"平安夜当天准时送达，老婆非常喜欢。鲜花很美，谢谢花礼网。。。",img_url1:"http://127.0.0.1:3888/img/user/comment_2_1.jpg",img_url2:"http://127.0.0.1:3888/img/user/comment_2_2.jpg",img_url3:"http://127.0.0.1:3888/img/user/comment_2_3.jpg",address:"广东广州市海珠区"},
        {id:3,user_icon:"http://127.0.0.1:3888/img/user/user_3.jpg",uname:"周*碗",score:91,comment:"很好看，姑娘很喜欢。",img_url1:"http://127.0.0.1:3888/img/user/comment_3.jpg",address:"江苏苏州市昆山市"}
    ];
    res.send(obj);
})

// 获取商品详情九宫格
app.get("/getDetailGrid",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/user/detail_choose_1.png",title:"获评鲜花龙头企业"},
        {id:2,img_url:"http://127.0.0.1:3888/img/user/detail_choose_2.png",title:"当日新鲜花材制作"},
        {id:3,img_url:"http://127.0.0.1:3888/img/user/detail_choose_3.png",title:"赛事冠军花艺师团队"},
        {id:4,img_url:"http://127.0.0.1:3888/img/user/detail_choose_4.png",title:"严选花材"},
        {id:5,img_url:"http://127.0.0.1:3888/img/user/detail_choose_5.png",title:"12道严苛品控标准"},
        {id:6,img_url:"http://127.0.0.1:3888/img/user/detail_choose_6.png",title:"500万用户信赖好评"},
    ];
    res.send(obj);
})

app.get("/getGrid3",(req,res)=>{
    var obj=[
        {id:1,img_url:"http://127.0.0.1:3888/img/detail/detail1.jpg"},
        {id:2,img_url:"http://127.0.0.1:3888/img/detail/detail2.jpg"},
        {id:3,img_url:"http://127.0.0.1:3888/img/detail/detail3.jpg"},
        {id:4,img_url:"http://127.0.0.1:3888/img/detail/detail4.jpg"},
        {id:5,img_url:"http://127.0.0.1:3888/img/detail/detail5.jpg"},
        {id:6,img_url:"http://127.0.0.1:3888/img/detail/detail6.jpg"},
        {id:7,img_url:"http://127.0.0.1:3888/img/detail/detail7.jpg"},
        {id:8,img_url:"http://127.0.0.1:3888/img/detail/detail8.jpg"},
        {id:9,img_url:"http://127.0.0.1:3888/img/detail/detail9.jpg"}
    ];
    res.send(obj);
})

// 获得带标题的图文详情的信息
app.get("/getDetailTitlePic",(req,res)=>{
    var obj=[
        {id:1,title:"龙头企业认证·13年品牌",info:"始于2005，多次获中国电子商务协会“鲜花龙头企业”认证。",img_url:"http://127.0.0.1:3888/img/detail/details_point1.png"},
        {id:2,title:"12道品控标准 + 送前实拍",info:"行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送、售后全程覆盖，将产品及服务标准化；每束花均实拍回传总部审核，符合品控标准方可送出。",img_url:"http://127.0.0.1:3888/img/detail/details_point2.png"},
        {id:3,title:"花艺设计团队",info:"国内领先的原创花艺：中国花艺博览会赛事冠军花艺师打造团队，坚持原创设计，创作花款迄今已畅销千万束。",img_url:"http://127.0.0.1:3888/img/detail/details_point3.png"},
        {id:4,title:"当日新鲜花材制作，极速送达",info:"始门店覆盖全国2000+城市，鲜花皆由当地门店花艺师在配送当日使用新鲜A级花材制作，确保鲜花娇艳欲滴！并由专人专车送货上门，最快1小时送达，快人一步！",img_url:"http://127.0.0.1:3888/img/detail/details_point4.png"},
        {id:5,title:"客服团队",info:"建设一支较其他电商更大规模的客服团队，将常规客服升级为售前订花顾问、售中专人跟单、售后快速响应的一站式管家客服模式。",img_url:"http://127.0.0.1:3888/img/detail/details_point5.png"},
        {id:6,title:"优秀平台汇聚优秀人才",info:"我们相信优秀的平台环境可以吸引同样气质、热爱花礼行业的优秀人才。",img_url:"http://127.0.0.1:3888/img/detail/details_point6.png"},
        {id:7,title:"不只鲜花 · 跨界音乐微电影",info:"联合GIMC打造“勇敢爱”系列原创微电影、赞助《不要音乐》大型音乐旅行节目，全网播放超5000万次。",img_url:"http://127.0.0.1:3888/img/detail/details_point7.png"}
    ];
    res.send(obj);
})

// 获取商品列表信息
app.get("/getGoodList",(req,res)=>{
    var gid=req.query.gid;
    var sql="SELECT img,title,tip,price FROM fl_good WHERE gid=?"
    pool.query(sql,gid,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//用户邮箱登录
app.get("/emailLogin",(req,res)=>{
    var uid=req.query.uemail;
    // console.log(uid);
    var upwd=req.query.upwd;
    var sql="SELECT * FROM fl_login WHERE uid=? AND upwd=md5(?)";
    pool.query(sql,[uid,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            // req.session.uid=result[0].uid;
            // req.session.uname=result[0].uname;
            res.send({code:1,msg:"登录成功",uid:result[0].uid});
            return;
        }else{
            res.send({code:-1,msg:"账号或密码错误!"})
        }
    })
})

//手机号码登录
app.get("/phoneLogin",(req,res)=>{
    var phone=req.query.phone;
    // console.log(uid);
    var upwd=req.query.upwd;
    var sql="SELECT * FROM fl_login WHERE phone=? AND upwd=md5(?)";
    pool.query(sql,[phone,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            // req.session.uid=result[0].uid;
            // req.session.uname=result[0].uname;
            res.send({code:1,msg:"登录成功",phone:result[0].phone});
            return;
        }else{
            res.send({code:-1,msg:"账号或密码错误!"})
        }
    })
})