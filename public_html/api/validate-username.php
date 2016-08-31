<?php

include('../../config.inc.php');

// Get the username
$username = $_POST['username'];

// Connect to the database

$dbc = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// filter the usename

$username = $dbc->real_escape_string($username);

// prepare the query 

$sql = "SELECT username FROM users WHERE username = '$username'";




$result = $dbc->query($sql);

if (!$result) {

	 echo "Something went wrong";

}elseif($result->num_rows == 1){

	echo "fail";

}else{
	// no results 
	// username not found 

	echo "success";
}