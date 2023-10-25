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
            html = productTemplate.replace("{{id_categorie}}", p.getIdcategorie() );
            html = productTemplate.replace("{{id}}", p.getPrix() );
            html = productTemplate.replace("{{titre}}", p.getTitre() );
            html = productTemplate.replace("{{alt}}", p.getTitre() );
            html = productTemplate.replace("{{description}}", p.getDescription() );
            html = productTemplate.replace("{{categorie_nom}}", p.getCategorie_nom() );
            html = productTemplate.replace("{{url_img}}", p.getUrlimage() );
            all += html;
        }
    }

    return all;
 }

 export {render as productRenderer};