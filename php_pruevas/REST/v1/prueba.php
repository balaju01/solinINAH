<?php
/** 
 * @web http://www.jc-mouse.net/
 * @author jc mouse
 */

    
    
    const LOCALHOST = '127.0.0.1';
    const USER = 'root';
    const PASSWORD = '';
    const DATABASE = 'sicapv1';
    
    /**
     * Constructor de clase
     */
             
        try{
            //conexión a base de datos
            $mysqli = new mysqli(LOCALHOST, USER, PASSWORD, DATABASE);
        }catch (mysqli_sql_exception $e){
            //Si no se puede realizar la conexión
            http_response_code(500);
            exit;
        }     
    
    /*
        $stmt = $mysqli->prepare("SELECT * FROM cat_sala WHERE idSala=6 ; ");
        $stmt->bind_param('s', $id);
        $stmt->execute();
        $result = $stmt->get_result();        
        $peoples = $result->fetch_all(MYSQLI_ASSOC); 
        $stmt->close();
        
        $peoples[0]['sala_nombre'] = utf8_encode($peoples[0]['sala_nombre']);
        print_r($peoples);      
    */
    /**
     * obtiene todos los registros de la tabla "people"
     * @return Array array con los registros obtenidos de la base de datos
     */
        $name = "INCA";
        $id = 13;
        $stmt = $mysqli->prepare("INSERT INTO cat_sala(sala_nombre,idCuraduria) VALUES (?,?); ");
        $stmt->bind_param('si', $name,$id);
        $r = $stmt->execute(); 
        $stmt->close();
           
        $result = $mysqli->query('SELECT * FROM cat_sala');          
        $peoples = $result->fetch_all(MYSQLI_ASSOC);          
        $result->close();
        
        for ($i=0; $i < count($peoples); $i++) { 
            $peoples[$i]['sala_nombre'] = utf8_encode($peoples[$i]['sala_nombre']);
        }
        
        //print_r($peoples); 

        echo json_encode($peoples,JSON_UNESCAPED_UNICODE);

        //$aux = $peoples[8];
        //$aux['sala_nombre'] = utf8_encode($aux['sala_nombre']);
        //$otro[0] = utf8_encode($peoples[8]['sala_nombre']);
        //$otro[1] = utf8_encode($peoples[4]['sala_nombre']);
        //echo json_encode($otro,JSON_PRETTY_PRINT);

        //print_r($otro);

        //echo json_encode($aux,JSON_UNESCAPED_UNICODE);
        //echo utf8_encode($peoples[8]['sala_nombre']);
        
        

        //echo count($peoples);
   
?>