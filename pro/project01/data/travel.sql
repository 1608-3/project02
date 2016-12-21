SET NAMES UTF8;
DROP DATABASE IF EXISTS travel;
CREATE DATABASE travel CHARSET=UTF8;
USE travel;

#用户
CREATE TABLE user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32)
);

INSERT INTO user VALUES
(NULL,'张三','123456'),
(NULL,'李四','123789');

CREATE TABLE scene(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(32),
	title VARCHAR(32),
	price FLOAT(6,2),
	content VARCHAR(128),
	type VARCHAR(8)
);

#目的地
INSERT INTO scene VALUES
(NULL,'images/1.jpg','松花湖两日游：','160','松花湖位于吉林省吉林市，夏天可以划船，冬天可以溜冰','1'),
(NULL,'images/2.jpg','哈尔滨一日游：','240元','哈尔滨中央大街+哈尔滨教堂+松花江乘船+太阳岛','1'),
(NULL,'images/3.jpg','观雾凇：','198元','雾凇，过冷雾滴直接冻结在物体上的乳白色冰晶沉积物，是非常难得的自然奇观','1'),
(NULL,'images/4.jpg','南楼山一日游：','200元','南楼山位于吉林省吉林市，这里的秋景特别迷人，森林的树叶有绿的、黄的、红的','1'),
(NULL,'images/5.jpg','西安两日游：','500元','西安兵马俑+华清池+钟楼+鼓楼+小吃街，这么优惠，你还在等什么，赶紧报名吧','2'),
(NULL,'images/6.jpg','伊犁四日游：','1988元','不去伊犁，不能领略新疆之美。伊犁的大草原，犹如人间仙境','2'),
(NULL,'images/7.jpg','门源花海一日游：','240元','门源位于青海省，每到夏天，这里的油菜花盛开，呈现出一片黄色的海洋','2'),
(NULL,'images/8.jpg','西宁一日游：','240元','七月份，最适合来西宁旅游的季节，此时的青海湖特别迷人','2'),
(NULL,'images/9.jpg','内蒙古七日游：','2240元','内蒙古大草原，鲜碧如画，一望无际，尤其是以北部呼伦贝尔为中心的草甸草场','3'),
(NULL,'images/10.jpg','内蒙古七日游：','2240元','内蒙古大草原，鲜碧如画，一望无际，尤其是以北部呼伦贝尔为中心的草甸草场','3'),
(NULL,'images/11.jpg','内蒙古七日游：','2240元','内蒙古大草原，鲜碧如画，一望无际，尤其是以北部呼伦贝尔为中心的草甸草场','3'),
(NULL,'images/12.jpg','内蒙古七日游：','2240元','内蒙古大草原，鲜碧如画，一望无际，尤其是以北部呼伦贝尔为中心的草甸草场','3'),
(NULL,'images/13.jpg','西湖一日游：','340元','西湖周围的群山，属于天目山余脉。根据岩性差别和山势高低，可分为内、外两圈','4'),
(NULL,'images/14.jpg','西湖一日游：','340元','西湖周围的群山，属于天目山余脉。根据岩性差别和山势高低，可分为内、外两圈','4'),
(NULL,'images/15.jpg','上海一日游：','540元','上海是一座国家历史文化名城，拥有深厚的近代城市文化底蕴和众多历史古迹','4'),
(NULL,'images/16.jpg','上海一日游：','540元','上海是一座国家历史文化名城，拥有深厚的近代城市文化底蕴和众多历史古迹','4');

#游记
CREATE TABLE tNotes(
	tid INT PRIMARY KEY AUTO_INCREMENT,
	pic1 VARCHAR(32),
	pic VARCHAR(32),
	title VARCHAR(32),
	content VARCHAR(256),
	site VARCHAR(32),
	browse INT
);

