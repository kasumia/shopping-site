$(document).ready(function(){

  $("#SP_MENU_BUTTON").click(function(){
    $("#sp_header_menu").slideToggle();
  });
 
  $("#CATEGORIES_LINK").click(function () { 
    $(this).toggleClass("openlink"); 
      $("#CATEGORIES_LINK + ul").slideToggle();
  });
  $("#PAGE_LINK").click(function () { 
    $(this).toggleClass("openlink"); 
      $("#PAGE_LINK + ul").slideToggle();
  });
  

});

$(window).load(function(){
  $("#pict_list img").click(function(){
    var img_src = $(this).attr("src");
    $("#main_view img").attr("src", img_src);
  });
});
