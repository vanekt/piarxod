<?php

header('Access-Control-Allow-Origin: *');
header("Content-Type: text/html; charset=utf-8");

$json = file_get_contents('http://rzhunemogu.ru/RandJSON.aspx?CType=1');
$json = mb_convert_encoding($json, "UTF-8", "cp1251");

$json =  str_replace("\n","\\n",$json);
$json =  str_replace("\r","\\r",$json);

echo $json;
