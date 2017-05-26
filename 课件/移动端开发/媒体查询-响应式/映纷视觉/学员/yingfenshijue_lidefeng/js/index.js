/**
 * Created by Administrator on 2017/5/19.
 */
$(function(){
    onload = function (){
        var swiperIndexPre;
        var swiper = new Swiper('.swiper_container', {
            autoplay: 4000,
            speed: 800,
            loop: true,
            autoplayDisableOnInteraction: false,
            direction: "horizontal",
            pagination: ".swiper_pages",
            paginationClickable: true,
            prevButton: ".swiper-button-prev",
            nextButton: ".swiper-button-next",
            onSlideChangeStart: function (swiper){
                var index = (swiper.activeIndex - 1) % $(".pics_info > div").size();
                $(".pics_info > div").eq(index).css({
                    "transition": "bottom 1s",
                    "bottom": 0
                });
                $(".pics_info > div").eq(swiperIndexPre).css({
                    "transition": "bottom 0s",
                    "bottom": "-1.75rem"
                });
                swiperIndexPre = index;
            }
        });
        function resizeCard(){
            var cards = document.querySelectorAll(".main_card");
            for(var i = 0; i < cards.length; i++){
                cards[i].style.height = cards[i].offsetWidth * 0.672 + "px";
            }
        }
        resizeCard();
        window.onresize = function (){
            resizeCard();
        }
    };
    $(".main_nav > a").on("click", function (ev){
        $(".main_nav > a").css("color", "#898989");
        $(this).css("color", "#fff");
        // console.log(document.getElementById($(this).attr("aId")).offsetTop);
        // console.log( $("body").scrollTop());
        // $("html, body").animate({
        //     "scroll-top": document.getElementById($(this).attr("aId")).offsetTop
        // }, 1000, "swing");
    });
});