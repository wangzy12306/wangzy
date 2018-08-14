var wxdata = {
	wx_myuser : new Array("appid","appsecret"),
	account : "qqqqqqqqq",
	access_token : "",
	token_expires_in : "",
	get_access_token : function (){
			$.ajax({
			type : "GET",
			url :  "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx404c440b206ac972&secret=a18b3d2861956296bf08f10fc0588d0e",
			dataType : "json",  // 解决跨域问题，jsonp不支持同步操作
			cache : false,
		//	jsonp :'callback',
			success : function(msg) { 
			// 获取正常 {"access_token":"ACCESS_TOKEN","expires_in":7200}
			// 获取失败 {"errcode":40013,"errmsg":"invalid appid"}
				wxdata.access_token = msg.access_token;  // 获取到的交互凭证  需要缓存，存活时间token_expires_in  默认为7200s
				wxdata.token_expires_in = msg.expires_in;  // 过期时间 单位：s
				if (access_token != "" || access_token != null) {
					console.log("get access_token  success： " + wxdata.access_token);
				} else {
					console.log("get access_token  fail " +wxdata.access_token);
				}
			},
			error : function(msg){
				alert("get access_token error!!  ： ");
			}
		});
	}
		
	
}

wxdata.get_access_token();
wxdata.wx_myuser[0] = "111111";
//wxdata.wx_myu = wxdata.get_access_token();