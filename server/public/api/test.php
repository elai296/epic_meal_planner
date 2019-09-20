<?php

require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);

$input =  $_GET['q'];

$query = "SELECT r.id, r.directions_url, r.image_url, r.serving_size, r.label, r.cooking_time, r.categories,
    i.recipe_id, GROUP_CONCAT(i.ingredients_desc SEPARATOR '\n') AS ingredients
    FROM recipe AS r
    JOIN recipe_ingredients AS i
    ON r.id = i.recipe_id
    WHERE r.label LIKE '%$input%'
    GROUP BY i.recipe_id
    LIMIT 5";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_connect_error());
} else if (!mysqli_num_rows($result) && !empty($_GET['id'])) {
  throw new Exception('Invalid ID: ' . $_GET['id']);
}

$count = mysqli_num_rows($result);

if($count <= 5){
  $url = "https://api.edamam.com/search?q=".$input."&app_id=1930606a&app_key=165754ed1a324e1c76dc770f26190489&from=0&to=10&time=1-60";
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_URL, $url);

  $result = curl_exec($ch);
  curl_close($ch);

  $result2 = json_decode($result, true);

  $resultLabel= [];
  for($i= 0; $i < 9; $i++){
    $thisData = [
      "label" => $result2["hits"][$i]["recipe"]["label"],
      "image" => $result2["hits"][$i]["recipe"]["image"],
      "url" => $result2["hits"][$i]["recipe"]["url"],
      "yield" => $result2["hits"][$i]["recipe"]["yield"],
      "totalTime" => $result2["hits"][$i]["recipe"]["totalTime"],
      "ingredientLines" => $result2["hits"][$i]["recipe"]["ingredientLines"],
     ];
    $resultLabel[]=$thisData;
  };

  for($i = 0; $i < 9; $i++){
    $label =  $resultLabel[$i]["label"];
    $image =  $resultLabel[$i]["image"];
    $url =  $resultLabel[$i]["url"];
    $yield =  $resultLabel[$i]["yield"];
    $totalTime =  $resultLabel[$i]["totalTime"];
    $ingredients = $resultLabel[$i]["ingredientLines"];

    $query2 = "INSERT IGNORE INTO `recipe`(directions_url, image_url, serving_size, label, cooking_time) VALUES ('$url', '$image', $yield, '$label', $totalTime)";
    $result3 = mysqli_query($conn, $query2);

    $recipe_id = mysqli_insert_id($conn);
    $ingredientCount = count($ingredients);
    $ingredientQuery = "INSERT INTO recipe_ingredients(recipe_id, ingredients_desc) VALUES ";
    for ($x = 0; $x < $ingredientCount; $x++) {
      $ingredientQuery.= "($recipe_id, '".$ingredients[$x]."'),";
    };
    $ingredientQuery = substr($ingredientQuery, 0, -1);
    $insertQueryResult = mysqli_query($conn, $ingredientQuery);
  };
}


$result2 = mysqli_query($conn, $query);
$output = [];
while ($row = mysqli_fetch_assoc($result2)) {
  $output[] = $row;
};

print(json_encode($output));

?>
