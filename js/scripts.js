jQuery(function() {

	$(document).ready(function(){
	  $("#p1").mouseenter(function(){
	    alert("I know you are ready to leave 2020 behind");
	  });
	});

  let my_switch = false;

	$('#my_button').click(function () {

		if ( my_switch == false ){
		  my_switch = true;

			$(this).html('I AM READY!!');

		  $('#my_image').attr('src', 'images/alone.gif');
		} else {
		  my_switch = false;

			$(this).html('I rather be alone...');

		  $('#my_image').attr('src', 'images/party-1.gif');
		}

		//if ( $('.square.alt').hasClass('red') ){
		//     $('.square.alt').removeClass('red');
		//}else {
		//     $('.square.alt').addClass('red');
		//}



	});

});
