
class Itemcart {

    _products = []; 
    _quantite = 1; 
    _select = [];
 

    constructor(c , s){
        this._products = c;
        this._select = s;
      
        
    }



getProduct(){
            return this._products;    
};
getId(){
    return this._products.getIdproduit();    
};
getSelect(){
    return this._select;    
};

getQuantite(){
    return this._quantite;    
};
addquantite(){
    return this._quantite++;    
};

removequantite(){
    return this._quantite--;    
};


};


export {Itemcart};
