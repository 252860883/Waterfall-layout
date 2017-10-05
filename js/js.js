

$(window).on("load",function(){


	waterfall();
	var dataInt={"data":[{"src":"66.png"},{"src":"66.png"},{"src":"64.png"},{"src":"66.png"},{"src":"68.png"}]}

    $(window).on('scroll',function(){
		if(checkScrollSelect){
		$.each(dataInt.data,function(key,value){
			var oBox=$('<div>').addClass('box').appendTo($('#main'));
			var oPic=$('<div>').addClass('pic').appendTo($(oBox));
			var oImg=$('<img>').attr('src','img/'+$(value).attr('src')).appendTo($(oPic));
		})
		waterfall();
	}
	})
})


function waterfall(){

    $(".pic").on("mouseenter",function(){
        $(this).addClass("boxShadow");
        /*alert("dd");*/
    });

    $(".pic").on("mouseleave",function(){
        $(this).removeClass("boxShadow");
        /*alert("dd");*/
    });
    $(".pic").on("mouseenter",function(){
        $(this).addClass("boxShadow");

        /*console.log($(this));*/
    });

    $(".pic").on("mouseleave",function(){
        $(this).removeClass("boxShadow");
        /*alert("dd");*/
    });

    $('.pic').on("click",function(){
        $("#showMain").css({"width": window.innerWidth,"height":window.innerHeight}).show(500);
        /* $("#showImg").css({"height":"50%"});*/
        /*alert("dd");*/
        $("#showImg").attr("src",$(this).children("img").attr("src"));
    });

    $('#showExit').on("click",function(){
        $("#showMain").hide(500);
    });

	var $boxs=$('#main>div');//>是只找寻一级的 所以不用空格
	var w=$boxs.eq(0).outerWidth();//outerWidth是包括padding等元素的
	var cols=Math.floor($(window).width()/w);
	$('#main').width(cols*w).css('margin','0 auto');
	var hArr=[];

	$boxs.each(function(index,value){//遍历元素
		
		var h=$boxs.eq(index).outerHeight();//获取元素的高
		if(index<cols){
			hArr[index]=h;
		}else{
			var minH=Math.min.apply(null,hArr);//找出数组最小量
			var minHIndex=$.inArray(minH,hArr);//数组最小量的位置
			$(value).css({//DOM对象不能使用JQ所以要加$
				'position':'absolute',
				'top':minH+'px',
				'left':minHIndex*w+'px'
			})
			hArr[minHIndex]+=$boxs.eq(index).outerHeight();
		}
	})


}

function checkScrollSelect(){
	var $lastBox=$('#mian>div').last();
	var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);//距离上编剧的距离+自身一半
	var scrollTop1=$(window).scrollTop();//滚动距离的高度
	var documentH=$(window).height();//页面可视距离的高度
	return(lastBoxDis<scrollTop1+documentH)?true:false;
}


