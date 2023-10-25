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
    #option_plateforme;
    #option_edition;
    #option_taille;
    #option_collector;
    constructor(id_prod, titre, id_cat , desc , prix , url_img , cat_nom , opt_plat , opt_edi , opt_taille , opt_col){
        this.#id_produit = id_prod; 
        this.#titre = titre; 
        this.#id_categorie = id_cat; 
        this.#description = desc; 
        this.#prix = prix; 
        this.#url_image = url_img; 
        this.#categorie_nom = cat_nom; 
        this.#option_plateforme = JSON.stringify(opt_plat);
        this.#option_edition = JSON.stringify(opt_edi);
        this.#option_taille = JSON.stringify(opt_taille);
        this.#option_collector = JSON.stringify(opt_col);
      
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
   
    getOptionPlateforme(){
        return JSON.parse(this.#option_plateforme);    
    }

    getOptionEdition(){
        return JSON.parse(this.#option_edition);    
    }

    getOptionTaille(){
        return JSON.parse(this.#option_taille);    
    }

    getOptionCollector(){
        return JSON.parse(this.#option_collector);    
    }

}

export {Product};