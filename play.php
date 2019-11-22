<?php
//task 1 open and read the file into array
$line = file("play.txt");
//task 2 randomly select a term and definition
list($word, $name, $definition)= preg_split("/[\t]/", trim($line[array_rand($line)]));
//tsk3 create a json object
$json =array(
    "definition"=> $definition,
    "word" => $word
);
//task4 reeturn the json object
header("Contenttype:Application/json");
print(json_encode($json));
?>