/**
 * Created by Administrator on 2016/3/12.
 */
var snowTimer = null;
$(function () {
    var container = $("#page3Content");
    visualWidth = container.width();
    visualHeight = container.height();
    var wordflakeURl = [
        'img/skills/Ajax.png',
        'img/skills/BootStrap.png',
        'img/skills/CSS.png',
        'img/skills/FW.png',
        'img/skills/HTML.png',
        'img/skills/jq.png',
        'img/skills/JS.png',
        'img/skills/PS.png'
    ]

    function snowflake() {
        var $flakeContainer = $('#wordflake');

        // 随机八张图
        function getImagesName() {
            return wordflakeURl[[Math.floor(Math.random() * 8)]];
        }

        // 创建一个雪花元素
        function createSnowBox() {
            var url = getImagesName();
            return $('<div class="wordbox" />').css({
                'width': 120,
                'height': 35,
                'position': 'absolute',
                'backgroundSize': 'cover',
                'zIndex': 100000,
                'top': '-30px',
                'backgroundImage': 'url(' + url + ')'
            }).addClass('snowRoll');
        }

        snowTimer = setInterval(function () {
            // 运动的轨迹
            var startPositionLeft = Math.random() * visualWidth - 100,
                startOpacity = 1,
                endPositionTop = visualHeight - 40,
                endPositionLeft = startPositionLeft - 100 + Math.random() * 500,
                duration = visualHeight * 10 + Math.random() * 5000;

            // 随机透明度，不小于0.5
            var randomStart = Math.random();
            randomStart = randomStart < 0.5 ? startOpacity : randomStart;

            // 创建一个雪花
            var $flake = createSnowBox();

            // 设计起点位置
            $flake.css({
                left: startPositionLeft,
                opacity: randomStart
            });

            // 加入到容器
            $flakeContainer.append($flake);

            // 开始执行动画
            $flake.transition({
                top: endPositionTop,
                left: endPositionLeft,
                opacity: 0.7
            }, duration, 'ease-out', function () {
                $(this).remove();//结束后删除
            });

        }, 500);
    }

    //开始
    $("#st-container-3").click(function () {
        clearInterval(snowTimer);
        snowflake();
    })

    $("#scroll_1").on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
        if (delta < 0) {
                $(".scroll_div").css("transform","translateY(-102%)");
                $("#st-container-2").attr("checked","checked");
        }
    });
    $("#scroll_2").on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
        if(delta>0){
            $(".scroll_div").css("transform","translateY(0%)");
            $("#st-container-1").attr("checked","checked");
        }
        if (delta < 0) {
            $(".scroll_div").css("transform","translateY(-203%)");
            $("#st-container-3").attr("checked","checked");
            clearInterval(snowTimer);
            snowflake();
        }
    });
    $("#scroll_3").on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
        if(delta>0){
            $(".scroll_div").css("transform","translateY(-102%)");
            $("#st-container-2").attr("checked","checked");
        }
        if (delta < 0) {
            $(".scroll_div").css("transform","translateY(-305%)");
            $("#st-container-4").attr("checked","checked");
        }
    });
    $("#scroll_4").on("mousewheel DOMMouseScroll", function (e) {
        var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
            (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
        if (delta > 0) {
            $(".scroll_div").css("transform","translateY(-203%)");
            $("#st-container-3").attr("checked","checked");
            clearInterval(snowTimer);
            snowflake();
        }
    });
});