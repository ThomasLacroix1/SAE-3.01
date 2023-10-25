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

 let C = {}

 C.init = async function(){
     let nb = await M.products.load("https://mmi.unilim.fr/~brandy18/api/products");
     console.log(nb + " products added in the ProductCollection");
     V.render( M.products.findAll() );
 }

C.init();