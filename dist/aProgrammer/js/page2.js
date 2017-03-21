/**
 * Created by Administrator on 2016/3/12.
 */
function choiceTextPage() {
    var page2List = getByClass("page2-list");
    var page2Txt = getByClass("page2Txt");
    for (var i = 0; i < page2List.length; i++) {
        page2List[i].onclick = function () {
            for (var j = 0; j < page2Txt.length; j++) {
                page2Txt[j].style.display = "none";
                page2Txt[j].style.right = "-850px";
                page2Txt[j].style.opacity = "0";

            }
            var tagN = getTag(this);
            page2Txt[tagN].style.display = "block";
            Move(page2Txt[tagN], {"right": 0, "opacity": 100});
        }
    }
}

function getTag(obj) {  //获取关键字
    var tag = obj.getAttribute("id");
    return tag.charAt(4);
}

function Move(obj, json, fn) {
    var flag = true;//标志所有运动是否到达目标值
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        for (var attr in json) {
            var curr = 0;
//判断是否为透明度
            if (attr == 'opacity') {
                curr = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                curr = parseInt(getStyle(obj, attr));
            }
//移动速度处理
            var speed = 0;
            speed = (json[attr] - curr) / 20;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (curr != json[attr]) {
                flag = false;
            }
            if (attr == 'opacity') {
                obj.style.filter = 'alpha(opacity:' + (curr + speed) + ")";
                obj.style.opacity = (curr + speed) / 100;
            } else {
                obj.style[attr] = curr + speed + 'px';
            }

        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fu();
            }
        }


    }, 30);
}
//取样式
function getStyle(obj, attr) {
    if (obj.currentStyle) {//IE取样式
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }

}