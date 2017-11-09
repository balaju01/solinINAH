header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: text/html; charset=utf-8');
header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');

include_once '../include/Config.php';

require '../libs/vendor/autoload.php';
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

function echoResponse($status_code, $response) {
	$app = \Slim\Slim::getInstance();
	// Http response code
	$app->status($status_code);

	// setting response content type to json
	$app->contentType('application/json');

	echo json_encode($response);
}

function authenticate(\Slim\Route $route) {
	// Getting request headers
	$headers = apache_request_headers();
	$response = array();
	$app = \Slim\Slim::getInstance();

	// Verifying Authorization Header
	if (isset($headers['Authorization'])) {
		//$db = new DbHandler(); //utilizar para manejar autenticacion contra base de datos

		// get the api key
		$token = $headers['Authorization'];

		// validating api key
		if (!($token == API_KEY)) { //API_KEY declarada en Config.php

		// api key is not present in users table
		$response["error"] = true;
		$response["message"] = "Acceso denegado. Token inválido";
		echoResponse(401, $response);

		$app->stop(); //Detenemos la ejecución del programa al no validar

	} else {
		//procede utilizar el recurso o metodo del llamado
	}
	} else {
		// api key is missing in header
		$response["error"] = true;
		$response["message"] = "Falta token de autorización";
		echoResponse(400, $response);

		$app->stop();
	}
}