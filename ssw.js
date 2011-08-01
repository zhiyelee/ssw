/*
 * Filename:         ssw.js
 *
 * Web:              http://tsnrose.com/
 * Source:           https://github.com/zhiyelee/ssw
 * Author:           zhiyelee  http://tsnrose.com/
 */
$(function(){

$('a#nav_switch').click(function(){
    $('.cmn_nav_con').toggle();
});

     rm_bottom_ads();
     rm_bottom_info();
     resize_main_area();
     move_sidebar();
 chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.action == "sswModeOptionUpdated") {
        // Handle options changes
        localStorage.setItem('ssw_list_mode',request.mode);
      } 
    });     
});
var rm_bottom_ads = function(){
    $('#ads_bottom_1').css('display','none');
};
var rm_bottom_info = function(){
    $('#bottomborder').css('display','none');
};
var resize_main_area = function(){
    inject_css();
    var mode = 'normal';
    mode = localStorage.getItem('ssw_list_mode');
    mode = mode || 'normal';
    if ( mode === 'normal' ){
        $('.MIB_blogbody').css('padding-right',$('.cmn_nav').width() + 20);
    }else{
        $('a#nav_switch').trigger('click');
    }
    /*
    $('.MIB_blogbody').css({'width' : '100%','margin' : '0'});
    var main = $('.MIB_blogbody').width();
    var mainR = $('.mainR').width();
    $('.MIB_blogbody .mainL').width(main-mainR); 
    */
    /*$('.MIB_feed .MIB_feed_c').width($('.MIB_feed').width() - $('.MIB_feed .head_pic').width() - 40);
    $('.MIB_assign').css({'width':'95%','background':'#F6F6F6','border':'1px solid #E5E5E5','border-radius':'5px'});
    $('.MIB_assign .MIB_asarrow_l, .MIB_assign_t, .MIB_assign_b, .MIB_assign_c').css('background','none'); 
    */
    
    
};
var inject_css = function(){
    var linkNode = document.createElement('link');
    linkNode.rel = 'stylesheet';
    linkNode.type = 'text/css';
    linkNode.href = chrome.extension.getURL('ssw.css') + '?' + new Date().getTime();
    document.getElementsByTagName('head')[0].appendChild(linkNode);
    console.log('success inert css');
};
var move_sidebar = function() {
    $('#left_nav_div').css({'left':'auto','right':'0'});
    $('.userinfo').insertBefore('.cmn_nav_con .MIB_txtal:first-child');
    $('.right_nav').insertAfter('.cmn_nav_con .userinfo');
    $('div[name=app4],div[name=app20],div[name=app5]').insertAfter('.cmn_nav_con .right_nav');
    //$('.userinfo .user_atten ul li .num').css('font-size','14px');
};
