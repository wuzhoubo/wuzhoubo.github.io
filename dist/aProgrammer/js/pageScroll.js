/**
 * Created by Administrator on 2016/3/11.
 */
window.onload = function () {
    var st_1 = document.getElementById("st-container-1");
    var st_2 = document.getElementById("st-container-2");
    var st_3 = document.getElementById("st-container-3");
    var st_4 = document.getElementById("st-container-4");
    var downFly = getByClass("down-fly");
    var pages = getByClass("scroll_div");
    var knowMore = document.getElementById("knowMore");
    st_1.onclick = function () {
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.transform = "translateY(0%)";
        }
    }
    st_2.onclick = function () {
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.transform = "translateY(-102%)";
        }
    }
    st_3.onclick = function () {
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.transform = "translateY(-203%)";
        }
    }
    st_4.onclick = function () {
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.transform = "translateY(-305%)";
        }
    }
    knowMore.onclick = function () {
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.transform = "translateY(-102%)";
            st_2.checked = "checked";
        }
    }
    choiceTextPage();
    downFly[0].onclick = function () {
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.transform = "translateY(-102%)";
            st_2.checked = "checked";
        }
    }
    downFly[1].onclick = function () {
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.transform = "translateY(-203%)";
            st_3.checked = "checked";
        }
    }
    downFly[2].onclick = function () {
        for (var i = 0; i < pages.length; i++) {
            pages[i].style.transform = "translateY(-305%)";
            st_4.checked = "checked";
        }
    }

}

function getByClass(clsName,parent){
    var oParent=parent?document.getElementById(parent):document,
        eles=[],
        elements=oParent.getElementsByTagName('*');

    for(var i=0,l=elements.length;i<l;i++){
        if(elements[i].className==clsName){
            eles.push(elements[i]);
        }
    }
    return eles;
}