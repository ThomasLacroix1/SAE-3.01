import { getRequest } from "./api-queries.js";
import { ProductCollection } from "./class/product-manager.js";
import { cardsRenderer, productRenderer, renderSelect } from "./renderer/product-renderer.js";
       

 let M = {
     products: new ProductCollection()
 }

 let V = {}

 V.renderCards = function(data){
    // le produits sont affichés dans section
    document.querySelector("#content-card").innerHTML = cardsRenderer(data);
 }

 V.renderProduct = function(data){
    // le produits sont affichés dans section
    document.querySelector("#content").innerHTML = productRenderer(data);
    
   renderSelect(data);
};





 V.init = function(){
    let select = document.querySelector("#filter-cat");
     select.addEventListener('change' , C.handler_clickcatonSelect);
    
     let nav = document.querySelector("#nav-content");
     nav.addEventListener('click' , C.handler_clickOncatonNav);

     let card = document.querySelector("#content-card");
     card.addEventListener("click", C.handler_clickOnCard);

 }

 let C = {}

 C.init = async function(){
   console.log(getRequest("https://mmi.unilim.fr/~brandy18/api/products"));
     let nb = await M.products.load("https://mmi.unilim.fr/~brandy18/api/products");
     console.log(nb + " products added in the ProductCollection");
     V.renderCards( M.products.findAll() );
     V.init();
 }

 C.handler_clickOnCard = function(ev){
    if (ev.target.classList.contains("produit")){
        V.renderProduct(M.products.find(ev.target.id));
    }
    
 }

 C.handler_clickcatonSelect = function(ev){
    if (ev.target.tagName === "SELECT"){
        let cat = ev.target.value;        
        V.renderCards(M.products.findByCategory(cat));
    }
}

C.handler_clickOncatonNav = function(ev){
    if (ev.target.tagName === "A"){
        let cat = ev.target.id;
        console.log(cat);
        if (cat === "0" || cat === 0) {
            V.renderCards(M.products.findAll());
        } else {
            V.renderCards(M.products.findByCategory(cat));
        }
    }
}


C.init();