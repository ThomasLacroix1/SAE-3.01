import { Product } from "../class/product.js";
document.querySelector('#content').innerHTML = document.querySelector('#accueil-template').innerHTML;
const productTemplate = document.querySelector("#card-template").innerHTML;
  
// data attend un tableau de Product
let render = function(data){
  
    let html = "";
    let all = "";
    // on vérifie que data est bien est tableau
    if (data instanceof Array === false) { 
        console.error( "data has to be an array of Products");
        return all;
    }
    for(let p of data){
        // on vérifie que p est bien un Product
        if (p instanceof Product){
           
            html = productTemplate.replace("{{idproduit}}", p.getIdproduit() );
            html = html.replace("{{id_categorie}}", p.getIdcategorie() );
            html = html.replace("{{prix}}", p.getPrix() );
            html = html.replace("{{titre}}", p.getTitre() );
            html = html.replace("{{alt}}", p.getTitre() );
            html = html.replace("{{description}}", p.getDescription() );
            html = html.replace("{{categorie_nom}}", p.getCategorie_nom() );
            html = html.replace("{{url_img}}", p.getUrlimage() );
            all += html;
           
        }
    }

    return all;
 }



 export {render as productRenderer};
