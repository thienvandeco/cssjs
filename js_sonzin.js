
//<![CDATA[
// JavaScript Document
urlmuangay = "http://www.dailyson.net/p/mua-ngay.html";
urlgiohang = "http://www.dailyson.net/p/gio-hang.html";
var purl = location.href,
    fb_href = purl.substring(0, purl.indexOf(".html") + 5),
    fbcm = '<div class="fb-comments" data-href="' + fb_href + '" data-num-posts="12" data-width="100%" colorscheme="light"></div>';
function removeHtmlTag(e, t) {
    for (var n = e.split("<"), r = 0; r < n.length; r++) - 1 != n[r].indexOf(">") && (n[r] = n[r].substring(n[r].indexOf(">") + 1, n[r].length));
    n = n.join("");
    return n.substring(0, t - 1)
}

function chitietsp(e, t, n) {
    var r = e.substring(7);
    e = document.getElementById(e);
    var i = ""
        , s = e.getElementsByTagName("img");
    1 <= s.length && (i = '<img src="' + s[0].src + '"/>');
    var giacu = e.innerHTML.substring(e.innerHTML.indexOf("[giacu]") + 7, e.innerHTML.indexOf("[/giacu]"))
        , u = e.innerHTML.substring(e.innerHTML.indexOf("[giaban]") + 8, e.innerHTML.indexOf("[/giaban]"));
    giavalue = giacu.replace(/,/gi, "");
    giagocvalue = u.replace(/,/gi, "");
	u = " " + u + "";
    if (-1 != e.innerHTML.indexOf("[giacu]")) var h = "Gi\u00e1 g\u1ed1c: ",
        giacu = "Giá cũ : " + giacu + "",
        p = ((parseInt(giagocvalue) - parseInt(giavalue)) / parseInt(giagocvalue) * 100).toFixed(0) + "%";
    else giacu = h = "", p = "0%";
    var o = e.innerHTML.substring(e.innerHTML.indexOf("[tomtat]") + 8, e.innerHTML.indexOf("[/tomtat]"));
    var chitiet = e.innerHTML.substring(e.innerHTML.indexOf("[chitiet]") + 9, e.innerHTML.indexOf("[/chitiet]"));
    var hotdeal = e.innerHTML.substring(e.innerHTML.indexOf("[hot]") + 5, e.innerHTML.indexOf("[/hot]"));

    tintuc = e.innerHTML.substring(e.innerHTML.indexOf("[tintuc]") + 8, e.innerHTML.indexOf("[/tintuc]"));
    kythuat = -1 != e.innerHTML.indexOf("[kythuat]") ? e.innerHTML.substring(e.innerHTML.indexOf("[kythuat]") + 9, e.innerHTML.indexOf("[/kythuat]")) : "Không có thông số kỹ thuật cho sản phẩm này";
    var news = -1 != e.innerHTML.indexOf("[hot]") ? e.innerHTML.substring(e.innerHTML.indexOf("[hot]") + 5, e.innerHTML.indexOf("[/hot]")) : "Không có thông số kỹ thuật cho sản phẩm này";
    danhgia = -1 != e.innerHTML.indexOf("[danhgia]") ? e.innerHTML.substring(e.innerHTML.indexOf("[danhgia]") + 9, e.innerHTML.indexOf("[/danhgia]")) : "Đang cập nhật";
    mota = -1 != e.innerHTML.indexOf("[mota]") ? e.innerHTML.substring(e.innerHTML.indexOf("[mota]") + 6, e.innerHTML.indexOf("[/mota]")) : "KhĂ´ng cĂ³ mĂ´ táº£ cho sáº£n pháº©m nĂ y";
    video = -1 != e.innerHTML.indexOf("[video]") ? e.innerHTML.substring(e.innerHTML.indexOf("[video]") + 7, e.innerHTML.indexOf("[/video]")) : "Đang cập nhật";
    hinhanh = -1 != e.innerHTML.indexOf("[mota]") ? e.innerHTML.substring(e.innerHTML.indexOf("[hinhanh]") + 9, e.innerHTML.indexOf("[/hinhanh]")) : "KhĂ´ng cĂ³ hĂ¬nh áº£nh cho sáº£n pháº©m nĂ y";
    e.innerHTML = -1 != e.innerHTML.indexOf("[tintuc]") ? '<div id="content" class="col_left"> <div class="top"> <div class="left"></div><div class="right"></div><div class="center"> <h1>' + t + '</h1> </div></div><div class="detail-new">'+ tintuc + '</div></div>' : '<div class="prodetail-block clearfix simpleCart_shelfItem"><a id="thumb" class="item_thumb" href="http://hieuhienrip.blogspot.com/2015/03/quan-short-thao-nam-69-lak716-en.html" style="display:none"> <img class="lazy" src="' + s[0].src + '"> </a><div class="col-1 float-l"><div class="image-prod"><div id="firstProductView"><div id="zoomer"><a><img class="img-cc opaque" src="' + s[0].src + '"/></a>'+hotdeal+'</div><div class="ca-container" id="ca-container"><div class="ca-nav"><span class="ca-nav-prev">Previous</span><span class="ca-nav-next">Next</span></div><div class="ca-nav"><span class="ca-nav-prev">Previous</span><span class="ca-nav-next">Next</span></div><div class="ca-nav"><span class="ca-nav-prev">Previous</span><span class="ca-nav-next">Next</span></div><div class="ca-wrapper" style="overflow: hidden;"><div class="ca-item ca-item-1" style="left: 0px; position: absolute;"><img alt="20150627161501_mini-pc-cs918-android-tv-box-rockchip-rk3188-quad-core-02.jpg"src="' + s[1].src + '"/></div><div class="ca-item ca-item-1" style="left: 100px; position: absolute;"><img alt="20150627161501_mini-pc-cs918-android-tv-box-rockchip-rk3188-quad-core-02.jpg"src="' + s[2].src + '"/></div><div class="ca-item ca-item-1" style="left:200px; position: absolute;"><img alt="20150627161501_mini-pc-cs918-android-tv-box-rockchip-rk3188-quad-core-02.jpg"src="' + s[3].src + '"/></div><div class="ca-item ca-item-1" style="left: 300px; position: absolute;"><img alt="20150627161501_mini-pc-cs918-android-tv-box-rockchip-rk3188-quad-core-02.jpg"src="' + s[4].src + '"/></div><div class="ca-item ca-item-1" style="left: 400px; position: absolute;"><img alt="20150627161501_mini-pc-cs918-android-tv-box-rockchip-rk3188-quad-core-06.jpg"src="' + s[5].src + '"/></div></div></div></div></div></div><div class="col-2 float-r"><h1 class="title item_name" itemprop="name">' + t + '</h1><div class="rw-ui-container"></div><h4 class="count-all"></h4><div class="prd-blk"><div class="prd-box clearfix"><div itemprop="offers" style="display: none;"></div><div class="pr-price-box "><div class="pr-new item_price">' + u +' </div><div class="pr-old">' + giacu +'</div></div></div><div class="prd-order clearfix"><a class="item_add prd-order-bt buy-now iframe" data-iframe="'+urlmuangay+'"><i class="fa fa-shopping-cart"></i> Mua ngay</a><a title="" target="_blank" href="javascript:void(0);" class="item_add prd-order-bt buy-now " rel="' + r + '"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng</a><a class="product__howToBuy" href="#"target="_blank"><i class="icn-howtobuy"></i><span class="txt-howtobuy">Hướng dẫn mua hàng</span></a></div> <div class="like-plus"> <div class="addthis_native_toolbox"></div></div></div><div class="sale-box"><div><h3 class="sale-b-ttl active" rel_data="khuyenmai"><i class="fa fa-gift"></i>Thông tin cơ bản</h3></div><div><div class="sale-b-ct clearfix khuyenmai visible">' + o + '</div></div></div></div></div></div><section class="tabct-prod l-tab"><ul class="nav-tabs clearfix" style="background: #F9F9F9;"> <li class="none"><a href="#tabnv-1">Chi tiết<span>&nbsp;</span></a></li><li><a href="#tabnv-2" class="selected"> Thông tin sản phẩm<span>&nbsp;</span></a></li><li><a href="#tabnv-4" class="">Hình ảnh<span>&nbsp;</span></a></li><li><a href="#tabnv-7" class="">Đánh giá<span>&nbsp;</span></a></li></ul><div class="tab-content" style="margin-top: 0;"><div class="tab-pane" id="tabnv-1" style="display: block;">' + chitiet + '</div><div class="tab-pane" id="tabnv-2" style="display: none;">' + kythuat + '</div><div class="tab-pane" id="tabnv-4" style="display: none;">'+video+'</div><div class="tab-pane" id="tabnv-7" style="display: none;">'+danhgia+'</div>';
}

