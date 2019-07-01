
$(document).ready(function(){

    window.addEventListener( 'message', function( event ) {
           var item = event.data;

                if ( item.conce == true ) {
                $('.container').css('display','block');
            } else if ( item.conce == false ) {
                $('.container').css("display","none");
            }
                            if ( item.conce == true ) {
                $('.con').css('display','block');
            } else if ( item.conce == false ) {
                $('.con').css("display","none");
            }
       });
 $("#f4rr").click(function(){
        $.post('http://vrp_conce/f4rr', JSON.stringify({}));2
    });
    $("#minerador").click(function(){
        $.post('http://vrp_legal/minerador', JSON.stringify({}));2
    });

    $("#mecanico").click(function(){
        $.post('http://vrp_legal/mecanico', JSON.stringify({}));2
    });

    $("#taxi").click(function(){
        $.post('http://vrp_legal/taxi', JSON.stringify({}));2
    });

    $("#sedex").click(function(){
        $.post('http://vrp_legal/sedex', JSON.stringify({}));2
    });

    $("#pescador").click(function(){
        $.post('http://vrp_legal/pescador', JSON.stringify({}));2
    });

	 $("#lixeiro").click(function(){
        $.post('http://vrp_legal/lixeiro', JSON.stringify({}));2
    });

    $("#close").click(function(){
        $.post('http://vrp_conce/close', JSON.stringify({}));2
    });
  $(".active").click(function(){
    $(".area").fadeOut();
      $(".area2").fadeIn();
      $(".area3").fadeOut();
  });
  $(".active2").click(function(){
    $(".area").fadeIn();
      $(".area2").fadeOut();
        $(".area3").fadeOut();
  });
  $(".active3").click(function(){
    $(".area").fadeOut();
      $(".area2").fadeOut();
        $(".area3").fadeIn();
  });
   })
