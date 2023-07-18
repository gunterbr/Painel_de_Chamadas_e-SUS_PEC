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

<div class='container-fluid d-flex justify-content-center'>
    <div class='row col-12 col-lg-8 alert alert-light m-4'>
        <div id='left' class='mb-4'><a href='index.php'><i class='fa fa-undo' aria-hidden='true'></i></a></a></div>
        <div class='col-12 h1 mb-4'>Local de atendimento por Profissional</div>
        
        <form action='' method='post' enctype='multipart/form-data'>

        <div class='row d-flex'>
            <div class='col-12 col-lg-8 mb-4'>
                <div class='input-group'>
                    <div class='input-group-text'>Pesquisar:</div>
                    <input type='text' class='form-control' id='texto_filtro' placeholder='Pesquisar...' >
                </div>
            </div>
            <div class='col-12 col-lg-4 mb-4'>
                <button type='submit' class='form-control btn btn-success'>Gravar informações</button>
            </div>
        </div>
<?php
///////////////////////////////////////////////////
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cods = $_POST['cod'];
    $names = $_POST['name'];
    $locals = $_POST['local'];

    $data = array();

    for ($i = 0; $i < count($cods); $i++) {
        $cod = $cods[$i];
        $name = $names[$i];
        $local = $locals[$i];

        if (!empty($local)) {
            $item = array(
                "cod" => intval($cod),
                "name" => $name,
                "local" => $local
            );

            $data[] = $item;
        }
    }

    $json = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents("data.json", $json);
}
///////////////////////////////////////////////////

include('./connect.php');

$sql = "
SELECT
	*
FROM
	public.tb_prof
";

$query = pg_query($conexao, $sql);

if (!$query) {
  echo "An error occurred.\n";
  exit;
} else {
    if (pg_num_rows($query) > 0) {
        echo "
            <div class='table-responsive'>
                <table class='table table-striped table-sm' id='tabela_filtro'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Profissional</th>
                        <th scope='col'>Local de atendimento</th>
                    </tr>
                </thead>
                <tbody>
        ";

        while ($resp = pg_fetch_assoc($query)) {
            $codigo = $resp['co_seq_prof'];
        
            $json = file_get_contents("data.json");
            $data = json_decode($json);
        
            $personHasRoom = false; // Variável para verificar se a pessoa possui uma sala definida
        
            foreach ($data as $key => $value) {
                if ($value->cod == $codigo) {
                    echo "
                    <tr>
                        <td><input type='hidden' name='cod[]' value='".$resp['co_seq_prof']."' readonly />".$resp['co_seq_prof']."</td>
                        <td><input type='hidden' name='name[]' value='".$resp['no_profissional']."' readonly />".$resp['no_profissional']."</td>
                        <td><input type='text' class='form-control' name='local[]' value='".$value->local."' /></td>
                    </tr>
                    ";
        
                    $personHasRoom = true;
                    break; // Não é necessário continuar procurando, pois encontramos a pessoa no arquivo .json
                }
            }
        
            if (!$personHasRoom) {
                // A pessoa não possui uma sala definida no arquivo .json
                echo "
                <tr>
                    <td><input type='hidden' name='cod[]' value='".$resp['co_seq_prof']."' readonly />".$resp['co_seq_prof']."</td>
                    <td><input type='hidden' name='name[]' value='".$resp['no_profissional']."' readonly />".$resp['no_profissional']."</td>
                    <td><input type='text' class='form-control' name='local[]' value='' /></td>
                </tr>
                ";
            }
        }
        
        echo "
                </tbody>
                </table>
            </div>
        ";
    }
}

?>
    </form>
    </div>
</div>

</body>
<script>
$(document).on('keyup', '#texto_filtro', function() {
    var termo = $('#texto_filtro').val().toUpperCase();
    $('#tabela_filtro tbody tr').each(function() { 
        if($(this).html().toUpperCase().indexOf(termo) === -1) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
});
</script>
</html>
