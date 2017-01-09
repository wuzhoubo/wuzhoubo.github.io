/**
 * Created by pc on 2017/1/5.
 */

$.fn.downTree = function(data){
    var _this = this;
    var flagTreeDiv;
    var method = {
        createTree:function(treeId,treeBox,objBox){
            var setting = {
                callback: {
                    beforeClick: function(treeId, treeNode, clickFlag){
                        objBox.hide();
                        _this.val(treeNode.name);
                    }
                }
            };
            $.fn.zTree.init($("#"+treeBox), setting, data);
        },
        createTreeBox:function(){
            var obj = _this;
            var objId = _this.attr("id")||_this.attr("class")||"my";
            obj.css("position","relative");
            obj.after("<div class='treeBox'><div id='"+objId+"Tree'></div></div>");
            var objBox = obj.next(".treeBox");
            var objTree = objBox.find("#"+objId+"Tree");
            var w = obj[0].clientWidth;   //input的宽度
            var l = obj[0].offsetLeft;
            objBox.css({
                "width":w,
                "position":"absolute",
                "left":l,
                "background-color":"#FFF",
                "box-sizing":"border-box",
                "border":"1px solid #ccc",
                "display":"block",
                "z-index":9999
            });
            objTree.addClass("ztree");
            method.createTree("tree1",objId+"Tree",objBox);
            flagTreeDiv = objBox;
        },
        init:function(){
            if(_this.next(".treeBox").length==0){
                method.createTreeBox();
            }else{
                _this.next(".treeBox").show();
            }
        }
    }
    $(document).on("click",function(e){
        if($(e.toElement)[0].outerHTML==$(_this)[0].outerHTML) {
            method.init();
        }else if($(e.toElement).parents(".treeBox").length==1){
        }else{
            if(flagTreeDiv){
                flagTreeDiv.hide();
            }
        }
    });
}