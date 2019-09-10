<?php
header('Content-Type: application/json');
if (empty($_GET['id'])) {
  readfile('dummy-meal-items.json');
} else {
  readfile('dummy-meal-items.json');
}
?>
