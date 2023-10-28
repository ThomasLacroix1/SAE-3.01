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
find(id){
    return this._cart.find( c => c.getId()==id );
}
remove(id) {
    this._cart = this._cart.filter(c => c.getId() !== id);
}
};

export {Cart};