function homepage(e, t, n) {
    var r = e.substring(7);
    e = document.getElementById(e);
    var i = ""
        , s = e.getElementsByTagName("img");
    1 <= s.length && (i = '<img src="' + s[0].src + '"/>');
    price = e.innerHTML.substring(e.innerHTML.indexOf("[giaban]") + 8, e.innerHTML.indexOf("[/giaban]"));
    sumpost = e.innerHTML.substring(e.innerHTML.indexOf("[tintuc]") + 8, e.innerHTML.indexOf("[/tintuc]"));
    t = -1 != e.innerHTML.indexOf("[tintuc]") ? "" : '<div class="box_item simpleCart_shelfItem"><div id="img_' + r + '" class="img"><a  href="' + n + '">' + i + '</a></div><div class="pro_content"><div class="clear"></div><div class="p_title"><a href="' + n + '" class="item_name">' + removeHtmlTag(t, sumtitle) + '</a></div><div class="clear"></div><div class="gia_ban"><b class="item_price">' + price + ' </b><b>&nbsp;₫</b></div><div class="p_price"><a class="addtocart" rel="' + r + '"  href="javascript:void(0);"><span class="item_add view_lft"><i class="fa fa-shopping-cart"></i> Mua</span></a><a href="' + n + '"><span class="view_rgt"><i class="fa fa-eye"> Thông tin sản phẩm</i></span></a></div></div></div>';
    e.innerHTML = t
}

function labelproduct(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = [];
    for (var t = 0; t < 20; t++) {
    if(t == 0){
         document.write('<ul class="list">');
	}
        var n = e.feed.entry[t]
            , r = n.title.$t
            , i, o = n.id.$t.split("post-");
        if (t == e.feed.entry.length) break;
        for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
                i = n.link[u].href;
                break
            }
        for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
                n.link[u].title.split(" ");
                break
            }
        u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
        giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
        giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
        hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
        hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
        kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
        postdate = n.published.$t;
        j > imgr.length - 1 && (j = 0);
        img[t] = imgr[j];
        s = u;
        a = s.indexOf("<img");
        b = s.indexOf('src="', a);
        c = s.indexOf('"', b + 5);
        d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        postdate.split("-")[2].substring(0, 2);
        u = postdate.split("-")[1];
        postdate.split("-");
        for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);
  
        r = '<li class="lli item"><div class="box_item simpleCart_shelfItem"> ' + hotdeal + '<div class="lpro"> <a id="thumb" class="lmhref item_thumb" href="' + i + '"> <img class="lazy"  class="item_thumb" src="' + img[t] + '"/> </a> <a href="' + i + '"> <h3 class="item_name lmname" >' + removeHtmlTag(r, labelsumtitle) + '</h3> </a> <div class="lprice"> <span class="price item_price">' + giaban + '</span> <span class="lspecial">' + giacu + '</span> </div></div><div class="buy_control"><a class="item_add addtocart iframe maytinh" data-iframe="'+urlmuangay+'"><span class=" view_lft">Mua Ngay</span></a><a class="item_add addtocart mobile"><span class=" view_lft">Mua Ngay</span></a></div></div></li>';
        document.write(r);
        j++
    }
}
function labelproductn(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = [];
    for (var t = 0; t < 15; t++) {
    if(t == 0){
         document.write('<ul class="list">');
	}
        var n = e.feed.entry[t]
            , r = n.title.$t
            , i, o = n.id.$t.split("post-");
        if (t == e.feed.entry.length) break;
        for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
                i = n.link[u].href;
                break
            }
        for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
                n.link[u].title.split(" ");
                break
            }
        u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
        giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
        giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
        hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
        hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
        kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
        postdate = n.published.$t;
        j > imgr.length - 1 && (j = 0);
        img[t] = imgr[j];
        s = u;
        a = s.indexOf("<img");
        b = s.indexOf('src="', a);
        c = s.indexOf('"', b + 5);
        d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        postdate.split("-")[2].substring(0, 2);
        u = postdate.split("-")[1];
        postdate.split("-");
        for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);
  
        r = '<div class="cont-best-prod"> <div class="img"> <a href="' + i + '" title="' + removeHtmlTag(r, labelsumtitle) + '"> <img src="' + img[t] + '" alt="' + removeHtmlTag(r, labelsumtitle) + '"> </a> </div><div class="inf-prod"> <a href="' + i + '" title="' + removeHtmlTag(r, labelsumtitle) + '">' + removeHtmlTag(r, labelsumtitle) + '</a> <p class="box-price"> <span class="curr-price">' + giaban + '</span> </p></div></div>';
        document.write(r);
        j++
    }
}
function labelproduct2(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = [];
    for (var t = 0; t < 12; t++) {
    
        var n = e.feed.entry[t]
            , r = n.title.$t
            , i, o = n.id.$t.split("post-");
        if (t == e.feed.entry.length) break;
        for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
                i = n.link[u].href;
                break
            }
        for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
                n.link[u].title.split(" ");
                break
            }
         u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
        tintuc = -1 != u.indexOf("[tintuc]") ? u.substring(u.indexOf("[tintuc]") + 8, u.indexOf("[/tintuc]")) : "";
        giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
        giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
        hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
        hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
        kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
        postdate = n.published.$t;
        j > imgr.length - 1 && (j = 0);
        img[t] = imgr[j];
        s = u;
        a = s.indexOf("<img");
        b = s.indexOf('src="', a);
        c = s.indexOf('"', b + 5);
        d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        postdate.split("-")[2].substring(0, 2);
        u = postdate.split("-")[1];
        postdate.split("-");
        for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);

        if(t == 0){
                 document.write('<ul class="list" id="list-daxem"><li>');
          r = -1 != s.indexOf("[giaban]") ?  '<div style="display:none"></div>':'<div></div>';
            }
        if(t > 0 && t<= 11){
          r = -1 != s.indexOf("[giaban]") ?  '<div class="lli"><div class="box_item simpleCart_shelfItem"> ' + hotdeal + '<div class="lpro"> <a id="thumb" class="lmhref item_thumb" href="' + i + '"> <img class="lazy"  class="item_thumb" src="' + img[t] + '"/> </a> <a href="' + i + '"> <h2 class="item_name lmname" >' + removeHtmlTag(r, labelsumtitle) + '</h2> </a> <div class="lprice"> <span class="price item_price">' + giaban + '</span> <span class="lspecial">' + giacu + '</span> </div></div><div class="buy_control"><a class="addtocart iframe" data-iframe="'+urlmuangay+'"><span class="item_add view_lft">Mua Ngay</span></a></div></div></div>':'<div class="lli" style=" height: 200px; "><div class="box_item simpleCart_shelfItem"><div class="lpro"> <a id="thumb" class="lmhref item_thumb" href="' + i + '"> <img class="lazy"  class="item_thumb" src="' + img[t] + '"/> </a> <a href="' + i + '"> <h2 class="item_name lmname" >' + removeHtmlTag(r, labelsumtitle) + '</h2> </a> </div></div></div>';
        }

         if(t == 6){
                    r = '</li><li>';
          }
        document.write(r);
        j++
    }
}
function labelproduct3(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = [];
    for (var t = 0; t < 10; t++) {
   
        var n = e.feed.entry[t]
            , titleI = n.title.$t
            , i, o = n.id.$t.split("post-");
        if (t == e.feed.entry.length) break;
        for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
                i = n.link[u].href;
                break
            }
        for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
                n.link[u].title.split(" ");
                break
            }
 		u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
        giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
        giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
        hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
        hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
        kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
        postdate = n.published.$t;
        j > imgr.length - 1 && (j = 0);
        img[t] = imgr[j];
        s = u;
        a = s.indexOf("<img");
        b = s.indexOf('src="', a);
        c = s.indexOf('"', b + 5);
        d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        postdate.split("-")[2].substring(0, 2);
        u = postdate.split("-")[1];
        postdate.split("-");
        for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);
        if(t >= 0){
                 r = '<li><ul>';
         }if(t >= 1){
                 r = '<li class="sb_top"><a class="youtube" href="' + i + '"><div class="sn_image"><img alt="' + removeHtmlTag(titleI, labelsumtitle) + '" class="lazy" src="' + img[t] + '" style="display: inline;"></div><div class="sn_name">' + removeHtmlTag(titleI, labelsumtitle) + '</div></a></li>';
         }
		if(t == 0 && t <= 1){
         document.write("<ul class='sb_news' id='techsupport'><li><ul>");
			}
		if(t <= 5){
                 r = '<li class="sb_top"><a class="youtube" href="' + i + '"><div class="sn_image"><img alt="' + removeHtmlTag(titleI, labelsumtitle) + '" class="lazy" src="' + img[t] + '" style="display: inline;"></div><div class="sn_name">' + removeHtmlTag(titleI, labelsumtitle) + '</div></a></li>';
         }
		if(t == 5){
         document.write("</li></ul><li><ul>");
		}if(t >= 5  && t <= 10){
                 r = '<li class="sb_top"><a class="youtube" href="' + i + '"><div class="sn_image"><img alt="' + removeHtmlTag(titleI, labelsumtitle) + '" class="lazy" src="' + img[t] + '" style="display: inline;"></div><div class="sn_name">' + removeHtmlTag(titleI, labelsumtitle) + '</div></a></li>';
         }
		if(t == 10){
                 r = '</li></ul>';
         }
        document.write(r);
        j++
    }
}
function labelproduct4(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = [];
    for (var t = 0; t < 10; t++) {
   
        var n = e.feed.entry[t]
            , titleI = n.title.$t
            , i, o = n.id.$t.split("post-");
        if (t == e.feed.entry.length) break;
        for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
                i = n.link[u].href;
                break
            }
        for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
                n.link[u].title.split(" ");
                break
            }
        u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
        giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
        giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
        hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
        hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
        kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
        postdate = n.published.$t;
        j > imgr.length - 1 && (j = 0);
        img[t] = imgr[j];
        s = u;
        a = s.indexOf("<img");
        b = s.indexOf('src="', a);
        c = s.indexOf('"', b + 5);
        d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        postdate.split("-")[2].substring(0, 2);
        u = postdate.split("-")[1];
        postdate.split("-");
        for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);
        if(t >= 0){
                 r = '<li><ul>';
         }if(t >= 1){
                 r = '<li class="sb_top"><a class="youtube" href="' + i + '"><div class="sn_image"><img alt="' + removeHtmlTag(titleI, labelsumtitle) + '" class="lazy" src="' + img[t] + '" style="display: inline;"></div><div class="sn_name">' + removeHtmlTag(titleI, labelsumtitle) + '</div></a></li>';
         }
		if(t == 0 && t <= 1){
         document.write("<ul class='sb_news' id='sbtinmoi'><li><ul>");
			}
		if(t <= 5){
                 r = '<li class="sb_top"><a class="youtube" href="' + i + '"><div class="sn_image"><img alt="' + removeHtmlTag(titleI, labelsumtitle) + '" class="lazy" src="' + img[t] + '" style="display: inline;"></div><div class="sn_name">' + removeHtmlTag(titleI, labelsumtitle) + '</div></a></li>';
         }
		if(t == 5){
         document.write("</li></ul><li><ul>");
		}if(t >= 5  && t <= 10){
                 r = '<li class="sb_top"><a class="youtube" href="' + i + '"><div class="sn_image"><img alt="' + removeHtmlTag(titleI, labelsumtitle) + '" class="lazy" src="' + img[t] + '" style="display: inline;"></div><div class="sn_name">' + removeHtmlTag(titleI, labelsumtitle) + '</div></a></li>';
         }
		if(t == 10){
                 r = '</li></ul>';
         }
        document.write(r);
        j++
    }
}

