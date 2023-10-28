import { getRequest } from "./api-queries.js";
import { ProductCollection } from "./class/product-manager.js";
import { cardsRenderer, productRenderer } from "./renderer/product-renderer.js";
import {  renderoptions } from "./renderer/product-select-renderer.js";
import { Cart } from "./class/Cart-manager.js";
import {  Itemcart } from "./class/CartItem.js";    
import { cartRenderer } from "./renderer/cart-renderer.js";
 let M = {
     products: new ProductCollection(),
     cart: new Cart()
 }

 let V = {}

 V.renderCards = function(data){
    // le produits sont affichés dans section
    if (document.querySelector("#accueil") == null){
        document.querySelector("#content").innerHTML = document.querySelector("#accueil-template").innerHTML;
    }
    document.querySelector("#content-card").innerHTML = cardsRenderer(data);
   
 }

 V.renderProduct = function(data){
    // le produits sont affichés dans section
    document.querySelector("#content").innerHTML = productRenderer(data);
    
    renderoptions(data);
    let product_panier= document.querySelector(".button");
    product_panier.addEventListener("click", C.handler_clickaddpanier);
};

V.renderCart = async function(data){
    // le produits sont affichés dans section
   document.querySelector("#content").innerHTML = document.querySelector("#panier-template").innerHTML;

   document.querySelector("#content").innerHTML = cartRenderer(data);
};

    









 V.init = function(){
    let select = document.querySelector("#filter-cat");
     select.addEventListener('change' , C.handler_clickcatonSelect);
    
     let nav = document.querySelector("#nav-content");
     nav.addEventListener('click' , C.handler_clickOncatonNav);

     let returnback = document.querySelector("#content");
     returnback.addEventListener('click' , C.handler_clickOnreturn);

     let card = document.querySelector("#content-card");
     card.addEventListener("click", C.handler_clickOnCard);

     let card_panier= document.querySelector("#content-card");
     card_panier.addEventListener("click", C.handler_clickaddpanier);

     let panier= document.querySelector("#nav");
     panier.addEventListener("click", C.handler_clickopenpanier);

     let div = document.querySelector("#navbtn");
     div.addEventListener("click", C.handler_opennavbar);

 }

 let C = {}

 C.init = async function(){
   console.log(getRequest("https://mmi.unilim.fr/~brandy18/api/products"));
     let nb = await M.products.load("https://mmi.unilim.fr/~brandy18/api/products");
     console.log(nb + " products added in the ProductCollection");
     V.renderCards( M.products.findAll() );
     V.init();
 }
C. handler_opennavbar = function () {
    let nav = document.querySelector("#navmenu");
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden", "flex", "flex-col");
      nav.classList.add("flex", "flex-col");
    } else {
      nav.classList.add("hidden");
    }
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
    V.init();
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
    V.init();
}
C.handler_clickaddpanier = function(ev){
    if(ev.target.dataset.add == "ajout"){
        let sel = [];
        let cat = document.querySelector('.categorie');
        let catid = cat.id;
        if(catid === "1"){
            let editionSelect = document.getElementById('select-1');
            let plateformeSelect = document.getElementById('select-2');
            let selectedEdition = editionSelect.options[editionSelect.selectedIndex].textContent;
            let selectedPlateforme = plateformeSelect.options[plateformeSelect.selectedIndex].textContent;
           sel.push(selectedEdition);
           sel.push(selectedPlateforme);
           console.log(sel);
        }
     else if(catid === "2"){
        let editionSelect = document.getElementById('select-1');
        let plateformeSelect = document.getElementById('select-4');
        let selectedEdition = editionSelect.options[editionSelect.selectedIndex].textContent;
        let selectedPlateforme = plateformeSelect.options[plateformeSelect.selectedIndex].textContent;
       sel.push(selectedEdition);
       sel.push(selectedPlateforme);
       console.log(sel);
    }
    else if(catid === "3"){
        let plateformeSelect = document.getElementById('select-3');
        let selectedPlateforme = plateformeSelect.options[plateformeSelect.selectedIndex].textContent;;
       sel.push(selectedPlateforme);
       console.log(sel);
    }
        let idp = ev.target.id
        let prod = M.products.find(idp);
        M.cart.add(new Itemcart(prod , sel));
        console.log(M.cart);
    }
}

C.handler_clickopenpanier = async function(ev){
    if (ev.target.id == "panier"){
   await V.renderCart(M.cart);
   let quantite= document.querySelector("#cart-content");
    quantite.addEventListener("click", C.handler_clickmodifyquantite);
    }
     
}

C.handler_clickmodifyquantite = function(ev){
   if(ev.target.tagName === "BUTTON"){
    let id = ev.target.id;
    let itemprod = M.cart.find(id);
    let prod = itemprod.getProduct();
    if(ev.target.dataset.use == "remove"){
   if( itemprod.getQuantite() > 0){
     itemprod.removequantite();
     console.log(itemprod);
   }
}
if(ev.target.dataset.use == "add"){
    if( itemprod.getQuantite() >= prod.getStock()){
    }
    else{itemprod.addquantite();
    console.log(itemprod);
    }   
}
   if(itemprod.getQuantite() === 0){
    let p = M.cart.remove(prod.getIdproduit())
     console.log(p);
     
 }
   V.renderCart(M.cart);
   let quantite= document.querySelector("#cart-content");
   quantite.addEventListener("click", C.handler_clickmodifyquantite);
   }
   }
C.handler_clickOnreturn = function(ev){
    if(ev.target.id == 0){
        V.renderCards(M.products.findAll());
        V.init();
    }
  }
C.init();