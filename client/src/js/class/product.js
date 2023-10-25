



/**
 *  Les classes existent aussi en Javascript comme dans tous les langages orientés objets.
 * 
 *  Au besoin, vous avez tout ici : https://fr.javascript.info/classes
 *  Ou là : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes
 * 
 * 
 *  Il existe quelques différences de syntaxe et le support des propriétés privées est 
 *  relativement récent donc pas pris en charge pas des navigateurs plus anciens. Mais
 *  Toutes les versions de navigateurs sorties depuis 2021 les supportent donc vous
 *  pouvez vous en servir.
 * 
 */

class Product {
    #id_produit; 
    #titre; 
    #id_categorie; 
    #description; 
    #prix; 
    #url_image; 
    #categorie_nom; 

    constructor(id_produit, titre, id_categorie , description , prix , url_image , categorie_nom){
        this.#id_produit = id_produit; 
        this.#titre = titre; 
        this.#id_categorie = id_categorie; 
        this.#description = description; 
        this.#prix = prix; 
        this.#url_image = url_image; 
        this.#categorie_nom = categorie_nom; 
        //size json parse 
    }

    getIdproduit(){
        return this.#id_produit;     
    }

    getTitre(){
        return this.#titre;    
    }

    getIdcategorie(){
        return this.#id_categorie;     
    }
    getDescription(){
        return this.#description;     
    }

    getPrix(){
        return this.#prix;     
    }

    getUrlimage(){
        return this.#url_image;     
    }

    getCategorie_nom(){
        return this.#categorie_nom;    
    }


}

export {Product};