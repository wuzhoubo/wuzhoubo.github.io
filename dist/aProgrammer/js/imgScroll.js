/**
 * Created by Administrator on 2016/3/12.
 */
(function () {
    var imgBox = document.getElementById("img-box");
    var ico = document.getElementById("ico");
    var imgLinks = ico.getElementsByTagName("a");
    var timer = null;
    var now = 0;

    function tab() {
        var imgBoxLeft = parseInt(getStyle(imgBox, "left"));
        now = -(imgBoxLeft - 450) / 450;
        now = now < 4 ? now : 0;
        for (var i = 0; i < imgLinks.length; i++) {
            imgLinks[i].className = "";
        }
        imgLinks[now].className = "active";
    }

    timer = setInterval(function () {
        var imgBoxLeft = parseInt(getStyle(imgBox, "left"));
        if (imgBoxLeft < (-900)) {
            imgBoxLeft = 450;
        }
        imgBox.style.left = (imgBoxLeft - 450) + "px";
        tab();
    }, 3000);
}());

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}