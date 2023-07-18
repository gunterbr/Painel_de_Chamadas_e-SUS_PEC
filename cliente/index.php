<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Painel Eletrônico</title>

	<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js' integrity='sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN' crossorigin='anonymous'></script>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD' crossorigin='anonymous'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="index.css">
</head>
<body>

<div class='container-fluid'>
  <div class='row'>

<?php
include(__DIR__ . '/connect.php');

$sql = "
SELECT
	tp_unidade_saude,
	co_seq_unidade_saude,
	nu_cnes,
	no_unidade_saude,
	st_ativo
FROM
	public.tb_unidade_saude
WHERE
	st_ativo = 1
AND
	(tp_unidade_saude = 1)
";

$query = pg_query($conexao, $sql);

if (!$query) {
  echo "An error occurred.\n";
  exit;
} else {
    if (pg_num_rows($query) > 0) {
        echo "
        <div id='change'><a href='local_atendimento.php'><i class='fa fa-cog' aria-hidden='true'></i></a></div>
        <div class='clock me-2'></div>
        ";
        echo "<div id='u' class='d-flex flex-wrap col-12'>";
        while ($resp = pg_fetch_assoc($query)) {
			echo "
            <div class='d-flex mt-4 float-start col-12 col-lg-2'>
                <input type='hidden' id='co_seq_unidade_".$resp['co_seq_unidade_saude']."' value='".$resp['no_unidade_saude']."' />
                <button type='button' class='form-control btn btn-info btn-click mt-4 mb-4 me-4' onclick='sendButton(".$resp['co_seq_unidade_saude'].")' >".$resp['no_unidade_saude']."</button>
            </div>
            ";
        }
        echo "</div>";
        echo "<div id='r' class='d-flex align-items-center'>Aguarde... estamos verificando o status do serviço.</div>";
        echo "<div id='p' class='col-12'></div>";
        echo "<div id='a' class='d-flex align-items-center'></div>";
        echo "<div id='b' class='col-12 col-lg-8'></div>";
        echo "<div id='l' class='col-12 col-lg-4'></div>";
    }
}

?>
    </div>
</div>

</body>

<script src="./index.js"></script>

</html>
