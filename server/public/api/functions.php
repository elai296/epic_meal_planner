<?php
function error_handler($error){
  $output = array(
    "success" => false,
    "error" => $error->getMessage()
  );
  http_response_code(500);
  $json_output = json_encode($output);
  print($json_output);
}

function startUp(){
  header('Content-Type: application/json');
}

function getBodyData(){
  $json = file_get_contents('php://input');
  $data = json_decode($json, true);
  return $data;
}
?>
