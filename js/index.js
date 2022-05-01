window.onload = a;
var body = document.getElementsByClassName("body");
var body_1 = document.getElementsByClassName("body_1")
var top1 = document.getElementsByClassName("top");
var top2 = document.getElementsByClassName("top_2");
var top3 = document.getElementsByClassName("top_3");
var gn = document.getElementsByClassName("gn_1");
var city = document.getElementsByClassName("city");
var menu = document.getElementsByClassName("menu");
var bottom = document.getElementsByClassName("bottom");
var bottom2 = document.getElementsByClassName("bottom_2")
function a(){
	var width = (document.documentElement.clientWidth || document.body.clientWidth);
	var height = (document.documentElement.clientHeight || document.body.clientHeight);
	if( width > height ){
		console.log("电脑");
	}else{
		body[0].style.width = width+"px";
		body[0].style.height = "1450px";
		/*body[0].style.justifyContent = "safe end";*/
		body[0].children[0].style.width = width*0.85+"px";
		body[0].children[0].style.height = height*1.5+"px";
		body_1[0].style.height = "30%";
		body_1[0].children[0].style.fontSize = "6vw";
		body_1[0].children[1].style.fontSize = "3.5vw";
		top1[0].style.fontSize = "6vw";
		top2[0].style.fontSize = "3vw";
		top3[0].style.fontSize = "3vw";
		top3[0].style.height = "5%";
		top3[0].style.dborder = "1px solid #000000";
		gn[0].style.width = "85%";
		gn[0].style.height= "5%";
		gn[0].style.marginLeft = "8%";
		gn[0].children[0].style.flex = "15";
		gn[0].children[1].style.flex = "50";
		gn[0].children[2].style.flex = "35";
		gn[0].children[1].style.fontSize = "5vw";
		city[0].style.height = "50%";
		city[0].style.width = "85%";
		for (var i =0 ;i<21;i++){
			city[0].children[i].style.height = "6%";
			city[0].children[i].children[0].style.width = "70%";
			city[0].children[i].children[0].style.height = "100%";
		}
		menu[0].style.width = "85%";
		for(var i =0 ;i<4;i++){
			menu[0].children[i].style.width = "20%";
			menu[0].children[i].style.height = "80%";
			menu[0].children[i].style.fontSize = "3vw";
		}
		menu[0].children[0].style.width = "20%"
		for(var i =0 ;i<3;i++){
			bottom[0].children[i].style.width = "100%";
			bottom[0].children[i].style.fontSize = "3vw";
			bottom[0].children[i].style.margin = "1vw";
		}
		bottom2[0].style.fontSize = "3vw";
		console.log("手机");
	}
}