function labelproduct5(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0;
    img = [];
    for (var t = 0; t < 10; t++) {
   
        var n = e.feed.entry[t]
            , titleI = n.title.$t
            , i, o = n.id.$t.split("post-");
        if (t == e.feed.entry.length) break;
        for (var u = 0; u < n.link.length; u++)
            if ("alternate" == n.link[u].rel) {
                i = n.link[u].href;
                break
            }
        for (u = 0; u < n.link.length; u++)
            if ("replies" == n.link[u].rel && "text/html" == n.link[u].type) {
                n.link[u].title.split(" ");
                break
            }
        u = "content" in n ? n.content.$t : "summary" in n ? n.summary.$t : "";
        giaban = -1 != u.indexOf("[giaban]") ? u.substring(u.indexOf("[giaban]") + 8, u.indexOf("[/giaban]")) : "";
        giacu = -1 != u.indexOf("[giacu]") ? u.substring(u.indexOf("[giacu]") + 7, u.indexOf("[/giacu]")) : "";
        hotdeal = -1 != u.indexOf("[hot]") ? u.substring(u.indexOf("[hot]") + 5, u.indexOf("[/hot]")) : "";
        hinh = -1 != u.indexOf("[hinh]") ? u.substring(u.indexOf("[hinh]") + 6, u.indexOf("[/hinh]")) : "";
        kythuat = -1 != u.indexOf("[kythuat]") ? u.substring(u.indexOf("[kythuat]") + 9, u.indexOf("[/kythuat]")) : "";
        postdate = n.published.$t;
        j > imgr.length - 1 && (j = 0);
        img[t] = imgr[j];
        s = u;
        a = s.indexOf("<img");
        b = s.indexOf('src="', a);
        c = s.indexOf('"', b + 5);
        d = s.substr(b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && "" != d && (img[t] = d);
        n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        postdate.split("-")[2].substring(0, 2);
        u = postdate.split("-")[1];
        postdate.split("-");
        for (var f = 0; f < n.length && parseInt(u) != n[f]; f++);
        if(t >= 0){
                 r = '<li><ul>';
         }if(t >= 1){
                 r = '<li class="sb_top"><a class="youtube" href="' + i + '"><div class="sn_image"><img alt="' + removeHtmlTag(titleI, labelsumtitle) + '" class="lazy" src="' + img[t] + '" style="display: inline;"></div><div class="sn_name">' + removeHtmlTag(titleI, labelsumtitle) + '</div></a></li>';
         }
		if(t == 0 && t <= 1){
         document.write("<ul class='sb_news' id='video'><li><ul>");
			}
		if(t <= 5){
                 r = '<li class="sb_top"><a class="youtube" href="' + i + '"><div class="sn_image"><img alt="' + removeHtmlTag(titleI, labelsumtitle) + '" class="lazy" src="' + img[t] + '" style="display: inline;"></div><div class="sn_name">' + removeHtmlTag(titleI, labelsumtitle) + '</div></a></li>';
         }
		if(t == 5){
         document.write("</li></ul><li><ul>");
		}if(t >= 5  && t <= 10){
                 r = '<li class="sb_top"><a class="youtube" href="' + i + '"><div class="sn_image"><img alt="' + removeHtmlTag(titleI, labelsumtitle) + '" class="lazy" src="' + img[t] + '" style="display: inline;"></div><div class="sn_name">' + removeHtmlTag(titleI, labelsumtitle) + '</div></a></li>';
         }
		if(t == 10){
                 r = '</li></ul>';
         }
        document.write(r);
        j++
    }
}
function Cart() {
    var e = this;
    e.nextId = 1;
    e.Version = "2.2";
    e.Shelf = null;
    e.items = {};
    e.isLoaded = false;
    e.pageIsReady = false;
    e.quantity = 0;
    e.total = 0;
    e.taxRate = 0;
    e.taxCost = 0;
    e.shippingFlatRate = 0;
    e.shippingTotalRate = 0;
    e.shippingQuantityRate = 0;
    e.shippingRate = 0;
    e.shippingCost = 0;
    e.currency = VND;
    e.checkoutTo = PayPal;
    e.email = "designertuan95@gmail.com";
    e.merchantId = "";
    e.successUrl = "http://www.dailyson.net/";
    e.cancelUrl = null;
    e.entry = "";
    e.entryURL = "";
    e.entryDelete = false;
    e.cookieDuration = 30;
    e.storagePrefix = "sc_";
    e.MAX_COOKIE_SIZE = 4e3;
    e.cartHeaders = ["thumb_image", "Name","Price", "decrement", "Quantity", "increment", "total", "Remove"];
    if (e.entryDelete == true) {
        this.items = {}
    }
    e.add = function (e) {
        var t = this;
        if (!t.pageIsReady) {
            t.initializeView();
            t.update()
        }
        if (!t.isLoaded) {
            t.load();
            t.update()
        }
        var n = new CartItem;
        if (!arguments || arguments.length === 0) {
            return null
        }
        var r = arguments;
        if (e && typeof e !== "string" && typeof e !== "number") {
            r = e
        }
        n.parseValuesFromArray(r);
        n.checkQuantityAndPrice();
        if (t.hasItem(n)) {
            var i = t.hasItem(n);
            i.quantity = parseInt(i.quantity, 10) + parseInt(n.quantity, 10);
            n = i
        } else {
            t.items[n.id] = n
        }
        t.update();
        $("html, body")
            .animate({
                scrollTop: 0
            }, 1e3);
        return n
    };
    e.remove = function (t) {
        var n = {};
        e.each(function (e) {
            if (e.id !== t) {
                n[e.id] = e
            }
        });
        this.items = n
    };
    e.empty = function () {
        simpleCart.items = {};
        simpleCart.update()
    };
    e.find = function (t) {
        if (!t) {
            return null
        }
        var n = [];
        e.each(function (r, i, s) {
            fits = true;
            e.each(t, function (e, t, n) {
                if (!r[n] || r[n] != e) {
                    fits = false
                }
            });
            if (fits) {
                n.push(r)
            }
        });
        return n.length === 0 ? null : n
    };
    e.each = function (t, n) {
        var r, i = 0
            , s;
        if (typeof t === "function") {
            var o = t;
            u = e.items
        } else if (typeof n === "function") {
            var o = n
                , u = t
        } else {
            return
        }
        for (r in u) {
            if (typeof u[r] !== "function") {
                s = o.call(e, u[r], i, r);
                if (s === false) {
                    return
                }
                i++
            }
        }
    };
    e.chunk = function (e, t) {
        if (typeof t === "undefined") {
            t = 2
        }
        var n = e.match(RegExp(".{1," + t + "}", "g"));
        return n || []
    };
    e.checkout = function () {
        if (simpleCart.quantity === 0) {
            error("Cart is empty");
            return
        }
        switch (simpleCart.checkoutTo) {
        case PayPal:
            simpleCart.paypalCheckout();
            break;
        case GoogleCheckout:
            simpleCart.googleCheckout();
            break;
        case Email:
            simpleCart.emailCheckout();
            break;
        default:
            simpleCart.customCheckout();
            break
        }
    };
    e.paypalCheckout = function () {
        var e = this
            , t = "scrollbars,location,resizable,status"
            , n = "https://www.paypal.com/cgi-bin/webscr?cmd=_cart" + "&upload=1" + "&business=" + e.email + "&currency_code=" + e.currency
            , r = 1
            , i = ""
            , s, o, u, a;
        if (e.taxRate) {
            n = n + "&tax_cart=" + e.currencyStringForPaypalCheckout(e.taxCost)
        }
        e.each(function (t, n) {
            r = n + 1;
            u = "";
            e.each(t, function (e, t, n) {
                if (n !== "id" && n !== "price" && n !== "quantity" && n !== "name" && n !== "shipping") {
                    u = u + ", " + n + "=" + e
                }
            });
            u = u.substring(2);
            i = i + "&item_name_" + r + "=" + t.name + "&item_number_" + r + "=" + r + "&quantity_" + r + "=" + t.quantity + "&amount_" + r + "=" + e.currencyStringForPaypalCheckout(t.price) + "&on0_" + r + "=" + "Options" + "&os0_" + r + "=" + u
        });
        if (e.shipping() !== 0) {
            i = i + "&shipping=" + e.currencyStringForPaypalCheckout(e.shippingCost)
        }
        if (e.successUrl) {
            i = i + "&return=" + e.successUrl
        }
        if (e.cancelUrl) {
            i = i + "&cancel_return=" + e.cancelUrl
        }
        n = n + i;
        window.open(n, "paypal", t)
    };
    e.googleCheckout = function () {
        var e = this;
        if (e.currency !== USD && e.currency !== GBP) {
            error("Google Checkout only allows the USD and GBP for currency.");
            return
        } else if (e.merchantId === "" || e.merchantId === null || !e.merchantId) {
            error("No merchant Id for google checkout supplied.");
            return
        }
        var t = document.createElement("form")
            , n = 1
            , r, i, s;
        t.style.display = "none";
        t.method = "POST";
        t.action = "https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/" + e.merchantId;
        t.acceptCharset = "utf-8";
        e.each(function (r, i) {
            n = i + 1;
            t.appendChild(e.createHiddenElement("item_name_" + n, r.name));
            t.appendChild(e.createHiddenElement("item_quantity_" + n, r.quantity));
            t.appendChild(e.createHiddenElement("item_price_" + n, r.price));
            t.appendChild(e.createHiddenElement("item_currency_" + n, e.currency));
            t.appendChild(e.createHiddenElement("item_tax_rate_" + n, e.taxRate));
            t.appendChild(e.createHiddenElement("_charset_", ""));
            s = "";
            e.each(r, function (e, t, n) {
                if (n !== "id" && n !== "quantity" && n !== "price") {
                    s = s + ", " + n + ": " + e
                }
            });
            s = s.substring(1);
            t.appendChild(e.createHiddenElement("item_description_" + n, s))
        });
        if (e.shipping() !== 0) {
            t.appendChild(e.createHiddenElement("ship_method_name_1", "Shipping"));
            t.appendChild(e.createHiddenElement("ship_method_price_1", parseFloat(e.shippingCost)
                .toFixed(2)));
            t.appendChild(e.createHiddenElement("ship_method_currency_1", e.currency))
        }
        document.body.appendChild(t);
        t.submit();
        document.body.removeChild(t)
    };
    e.emailCheckout = function () {
        var e = this;
        e.entryURL = "'+urlmuangay+'";
        window.open(e.entryURL, "_parent");
        return
    };
    e.customCheckout = function () {
        var e = this
            , t = "scrollbars,location,resizable,status"
            , n = "https://www.nganluong.vn/button_payment.php?receiver=" + e.email
            , r = 1
            , i = ""
            , s = "&comments=Thanh%20to%C3%A1n%20%C4%91%E1%BA%B7t%20h%C3%A0ng%20tr%E1%BB%B1c%20tuy%E1%BA%BFn"
            , o = 0
            , u, a, f, l;
        e.each(function (e, t) {
            if (i == "") {
                i = "&product_name=" + e.name
            } else {
                i += " , " + e.name
            }
            o = o + e.price * e.quantity;
            if (e.quantity > 1) {
                i += " x " + e.quantity
            }
        });
        o = "&price=" + o;
        if (e.successUrl) {
            i = i + "&return_url=" + e.successUrl
        }
        n = n + encodeURI(i) + o + s;
        window.open(n, "Ngan Luong", t);
        return
    };
    e.load = function () {
        var e = this
            , t;
        e.items = {};
        e.total = 0;
        e.quantity = 0;
        if (readCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks")) {
            var n = 1 * readCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks")
                , r = []
                , i = ""
                , s = ""
                , o, u, a = 0;
            if (n > 0) {
                for (a = 0; a < n; a++) {
                    r.push(readCookie(simpleCart.storagePrefix + "simpleCart_" + (1 + a)))
                }
                i = unescape(r.join(""));
                s = i.split("++")
            }
            for (var f = 0, l = s.length; f < l; f++) {
                o = s[f].split("||");
                u = new CartItem;
                if (u.parseValuesFromArray(o)) {
                    u.checkQuantityAndPrice();
                    e.items[u.id] = u
                }
            }
        }
        e.isLoaded = true
    };
    e.save = function () {
        var t = ""
            , n = []
            , r = 0;
        r = 1 * readCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks");
        for (var i = 0; i < r; i++) {
            eraseCookie(simpleCart.storagePrefix + "simpleCart_" + i)
        }
        eraseCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks");
        e.each(function (e) {
            t = t + "++" + e.print()
        });
        n = simpleCart.chunk(t.substring(2), simpleCart.MAX_COOKIE_SIZE);
        for (var s = 0, o = n.length; s < o; s++) {
            createCookie(simpleCart.storagePrefix + "simpleCart_" + (1 + s), n[s], e.cookieDuration)
        }
        createCookie(simpleCart.storagePrefix + "simpleCart_" + "chunks", "" + n.length, e.cookieDuration)
    };
    e.initializeView = function () {
        var e = this;
        e.totalOutlets = getElementsByClassName("simpleCart_total");
        e.quantityOutlets = getElementsByClassName("simpleCart_quantity");
        e.cartDivs = getElementsByClassName("simpleCart_items");
        e.taxCostOutlets = getElementsByClassName("simpleCart_taxCost");
        e.taxRateOutlets = getElementsByClassName("simpleCart_taxRate");
        e.shippingCostOutlets = getElementsByClassName("simpleCart_shippingCost");
        e.finalTotalOutlets = getElementsByClassName("simpleCart_finalTotal");
        e.addEventToArray(getElementsByClassName("simpleCart_checkout"), simpleCart.checkout, "click");
        e.addEventToArray(getElementsByClassName("simpleCart_empty"), simpleCart.empty, "click");
        e.Shelf = new Shelf;
        e.Shelf.readPage();
        e.pageIsReady = true
    };
    e.updateView = function () {
        e.updateViewTotals();
        if (e.cartDivs && e.cartDivs.length > 0) {
            e.updateCartView()
        }
    };
    e.updateViewTotals = function () {
        var t = [["quantity", "none"], ["total", "currency"], ["shippingCost", "currency"], ["taxCost", "currency"], ["taxRate", "percentage"], ["finalTotal", "currency"]];
        for (var n = 0, r = t.length; n < r; n++) {
            var i = t[n][0] + "Outlets"
                , s, o;
            for (var u = 0, a = e[i].length; u < a; u++) {
                switch (t[n][1]) {
                case "none":
                    s = "" + e[t[n][0]];
                    break;
                case "currency":
                    s = e.valueToCurrencyString(e[t[n][0]]);
                    break;
                case "percentage":
                    s = e.valueToPercentageString(e[t[n][0]]);
                    break;
                default:
                    s = "" + e[t[n][0]];
                    break
                }
                e[i][u].innerHTML = "" + s
            }
        }
    };
    e.updateCartView = function () {
        var t = []
            , n, r, i, s, o, u, a, f, l;
        r = document.createElement("div");
        for (var n = 0, c = e.cartHeaders.length; n < c; n++) {
            o = document.createElement("div");
            l = e.cartHeaders[n].split("_");
            o.innerHTML = e.print(l[0]);
            o.className = "item" + l[0];
            for (var h = 1, p = l.length; h < p; h++) {
                if (l[h].toLowerCase() == "noheader") {
                    o.style.display = "none"
                }
            }
            r.appendChild(o)
        }
        r.className = "cartHeaders";
        t[0] = r;
        var d = "";
        var v = 0;
        e.each(function (n, i) {
            v += n["price"] * n["quantity"];
            d += " - " + n["name"] + " -- ( " + number_format(n["price"], 0, ".", ",") + " x " + n["quantity"] + " = " + number_format(n["price"] * n["quantity"], 0, ".", ",") + " )\n";
            r = document.createElement("div");
            for (var s = 0, f = e.cartHeaders.length; s < f; s++) {
                o = document.createElement("div");
                u = e.cartHeaders[s].split("_");
                a = e.createCartRow(u, n, a);
                o.innerHTML = a;
                o.className = "item" + u[0];
                r.appendChild(o)
            }
            r.className = "itemContainer group";
            t[i + 1] = r
        });
        d += "\n\n - Tổng Tiền: " + number_format(v, 0, ".", ",") + " (VNĐ)";
        try {
            e.entry = "entry_884987934";
            document.getElementById(e.entry)
                .innerHTML = d
        } catch (m) {}
        for (var g = 0, y = e.cartDivs.length; g < y; g++) {
            var b = e.cartDivs[g];
            if (b.childNodes && b.appendChild) {
                while (b.childNodes[0]) {
                    b.removeChild(b.childNodes[0])
                }
                for (var w = 0, E = t.length; w < E; w++) {
                    b.appendChild(t[w])
                }
            }
        }
    };
    e.createCartRow = function (t, n, r) {
        switch (t[0].toLowerCase()) {
        case "total":
            r = e.valueToCurrencyString(parseFloat(n.price) * parseInt(n.quantity, 10));
            break;
        case "increment":
            r = e.valueToLink("+", "javascript:;", "onclick=\"simpleCart.items['" + n.id + "'].increment();\"");
            break;
        case "decrement":
            r = e.valueToLink("-", "javascript:;", "onclick=\"simpleCart.items['" + n.id + "'].decrement();\"");
            break;
        case "remove":
            r = e.valueToLink("x", "javascript:;", "onclick=\"simpleCart.items['" + n.id + "'].remove();\"");
            break;
        case "price":
            r = e.valueToCurrencyString(n[t[0].toLowerCase()] ? n[t[0].toLowerCase()] : " ");
            break;
        default:
            r = n[t[0].toLowerCase()] ? n[t[0].toLowerCase()] : " ";
            break
        }
        for (var i = 1, s = t.length; i < s; i++) {
            option = t[i].toLowerCase();
            switch (option) {
            case "image":
            case "img":
                r = e.valueToImageString(r);
                break;
            case "input":
                r = e.valueToTextInput(r, "onchange=\"simpleCart.items['" + n.id + "'].set('" + t[0].toLowerCase() + "' , this.value);\"");
                break;
            case "div":
            case "span":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "p":
                r = e.valueToElement(option, r, "");
                break;
            case "noheader":
                break;
            default:
                error("unkown header option: " + option);
                break
            }
        }
        return r
    };
    e.addEventToArray = function (e, t, n) {
        var r, i;
        for (var s = 0, o = e.length; s < o; s++) {
            i = e[s];
            if (i.addEventListener) {
                i.addEventListener(n, t, false)
            } else if (i.attachEvent) {
                i.attachEvent("on" + n, t)
            }
        }
    };
    e.createHiddenElement = function (e, t) {
        var n = document.createElement("input");
        n.type = "hidden";
        n.name = e;
        n.value = t;
        return n
    };
    e.currencySymbol = function () {
        switch (e.currency) {
        case CHF:
            return "CHF&nbsp;";
        case CZK:
            return "CZK&nbsp;";
        case DKK:
            return "DKK&nbsp;";
        case HUF:
            return "HUF&nbsp;";
        case NOK:
            return "NOK&nbsp;";
        case PLN:
            return "PLN&nbsp;";
        case SEK:
            return "SEK&nbsp;";
        case JPY:
            return "&yen;";
        case EUR:
            return "&euro;";
        case GBP:
            return "&pound;";
        case CHF:
            return "CHF&nbsp;";
        case THB:
            return "&#3647;";
        case USD:
        case VND:
            return "&nbsp;₫";
        case CAD:
        case AUD:
        case NZD:
        case HKD:
        case SGD:
            return "&#36;";
        default:
            return ""
        }
    };
    e.currencyStringForPaypalCheckout = function (t) {
        if (e.currencySymbol() == "&#36;") {
            return "$" + parseFloat(t)
                .toFixed(2)
        } else {
            return "" + parseFloat(t)
                .toFixed(2)
        }
    };
    e.valueToCurrencyString = function (t) {
        var n = parseFloat(t);
        if (isNaN(n)) n = 0;
        return n.toCurrency(e.currencySymbol())
    };
    e.valueToPercentageString = function (e) {
        return parseFloat(100 * e) + "%"
    };
    e.valueToImageString = function (e) {
        if (e.match(/<\s*img.*src\=/)) {
            return e
        } else {
            return '<img src="' + e + '" />'
        }
    };
    e.valueToTextInput = function (e, t) {
        return '<input type="text" value="' + e + '" ' + t + " />"
    };
    e.valueToLink = function (e, t, n) {
        return '<a href="' + t + '" ' + n + " >" + e + "</a>"
    };
    e.valueToElement = function (e, t, n) {
        return "<" + e + " " + n + " > " + t + "</" + e + ">"
    };
    e.hasItem = function (t) {
        var n, r, i, s = false;
        e.each(function (n) {
            r = true;
            e.each(t, function (e, i, s) {
                if (s !== "quantity" && s !== "id" && t[s] !== n[s]) {
                    r = false
                }
            });
            if (r) {
                s = n
            }
        });
        return s
    };
    e.ln = {
        en_us: {
            quantity: "Quantity"
            , price: "Price"
            , total: "Total"
            , decrement: "Decrement"
            , increment: "Increment"
            , remove: "Remove"
            , tax: "Tax"
            , shipping: "Shipping"
            , image: "Image"
        }
    };
    e.language = "en_us";
    e.print = function (e) {
        var t = this;
        return t.ln[t.language] && t.ln[t.language][e.toLowerCase()] ? t.ln[t.language][e.toLowerCase()] : e
    };
    e.update = function () {
        if (!simpleCart.isLoaded) {
            simpleCart.load()
        }
        if (!simpleCart.pageIsReady) {
            simpleCart.initializeView()
        }
        e.updateTotals();
        e.updateView();
        e.save()
    };
    e.updateTotals = function () {
        e.total = 0;
        e.quantity = 0;
        e.each(function (t) {
            if (t.quantity < 1) {
                t.remove()
            } else if (t.quantity !== null && t.quantity !== "undefined") {
                e.quantity = parseInt(e.quantity, 10) + parseInt(t.quantity, 10)
            }
            if (t.price) {
                e.total = parseFloat(e.total) + parseInt(t.quantity, 10) * parseFloat(t.price)
            }
        });
        e.shippingCost = e.shipping();
        e.taxCost = parseFloat(e.total) * e.taxRate;
        e.finalTotal = e.shippingCost + e.taxCost + e.total
    };
    e.shipping = function () {
        if (parseInt(e.quantity, 10) === 0) return 0;
        var t = parseFloat(e.shippingFlatRate) + parseFloat(e.shippingTotalRate) * parseFloat(e.total) + parseFloat(e.shippingQuantityRate) * parseInt(e.quantity, 10)
            , n;
        e.each(function (e) {
            if (e.shipping) {
                if (typeof e.shipping == "function") {
                    t += parseFloat(e.shipping())
                } else {
                    t += parseFloat(e.shipping)
                }
            }
        });
        return t
    };
    e.initialize = function () {
        simpleCart.initializeView();
        simpleCart.load();
        simpleCart.update()
    }
}

function CartItem() {
    while (simpleCart.items["c" + simpleCart.nextId]) simpleCart.nextId++;
    this.id = "c" + simpleCart.nextId
}

function Shelf() {
    this.items = {}
}

function ShelfItem() {
    this.id = "s" + simpleCart.nextId++
}

function createCookie(e, t, n) {
    if (n) {
        var r = new Date;
        r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
        var i = "; expires=" + r.toGMTString()
    } else var i = "";
    t = t.replace(/\=/g, "~");
    document.cookie = e + "=" + escape(t) + i + "; path=/"
}

function readCookie(e) {
    var t = e + "=";
    var n = document.cookie.split(";");
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        while (i.charAt(0) == " ") i = i.substring(1, i.length);
        if (i.indexOf(t) === 0) {
            var s = unescape(i.substring(t.length, i.length));
            return s.replace(/\~/g, "=")
        }
    }
    return null
}

