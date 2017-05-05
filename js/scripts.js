$(function(){

  $('#toggle').click(function() {
  	$('body').toggleClass('off-canvas');
  });

  $("#off-canvas #menu li a").click(function(e){
    $('body').removeClass('off-canvas');
  })

})
