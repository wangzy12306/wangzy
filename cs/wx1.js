function changeImage(){
//console.log("get access_token  success");
	//var host = "http://" + window.location.host;
	//alert("qqqqqqq");
	//alert(host);
    var s = document.getElementById('myimage');
    s.src = s.src.match('bulboff')?"pic_bulbon.gif":"pic_bulboff.gif";
		//var description = $("meta[name='description']").attr("content");
		//var outl=document.getElementById('out');
		//var url = wxdata;
		//alert(wxdata.access_token);
		//console.log(wxdata.wx_myuser[0]);
		//alert(wxdata.wx_myuser[0]);
}

//https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx66f681451273a52c&secret=9586c3b98cb6c6b7240b1f0ec98d1ef3