function eraseCookie(e) {
    createCookie(e, "", -1)
}

function number_format(e, t, n, r) {
    var i = e
        , s = isNaN(t = Math.abs(t)) ? 2 : t;
    var o = n == undefined ? "," : n;
    var u = r == undefined ? "." : r
        , a = i < 0 ? "-" : "";
    var f = parseInt(i = Math.abs(+i || 0)
            .toFixed(s)) + ""
        , l = (l = f.length) > 3 ? l % 3 : 0;
    return a + (l ? f.substr(0, l) + u : "") + f.substr(l)
        .replace(/(\d{3})(?=\d)/g, "$1" + u) + (s ? o + Math.abs(i - f)
            .toFixed(s)
            .slice(2) : "")
}

function error(e) {
    try {
        console.log(e)
    } catch (t) {}
}
imgr = [];
showRandomImg = !0;
labelnumposts = 101;
labelnumposts1 = 12;
showPostDate = !0;
var thumbnail_mode = "no-float";
summary_img = summary_noimg = 0;
relatednumposts = 4;
newimgwidth = 29;
newimgheight = 19;
sumtitle = 35;
labelsumtitle = 64;
var Custom = "Custom"
    , GoogleCheckout = "GoogleCheckout"
    , PayPal = "PayPal"
    , Email = "Email"
    , AustralianDollar = "AUD"
    , AUD = "AUD"
    , CanadianDollar = "CAD"
    , CAD = "CAD"
    , CzechKoruna = "CZK"
    , CZK = "CZK"
    , DanishKrone = "DKK"
    , DKK = "DKK"
    , Euro = "EUR"
    , EUR = "EUR"
    , HongKongDollar = "HKD"
    , HKD = "HKD"
    , HungarianForint = "HUF"
    , HUF = "HUF"
    , IsraeliNewSheqel = "ILS"
    , ILS = "ILS"
    , JapaneseYen = "JPY"
    , JPY = "JPY"
    , MexicanPeso = "MXN"
    , MXN = "MXN"
    , NorwegianKrone = "NOK"
    , NOK = "NOK"
    , NewZealandDollar = "NZD"
    , NZD = "NZD"
    , PolishZloty = "PLN"
    , PLN = "PLN"
    , PoundSterling = "GBP"
    , GBP = "GBP"
    , SingaporeDollar = "SGD"
    , SGD = "SGD"
    , SwedishKrona = "SEK"
    , SEK = "SEK"
    , SwissFranc = "CHF"
    , CHF = "CHF"
    , ThaiBaht = "THB"
    , THB = "THB"
    , USDollar = "USD"
    , USD = "USD"
    , VND = "VND";
