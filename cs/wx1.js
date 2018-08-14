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
		alert(wxdata.account);
		
}