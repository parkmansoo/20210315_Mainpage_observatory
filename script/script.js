$(function(){
  //////////////////////////GNB메뉴/////////////////////////
    $("nav#gnb>ul#mainMenu>li").mouseover(function(){
        $(this).children("ul").stop().fadeIn(900);
    });
    $("nav#gnb>ul#mainMenu>li").mouseout(function(){
        $(this).children("ul").stop().fadeOut(900);
    });
  //////////////////////////GNB메뉴/////////////////////////

  //////////////////////////슬라이드쇼/////////////////////////
    setInterval (fnSlide, 3000)

    function fnSlide (){
        $("#slideArea a").fadeOut(500);
        $("#slideArea a:nth-child(2)").fadeIn(1000, function(){
            $("#slideArea a:first-child").insertAfter("#slideArea a:last-child");
        });
    };
 //////////////////////////슬라이드쇼/////////////////////////

 //////////////////////////멀티탭/////////////////////////
    $("button:nth-child(1)").click(function(){
        $("button").css({
            "border":"none",
            "top":"0px"
        });
        $(this).css({
            "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });
        $("#tabContent1").css({"display":"block"})
        $("#tabContent2").css({"display":"none"})
    });

    $("button:nth-child(2)").click(function(){
        $("button").css({
            "border":"none",
            "top":"0px"
        });
        $(this).css({
            "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });
        $("#tabContent1").css({"display":"none"})
        $("#tabContent2").css({"display":"block"})
    });
 //////////////////////////멀티탭/////////////////////////

 //////////////////////////레이어 팝업/////////////////////////
    $("#tabArea span.modalPoint").click(function(){
        $("#modalLayerBG").css({"display":"block"});
    });
 //////////////////////////레이어 팝업/////////////////////////

 //////////////////////////레이어 팝업 닫기 버튼/////////////////////////
    $("#closeBtn").click(function(){
        $("#modalLayerBG").css({"display":"none"});
    });
 //////////////////////////레이어 팝업 닫기 버튼/////////////////////////





});
