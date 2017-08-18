
	$(document).ready(function(){
		var b1=$("#b1");
		var b2=$("#b2");
		var ph1=$(".item1");
		var ph2=$(".item2");
	  	b1.click(function(){
	  		b2.removeClass("cs1");
	  		ph1.css("display","block");
	  		ph2.css("display","none");
	 		b1.addClass("cs1");
	 	 });

	   	b2.click(function(){
	  		b1.removeClass("cs1");
	  		ph2.css("display","block");
	  		ph1.css("display","none");
	 		b2.addClass("cs1");
	 	 });
	   	$("tr").mouseover(function(){
	   		$(this).css("background-color","#eef5ff");

	   	});
	   	$("tr").mouseout(function(){
	   		$(this).css("background-color","#fff");
	   	});
	});

window.onload=function(){
			//内容页面四个按钮的切换效果，我的服务板块按钮切换效果
			var mdiv1=document.getElementById("fourbut1");
			var obut1=mdiv1.getElementsByTagName("button");
			var item1=document.getElementById("i1");
			var tables=document.getElementsByTagName("table");
			var i=0;
			for(i;i<obut1.length;i++){
				obut1[i].index=i;
				obut1[i].onclick=function(){
					for(a=0;a<obut1.length;a++){
						obut1[a].className="";
						tables[a].style.display="none";
					}
					this.className="btnselected";
					tables[this.index].style.display="block";
				}
			}
			//内容页面四个按钮的切换效果，分配服务板块按钮切换效果
			var mdiv2=document.getElementById("fourbut2");
			var obut2=mdiv2.getElementsByTagName("button");
			for(y=0;y<obut2.length;y++){
				obut2[y].onclick=function(){
					for(a=0;a<obut2.length;a++){
						obut2[a].className="";
					}
					this.className="btnselected";
				}
			}
			// 内容页面点击回收按钮的弹框
			var mytab=document.getElementById("mytab");
			var tabbt=mytab.getElementsByTagName("button");
			var fade=document.getElementById("fade");
			var light=document.getElementById("light");
			// 回收弹出框中每条记录对应的回收内容
			var callback=document.getElementById("callback");
			//采用闭包把每一次循环后的y值给保存下来
			for(var y = 0;y<tabbt.length;y++){
				tabbt[y].onclick=function(y){
					return function(){
					fade.style.display="block";
					light.style.display="block";
					callback.innerHTML=mytab.rows[y+1].cells[1].innerHTML;
					}
				}(y);
			}
			var out=document.getElementById("out");
			var sure=document.getElementById("sure");
			var cancel=document.getElementById("cancel");

			cancel.onclick=sure.onclick=out.onclick=function(){
					fade.style.display="none";
					light.style.display="none";
			}
		}

