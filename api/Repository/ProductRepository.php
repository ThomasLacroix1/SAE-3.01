<?php

require_once("Repository/EntityRepository.php");
require_once("Class/Product.php");


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
class ProductRepository extends EntityRepository {

    public function __construct(){
        // appel au constructeur de la classe mère (va ouvrir la connexion à la bdd)
        parent::__construct();
    }

    public function find($id_produit): ?Product{
        /*
            La façon de faire une requête SQL ci-dessous est "meilleur" que celle vue
            au précédent semestre (cnx->query). Notamment l'utilisation de bindParam
            permet de vérifier que la valeur transmise est "safe" et de se prémunir
            d'injection SQL.
        */
        $requete = $this->cnx->prepare("select * from Produits where id_produit=:value"); // prepare la requête SQL
        $requete->bindParam(':value', $id_produit); // fait le lien entre le "tag" :value et la valeur de $id
        $requete->execute(); // execute la requête
        $answer = $requete->fetch(PDO::FETCH_OBJ);
        
        if ($answer==false) return null; // may be false if the sql request failed (wrong $id value for example)
        
        $p = new Product($answer->id_produit);
        $p->setName($answer->titre);
        $p->setPrix($answer->prix);
        $p->setUrl($answer->url_image);
        $p->setDescription($answer->description);
        $p->setCategorie($answer->id_categorie);
        $p->setCategorie_nom($answer->categorie_nom);
        $p->setOption_edition($answer->option_edition);
        $p->setOption_plateforme($answer->option_plateforme);
        $p->setOption_taille($answer->option_taille);
        $p->setOption_collector($answer->option_collector);
        return $p;
    }

    public function findAll(): array {
        $requete = $this->cnx->prepare('SELECT Produits.*, Categories.*
        FROM Produits
        INNER JOIN Categories ON Produits.id_categorie = Categories.id_categorie');
        $requete->execute();
        $answer = $requete->fetchAll(PDO::FETCH_OBJ);

        $res = [];
        foreach($answer as $obj){
            $p = new Product($obj->id_produit);
            $p->setName($obj->titre);
            $p->setPrix($obj->prix);
            $p->setUrl($obj->url_image);
            $p->setDescription($obj->description);
            $p->setCategorie($obj->id_categorie);
            $p->setCategorie_nom($obj->categorie_nom);
            $p->setOption_edition($obj->option_edition);
            $p->setOption_plateforme($obj->option_plateforme);
            $p->setOption_taille($obj->option_taille);
            $p->setOption_collector($obj->option_collector);
            array_push($res, $p);
        }
       
        return $res;
    }

    public function save($product){
        $requete = $this->cnx->prepare("insert into Product (name, category) values (:name, :idcategory)");
        $name = $product->getName();
        $idcat = $product->getIdcategory();
        $requete->bindParam(':name', $name );
        $requete->bindParam(':idcategory', $idcat);
        $answer = $requete->execute(); // an insert query returns true or false. $answer is a boolean.

        if ($answer){
            $id = $this->cnx->lastInsertId(); // retrieve the id of the last insert query
            $product->setId($id); // set the product id to its real value.
            return true;
        }
          
        return false;
    }

    public function delete($id){
        // Not implemented ! TODO when needed !
        return false;
    }

    public function update($product){
        // Not implemented ! TODO when needed !
        return false;
    }

   
    
}