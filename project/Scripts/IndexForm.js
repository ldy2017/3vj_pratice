
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
		   //点击修改域名按钮
	   	var btndo=$("#btndo");
	   	btndo.click(function(){
			var editdomain=$(".cpif-editdomain");
			if(editdomain.css("display")=="block"){
				editdomain.css("display","none");
			}else{
				editdomain.css("display","block");
			}
	   	});
	   	var editlog=$("#editlog");
	   	var overlay=$(".overlay");
	   	var setlogo=$(".setlogo");
	   	editlog.click(function(){
	   		overlay.css("display","block");
	   		setlogo.css("display","block");
	   	});
	   	var exiticon=$("#exiticon");
	   	exiticon.click(function(){
	   		overlay.css("display","none");
	   		setlogo.css("display","none");
	   	});
	   	var shopname=$("#sn");
	   	var nametip=$("#name-tip")
	   	shopname.focus(function(){
	   		nametip.css("display","inline");
	   	});
	   	shopname.blur(function(){
	   		shopname.css("border","1px solid #ebebeb");
	   		nametip.css("display","none");
		   });
	   	var adr=$("#citySelect");
	   	var detail=$("#detail");
	   	var adrtip=$("#adr-tip");
	   		adr.focus(function(){
	   		adrtip.css("display","inline");
	   	});
	   		adr.blur(function(){
	   		adr.css("border","1px solid #ebebeb");
	   		adrtip.css("display","none");
	   	});
	   		detail.focus(function(){
	   		adrtip.css("display","inline");
	   	});
	   		detail.blur(function(){
	   		detail.css("border","1px solid #ebebeb");
	   		adrtip.css("display","none");
	   	});
	});
function validate_required(field){
	with (field){
		if (value==null||value==""){
			return false;
		  }else{
		  return true;
		}
	}
}

function validate_form(thisform){
	with (thisform){
		if (validate_required(shopname)==false){
			shopname.style.border="1px solid red";
	  		shopname.focus();
	  		return false;
	  	}
	  	if(validate_required(city)==false){
	  		city.style.border="1px solid red";
	  		city.focus();
	  		return false;
	 	}
	  	if(validate_required(detailadr)==false){
	  		detailadr.style.border="1px solid red";
	  		detailadr.focus();
	  		return false;
	  	}
	}
}

