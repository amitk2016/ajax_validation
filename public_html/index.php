<!DOCTYPE html>
<html>
<head>
	<title>Ajax-live-validation</title>
	<style type="text/css">

		.success{
			color: #4cae4c;
		}

		.error{
			color: #d43f3a;
		}

	</style>
</head>
<body>
	<h1>Live Validation</h1>
	<form id="register">
		<h2>Register</h2>

		<div>
			<label for="username">Username :</label>
			<input type="text" id="username" name="" placeholder="username">
			<span id="username-message"></span>
		</div>

		<div>
			<label for="email">Email : </label>
			<input type="email" id="email" name="" placeholder="email">
			<span id="email-message"></span>
		</div>
		<input type="submit" name=""  value="Register">
		
	</form>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="js/functions.js"></script>
</body>
</html>