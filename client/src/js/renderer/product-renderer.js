import { Product } from "../class/product.js";
document.querySelector('#content').innerHTML = document.querySelector('#accueil-template').innerHTML;
const cardTemplate = document.querySelector("#card-template").innerHTML;


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

let renderProduct = function(prod) {
    let html = "";

    if (prod instanceof Product) {
        let productTemplate = "";

        switch (prod.getIdcategorie()) {
            case 1:
                productTemplate = document.querySelector("#product_template-jeux").innerHTML;
                break;
            case 2:
                productTemplate = document.querySelector("#product_template-console").innerHTML;
                break;
            case 3:
                productTemplate = document.querySelector("#product_template-figurine").innerHTML;
                break;
            default:
                // Utilisez un modèle par défaut si l'ID de catégorie n'est pas reconnu
                productTemplate = document.querySelector("#product_template-default").innerHTML;
                break;
        }

        // Remplacez les placeholders dans le modèle par les valeurs du produit
        productTemplate = productTemplate.replace("{{idproduit}}", prod.getIdproduit());
        productTemplate = productTemplate.replace("{{id_categorie}}", prod.getIdcategorie());
        productTemplate = productTemplate.replace("{{prix}}", prod.getPrix());
        productTemplate = productTemplate.replace("{{titre}}", prod.getTitre());
        productTemplate = productTemplate.replace("{{alt}}", prod.getTitre());
        productTemplate = productTemplate.replace("{{description}}", prod.getDescription());
        productTemplate = productTemplate.replace("{{categorie_nom}}", prod.getCategorie_nom());
        productTemplate = productTemplate.replace("{{url_img}}", prod.getUrlimage());
        
        html = productTemplate;
        
    }

    return html;
};

let renderproducttemplate = function(idprod) {
    return renderProduct(idprod);
};

let renderSelectEdition = function(product) {
    let template = document.querySelector('#select-product-template');
    
    if (product instanceof Product) {
        let optionsHtml = '';

        for (let edition of product.getOptionEdition()) {
            let optionHtml = template.innerHTML.replace("{{edition}}", edition);
            optionsHtml += optionHtml;
        }
        

        return optionsHtml
    }
};
let renderSelectTaille = function(product) {
    let template = document.querySelector('#select-product-template');
    
    if (product instanceof Product) {
        let optionsHtml = '';

        for (let taille of product.getOptionTaille()) {
            let optiontaille= template.innerHTML.replace("{{taille}}", taille);
            optionsHtml += optiontaille;
        }
        

        return optionsHtml
    }
};
let renderSelectPlateforme = function(product) {
    let template = document.querySelector('#select-product-template2');
    
    if (product instanceof Product) {
        let optionsHtml = '';

        for (let plateforme of product.getOptionPlateforme()) {
            let optionHtml = template.innerHTML.replace("{{plateforme}}", plateforme);
            optionsHtml += optionHtml;
        }
        

        return optionsHtml
    }
};
    let renderSelectCollector = function(product) {
        let template = document.querySelector('#select-product-template2');
        
        if (product instanceof Product) {
            let optionsHtml = '';
    
            for (let collector of product.getOptionCollector()) {
                let optionHtml = template.innerHTML.replace("{{collector}}", collector);
                optionsHtml += optionHtml;
            }
            
    
            return optionsHtml
        }
};

export {render as cardsRenderer, renderproducttemplate as productRenderer , renderSelectEdition , renderSelectPlateforme , renderSelectTaille , renderSelectCollector };