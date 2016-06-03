//引入模板
var tplGuide = require("../tpl/guide.string");
//定义一个视图
SPA.defineView("guide",{
	html : tplGuide,
	//添加插件
	plugins : ["delegated"],
	//绑定事件
	bindActions : {
		"goto.index" : function(){
			SPA.open("index");
			//轮播图1
			var mySwiper = new Swiper ('.swiper1', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:2000,
			    autoplayDisableOnInteraction : false,
			    // 如果需要分页器
			    pagination: '.swiper-pagination'
			});
			//轮播图2
			var mySwiper = new Swiper ('.swiper2', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:500,
			    autoplayDisableOnInteraction : false,
			});  
			//轮播图3
			var mySwiper = new Swiper ('.swiper3', {
			    direction: 'horizontal',
			    //loop: true,
			    autoplayDisableOnInteraction : false,
			    width:130
			});
			//轮播图4
			 var mySwiper = new Swiper ('.swiper4', {
			    direction: 'horizontal',
		        //loop: true,
			    //autoplay : 500,
			    autoplayDisableOnInteraction : false,
			    width:190,
			}); 
		}
	}
});