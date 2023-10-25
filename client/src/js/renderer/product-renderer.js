import { Product } from "../class/product.js";
document.querySelector('#content').innerHTML = document.querySelector('#accueil-template').innerHTML;
const cardTemplate = document.querySelector("#card-template").innerHTML;
const productTemplate = document.querySelector("#product_template").innerHTML;
  
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
            html = cardTemplate.replace("{{idproduit}}", p.getIdproduit() );
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

let renderProduct = function(prod){
    let html = "";
    if (prod instanceof Product){
        html = productTemplate.replace("{{idproduit}}", prod.getIdproduit() );
        html = html.replace("{{id_categorie}}", prod.getIdcategorie() );
        html = html.replace("{{prix}}", prod.getPrix() );
        html = html.replace("{{titre}}", prod.getTitre() );
        html = html.replace("{{alt}}", prod.getTitre() );
        html = html.replace("{{description}}", prod.getDescription() );
        html = html.replace("{{categorie_nom}}", prod.getCategorie_nom() );
        html = html.replace("{{url_img}}", prod.getUrlimage() );
    }
    return html;
 }

export {render as cardsRenderer, renderProduct as productRenderer};