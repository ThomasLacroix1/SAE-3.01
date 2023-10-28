
const temp = document.querySelector("#panier-template").innerHTML;

let rendercart = function(cart) {
    let all = "";
    let total = 0;
    let panier = "";
    for (let p of cart.Getcart()) {
        let select = p.getSelect();
        let product = p.getProduct();
        let quantite = p.getQuantite();
        let cartTemplate = ""; // Déclarez cartTemplate à l'intérieur de la boucle
      
        switch (product.getIdcategorie()) {
            case 1:
                cartTemplate = document.querySelector("#article-jeu-template").innerHTML;
                break;
            case 2:
                cartTemplate = document.querySelector("#article-console-template").innerHTML;
                break;
            case 3:
                cartTemplate = document.querySelector("#article-figurine-template").innerHTML;
                break;
            default:
                // Utilisez un modèle par défaut si l'ID de catégorie n'est pas reconnu
                cartTemplate = document.querySelector("#product_template-default").innerHTML;
                break;
        }

        console.log(product);
        let prix = quantite*product.getPrix();
        total += prix
        let html = cartTemplate.replace("{{idproduit}}", product.getIdproduit());
        html = html.replace("{{titre}}", product.getTitre());
        html = html.replace("{{idproduit}}", product.getIdproduit());
        html = html.replace("{{prix}}",prix);
        html = html.replace("{{alt}}", product.getTitre());
        html = html.replace("{{url_img}}", product.getUrlimage());
        html = html.replace("{{quantite}}", quantite);
        html = html.replace("{{edition}}", select[0]);
        html = html.replace("{{collector}}", select[1]);
        html = html.replace("{{taille}}", select[0]);
        html = html.replace("{{plateforme}}", select[1]);

        all += html;
    }
     // Retourne le résultat final
    let pad = temp.replace("{{here}}", all);
     pad = pad.replace("{{total}}", total);
     panier += pad
    return panier;
}

/*let rendertemp = function(test) {
   let p =  rendercart(test);
    console.log(p);
   let cartTemplate = "";
    for(let t of p){
    cartTemplate = cartTemplate.replace("{{here}}", t);
    }
    return cartTemplate
}*/

    export {rendercart as cartRenderer  };

    /* html = cartTemplate.replace("{{idproduit}}", p.getIdproduit() );
                html = html.replace("{{idproduit2}}", p.getIdproduit() );
                html = html.replace("{{id_categorie}}", p.getIdcategorie() );
                html = html.replace("{{prix}}", p.getPrix() );
                html = html.replace("{{titre}}", p.getTitre() );
                html = html.replace("{{alt}}", p.getTitre() );
                html = html.replace("{{description}}", p.getDescription() );
                html = html.replace("{{categorie_nom}}", p.getCategorie_nom() );
                html = html.replace("{{url_img}}", p.getUrlimage() );*/