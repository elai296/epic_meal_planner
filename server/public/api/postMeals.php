<?php

require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);
// var_dump("the objet is", $obj);

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

// $query = "INSERT INTO `calendar`(date, meal_time, recipe_label)
// SELECT '$recipeDate', '$recipeMealTime', labelText AS recipe_label
//


// setView to details page on a tag on calendar recipe labels
//  adjust get call to specify columns coming back
// need insert select to save meal label on calendar table


// $query = "INSERT INTO calendar(date, meal_time, recipe_id)
//          SELECT '$recipeDate', '$recipeMealTime',  id AS recipe_id
//          FROM recipe
//          WHERE label LIKE \"%$recipeLabel%\"
//          LIMIT 1";


// $query = "
// (INSERT INTO `calendar`(date, meal_time, recipe_label)
// VALUES ('$recipeDate', '$recipeMealTime', '$recipeLabel')
// )
// UNION
// (
// SELECT date, meal_time, label_text AS recipe_label
// FROM calendar
// )";


// var_dump("the query is:", $query);


$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_error($conn));
}
else if (!mysqli_affected_rows($conn) && !empty($id)) {
  throw new Exception('Invalid ID: ' . $id);
}
else{
  $output = ['success' => true];

}


print(json_encode($output));


?>
