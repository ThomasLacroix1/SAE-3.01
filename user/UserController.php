<?php
require_once "Controller.php";
require_once "UserRepository.php" ;


// This class inherits the jsonResponse method  and the $cnx propertye from the parent class Controller
// Only the process????Request methods need to be (re)defined.

class UserController extends Controller {

    private UserRepository $user;

    public function __construct(){
        $this->products = new UserRepository();
    }

   
    protected function processGetRequest(HttpRequest $request) {
        $id = $request->getId("id");
        if ($id){
            // URI is .../products/{id}
            $p = $this->user->finduser($id);
            return $p==null ? false :  $p;
        }
      
    }

    protected function processPostRequest(HttpRequest $request) {
        $json = $request->getJson();
        $obj = json_decode($json);
        $p = new User(0); // 0 is a symbolic and temporary value since the product does not have a real id yet.
        $p->setNom($obj->nom);
        $p->setPrenom($obj->prenom);
        $p->setMail($obj->mail);
        $p->setPhone($obj->phone);
        $p->setMdp($obj->mdp);
        $ok = $this->products->save($p); 
        return $ok ? $p : false;
    }
   
}

?>