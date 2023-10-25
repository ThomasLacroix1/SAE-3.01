import { ProductCollection } from "./class/product-manager.js";
import { productRenderer } from "./renderer/product-renderer.js";
       

 let M = {
     products: new ProductCollection()
 }

 let V = {}

 V.render = function(data){
    // le produits sont affichés dans section
    document.querySelector("#content-card").innerHTML = productRenderer(data);
 }
 V.init = function(){
    let select = document.querySelector("#filter-cat");
     select.addEventListener('change' , C.handler_clickcatonSelect);
    
     let nav = document.querySelector("#nav-content");
     nav.addEventListener('click' , C.handler_clickOncatonNav);
 }
 
 let C = {}

 C.init = async function(){
     let nb = await M.products.load("https://mmi.unilim.fr/~brandy18/api/products");
     console.log(nb + " products added in the ProductCollection");
     V.render( M.products.findAll() )
     V.init();
 }
 C.handler_clickcatonSelect = function(ev){
    if (ev.target.tagName === "SELECT"){
        let cat = ev.target.value;
       
        
        V.render(M.products.findByCategory(cat));
    }
}

C.handler_clickOncatonNav = function(ev){
    if (ev.target.tagName === "A"){
        let cat = ev.target.id;
        console.log(cat);
        if (cat === "0" || cat === 0) {
            V.render(M.products.findAll());
        } else {
            V.render(M.products.findByCategory(cat));
        }
    }
}

C.init();