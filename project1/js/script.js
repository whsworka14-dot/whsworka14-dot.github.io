$(".top_menu>li").mouseover(function(){
    $(this).children(".sub_menu_bg").stop().slideDown();
    $(this).mouseout(function(){
        $(".sub_menu_bg").stop().slideUp();
    })
})
$(".main_menu>a, .sub_menu_bg").mouseout(function(){
    $(".sub_menu_bg").stop().slideUp();
})

$(".item_text_box02>ul>li").click(function(){
    $(this).siblings().removeClass("active")
    $(this).addClass("active");
})

$(document).ready(function(){
    $(".pants, .outer, .shoes, .wallet, .watch, .etc").hide();
})

$(".topwear_btn").click(function(){
    $(".item_sort_box02").hide();
    $(".topwear").show();
})
$(".pants_btn").click(function(){
    $(".item_sort_box02").hide();
    $(".pants").show();
})
$(".outer_btn").click(function(){
    $(".item_sort_box02").hide();
    $(".outer").show();
})
$(".shoes_btn").click(function(){
    $(".item_sort_box02").hide();
    $(".shoes").show();
})
$(".wallet_btn").click(function(){
    $(".item_sort_box02").hide();
    $(".wallet").show();
})
$(".watch_btn").click(function(){
    $(".item_sort_box02").hide();
    $(".watch").show();
})
$(".etc_btn").click(function(){
    $(".item_sort_box02").hide();
    $(".etc").show();
})