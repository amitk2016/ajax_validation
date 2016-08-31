$(document).ready(function(){

	$('#username').blur(findusername);
	$('#email').blur(findEmail);
});

function findusername(){
	
	 var usernameValue = $(this).val();
	

	 if (usernameValue.length == 0 ) {

	 	$('#username-message').removeClass('success').addClass('error');
	 	$('#username-message').html('This field is required');

	 }else{

	 	$('#username-message').removeClass('error').addClass('success');
	 	$('#username-message').html('Good to Go');

	 }

	 var dataForServer = {

	 	username: usernameValue
	 }

	 //Preparing Ajax 
	 $.ajax({
	 	type:'post',
	 	url:'api/validate-username.php',
	 	data:dataForServer,
	 	success:function(dataFromServer){

	 		console.log(dataFromServer);

	 		if (dataFromServer === 'success') {
	 			$('#username-message').removeClass('error').addClass('success');
	 			$('#username-message').html('This username is Avalaible');
	 		}else{

	 			$('#username-message').removeClass('success').addClass('error');
	 			$('#username-message').html('This username is Unavalaible');
	 		}
	 	},
	 	error:function(){

	 		console.log('Can not connect to server');
	 	}


	 });
	 
};

	function findEmail(){

			var userEmailValue = $(this).val();
			console.log(userEmailValue);

			if ( userEmailValue.length === 0 ) {

				$('#email-message').removeClass('success').addClass('error');
				$('#email-message').html('Please Provide an email');

			}else {

				$('#email-message').removeClass('error').addClass('success');
				$('#email-message').html('Good to go');
			}


		
	}

