INSERT INTO tNotes VALUES
(NULL,'images/changbaishan1.jpg','images/changbaishan.jpg','十一国庆游长白山','十月三号，我和几个同学去了长白山。没有导游，只有几页收集来的旅游攻略，我们一行12人踏上了长白之旅的列车。也是我们“亲子e家”自助旅游团第二次远游！在我们心里，长白山一直都是一座神秘莫测的大神山。她是满族先民的发祥地，是爱新觉罗皇室的龙兴之地。 这里林木葱郁，浅浅的溪水环抱于森林周身，就连空气中也带着湿润的水汽，漂浮在空气中……','吉林省','235'),
(NULL,'images/jiangnan1.jpg','images/jiangnan.jpg','千里追寻西塘，相约大冰的小屋','西塘与乌镇的最大区别为，乌镇分为两个东栅和西栅区域，一为纯粹的观景看古区域，无住宿，二为游客住宿吃玩。整个西栅在晚间11点左右就会关灯，只留路灯。旅游公司收购乌镇的房子，原住民迁出，建筑景点也都按规划进行设置的。
西塘古镇本地人即住在里边，各个博物馆也在内，游览和住宿一体化，很方便。可以感受到生活着的水乡古镇风情……','浙江省','1437'),
(NULL,'images/haerbin1.jpg','images/haerbin.jpg','哈尔冰大世界','哈尔滨以中国北方最具特色的旅游名城成为与国家旅游局联办神州世纪首游的唯一城市。面对千载难逢的历史性机遇，充分发挥哈尔滨的冰雪时空优势，进一步运用大手笔，架构大格局，哈尔滨隆重推出规模空前的超大型冰雪艺术精品工程--哈尔滨松花江冰雪大世界，向世人展示北方名城哈尔滨冰雪文化和冰雪旅游的独特魅力……','黑龙江','2981');

#自驾游
CREATE TABLE trip(
	zid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(32),
	title VARCHAR(32),
	intr VARCHAR(32)
);

INSERT INTO trip VALUES
(NULL,'images/nuerjia.jpg','努尔加大峡谷','门票免费，建议一日游'),
(NULL,'images/huashan.jpg','华山','门票180，建议两日游'),
(NULL,'images/wenchang.jpg','海南文昌','门票免费，建议半天游'),
(NULL,'images/hemu.jpg','禾木','最原始的生态村'),
(NULL,'images/jiaohegucheng.jpg','交河故城','门票100，建议一日游'),
(NULL,'images/shamo.jpg','库木塔格','最靠近城市的沙漠');

CREATE TABLE overbound(
	oid INT PRIMARY KEY AUTO_INCREMENT,
	pic VARCHAR(32),
	cname VARCHAR(32),
	title VARCHAR(32)
);

INSERT INTO overbound VALUES
(NULL,'images/xini.jpg','悉尼','悉尼5日深度游'),
(NULL,'images/niuyue.jpg','纽约','纽约5日深度游'),
(NULL,'images/bali.jpg','巴黎','巴黎5日深度游'),
(NULL,'images/baxi.jpg','巴西','巴西5日深度游'),
(NULL,'images/ruishi.jpg','瑞士','瑞士5日深度游'),
(NULL,'images/maerdaifu.jpg','马尔代夫','马尔代夫5日游'),
(NULL,'images/bingdao.jpg','冰岛','冰岛5日深度游'),
(NULL,'images/balidao.jpg','巴厘岛','巴厘岛5日深度游');

#foot
CREATE TABLE service(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	class VARCHAR(16),
	title VARCHAR(16),
	subtitle1 VARCHAR(16),
	subtitle2 VARCHAR(16),
	subtitle3 VARCHAR(16)
);

INSERT INTO service VALUES
(NULL,'btn b1','机票','机票查询','机票预订','特价机票'),
(NULL,'btn b2','跟团','省内游','国内游','国外游'),
(NULL,'btn b3','酒店','特价酒店','豪华酒店','经济酒店'),
(NULL,'btn b4','购物','各地特产','国内特产','全球特产');
