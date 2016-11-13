$(function(){
    // 小轮播
    function wheel(){
        $(".grtx>a").css({left:"100%"}).eq(0).css("left","0");
        var now=0;
        var next=0;
        function move(){
            next++;
            if(next>=$(".grtx>a").length){
                next=0;
            }
            $(".grtx>a").eq(now).css({left:"0"});
            $(".grtx>a").eq(next).css({left:"100%"});
            $(".grtx>a").eq(now).animate({left:"-100%"});
            $(".grtx>a").eq(next).animate({left:"0"});
            now=next;
        }
        var t=setInterval(move,2000);
    }
    wheel();

    // 时钟
    var clock=document.getElementsByClassName("clock")[0];
    createMark();
    function createMark(){
        for(i=1;i<=60;i++){
            if(i%5==0){
                w=2;
                h=10;
            }else{
                w=2;
                h=5;
            }
            var div=document.createElement("div");
            div.style.cssText="width:"+w+"px;height:"+h+"px;background:#ccc;position:absolute;top:0;left:0";
            div.style.transform="translate("+(140-w)/2+"px,0) rotate("+i*6+"deg)";
            div.style.transformOrigin="center 70.5px";
            clock.appendChild(div);

        }
    }

    function pointer(w,h,c,d){
        var div=document.createElement("div");
        div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";position:absolute;top:0;left:0";
        div.style.transform="translate("+(140-w)/2+"px,"+(70-h)+"px) rotate("+d+"deg)";
        div.style.transformOrigin="center bottom";
        div.w=w;
        div.h=h;
        clock.appendChild(div);
        return div;
    }
    var time=new Date();
    var h=pointer(3,35,"pink",time.getHours()*30+time.getMinutes()*6/12);
    var m=pointer(2,50,"pink",time.getMinutes()*6);
    var s=pointer(2,60,"#000",time.getSeconds()*6);
    setInterval(function(){
        var time=new Date();
        h.style.transform="translate("+(140-h.w)/2+"px,"+(70-h.h)+"px) rotate("+(time.getHours()*30+time.getMinutes()*6/12)+"deg)";
        m.style.transform="translate("+(140-m.w)/2+"px,"+(70-m.h)+"px) rotate("+(time.getMinutes()*6)+"deg)";
        s.style.transform="translate("+(140-s.w)/2+"px,"+(70-s.h)+"px) rotate("+(time.getSeconds()*6)+"deg)";
    },1000)



})