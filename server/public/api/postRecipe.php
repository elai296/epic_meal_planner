<?php

require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);

$data = getBodyData();

$recipeDate = $obj['date'];
$recipeMealTime = $obj['meal_time'];
$recipeLabel = $obj['recipe_label'];
$recipeId = $obj['id'];

$id = $data['id'];

if( intval($id) < 0 ){
  throw new Exception("error");
}

if (empty($id)) {
  throw new Exception("a recipe id must be provided");
} else if (!is_numeric($id)) {
  throw new Exception("id needs to be a number");
} else {
  $whereClause = " WHERE recipe.id = " . $id;
}

$$query= "INSERT INTO calendar(date, meal_time, recipe_label, recipe_id )
          SELECT '$recipeDate', '$recipeMealTime', '$recipeLabel', '$recipeId'
          FROM recipe " . $whereClause;

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_error());
} else if (!mysqli_affected_rows($conn) && !empty($id)) {
  throw new Exception('Invalid ID: ' . $id);
} else {
  $output = ['success' => true];

}

print(json_encode($output));



?>
