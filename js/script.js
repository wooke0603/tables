;(function($){
    $(function(){
        // .menubtn 클릭시 할 일. 
        $('.menubtn').click(function(){
            // #gnb 클릭시 menuon 클래스 추가
            $('#gnb').addClass('menuon');
        });

        //#gnb button 클릭시 할 일.
        $('#gnb button').click(function(){
            //#gnb 클릭시 menuon 클래스 삭제
            $('#gnb').removeClass('menuon');
        });


    });
})(jQuery);