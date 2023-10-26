
const cartTemplate = document.querySelector("#article-console-template").innerHTML;

let rendercart = function(cart){
        let all ="";
        for(let p of cart.Getcart()){
            console.log(p);
            let html = cartTemplate;
            let product = p.getProduct();
            console.log(product);
        html = html.replace("{{idproduit}}", product.getIdproduit());
        html = html.replace("{{prix}}", product.getTitre());
        html = html.replace("{{titre}}", product.getPrix());
        html = html.replace("{{alt}}", product.getTitre());
        html = html.replace("{{url_img}}", product.getUrlimage());
        html = html.replace("{{quantite}}","1");
        all += html;
       
    }
    console.log(all);
    return all;
    
}

   
    
   
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