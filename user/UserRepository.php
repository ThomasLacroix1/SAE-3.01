<?php

require_once("Repository/EntityRepository.php");
require_once("User.php");


/**
 *  Classe ProductRepository
 * 
 *  Cette classe représente le "stock" de Product.
 *  Toutes les opérations sur les Product doivent se faire via cette classe 
 *  qui tient "synchro" la bdd en conséquence.
 * 
 *  La classe hérite de EntityRepository ce qui oblige à définir les méthodes  (find, findAll ... )
 *  Mais il est tout à fait possible d'ajouter des méthodes supplémentaires si
 *  c'est utile !
 *  
 */
class UserRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function finduser($id): ?User{
        /*
            La façon de faire une requête SQL ci-dessous est "meilleur" que celle vue
            au précédent semestre (cnx->query). Notamment l'utilisation de bindParam
            permet de vérifier que la valeur transmise est "safe" et de se prémunir
            d'injection SQL.
        */
        $requete = $this->cnx->prepare("select * from User where id=:value"); // prepare la requête SQL
        $requete->bindParam(':value', $id); // fait le lien entre le "tag" :value et la valeur de $id
        $requete->execute(); // execute la requête
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer==false) return null; // may be false if the sql request failed (wrong $id value for example)
        
        $p = new User($answer->id);
        $p->setNom($answer->nom);
        $p->setPrenom($answer->prenom);
        return $p;
    }


    public function save($user){
        $requete = $this->cnx->prepare("insert into Product (nom, prenom , mail , phone , mdp) values (:nom, :prenom, :mail , :phone , :mdp)");
        $nom = $user->getNom();
        $prenom = $user->getPrenom();
        $mail = $user->getMail();
        $phone = $user->getPhone();
        $mdp = $user->getMdp();
        $requete->bindParam(':name', $nom);
        $requete->bindParam(':prenom', $prenom);
        $requete->bindParam(':mail', $mail);
        $requete->bindParam(':phone', $phone);
        $requete->bindParam(':mdp', $mdp);
        $answer = $requete->execute(); // an insert query returns true or false. $answer is a boolean.

        if ($answer){
            $id = $this->cnx->lastInsertId(); // retrieve the id of the last insert query
            $user->setId($id); // set the product id to its real value.
            return true;
        }
          
        return false;
    }

   
    
}