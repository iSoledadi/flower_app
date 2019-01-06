#vue_app_server/db.sql
#设置客户端连接使用的编码
SET NAMES UTF8;
#丢弃数据库flower，如果存在
DROP DATABASE IF EXISTS flower;
#创建数据库，存储的编码
CREATE DATABASE flower CHARSET=UTF8;
#进入该数据库
USE flower;
#创建数据表
CREATE TABLE fl_login(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  uid VARCHAR(25) COMMENT '邮箱' NOT NULL DEFAULT '',
  uname VARCHAR(25) COMMENT '用户名' NOT NULL DEFAULT '',
  upwd VARCHAR(32) COMMENT '密码' NOT NULL DEFAULT '',
  phone VARCHAR(18) COMMENT '手机' NOT NULL DEFAULT ''
);

INSERT INTO fl_login VALUES(null,'2@qq.com','dd',md5(123),13000000000);
INSERT INTO fl_login VALUES(null,'1@qq.com','tom',md5(123),13000000000);
INSERT INTO fl_login VALUES(null,'3@qq.com','jerry',md5(123),13000000000);

DROP TABLE IF EXISTS fl_good;
CREATE TABLE fl_good(
  id INT PRIMARY KEY AUTO_INCREMENT,
  gid INT COMMENT '商品id',
  img VARCHAR(50) COMMENT '商品图片',
  title VARCHAR(50) COMMENT '商品标题',
  tip VARCHAR(10) COMMENT '商品提示',
  price INT COMMENT '商品价格',
  score INT COMMENT '综合评分',
  sale INT COMMENT '销量',
  saletime DATE COMMENT '上架时间'
);

INSERT INTO fl_good VALUES(null,0,"http://127.0.0.1:3888/img/good/good_all_1.jpg","一往情深·精品玫瑰礼盒:19枝红玫瑰，勿忘我适量","新年狂欢",245,99,75000,"2005-10-10");
INSERT INTO fl_good VALUES(null,0,"http://127.0.0.1:3888/img/good/good_all_2.jpg","忘情巴黎·33枝红玫瑰","top单品",298,98,36200,"2005-10-10");
INSERT INTO fl_good VALUES(null,0,"http://127.0.0.1:3888/img/good/good_all_3.jpg","一心一意·玫瑰11枝，粉色勿忘我0.3扎","畅销爆款",139,97,75200,"2005-10-10");
INSERT INTO fl_good VALUES(null,0,"http://127.0.0.1:3888/img/good/good_all_4.jpg","不变的承诺·99枝红玫瑰","精品优选",520,96,15600,"2005-10-10");
INSERT INTO fl_good VALUES(null,0,"http://127.0.0.1:3888/img/good/good_all_5.jpg","我只钟情你·香槟玫瑰11枝、白色小雏菊3枝",null,239,95,18600,"2005-10-10");
INSERT INTO fl_good VALUES(null,0,"http://127.0.0.1:3888/img/good/good_all_6.jpg","牵手一生·红玫瑰19枝",null,219,94,37800,"2005-10-10");
INSERT INTO fl_good VALUES(null,0,"http://127.0.0.1:3888/img/good/good_all_7.jpg","真爱如初·雪山玫瑰11枝、深紫色勿忘我0.3扎",null,206,93,18500,"2005-10-10");
INSERT INTO fl_good VALUES(null,0,"http://127.0.0.1:3888/img/good/good_all_8.jpg","爱在心头·玫瑰50枝：戴安娜粉玫瑰19枝，红玫瑰31枝",null,368,92,15100,"2005-10-10");

