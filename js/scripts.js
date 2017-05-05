$(function(){

  $('#toggle').click(function() {
  	$('#toggle .bar').toggleClass('animate');
  	$('body').toggleClass('open');
  });

  $("#off-canvas #menu li a").click(function(e){
    $('body').removeClass('open');
  })


})
