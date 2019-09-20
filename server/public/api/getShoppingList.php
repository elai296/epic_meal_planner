<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$query = "
(
  SELECT shopping_list.id, shopping_list.is_completed, recipe_ingredients.ingredients_desc
  FROM shopping_list
  JOIN recipe_ingredients ON shopping_list.ingredients_id = recipe_ingredients.id
)
  UNION
(
  SELECT id, is_completed, ingredient_text AS ingredients_desc
  FROM shopping_list
  WHERE ingredients_id IS NULL
)
  ORDER BY id ASC";

$result = mysqli_query($conn, $query);

$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};

print(json_encode($output));
?>
