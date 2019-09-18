<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');
// echo("hi!");
startUp();

$query = "SELECT r.id, r.directions_url, r.image_url, r.serving_size, r.label, r.cooking_time,
GROUP_CONCAT(i.ingredients_desc)
FROM recipe AS r
JOIN recipe_ingredients AS i
ON r.id = i.recipe_id
WHERE r.categories LIKE '%keto%'
GROUP BY i.recipe_id
LIMIT 5 ";

// print($query);
$result = mysqli_query($conn, $query);

if (empty($result)) {
  throw new Exception(mysqli_error($conn));
};

// echo(mysqli_num_rows($result));
$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};

// var_dump("output is ",$output );

// $decoded = json_decode($output, true);
// print($decoded);
print(json_encode($output));
?>
