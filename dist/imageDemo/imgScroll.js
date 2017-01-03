/**jQuery图片轮播插件
  *wuzhoubo@yeah.net
  *2016-5-24
  **/
;(function ($) {
    $.fn.imgScroll = function (options) {
        var settings = $.extend({
            'imgAdds':'', //图片地址，数组
            'imgBoxSize':'5',//轮播框大小，以图片张数计算
			'imgWidth':'60',//轮播图片宽
			'imgHeight':'80',//轮播图片高
			'speed':'500',//动画速度，毫秒
			'imgExplain':'',//图片下图片解释介绍，和图片地址对应，可以不设置，数组
			'lineMove':false,//是否整个图片框整体移动，默认false，一张一张移动
			'scroll':true,//是否滚动
			'scrollSpeed':'1500',//滚动速度，毫秒
			'iconColor':'#00bb9c'//prev、next图标颜色
        },options);
		
		var timer;
        if (this.length == 0) return this;
        if (this.length > 1) {
            this.each(function () {
                $(this).imgScroll(options);
            });
            return this;
        }
		var svgPrev = '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[@font-face { font-family: ifont; src: url("http://at.alicdn.com/t/font_1442373896_4754455.eot?#iefix") format("embedded-opentype"), url("http://at.alicdn.com/t/font_1442373896_4754455.woff") format("woff"), url("http://at.alicdn.com/t/font_1442373896_4754455.ttf") format("truetype"), url("http://at.alicdn.com/t/font_1442373896_4754455.svg#ifont") format("svg"); }]]></style></defs><g class="transform-group"><g transform="scale(0.03125, 0.03125)"><path d="M787.49603 1011.973082 607.754343 1011.973082 236.50397 512 606.21836 12.026918 787.49603 12.026918 415.89364 512Z" fill="'+settings.iconColor+'"></path></g></g></svg>';
		var svgNext = '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[@font-face { font-family: ifont; src: url("http://at.alicdn.com/t/font_1442373896_4754455.eot?#iefix") format("embedded-opentype"), url("http://at.alicdn.com/t/font_1442373896_4754455.woff") format("woff"), url("http://at.alicdn.com/t/font_1442373896_4754455.ttf") format("truetype"), url("http://at.alicdn.com/t/font_1442373896_4754455.svg#ifont") format("svg"); }]]></style></defs><g class="transform-group"><g transform="scale(0.03125, 0.03125)"><path d="M236.50397 12.026918 416.244634 12.026918 787.495006 512 417.780617 1011.973082 236.50397 1011.973082 608.105337 512Z" fill="'+settings.iconColor+'"></path></g></g></svg>';
        var html = '<div class="imgScrollCon"><a class="prevBtn" href="javascript:void(0)" ></a><div class="imgScrollBox"><ul class="imgList">';
		if(settings.imgExplain){
			for (var i = 0; i < settings.imgAdds.length; i++) {
				html += '<li class="imgL"><img class="imgBox" src="' + settings.imgAdds[i] + '"><p class="imgExplain">'+settings.imgExplain[i]+'</p></li>';
			}
		}else{
			for (var i = 0; i < settings.imgAdds.length; i++) {
				html += '<li class="imgL"><img class="imgBox" src="' + settings.imgAdds[i] + '"></li>';
			}
		}
        html += '</ul></div><a class="nextBtn" href="javascript:void(0)" ></a></div>';
        $(this).html(html);
		
		var imgScrollCon = $(this).find(".imgScrollCon");
        var imgScrollBox = $(this).find(".imgScrollBox");
		var imgExplain = $(this).find(".imgExplain");
        var prev = $(this).find(".prevBtn");
        var next = $(this).find(".nextBtn");
        var imgList = $(this).find(".imgList");
        var imgBox = $(this).find(".imgBox");
		var imgL = $(this).find(".imgL");
		prev.html(svgPrev);
		next.html(svgNext);
		if(imgExplain){imgExplain.css({'text-align': 'center','font-size':'14px','color':'#333','margin': '0 5px','padding': '0','height':'20px','line-height':'20px','font-weight':'bold'})}
		prev.css({'margin': '0','padding': '0','height': settings.imgHeight+'px','width': '30px','position': 'absolute','top':'0','left': '0','z-index': '99999','line-height':settings.imgHeight+'px'});
		next.css({'margin': '0','padding': '0','height': settings.imgHeight+'px','width': '30px','position': 'absolute','top':'0','right': '0','z-index': '99999','line-height':settings.imgHeight+'px'})
		imgBox.css({'width': settings.imgWidth+'px','height': settings.imgHeight+'px'});
		imgL.css({'display': 'inline-block','width': settings.imgWidth+'px','height': settings.imgHeight+'px','list-style': 'none','margin':'0 2px'});
        if(settings.imgAdds.length){imgList.css({"width":settings.imgWidth*settings.imgAdds.length+'px','height': settings.imgHeight+'px','position': 'absolute','margin': '0','padding': '0',});};		
		var psbW = (parseInt(imgBox.css("width")))*settings.imgBoxSize+20;
		var psbH = settings.imgExplain ? parseInt(imgBox.css("height"))+20 : parseInt(imgBox.css("height"));
		imgScrollBox.css({"position":"relative","width":psbW+"px","overflow":"hidden","height":psbH+"px","margin":'0 auto'});
		imgScrollCon.css({"position":"relative","width":psbW+60+"px","height":psbH+"px","margin":'0 auto'});
        
        var method = {
            getLeft: function (obj) {
                return obj.css("left");
            },
			moveLeft: function(){
				var mw = settings.lineMove ? -settings.imgWidth*settings.imgBoxSize : -settings.imgWidth;
				var ml = settings.lineMove ? settings.imgBoxSize : 1 ;
				imgList.animate({left:mw+'px'},settings.speed,function(){
					imgList.css("left",0);
					for(var i = 0;i<ml;i++){
						imgList.append(imgList.children().first());
					}
				});
			},
			moveRight: function(){
				var mw = settings.lineMove ? settings.imgWidth*settings.imgBoxSize : settings.imgWidth;
				var ml = settings.lineMove ? settings.imgBoxSize : 1 ;
				for(var i = 0;i<ml;i++){
					imgList.prepend(imgList.children().last());
					}
				imgList.css("left",-mw+'px');
				imgList.animate({left:0+'px'},settings.speed,function(){
					imgList.css("left",0);
				});
			},
			startMove: function(){
					imgList.animate({left:-settings.imgWidth+'px'},settings.speed,function(){
						imgList.css("left",0);
						imgList.append(imgList.children().first());
				});
			}
        }
		
		if(settings.scroll){
			timer = setInterval(method.startMove,settings.scrollSpeed);
			imgScrollCon.on("mouseover",function(){
				clearInterval(timer);
				})
			imgScrollCon.on("mouseout",function(){
			timer = setInterval(method.startMove,settings.scrollSpeed);
				})
		}
		prev.mouseover(function(){
			$(this).css('backgroundColor','#eee');
		})
		
		prev.mouseout(function(){
			$(this).css('backgroundColor','#fff');
		})
		
		next.mouseover(function(){
			$(this).css('backgroundColor','#eee');
		})
		
		next.mouseout(function(){
			$(this).css('backgroundColor','#fff');
		})
        prev.on("click", function () {
			method.moveLeft();
        })
        next.on("click", function () {
			method.moveRight();
        })
        return this;
    }
})(jQuery)