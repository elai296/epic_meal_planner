<?php

require_once('functions.php');
require_once('db_connection.php');
set_exception_handler('error_handler');

startUp();

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);

$input =  $_GET['q'];
// var_dump("query is ", $_GET['q'] );


$query = "SELECT r.id, r.directions_url, r.image_url, r.serving_size, r.label, r.cooking_time, 
    i.recipe_id, GROUP_CONCAT(i.ingredients_desc)
    FROM recipe AS r 
    JOIN recipe_ingredients AS i
    ON r.id = i.recipe_id
    WHERE r.label LIKE '%".$input."%'
    GROUP BY i.recipe_id
    LIMIT 3";




// var_dump('query is ',$query);

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception(mysqli_connect_error());
} else if (!mysqli_num_rows($result) && !empty($_GET['id'])) {
  throw new Exception('Invalid ID: ' . $_GET['id']);
}

$count = mysqli_num_rows($result);

if($count < 5){
  // var_dump("count:", $count);
  $url = "https://api.edamam.com/search?q=pork&app_id=1930606a&app_key=165754ed1a324e1c76dc770f26190489&from=0&to=10&time=1-60";
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_URL, $url);

  $result = curl_exec($ch);
  curl_close($ch);

  $result2 = json_decode($result, true);
  $resultLabel= [];

  for($i= 0; $i < 5; $i++){
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

  // var_dump("this data is ", $resultLabel[0]["label"]);
  $ingArray = [];
  for($i = 0; $i < 5; $i++){
  $label =  $resultLabel[$i]["label"];
  $image =  $resultLabel[$i]["image"];
  $url =  $resultLabel[$i]["url"];
  $yield =  $resultLabel[$i]["yield"];
  $totalTime =  $resultLabel[$i]["totalTime"];
  $ingredients = $resultLabel[$i]["ingredientLines"];

  // $query2 = "INSERT INTO `recipe`(directions_url, image_url, serving_size, label, cooking_time) VALUES ('". $url ."', '".$image."', ".$yield.", '".$label."', ".$totalTime.")";
  // $result3 = mysqli_query($conn, $query2); 
  // $newId = mysqli_insert_id($conn);

  // var_dump("new ingredient is ", $ingredients[0]);
  // for ($x = 0; $x < $incredients.count; $x++) {
  //   $query3 = "INSERT INTO "
  // }

  // var_dump("ingredients are ", $ingredients);
  // var_dump("query is ", $query2);
  $ingArray[]=$ingredients;
  }
 
  
  var_dump("ingredients are ", $ingArray[0]);
  print("testing");

  
  // var_dump("query2 is ", $query2);
  // $result = mysqli_query($conn, $query2);
  // var_dump("pls work ", $resultLabel);




  // var_dump("array data is ", $result2["hits"][9]["recipe"]);

}

// $thisData = [
    //   "label" => $result2["hits"][$i]["recipe"]["label"],
    //   "image" => $result2["hits"][$i]["recipe"]["image"]
    // ];

/*

2) send the count (var count) of $_GET[`q`] from DB to SERVER => DONE

3) IF (count < 5) {
    api call with $_GET[`q`] => DONE

   4) send results back to server => DONE

   5) from server, send each row into database

   6) DB sends response (success) to server

}
*/




/* 7) */
$output = [];
while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};


print(json_encode($output));



?>