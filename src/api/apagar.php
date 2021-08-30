<?php
// Cabeçalhos
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

include_once 'conexao.php';

$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);
$response = "";

$query_produto = "DELETE FROM produtos WHERE id = :id LIMIT 1";
$delete_produto = $conn->prepare($query_produto);

$delete_produto->bindParam(':id', $id, PDO::PARAM_INT);

if ($delete_produto->execute()) {
	$response = [
		"erro" => false,
		"mensagem" => "Produto apagado com sucesso!"
	];
    
} else {
	$response = [
		"erro" => true,
		"mensagem" => "Erro: Produto não apagado com sucesso, tente novamente mais tarde!"
	];
}

http_response_code(200);

echo json_encode($response);