<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$ingredients = json_decode($json_input, true);

$ingredientCount = count($ingredients);
$ingredientQuery = "INSERT INTO `shopping_list`(ingredient_text,is_completed) VALUES";
for ($x = 0; $x < $ingredientCount; $x++) {
  $ingredientQuery .= "('" . $ingredients[$x] . "', 0),";
};
$ingredientQuery = substr($ingredientQuery, 0, -1);

mysqli_query($conn, $ingredientQuery);
?>
