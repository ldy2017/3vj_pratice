$(document).ready(function(){
    // 全选按钮
    $(".allcheck").click(function(){
        var ac=$(this).prop("checked");
        $(".ch").prop("checked",ac);
        if(ac==true){
            $(".ckbox").addClass("becheck");
        }else{
            $(".ckbox").removeClass("becheck");
        }
    });
    // 单击复选框的效果
    $(".ch").click(function(){
        if($(this).prop("checked")==true){
            $(this).parent().addClass("becheck");
        }else{
            $(this).parent().removeClass("becheck");
        }
    });
    // 效果图和图库的按钮点击的切换效果
    $("#b1").click(function(){
        $("#b2").removeClass("cs1");
        $("#b1").addClass("cs1");
    })
    $("#b2").click(function(){
        $("#b1").removeClass("cs1");
        $("#b2").addClass("cs1");
    });
    // 渲染图和方案图片按钮点击的切换效果
    var first= $(".btn-box button").first();
    var second=$(".btn-box button").last();
    first.click(function(){
        second.removeClass("beselected");
        first.addClass("beselected");
    });
    second.click(function(){
        first.removeClass("beselected");
        second.addClass("beselected");
    });
})