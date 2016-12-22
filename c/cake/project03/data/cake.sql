SET NAMES utf8;
DROP DATABASE IF EXISTS cake;
CREATE DATABASE cake CHARSET = utf8;
USE cake;

#用户名
CREATE TABLE user (
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(16),
  upwd  VARCHAR(16),
  email VARCHAR(16)
);
INSERT INTO user VALUES
  (NULL, '张三', '123456', '5678539626@qq.com'),
  (NULL, '李明', '123456', '2678539626@qq.com');

#产品列表
CREATE TABLE product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    ename VARCHAR(32),
    name VARCHAR(32),
    price FLOAT(6,2),
    img_sm1 VARCHAR(32),
    img_sm2 VARCHAR(32),
    img_sm3 VARCHAR(32),
    img_sm4 VARCHAR(32),
    img_md1 VARCHAR(32),
    img_long VARCHAR(32),
    detail VARCHAR(256),
    taste VARCHAR(32),
    material VARCHAR(128)
);
INSERT INTO product VALUE
(NULL,'Cheese Polar Milk','极地牛乳','168.00','极地牛乳-1.jpg','极地牛乳-2.jpg','极地牛乳-3.jpg','极地牛乳-4.jpg','m_p1.png','longp1.jpg','轻盈的雪花在齿唇间片片融化，浓郁的芝香在口中慢慢充实。','舞动巧克力','进口纯动物奶油、进口安佳奶酪、香滑巧克力、进口韩国幼砂糖、吉利丁'),
(NULL,'Blueberry Mousse','公爵提拉米苏','188.00','公爵提拉米苏-1.jpg','公爵提拉米苏-2.jpg','公爵提拉米苏-3.jpg','公爵提拉米苏-4.jpg','m_p2.png','longp2.jpg','轻盈的雪花在齿唇间片片融化，浓郁的芝香在口中慢慢充实。','萌幻慕斯','薄脆片、进口安佳动物奶油、进口防潮可可粉、柠檬汁'),
(NULL,'Duke Tiramisu','莱茵河莓妖精','178.00','莱茵河莓妖精-1.jpg','莱茵河莓妖精-2.jpg','莱茵河莓妖精-3.jpg','莱茵河莓妖精-4.jpg','m_p3.png','longp3.jpg','轻盈的雪花在齿唇间片片融化，浓郁的芝香在口中慢慢充实。','浓情芝士','进口蓝莓、蓝莓果酱、进口安佳淡奶油、进口安佳奶油奶酪'),
(NULL,'Lover in Castle','新天鹅堡情人','178.00','新天鹅堡情人-1.jpg','新天鹅堡情人-2.jpg','新天鹅堡情人-3.jpg','新天鹅堡情人-4.jpg','tianm.png','tiane.jpg','纯正黑巧克力碎与进口奶酪的偶遇（目前因季节原因，表面装饰的水果以实物为准）。','舞动巧克力','香滑巧克力、进口原装安佳淡奶油、进口安佳奶酪'),
(NULL,'Lion King','新狮子王','178.00','w1.jpg','w2.jpg','w3.jpg','w4.jpg','wm1.png','wangz.jpg','王者，不需别人的衬托，自会与众不同。','拿破仑','进口蓝莓、蓝莓果酱、进口安佳淡奶油、进口安佳奶油奶酪'),
(NULL,'PAPI PAPI','熊蛋糕','178.00','PAPI熊蛋糕-1.jpg','PAPI熊蛋糕-2.jpg','PAPI熊蛋糕-3.jpg','PAPI熊蛋糕-4.jpg','xm.png','xiong.jpg','约上好友一起分享papi熊de幻想。','舞动巧克力','巧克力、草莓果馅、可可粉、进口安佳奶油'),
(NULL,'Cheese Polar Milk','极地牛乳','168.00','极地牛乳-1.jpg','极地牛乳-2.jpg','极地牛乳-3.jpg','极地牛乳-4.jpg','m_p1.png','longp1.jpg','轻盈的雪花在齿唇间片片融化，浓郁的芝香在口中慢慢充实。','舞动巧克力','进口纯动物奶油、进口安佳奶酪、香滑巧克力、进口韩国幼砂糖、吉利丁'),
(NULL,'Blueberry Mousse','公爵提拉米苏','188.00','公爵提拉米苏-1.jpg','公爵提拉米苏-2.jpg','公爵提拉米苏-3.jpg','公爵提拉米苏-4.jpg','m_p2.png','longp2.jpg','轻盈的雪花在齿唇间片片融化，浓郁的芝香在口中慢慢充实。','萌幻慕斯','薄脆片、进口安佳动物奶油、进口防潮可可粉、柠檬汁'),
(NULL,'Duke Tiramisu','莱茵河莓妖精','178.00','莱茵河莓妖精-1.jpg','莱茵河莓妖精-2.jpg','莱茵河莓妖精-3.jpg','莱茵河莓妖精-4.jpg','m_p3.png','longp3.jpg','轻盈的雪花在齿唇间片片融化，浓郁的芝香在口中慢慢充实。','浓情芝士','进口蓝莓、蓝莓果酱、进口安佳淡奶油、进口安佳奶油奶酪'),
(NULL,'Lover in Castle','新天鹅堡情人','178.00','新天鹅堡情人-1.jpg','新天鹅堡情人-2.jpg','新天鹅堡情人-3.jpg','新天鹅堡情人-4.jpg','tianm.png','tiane.jpg','纯正黑巧克力碎与进口奶酪的偶遇（目前因季节原因，表面装饰的水果以实物为准）。','舞动巧克力','香滑巧克力、进口原装安佳淡奶油、进口安佳奶酪'),
(NULL,'Lion King','新狮子王','178.00','w1.jpg','w2.jpg','w3.jpg','w4.jpg','wm1.png','wangz.jpg','王者，不需别人的衬托，自会与众不同。','拿破仑','进口蓝莓、蓝莓果酱、进口安佳淡奶油、进口安佳奶油奶酪'),
(NULL,'PAPI PAPI','熊蛋糕','178.00','PAPI熊蛋糕-1.jpg','PAPI熊蛋糕-2.jpg','PAPI熊蛋糕-3.jpg','PAPI熊蛋糕-4.jpg','xm.png','xiong.jpg','约上好友一起分享papi熊de幻想。','舞动巧克力','巧克力、草莓果馅、可可粉、进口安佳奶油'),
(NULL,'Cheese Polar Milk','极地牛乳','168.00','极地牛乳-1.jpg','极地牛乳-2.jpg','极地牛乳-3.jpg','极地牛乳-4.jpg','m_p1.png','longp1.jpg','轻盈的雪花在齿唇间片片融化，浓郁的芝香在口中慢慢充实。','舞动巧克力','进口纯动物奶油、进口安佳奶酪、香滑巧克力、进口韩国幼砂糖、吉利丁'),
(NULL,'Blueberry Mousse','公爵提拉米苏','188.00','公爵提拉米苏-1.jpg','公爵提拉米苏-2.jpg','公爵提拉米苏-3.jpg','公爵提拉米苏-4.jpg','m_p2.png','longp2.jpg','轻盈的雪花在齿唇间片片融化，浓郁的芝香在口中慢慢充实。','萌幻慕斯','薄脆片、进口安佳动物奶油、进口防潮可可粉、柠檬汁'),
(NULL,'Duke Tiramisu','莱茵河莓妖精','178.00','莱茵河莓妖精-1.jpg','莱茵河莓妖精-2.jpg','莱茵河莓妖精-3.jpg','莱茵河莓妖精-4.jpg','m_p3.png','longp3.jpg','轻盈的雪花在齿唇间片片融化，浓郁的芝香在口中慢慢充实。','浓情芝士','进口蓝莓、蓝莓果酱、进口安佳淡奶油、进口安佳奶油奶酪');

#购物车
CREATE TABLE cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  userId INT
);
INSERT INTO cart VALUES( 100,  1 );

#购物车详情
CREATE TABLE cart_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  cartId INT ,
  productId INT ,
  count INT
);
INSERT INTO cart_detail VALUES
(NULL, 100, 4, 3),
(NULL, 100, 6, 1),
(NULL, 100, 8, 2);

#订单表
CREATE TABLE c_order(
    oid INT PRIMARY KEY AUTO_INCREMENT,
    rcvName VARCHAR(16),
    phone VARCHAR(16),
    addr VARCHAR(256),
    sendment INT,
    order_time LONG,
    userId INT
);
INSERT INTO c_order VALUES
(100000000,'李四','13501234567','深圳龙华区',3,1445154859209,2);

#订单详情表
CREATE TABLE order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  orderId INT,    #订单编号
  productId INT,  #商品编号
  count INT       #购买数量
);
INSERT INTO order_detail VALUES
(NULL, 100000000, 1, 2),
(NULL, 100000000, 2, 1);
