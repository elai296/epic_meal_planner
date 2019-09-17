<?php

require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);
// var_dump("the objet is", $obj);

$recipeDate = $obj['date'];
$recipeLabel =$obj['label'];
$recipeMealTime = $obj['meal_time'];
// $recipeId = $obj['recipe_id'];

var_dump("recipeDate", $recipeDate);
var_dump("recipeLabel", $recipeLabel);
var_dump("recipemealTime", $recipeMealTime);
// var_dump("recipeId", $recipeId);


$query = "INSERT INTO `calendar`(date, meal_time, recipe_id)
          SELECT '$recipeDate', '$recipeMealTime',  id AS recipe_id
          FROM recipe
          WHERE label LIKE \"%$recipeLabel%\"
          LIMIT 1";


var_dump($query);

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



// if(!$result){
//   throw new Exception(mysqli_error($conn));
// }
// else if(!mysqli_num_rows($result) && !empty($_GET['id'])){
//   throw new Exception('Invalid ID: ' . $_GET['id']);
// }

// $output = [];
// while($row = mysqli_fetch_assoc($result)){
//   $output[] = $row;
// };

print(json_encode($output));


?>