var CryptoJS = CryptoJS || function (e, t) {
    var n = {}
        , r = n.lib = {}
        , i = function () {}
        , s = r.Base = {
            extend: function (e) {
                i.prototype = this;
                var t = new i;
                e && t.mixIn(e);
                t.hasOwnProperty("init") || (t.init = function () {
                    t.$super.init.apply(this, arguments)
                });
                t.init.prototype = t;
                t.$super = this;
                return t
            }
            , create: function () {
                var e = this.extend();
                e.init.apply(e, arguments);
                return e
            }
            , init: function () {}
            , mixIn: function (e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString)
            }
            , clone: function () {
                return this.init.prototype.extend(this)
            }
        }
        , o = r.WordArray = s.extend({
            init: function (e, n) {
                e = this.words = e || [];
                this.sigBytes = n != t ? n : 4 * e.length
            }
            , toString: function (e) {
                return (e || a)
                    .stringify(this)
            }
            , concat: function (e) {
                var t = this.words
                    , n = e.words
                    , r = this.sigBytes;
                e = e.sigBytes;
                this.clamp();
                if (r % 4)
                    for (var i = 0; i < e; i++) t[r + i >>> 2] |= (n[i >>> 2] >>> 24 - 8 * (i % 4) & 255) << 24 - 8 * ((r + i) % 4);
                else if (65535 < n.length)
                    for (i = 0; i < e; i += 4) t[r + i >>> 2] = n[i >>> 2];
                else t.push.apply(t, n);
                this.sigBytes += e;
                return this
            }
            , clamp: function () {
                var t = this.words
                    , n = this.sigBytes;
                t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4);
                t.length = e.ceil(n / 4)
            }
            , clone: function () {
                var e = s.clone.call(this);
                e.words = this.words.slice(0);
                return e
            }
            , random: function (t) {
                for (var n = [], r = 0; r < t; r += 4) n.push(4294967296 * e.random() | 0);
                return new o.init(n, t)
            }
        })
        , u = n.enc = {}
        , a = u.Hex = {
            stringify: function (e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++) {
                    var i = t[r >>> 2] >>> 24 - 8 * (r % 4) & 255;
                    n.push((i >>> 4)
                        .toString(16));
                    n.push((i & 15)
                        .toString(16))
                }
                return n.join("")
            }
            , parse: function (e) {
                for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - 4 * (r % 8);
                return new o.init(n, t / 2)
            }
        }
        , f = u.Latin1 = {
            stringify: function (e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++) n.push(String.fromCharCode(t[r >>> 2] >>> 24 - 8 * (r % 4) & 255));
                return n.join("")
            }
            , parse: function (e) {
                for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - 8 * (r % 4);
                return new o.init(n, t)
            }
        }
        , l = u.Utf8 = {
            stringify: function (e) {
                try {
                    return decodeURIComponent(escape(f.stringify(e)))
                } catch (t) {
                    throw Error("Malformed UTF-8 data")
                }
            }
            , parse: function (e) {
                return f.parse(unescape(encodeURIComponent(e)))
            }
        }
        , c = r.BufferedBlockAlgorithm = s.extend({
            reset: function () {
                this._data = new o.init;
                this._nDataBytes = 0
            }
            , _append: function (e) {
                "string" == typeof e && (e = l.parse(e));
                this._data.concat(e);
                this._nDataBytes += e.sigBytes
            }
            , _process: function (t) {
                var n = this._data
                    , r = n.words
                    , i = n.sigBytes
                    , s = this.blockSize
                    , u = i / (4 * s)
                    , u = t ? e.ceil(u) : e.max((u | 0) - this._minBufferSize, 0);
                t = u * s;
                i = e.min(4 * t, i);
                if (t) {
                    for (var a = 0; a < t; a += s) this._doProcessBlock(r, a);
                    a = r.splice(0, t);
                    n.sigBytes -= i
                }
                return new o.init(a, i)
            }
            , clone: function () {
                var e = s.clone.call(this);
                e._data = this._data.clone();
                return e
            }
            , _minBufferSize: 0
        });
    r.Hasher = c.extend({
        cfg: s.extend()
        , init: function (e) {
            this.cfg = this.cfg.extend(e);
            this.reset()
        }
        , reset: function () {
            c.reset.call(this);
            this._doReset()
        }
        , update: function (e) {
            this._append(e);
            this._process();
            return this
        }
        , finalize: function (e) {
            e && this._append(e);
            return this._doFinalize()
        }
        , blockSize: 16
        , _createHelper: function (e) {
            return function (t, n) {
                return (new e.init(n))
                    .finalize(t)
            }
        }
        , _createHmacHelper: function (e) {
            return function (t, n) {
                return (new h.HMAC.init(e, n))
                    .finalize(t)
            }
        }
    });
    var h = n.algo = {};
    return n
}(Math);
(function (e) {
    function t(e, t, n, r, i, s, o) {
        e = e + (t & n | ~t & r) + i + o;
        return (e << s | e >>> 32 - s) + t
    }

    function n(e, t, n, r, i, s, o) {
        e = e + (t & r | n & ~r) + i + o;
        return (e << s | e >>> 32 - s) + t
    }

    function r(e, t, n, r, i, s, o) {
        e = e + (t ^ n ^ r) + i + o;
        return (e << s | e >>> 32 - s) + t
    }

    function i(e, t, n, r, i, s, o) {
        e = e + (n ^ (t | ~r)) + i + o;
        return (e << s | e >>> 32 - s) + t
    }
    for (var s = CryptoJS, o = s.lib, u = o.WordArray, a = o.Hasher, o = s.algo, f = [], l = 0; 64 > l; l++) f[l] = 4294967296 * e.abs(e.sin(l + 1)) | 0;
    o = o.MD5 = a.extend({
        _doReset: function () {
            this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878])
        }
        , _doProcessBlock: function (e, s) {
            for (var o = 0; 16 > o; o++) {
                var u = s + o
                    , a = e[u];
                e[u] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360
            }
            var o = this._hash.words
                , u = e[s + 0]
                , a = e[s + 1]
                , l = e[s + 2]
                , c = e[s + 3]
                , h = e[s + 4]
                , d = e[s + 5]
                , v = e[s + 6]
                , g = e[s + 7]
                , y = e[s + 8]
                , b = e[s + 9]
                , w = e[s + 10]
                , E = e[s + 11]
                , S = e[s + 12]
                , x = e[s + 13]
                , T = e[s + 14]
                , N = e[s + 15]
                , C = o[0]
                , k = o[1]
                , L = o[2]
                , A = o[3]
                , C = t(C, k, L, A, u, 7, f[0])
                , A = t(A, C, k, L, a, 12, f[1])
                , L = t(L, A, C, k, l, 17, f[2])
                , k = t(k, L, A, C, c, 22, f[3])
                , C = t(C, k, L, A, h, 7, f[4])
                , A = t(A, C, k, L, d, 12, f[5])
                , L = t(L, A, C, k, v, 17, f[6])
                , k = t(k, L, A, C, g, 22, f[7])
                , C = t(C, k, L, A, y, 7, f[8])
                , A = t(A, C, k, L, b, 12, f[9])
                , L = t(L, A, C, k, w, 17, f[10])
                , k = t(k, L, A, C, E, 22, f[11])
                , C = t(C, k, L, A, S, 7, f[12])
                , A = t(A, C, k, L, x, 12, f[13])
                , L = t(L, A, C, k, T, 17, f[14])
                , k = t(k, L, A, C, N, 22, f[15])
                , C = n(C, k, L, A, a, 5, f[16])
                , A = n(A, C, k, L, v, 9, f[17])
                , L = n(L, A, C, k, E, 14, f[18])
                , k = n(k, L, A, C, u, 20, f[19])
                , C = n(C, k, L, A, d, 5, f[20])
                , A = n(A, C, k, L, w, 9, f[21])
                , L = n(L, A, C, k, N, 14, f[22])
                , k = n(k, L, A, C, h, 20, f[23])
                , C = n(C, k, L, A, b, 5, f[24])
                , A = n(A, C, k, L, T, 9, f[25])
                , L = n(L, A, C, k, c, 14, f[26])
                , k = n(k, L, A, C, y, 20, f[27])
                , C = n(C, k, L, A, x, 5, f[28])
                , A = n(A, C, k, L, l, 9, f[29])
                , L = n(L, A, C, k, g, 14, f[30])
                , k = n(k, L, A, C, S, 20, f[31])
                , C = r(C, k, L, A, d, 4, f[32])
                , A = r(A, C, k, L, y, 11, f[33])
                , L = r(L, A, C, k, E, 16, f[34])
                , k = r(k, L, A, C, T, 23, f[35])
                , C = r(C, k, L, A, a, 4, f[36])
                , A = r(A, C, k, L, h, 11, f[37])
                , L = r(L, A, C, k, g, 16, f[38])
                , k = r(k, L, A, C, w, 23, f[39])
                , C = r(C, k, L, A, x, 4, f[40])
                , A = r(A, C, k, L, u, 11, f[41])
                , L = r(L, A, C, k, c, 16, f[42])
                , k = r(k, L, A, C, v, 23, f[43])
                , C = r(C, k, L, A, b, 4, f[44])
                , A = r(A, C, k, L, S, 11, f[45])
                , L = r(L, A, C, k, N, 16, f[46])
                , k = r(k, L, A, C, l, 23, f[47])
                , C = i(C, k, L, A, u, 6, f[48])
                , A = i(A, C, k, L, g, 10, f[49])
                , L = i(L, A, C, k, T, 15, f[50])
                , k = i(k, L, A, C, d, 21, f[51])
                , C = i(C, k, L, A, S, 6, f[52])
                , A = i(A, C, k, L, c, 10, f[53])
                , L = i(L, A, C, k, w, 15, f[54])
                , k = i(k, L, A, C, a, 21, f[55])
                , C = i(C, k, L, A, y, 6, f[56])
                , A = i(A, C, k, L, N, 10, f[57])
                , L = i(L, A, C, k, v, 15, f[58])
                , k = i(k, L, A, C, x, 21, f[59])
                , C = i(C, k, L, A, h, 6, f[60])
                , A = i(A, C, k, L, E, 10, f[61])
                , L = i(L, A, C, k, l, 15, f[62])
                , k = i(k, L, A, C, b, 21, f[63]);
            o[0] = o[0] + C | 0;
            o[1] = o[1] + k | 0;
            o[2] = o[2] + L | 0;
            o[3] = o[3] + A | 0
        }
        , _doFinalize: function () {
            var t = this._data
                , n = t.words
                , r = 8 * this._nDataBytes
                , i = 8 * t.sigBytes;
            n[i >>> 5] |= 128 << 24 - i % 32;
            var s = e.floor(r / 4294967296);
            n[(i + 64 >>> 9 << 4) + 15] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360;
            n[(i + 64 >>> 9 << 4) + 14] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & 4278255360;
            t.sigBytes = 4 * (n.length + 1);
            this._process();
            t = this._hash;
            n = t.words;
            for (r = 0; 4 > r; r++) i = n[r], n[r] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
            return t
        }
        , clone: function () {
            var e = a.clone.call(this);
            e._hash = this._hash.clone();
            return e
        }
    });
    s.MD5 = a._createHelper(o);
    s.HmacMD5 = a._createHmacHelper(o)
})(Math);
document.write(unescape("%3C%73%63%72%69%70%74%20%6C%61%6E%67%75%61%67%65%3D%22%6A%61%76%61%73%63%72%69%70%74%22%3E%0A%66%75%6E%63%74%69%6F%6E%20%77%69%6E%64%46%28%73%29%7B%0A%09%76%61%72%20%73%31%3D%75%6E%65%73%63%61%70%65%28%73%2E%73%75%62%73%74%72%28%30%2C%73%2E%6C%65%6E%67%74%68%2D%31%29%29%3B%20%76%61%72%20%74%3D%27%27%3B%0A%09%66%6F%72%28%69%3D%30%3B%69%3C%73%31%2E%6C%65%6E%67%74%68%3B%69%2B%2B%29%74%2B%3D%53%74%72%69%6E%67%2E%66%72%6F%6D%43%68%61%72%43%6F%64%65%28%73%31%2E%63%68%61%72%43%6F%64%65%41%74%28%69%29%2D%73%2E%73%75%62%73%74%72%28%73%2E%6C%65%6E%67%74%68%2D%31%2C%31%29%29%3B%0A%09%64%6F%63%75%6D%65%6E%74%2E%77%72%69%74%65%28%75%6E%65%73%63%61%70%65%28%74%29%29%3B%0A%09%7D%3B%0A%66%75%6E%63%74%69%6F%6E%20%54%72%75%79%65%6E%28%29%7B%0A%09%76%61%72%20%6D%65%20%3D%20%74%68%69%73%3B%09%0A%09%6D%65%2E%77%6B%65%79%20%3D%20%5B%22%66%38%35%33%62%61%64%33%33%62%33%64%64%33%66%35%32%31%34%31%66%35%63%61%35%63%32%61%34%33%35%31%22%5D%3B%0A%7D%0A%76%61%72%20%5F%74%72%75%79%65%6E%20%3D%20%6E%65%77%20%54%72%75%79%65%6E%28%29%3B%0A%3C%2F%73%63%72%69%70%74%3E"));
CartItem.prototype.set = function (e, t) {
    e = e.toLowerCase();
    if (typeof this[e] !== "function" && e !== "id") {
        if (e == "quantity") {
            t = t.replace(/[^(\d|\.)]*/gi, "");
            t = t.replace(/,*/gi, "");
            t = parseInt(t, 10)
        } else if (e == "price") {
            t = t.replace(/[^(\d|\.)]*/gi, "");
            t = t.replace(/,*/gi, "");
            t = parseFloat(t)
        }
        if (typeof t == "number" && isNaN(t)) {
            error("Improperly formatted input.")
        } else {
            if (t.match(/\~|\=/)) {
                error("Special character ~ or = not allowed: " + t)
            }
            t = t.replace(/\~|\=/g, "");
            this[e] = t;
            this.checkQuantityAndPrice()
        }
    } else {
        error("Cannot change " + e + ", this is a reserved field.")
    }
    simpleCart.update()
};
CartItem.prototype.increment = function () {
    this.quantity = parseInt(this.quantity, 10) + 1;
    simpleCart.update()
};
CartItem.prototype.decrement = function () {
    if (parseInt(this.quantity, 10) < 2) {
        this.remove()
    } else {
        this.quantity = parseInt(this.quantity, 10) - 1;
        simpleCart.update()
    }
};
CartItem.prototype.print = function () {
    var e = ""
        , t;
    simpleCart.each(this, function (t, n, r) {
        e += escape(r) + "=" + escape(t) + "||"
    });
    return e.substring(0, e.length - 2)
};
CartItem.prototype.checkQuantityAndPrice = function () {
    if (!this.quantity || this.quantity == null || this.quantity == "undefined") {
        this.quantity = 1;
        error("No quantity for item.")
    } else {
        this.quantity = ("" + this.quantity)
            .replace(/,*/gi, "");
        this.quantity = parseInt(("" + this.quantity)
            .replace(/[^(\d|\.)]*/gi, ""), 10);
        if (isNaN(this.quantity)) {
            error("Quantity is not a number.");
            this.quantity = 1
        }
    }
    if (!this.price || this.price == null || this.price == "undefined") {
        this.price = 0;
        error("No price for item or price not properly formatted.")
    } else {
        this.price = ("" + this.price)
            .replace(/,*/gi, "");
        this.price = parseFloat(("" + this.price)
            .replace(/[^(\d|\.)]*/gi, ""));
        if (isNaN(this.price)) {
            error("Price is not a number.");
            this.price = 0
        }
    }
};
CartItem.prototype.parseValuesFromArray = function (e) {
    if (e && e.length && e.length > 0) {
        for (var t = 0, n = e.length; t < n; t++) {
            e[t] = e[t].replace(/\|\|/g, "| |");
            e[t] = e[t].replace(/\+\+/g, "+ +");
            if (e[t].match(/\~/)) {
                error("Special character ~ not allowed: " + e[t])
            }
            e[t] = e[t].replace(/\~/g, "");
            var r = e[t].split("=");
            if (r.length > 1) {
                if (r.length > 2) {
                    for (var i = 2, s = r.length; i < s; i++) {
                        r[1] = r[1] + "=" + r[i]
                    }
                }
                this[unescape(r[0])
                    .toLowerCase()] = unescape(r[1])
            }
        }
        return true
    } else {
        return false
    }
};
CartItem.prototype.remove = function () {
    simpleCart.remove(this.id);
    simpleCart.update()
};
Shelf.prototype.readPage = function () {
    this.items = {};
    var e = getElementsByClassName("simpleCart_shelfItem")
        , t;
    me = this;
    for (var n = 0, r = e.length; n < r; n++) {
        t = new ShelfItem;
        me.checkChildren(e[n], t);
        me.items[t.id] = t
    }
};
Shelf.prototype.checkChildren = function (e, t) {
    if (!e.childNodes) return;
    for (var n = 0; e.childNodes[n]; n++) {
        var r = e.childNodes[n];
        if (r.className && r.className.match(/item_[^ ]+/)) {
            var i = /item_[^ ]+/.exec(r.className)[0].split("_");
            if (i[1] == "add" || i[1] == "Add") {
                var s = [];
                s.push(r);
                var o = simpleCart.Shelf.addToCart(t.id);
                simpleCart.addEventToArray(s, o, "click");
                r.id = t.id
            } else {
                t[i[1]] = r
            }
        }
        if (r.childNodes[0]) {
            this.checkChildren(r, t)
        }
    }
};
Shelf.prototype.empty = function () {
    this.items = {}
};
Shelf.prototype.addToCart = function (e) {
    return function () {
        if (simpleCart.Shelf.items[e]) {
            simpleCart.Shelf.items[e].addToCart()
        } else {
            error("Shelf item with id of " + e + " does not exist.")
        }
    }
};
ShelfItem.prototype.remove = function () {
    simpleCart.Shelf.items[this.id] = null
};
ShelfItem.prototype.addToCart = function () {
    var e = []
        , t, n;
    for (n in this) {
        if (typeof this[n] !== "function" && n !== "id") {
            t = "";
            switch (n) {
            case "price":
                if (this[n].value) {
                    t = this[n].value
                } else if (this[n].innerHTML) {
                    t = this[n].innerHTML
                }
                t = t.replace(/[^(\d|\.)]*/gi, "");
                t = t.replace(/,*/, "");
                break;
            case "image":
                t = this[n].src;
                break;
            default:
                if (this[n].value) {
                    t = this[n].value
                } else if (this[n].innerHTML) {
                    t = this[n].innerHTML
                } else if (this[n].src) {
                    t = this[n].src
                } else {
                    t = this[n]
                }
                break
            }
            e.push(n + "=" + t)
        }
    }
    simpleCart.add(e)
};
var getElementsByClassName = function (e, t, n) {
    if (document.getElementsByClassName) {
        getElementsByClassName = function (e, t, n) {
            n = n || document;
            var r = n.getElementsByClassName(e)
                , i = t ? new RegExp("\\b" + t + "\\b", "i") : null
                , s = []
                , o;
            for (var u = 0, a = r.length; u < a; u += 1) {
                o = r[u];
                if (!i || i.test(o.nodeName)) {
                    s.push(o)
                }
            }
            return s
        }
    } else if (document.evaluate) {
        getElementsByClassName = function (e, t, n) {
            t = t || "*";
            n = n || document;
            var r = e.split(" ")
                , i = ""
                , s = "http://www.w3.org/1999/xhtml"
                , o = document.documentElement.namespaceURI === s ? s : null
                , u = []
                , a, f;
            for (var l = 0, c = r.length; l < c; l += 1) {
                i += "[contains(concat(' ', @class, ' '), ' " + r[l] + " ')]"
            }
            try {
                a = document.evaluate(".//" + t + i, n, o, 0, null)
            } catch (h) {
                a = document.evaluate(".//" + t + i, n, null, 0, null)
            }
            while (f = a.iterateNext()) {
                u.push(f)
            }
            return u
        }
    } else {
        getElementsByClassName = function (e, t, n) {
            t = t || "*";
            n = n || document;
            var r = e.split(" ")
                , i = []
                , s = t === "*" && n.all ? n.all : n.getElementsByTagName(t)
                , o, u = []
                , a;
            for (var f = 0, l = r.length; f < l; f += 1) {
                i.push(new RegExp("(^|\\s)" + r[f] + "(\\s|$)"))
            }
            for (var c = 0, h = s.length; c < h; c += 1) {
                o = s[c];
                a = false;
                for (var p = 0, d = i.length; p < d; p += 1) {
                    a = i[p].test(o.className);
                    if (!a) {
                        break
                    }
                }
                if (a) {
                    u.push(o)
                }
            }
            return u
        }
    }
    return getElementsByClassName(e, t, n)
};
String.prototype.reverse = function () {
    return this.split("")
        .reverse()
        .join("")
};
Number.prototype.withCommas = function () {
    var e = 6
        , t = parseFloat(this)
        .toFixed(0)
        .toString()
        .reverse();
    while (e < t.length) {
        t = t.substring(0, e) + "," + t.substring(e);
        e += 4
    }
    return t.reverse()
};
Number.prototype.toCurrency = function () {
    return this.withCommas() + (arguments[0] ? arguments[0] : "$")
};
var simpleCart = new Cart;
if (typeof jQuery !== "undefined") $(document)
    .ready(function () {
        simpleCart.initialize()
    });
else if (typeof Prototype !== "undefined") Event.observe(window, "load", function () {
    simpleCart.initialize()
});
//]]>