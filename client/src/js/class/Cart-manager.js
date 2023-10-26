import { Itemcart } from "./CartItem.js";
class Cart {
  _cart;


  constructor(){
    this._cart = [];
}
    add(c) { if ( c instanceof Itemcart) {
    this._cart.push(c);
    }
}
Getcart(){
    return this._cart;  
}

};

export {Cart};