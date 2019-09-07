<?php
$conn = mysqli_connect('localhost', 'root', 'root', 'MealPlan', 3306);

if(!$conn){
  throw new Exception(mysqli_connect_error());
};



?>
