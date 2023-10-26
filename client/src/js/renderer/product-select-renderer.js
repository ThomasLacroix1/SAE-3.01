import { Product } from "../class/product.js";

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
    let template = document.querySelector('#select-product-template3');
    
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
    let renderSelect = function(data) {
            if(document.querySelector("#select-1")){
            document.querySelector('#select-1').innerHTML = renderSelectEdition(data);
            }
            if(document.querySelector("#select-2")){
            document.querySelector('#select-2').innerHTML = renderSelectPlateforme(data);
            }
            if(document.querySelector("#select-4")){
                document.querySelector('#select-4').innerHTML = renderSelectCollector(data);
                }
            if(document.querySelector("#select-3")){
                document.querySelector('#select-3').innerHTML = renderSelectTaille(data);
                }
    }



    export {renderSelect as renderoptions}; 