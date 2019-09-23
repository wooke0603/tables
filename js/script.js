;(function($){
    $(function(){

        $('.menubtn').click(function(){
            $('#gnb').addClass('menuon');
        });

        $('#gnb button').click(function(){
            $('#gnb').removeClass('menuon');
        });


    });
})(jQuery);