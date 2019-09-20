<?php
require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);
$input = $_GET['q'];

$query = "SELECT r.id, r.directions_url, r.image_url, r.serving_size, r.label, r.cooking_time,
    i.recipe_id, GROUP_CONCAT(i.ingredients_desc SEPARATOR '\n') AS ingredients
    FROM recipe AS r
    JOIN recipe_ingredients AS i
    ON r.id = i.recipe_id
    WHERE r.label LIKE '%$input%'
    GROUP BY i.recipe_id";

$result = mysqli_query($conn, $query);

$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};

print(json_encode($output));

?>
