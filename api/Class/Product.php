<?php
/**
 *  Class Product
 * 
 *  Représente un produit avec uniquement 3 propriétés (id, name, category)
 * 
 *  Implémente l'interface JsonSerializable 
 *  qui oblige à définir une méthode jsonSerialize. Cette méthode permet de dire comment les objets
 *  de la classe Product doivent être converti en JSON. Voire la méthode pour plus de détails.
 */
class Product implements JsonSerializable {
    private int $id_produit; // id du produit
    private string $titre; // nom du produit
    private int $id_categorie; // id de la catégorie du produit
    private string $description; // id de la catégorie du produit
    private string $prix; // id de la catégorie du produit
    private string $url_image; // id de la catégorie du produit
    private string $categorie_nom; // id de la catégorie du produit
    public function __construct(int $id_produit){
        $this->id_produit = $id_produit;
    }

    /**
     * Get the value of id
     */ 
    public function getId(): int
    {
        return $this->id_produit;
    }

    /**
     *  Define how to convert/serialize a Product to a JSON format
     *  This method will be automatically invoked by json_encode when apply to a Product
     * 
     *  En français : On sait qu'on aura besoin de convertir des Product en JSON pour les
     *  envoyer au client. La fonction json_encode sait comment convertir en JSON des données
     *  de type élémentaire. A savoir : des chaînes de caractères, des nombres, des booléens
     *  des tableaux ou des objets standards (stdClass). 
     *  Mais json_encode ne saura pas convertir un objet de type Product dont les propriétés sont
     *  privées de surcroit. Sauf si on définit la méthode JsonSerialize qui doit retourner une
     *  représentation d'un Product dans un format que json_encode sait convertir (ici un tableau associatif)
     * 
     *  Le fait que Product "implémente" l'interface JsonSerializable oblige à définir la méthode
     *  JsonSerialize et permet à json_encode de savoir comment convertir un Product en JSON.
     * 
     *  Parenthèse sur les "interfaces" : Une interface est une classe (abstraite en générale) qui
     *  regroupe un ensemble de méthodes. On dit que "une classe implémente une interface" au lieu de dire 
     *  que "une classe hérite d'une autre" uniquement parce qu'il n'y a pas de propriétés dans une "classe interface".
     * 
     *  Voir aussi : https://www.php.net/manual/en/class.jsonserializable.php
     *  
     */
    public function JsonSerialize(): mixed{
        return ["id_produit" => $this->id_produit, "titre" => $this->titre, "id_categorie" => $this->id_categorie , "description" => $this->description , "prix" => $this->prix, "url_image" => $this->url_image , "categorie_nom" => $this->categorie_nom];
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->titre;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($titre): self
    {
        $this->titre = $titre;
        return $this;
    }

    /**
     * Get the value of id_category
     */ 
    public function getCategorie()
    {
        return $this->id_categorie;
    }

    /**
     * Set the value of id_category
     *
     * @return  self
     */ 
    public function setCategorie(int $id_categorie): self
    {
        $this->id_categorie = $id_categorie;
        return $this;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * Get the value of description
     */ 
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */ 
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of prix
     */ 
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set the value of prix
     *
     * @return  self
     */ 
    public function setPrix($prix)
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get the value of url_image
     */ 
    public function getUrl()
    {
        return $this->url_image;
    }

    /**
     * Set the value of url_image
     *
     * @return  self
     */ 
    public function setUrl($url_image)
    {
        $this->url_image = $url_image;

        return $this;
    }

    /**
     * Get the value of categorie_nom
     */ 
    public function getCategorie_nom()
    {
        return $this->categorie_nom;
    }

    /**
     * Set the value of categorie_nom
     *
     * @return  self
     */ 
    public function setCategorie_nom($categorie_nom)
    {
        $this->categorie_nom = $categorie_nom;

        return $this;
    }
}