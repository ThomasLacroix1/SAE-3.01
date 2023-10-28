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
    _id_produit; 
    _titre; 
    _id_categorie; 
    _description; 
    _prix; 
    _url_image; 
    _categorie_nom; 
    _option_plateforme;
    _option_edition;
    _option_taille;
    _option_collector;
    _stock;
    constructor(id_prod, titre, id_cat , desc , prix , url_img , cat_nom , opt_plat , opt_edi , opt_taille , opt_col , stock){
        this._id_produit = id_prod; 
        this._titre = titre; 
        this._id_categorie = id_cat; 
        this._description = desc; 
        this._prix = prix; 
        this._url_image = url_img; 
        this._categorie_nom = cat_nom; 
        this._option_plateforme = JSON.stringify(opt_plat);
        this._option_edition = JSON.stringify(opt_edi);
        this._option_taille = JSON.stringify(opt_taille);
        this._option_collector = JSON.stringify(opt_col);
        this._stock = stock; 
      
    }

    getIdproduit(){
        return this._id_produit;     
    }

    getTitre(){
        return this._titre;    
    }

    getIdcategorie(){
        return this._id_categorie;     
    }
    getDescription(){
        return this._description;     
    }

    getPrix(){
        return this._prix;     
    }

    getUrlimage(){
        return this._url_image;     
    }

    getCategorie_nom(){
        return this._categorie_nom;    
    }
   
    getOptionPlateforme(){
        let a =  JSON.parse(this._option_plateforme);
       return JSON.parse(a);      
    }

    getOptionEdition(){
        let b =  JSON.parse(this._option_edition);
       return JSON.parse(b);   
    }

    getOptionTaille(){
        let c =  JSON.parse(this._option_taille);
       return JSON.parse(c);    
    }

    getOptionCollector(){
        let d =  JSON.parse(this._option_collector);
       return JSON.parse(d);    
    }

    getStock(){
        return this._stock;     
    }


}

export {Product};