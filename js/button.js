

var button = function() {
    var cookie_btn = $("<span>").attr("data-callback", "eval").addClass("icon-btn-device").css({float:"none"}).attr("data-cookie", "").attr("data-domain", ".gyyx.cn").attr("data-site", "http://qibao.gyyx.cn/").attr("data-toggle", "get-cookie").text("点击获取");
    $(".gynav").after(cookie_btn);
    console.log("load JS");
    window.addEventListener("message", receiveMessage, false);
    
    function copyToClipboard(text){
			if(text == undefined)
				return;
		
			var scrollsave = $('body').scrollTop();	//Appending an element causes the window to scroll...so we save the scroll position and restore it later
		
			var copyDiv = document.createElement('textarea');
			copyDiv.style.height="0.5px";
			document.body.appendChild(copyDiv, document.body.firstChild);
			$(copyDiv).text(text);
			copyDiv.focus();
			document.execCommand('SelectAll');
			document.execCommand("Copy", false, null);
			document.body.removeChild(copyDiv);
			
			$('body').scrollTop(scrollsave);
		}

		function receiveMessage(event)
		{
			if (event.origin == window.location.origin){
				//console.log(event.data);
				
				if (event.data == "start") return;
				
				var cookie = event.data;
				var cookie_str = "";
		    for (key in cookie) {
		      cookie_str += key+'='+cookie[key]+'; '
		    }
		    if (cookie_str == '') {
		      alert('没有获得cookie，您是否已经登录？');
		      return;
		    }
    
    		console.log(cookie_str);
    		copyToClipboard(cookie_str);
			}
		}
};

var script = document.createElement('script');
script.id = "button_script";
script.appendChild(document.createTextNode('(' + button + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);

