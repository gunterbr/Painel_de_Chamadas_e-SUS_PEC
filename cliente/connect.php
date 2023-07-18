<?php

$config = file_get_contents(__DIR__ . '/config.json');
$config = json_decode($config, true);

$dbhost = $config['db_host'];
$dbname = $config['db_name'];
$dbuser = $config['db_username'];
$dbpass = $config['db_password'];
$dbport = $config['db_port'];

$conexao = pg_connect("host=$dbhost port=$dbport dbname=$dbname user=$dbuser password=$dbpass");
if (!$conexao) {
  exit();
}
?>