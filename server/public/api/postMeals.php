<?php

require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);

$recipeDate = $obj['date'];
$recipeMealTime = $obj['meal_time'];
$recipeLabel =$obj['recipe_label'];
$recipeId = $obj['recipe_id'];

var_dump("recipeDate", $recipeDate);
var_dump("recipeLabel", $recipeLabel);
var_dump("recipemealTime", $recipeMealTime);
var_dump("recipeId", $recipeId);

if(empty($recipeId)){
  $query = "INSERT INTO `calendar`(date, meal_time, recipe_label)
VALUES ('$recipeDate', '$recipeMealTime', '$recipeLabel')";
} else {
  $query = "INSERT INTO `calendar`(date, meal_time, recipe_label, recipe_id)
  VALUES ('$recipeDate', '$recipeMealTime', '$recipeLabel',  $recipeId)";
}

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_error($conn));
} else if (!mysqli_affected_rows($conn) && !empty($id)) {
  throw new Exception('Invalid ID: ' . $id);
} else {
  $output = ['success' => true];
}

print(json_encode($output));


?>
