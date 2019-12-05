<?php
$def = file("ass9txt.txt");
$category = $_REQUEST['part'];


do{
    list($word, $name, $definition)= preg_split("/[\t]/",trim($def[array_rand($def)]));
} while($category != $name);

$correctdefinition = array(
    "definition"=>$definition,
    "correct"=>false
);
do{ 
$uno=preg_split("/[\t]/",trim($def[array_rand($def)]));
}while($uno[2] == $correctdefintion || $uno[2] == $dos[2]);
$definition1= array(
    "definition" => $uno[2],
    "correct" => false
);
do{ 
$dos=preg_split("/[\t]/",trim($def[array_rand($def)]));
}while($dos[2] == $correctdefintion || $dos[2] == $uno[2]);
$definition2=array(
    "definition" => $dos[2],
    "correct" => false
);

$choices = array($correctdefinition, $definition1, $definition2);

$json = array(
    "name" => $name,
    "word" => $word,
    "choices" => $choices
); 
 
header("Contenttype:Application/json");
print(json_encode($json));
?>
