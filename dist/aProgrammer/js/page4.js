/**
 * Created by Administrator on 2016/3/13.
 */
(function () {
    var mail = document.getElementById("mail");
    var qq = document.getElementById("qq");
    var weibo = document.getElementById("weibo");
    var weixin = document.getElementById("weixin");

    var mailNode = document.createElement("span");
    mailNode.innerHTML = "wuzhoubo@yeah.net";
    mailNode.setAttribute("id","mailNode");
    mailNode.style.position  = "absolute";
    mailNode.style.zIndex = "99";
    mailNode.style.backgroundColor = "#000";

    var qqNode = document.createElement("span");
    qqNode.innerHTML = "625426323";
    qqNode.setAttribute("id","qqNode");
    qqNode.style.position  = "absolute";
    qqNode.style.zIndex = "99";
    qqNode.style.backgroundColor = "#000";

    var weiboNode = document.createElement("span");
    weiboNode.innerHTML = "21ftd";
    weiboNode.setAttribute("id","weiboNode");
    weiboNode.style.position  = "absolute";
    weiboNode.style.zIndex = "99";
    weiboNode.style.backgroundColor = "#000";

    var weixinNode = document.createElement("span");
    weixinNode.innerHTML = "吴舟波";
    weixinNode.setAttribute("id","weixinNode");
    weixinNode.style.position  = "absolute";
    weixinNode.style.zIndex = "99";
    weixinNode.style.backgroundColor = "#000";

    mail.onmousemove = function (e) {
        e = e || event;
        insertAfter(mailNode,mail);
        mailNode.style.left = e.clientX - 400 + 'px';
        mailNode.style.top = e.clientY + 'px';
        mailNode.style.display = "inline-block";
    }
    qq.onmousemove = function (e) {
        e = e || event;
        insertAfter(qqNode,mail);
        qqNode.style.left = e.clientX - 400 + 'px';
        qqNode.style.top = e.clientY + 'px';
        qqNode.style.display = "inline-block";
    }
    weibo.onmousemove = function (e) {
        e = e || event;
        insertAfter(weiboNode,mail);
        weiboNode.style.left = e.clientX - 400 + 'px';
        weiboNode.style.top = e.clientY + 'px';
        weiboNode.style.display = "inline-block";
    }
    weixin.onmousemove = function (e) {
        e = e || event;
        insertAfter(weixinNode,mail);
        weixinNode.style.left = e.clientX - 400 + 'px';
        weixinNode.style.top = e.clientY  + 'px';
        weixinNode.style.display = "inline-block";
    }


    mail.onmouseout = function () {
        mailNode.style.display = "none";
    }
    qq.onmouseout = function () {
        qqNode.style.display = "none";
    }
    weibo.onmouseout = function () {
        weiboNode.style.display = "none";
    }
    weixin.onmouseout = function () {
        weixinNode.style.display = "none";
    }
}())

function insertAfter(newElement,targetElement) {   //节点后插入节点
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}