INSERT INTO fl_good VALUES(null,1,"http://127.0.0.1:3888/img/good/good_sale_1.jpg","一心一意·玫瑰11枝，粉色勿忘我0.3扎","畅销爆款",139,92,75000,"2005-10-10");
INSERT INTO fl_good VALUES(null,1,"http://127.0.0.1:3888/img/good/good_sale_2.jpg","一往情深·精品玫瑰礼盒:19枝红玫瑰，勿忘我适量","新年狂欢",245,98,36200,"2005-10-10");
INSERT INTO fl_good VALUES(null,1,"http://127.0.0.1:3888/img/good/good_sale_3.jpg","感激·29枝红康乃馨,2枝粉百合",null,218,91,75200,"2005-10-10");
INSERT INTO fl_good VALUES(null,1,"http://127.0.0.1:3888/img/good/good_sale_4.jpg","真爱如初·雪山玫瑰11枝、深紫色勿忘我0.3扎",null,206,96,15600,"2005-10-10");
INSERT INTO fl_good VALUES(null,1,"http://127.0.0.1:3888/img/good/good_sale_5.jpg","缘份·11枝红玫瑰,2枝多头白香水百合",null,199,90,18600,"2005-10-10");
INSERT INTO fl_good VALUES(null,1,"http://127.0.0.1:3888/img/good/good_sale_6.jpg","你的香气·戴安娜粉玫瑰9枝",null,128,94,37800,"2005-10-10");
INSERT INTO fl_good VALUES(null,1,"http://127.0.0.1:3888/img/good/good_sale_7.jpg","牵手一生·红玫瑰19枝",null,219,89,18500,"2005-10-10");
INSERT INTO fl_good VALUES(null,1,"http://127.0.0.1:3888/img/good/good_sale_8.jpg","致美丽的你·红玫瑰11枝，满天星围绕，栀子叶0.5扎",null,149,88,15100,"2005-10-10");

INSERT INTO fl_good VALUES(null,2,"http://127.0.0.1:3888/img/good/good_less_1.jpg","你的香气·戴安娜粉玫瑰9枝",null,128,92,75000,"2005-10-10");
INSERT INTO fl_good VALUES(null,2,"http://127.0.0.1:3888/img/good/good_less_2.jpg","幸福花园·红色康乃馨11枝",null,128,98,36200,"2005-10-10");
INSERT INTO fl_good VALUES(null,2,"http://127.0.0.1:3888/img/good/good_less_3.jpg","好想你·红色康乃馨12枝，白色相思梅2枝，栀子叶0.5扎",null,136,91,75200,"2005-10-10");
INSERT INTO fl_good VALUES(null,2,"http://127.0.0.1:3888/img/good/good_less_4.jpg","爱情花火·红玫瑰9枝，搭配栀子叶满天星适量",null,139,96,15600,"2005-10-10");
INSERT INTO fl_good VALUES(null,2,"http://127.0.0.1:3888/img/good/good_less_5.jpg","懂你·黄色扶郞9枝，橙色扶郞3枝",null,139,90,18600,"2005-10-10");
INSERT INTO fl_good VALUES(null,2,"http://127.0.0.1:3888/img/good/good_less_6.jpg","一心一意·玫瑰11枝，粉色勿忘我0.3扎",null,139,94,37800,"2005-10-10");
INSERT INTO fl_good VALUES(null,2,"http://127.0.0.1:3888/img/good/good_less_7.jpg","粉恋·戴安娜粉玫瑰9枝，搭配紫红色勿忘我栀子叶适量",null,140,89,18500,"2005-10-10");
INSERT INTO fl_good VALUES(null,2,"http://127.0.0.1:3888/img/good/good_less_8.jpg","爱如氧气·香槟玫瑰9枝，香槟色桔梗2枝",null,146,88,15100,"2005-10-10");

INSERT INTO fl_good VALUES(null,4,"http://127.0.0.1:3888/img/good/good_much_1.jpg","爱到永久·999枝红玫瑰",null,5299,92,75000,"2005-10-10");
INSERT INTO fl_good VALUES(null,4,"http://127.0.0.1:3888/img/good/good_much_2.jpg","我爱你·520朵玫瑰 ",null,3299,98,36200,"2005-10-10");
INSERT INTO fl_good VALUES(null,4,"http://127.0.0.1:3888/img/good/good_much_3.jpg","想你365天·红玫瑰365枝",null,2199,91,75200,"2005-10-10");
INSERT INTO fl_good VALUES(null,4,"http://127.0.0.1:3888/img/good/good_much_4.jpg","如初之光·红玫瑰9枝、紫红色紫罗兰9枝、紫红色蕙兰1枝、红色洋牡丹9枝、红掌3片、黑马9枝、灯台7枝",null,899,96,15600,"2005-10-10");
INSERT INTO fl_good VALUES(null,4,"http://127.0.0.1:3888/img/good/good_much_5.jpg","「熊抱花束」依恋你· 粉色苏醒玫瑰33枝、粉色绣球2枝、白粉色小雏菊2扎、紫边康乃馨7枝、绿掌2片",null,768,90,18600,"2005-10-10");
INSERT INTO fl_good VALUES(null,4,"http://127.0.0.1:3888/img/good/good_much_6.jpg","「熊抱花束」遇见你·香槟玫瑰33枝、黄色水仙百合1.5扎、浅紫色绣球1枝",null,768,94,37800,"2005-10-10");
INSERT INTO fl_good VALUES(null,4,"http://127.0.0.1:3888/img/good/good_much_7.jpg","浪漫红·新娘玫瑰19枝、烟花菊3枝、米花0.5扎、红色茵语1扎、熊猫竹1扎",null,699,89,18500,"2005-10-10");
INSERT INTO fl_good VALUES(null,4,"http://127.0.0.1:3888/img/good/good_much_8.jpg","枫丹白露· 白玫瑰11枝、白绣球2枝、绿掌3片、白马花9枝、雪柳7枝",null,699,88,15100,"2005-10-10");

