function commonFunction(arg1,arg2){
	// 下拉
	$('.dropdown p').mouseenter(function () {
		$(this).siblings('ul').slideDown(200);
	});
	$('.dropdown').mouseleave(function () {
		$(this).find('ul').slideUp(200);
	});
	// 滚动条
	$(window).on('load',function(){
		$(".createNote .webpage .web-bd,.createNote .databaseWrap .view").mCustomScrollbar({
			theme:"dark"
		});
	})

	// 计算右侧宽度
	getWidth();
	$(window).resize(function () {
		getWidth()
	});
	function getWidth() {
		setTimeout(function(){
			$('.middlebar').css('width','auto');
			var leftW=$('.leftbar').outerWidth();
			var middleW=$('.middlebar').outerWidth();
			var windowW=$(window).width();
			$('.rightbar').css("width",windowW-leftW-middleW);
		},100);
	}

	// 计算高度
	setTimeout(function(){
		var container=$('.createNote .container');
		var webBd=container.find('.webpage .web-bd');
		var content=webBd.find('.content');
		var view=$('.createNote .databaseWrap .view');
		var windowH=$(window).height();
		container.css('height',windowH-60);
		view.css('max-height',windowH-325);
		view.css('height',windowH-325);
		var containerH=container.height();
		webBd.css('height',containerH-48);
		content.css('min-height',containerH-48);

		// 计算tool宽度
		var conWidth=content.width();
		$(".createNote .webpage .tool").css("width",conWidth+120);

		// 计算右侧编辑区域editorbox高度
		$('.editorbox').height(windowH-177);
		// 拖拽 使宽度自适应
		var arg2=arg2===false?false:true;
		if(arg2){
			$('.middlebar').resizable({
				handles:'e',
				maxWidth:($('.container').width()-$('.leftbar').width())*0.7,
				// minWidth:($('.container').width()-$('.leftbar').width())*0.3,
				minWidth:630,
				resize:function(event,ui){ 
					content.css('width','100%');
					var conWidth=content.width();
					content.css('width',conWidth-arg1);
					$(".createNote .webpage .tool").css("width",conWidth);
					$('.rightbar').width($('.container').width()-ui.size.width-$('.leftbar').width()-2);
				}
			});
			 
			$(window).resize(function() {
				var bili=$('.container').width()/($('.leftbar').width()+$('.middlebar').width()+$('.rightbar').width());
				$('.middlebar').width($('.middlebar').width()*bili);
				$('.rightbar').width($('.rightbar').width()*bili);
			});
			 
			$('body').bind('resize',function(){return false;})
		}
		},100);

	// 打开和关闭新页签
	$('.createNote .webpage .web-hd .addbtn').click(function () {
		$('.floatLayer').show();
	})

	$('.createNote .floatLayer .closeBtn').click(function () {
		$(this).parent('.floatLayer').hide();
	})

	// 资料管家
	$('.createNote .middlebar .db-header span').click(function () {
		$(this).addClass('cur').siblings().removeClass('cur');
	})

	$('.createNote .leftbar li').click(function () {
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.middlebar').children().eq($(this).index()).show().siblings().hide();
	});

	$('.createNote .databaseWrap .view li').hover(function () {
      $(this).find('.insertBtn').toggle();
    });

    $(".createNote .databaseWrap .tabnav span").click(function () {
        var index=$(this).index();
        $(this).addClass('cur').siblings().removeClass('cur');
    });

}