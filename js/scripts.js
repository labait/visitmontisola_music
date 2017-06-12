$(function(){

  $('#fullpage').fullpage({
    sectionsColor: ['#000000', '#f9f9f9', '#7BAABE', '#222222'],
    //anchors: ['section1', 'section1', 'section2', '4thpage'],
    menu: "#menu",
    navigation: false
  });
  
  $('#toggle').click(function() {
  	$('body').toggleClass('off-canvas');
  });

  $("#off-canvas #menu li a").click(function(e){
    $('body').removeClass('off-canvas');
  })

})
