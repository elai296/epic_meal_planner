<?php
requre_once("functions.php");
require_once("db_connection.php");
set_exception_handler("error_handler");

startUp();

$json_input = file_get_contents("php://input");
$obj = json_decode($json_input, true);
$addToCalendar = $obj[""]

$query = "INSERT INTO calendar(date, meal_time, user_input)
	VALUES ("2019-09-08", "dinner", "pasta")"


?>