INSERT INTO fl_good VALUES(null,3,"http://127.0.0.1:3888/img/good/good_new_1.jpg","爱的礼物·卡罗拉红玫瑰9枝，白色紫罗兰5支，洋牡丹5枝",null,228,92,75000,"2005-10-10");
INSERT INTO fl_good VALUES(null,3,"http://127.0.0.1:3888/img/good/good_new_2.jpg","最初的心动·白玫瑰9枝",null,166,98,36200,"2005-10-10");
INSERT INTO fl_good VALUES(null,3,"http://127.0.0.1:3888/img/good/good_new_3.jpg","邂逅你的美·白玫瑰9枝，橙色多头玫6枝",null,188,91,75200,"2005-10-10");
INSERT INTO fl_good VALUES(null,3,"http://127.0.0.1:3888/img/good/good_new_4.jpg","最好的时光·粉佳人9枝",null,199,96,15600,"2005-10-10");
INSERT INTO fl_good VALUES(null,3,"http://127.0.0.1:3888/img/good/good_new_5.jpg","焰火花园·卡罗拉玫瑰9枝，红色多头玫瑰3枝",null,226,90,18600,"2005-10-10");
INSERT INTO fl_good VALUES(null,3,"http://127.0.0.1:3888/img/good/good_new_6.jpg","如沐春风/自然风抱桶花·粉佳人玫瑰11枝",null,179,94,37800,"2005-10-10");
INSERT INTO fl_good VALUES(null,3,"http://127.0.0.1:3888/img/good/good_new_7.jpg","小惊喜/自然风抱桶花·卡罗拉玫瑰9枝",null,159,89,18500,"2005-10-10");
INSERT INTO fl_good VALUES(null,3,"http://127.0.0.1:3888/img/good/good_new_8.jpg","爱的宣言/创意心形金属花篮·卡罗拉玫瑰9枝，幻彩多头玫瑰4枝",null,269,88,15100,"2005-10-10");


#技巧1:库名;表名;列表;全英文小写字母
CREATE TABLE xz_news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  ctime DATETIME,
  point INT,
  img_url VARCHAR(255),
  content VARCHAR(255) 
);
INSERT INTO xz_news VALUES(1,'123',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(2,'124',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(3,'1233',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(4,'124',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(5,'125',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(6,'126',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(7,'127',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(8,'128',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(9,'129',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(11,'1231',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(12,'1232',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(13,'1233',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(14,'1234',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(15,'1235',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(16,'1236',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(17,'1237',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(18,'1238',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(19,'1239',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(21,'12322',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");
INSERT INTO xz_news VALUES(22,'12322',now(),0,
"http://127.0.0.1:3000/img/1.jpg","..");

#货币 小数计算误差
#价格 购物车合计 
#double DECIMAL(10,2)
#严格   将货币转换分单位  1.99 -> 199
#显示  1.99
#3:添加20条记录
#4:查询

#1:创建评论表 39
#   表名 几列 列名
#   xz_comment
#   id        INT        评论编号
#   nid       INT        评论所属新闻编号
#   user_name VARCHAR(25)评论人名称
#   ctime     DATETIME   时间
#   content   VARCHAR(120)内容

USE xz;
DROP TABLE IF EXISTS xz_comment;
CREATE TABLE xz_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nid INT,
  user_name VARCHAR(25),
  ctime DATETIME,
  content VARCHAR(120)
);
#2:添加15条
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'111');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'112');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'113');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'114');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'115');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'116');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'117');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'118');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'119');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1110');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1111');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1112');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1113');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1114');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1115');
INSERT INTO xz_comment VALUES(null,1,'dd',now(),'1116');

CREATE TABLE xz_login(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO xz_login VALUES(null,'dd',md5(123));
INSERT INTO xz_login VALUES(null,'tom',md5(123));
INSERT INTO xz_login VALUES(null,'jerry',md5(123));