<?php
/** 
 * @web http://www.jc-mouse.net/
 * @author jc mouse
 */
class PeopleDB {
    
    protected $mysqli;
    const LOCALHOST = '127.0.0.1';
    const USER = 'root';
    const PASSWORD = '';
    const DATABASE = 'sicapv1';
    
    /**
     * Constructor de clase
     */
    public function __construct() {           
        try{
            //conexión a base de datos
            $this->mysqli = new mysqli(self::LOCALHOST, self::USER, self::PASSWORD, self::DATABASE);
        }catch (mysqli_sql_exception $e){
            //Si no se puede realizar la conexión
            http_response_code(500);
            exit;
        }     
    } 
    
    /**
     * obtiene un solo registro dado su ID
     * @param int $id identificador unico de registro
     * @return Array array con los registros obtenidos de la base de datos
     */
    public function getPeople($id=0){      
        $stmt = $this->mysqli->prepare("SELECT * FROM cat_sala WHERE idSala=? ; ");
        $stmt->bind_param('s', $id);
        $stmt->execute();
        $result = $stmt->get_result();        
        $peoples = $result->fetch_all(MYSQLI_ASSOC); 
        $stmt->close();
        return $peoples;              
    }
    
    /**
     * obtiene todos los registros de la tabla "people"
     * @return Array array con los registros obtenidos de la base de datos
     */
    public function getPeoples(){        
        $result = $this->mysqli->query("SELECT * FROM cat_sala ;");      
        $peoples = $result->fetch_all(MYSQLI_ASSOC);          
        $result->close();
        return $peoples; 
    }
    
    /**
     * añade un nuevo registro en la tabla persona
     * @param String $name nombre completo de persona
     * @return bool TRUE|FALSE 
     */
    public function insert($name='',$id){
        $stmt = $this->mysqli->prepare("INSERT INTO cat_sala(sala_nombre,idCuraduria) VALUES (?,?); ");
        $stmt->bind_param('si', $name,$id);
        $r = $stmt->execute(); 
        $stmt->close();
        return $r;        
    }
    
    /**
     * elimina un registro dado el ID
     * @param int $id Identificador unico de registro
     * @return Bool TRUE|FALSE
     */
    public function delete($id=0) {
        $stmt = $this->mysqli->prepare("DELETE FROM cat_sala WHERE idSala = ? ; ");
        $stmt->bind_param('s', $id);
        $r = $stmt->execute(); 
        $stmt->close();
        return $r;
    }
    
    /**
     * Actualiza registro dado su ID
     * @param int $id Description
     */
    public function update($id, $newName) {
        if($this->checkID($id)){
            $stmt = $this->mysqli->prepare("UPDATE cat_sala SET sala_nombre=? WHERE idSala = ? ; ");
            $stmt->bind_param('ss', $newName,$id);
            $r = $stmt->execute(); 
            $stmt->close();
            return $r;    
        }
        return false;
    }
    
    /**
     * verifica si un ID existe
     * @param int $id Identificador unico de registro
     * @return Bool TRUE|FALSE
     */
    public function checkID($id){
        $stmt = $this->mysqli->prepare("SELECT * FROM cat_sala WHERE idSala=?");
        $stmt->bind_param("s", $id);
        if($stmt->execute()){
            $stmt->store_result();    
            if ($stmt->num_rows == 1){                
                return true;
            }
        }        
        return false;
    }
    
}
