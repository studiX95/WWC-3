$( document ).ready(function() {
    
    var $open = jQuery('.open-menu:eq(0)');
    var $close = jQuery('.close-menu:eq(0)');
    var $menu = jQuery('.menu:eq(0)');
    
    $open.click(function(){
       $menu.css('display','block');
    });
    
    $close.click(function(){
       $menu.css('display','none');
    });
    
});