/**
 *  Besoin de comprendre comment fonctionne fetch ?
 *  C'est ici : https://fr.javascript.info/fetch
 */


/**
 *  getRequest
 * 
 *  Requête en GET l'URI uri. 
 *  Une requête en GET correspond à une demande de "lecture" de la ressource d'URI uri.
 * 
 *  Par exemple "http://.../products" pour lire tous les produits
 *  Ou "http://.../products/3" pour lire le produit d'identifiant 3
 * 
 *  Le serveur renverra les données au format JSON.
 *  La fonction les retourne après conversion en objet Javascript (ou false si la requête a échoué)
 */
let getRequest = async function(uri){

    options = {
        method: "GET"
    };

    let response = await fetch(uri, options); // exécution (asynchrone) de la requête et attente de la réponse
    let json = await response.json(); // extraction du json retourné par le serveur (opération asynchrone aussi)
    renderAllcard(json);
    return json ; // et on retourne le tout converti en Javascript.
}


/**
 *  postRequest
 * 
 *  Requête en POST l'URI uri. Par exemple "http://.../products"
 * 
 *  Une requête en POST correspond à une demande de création d'une ressource (dans l'exemple, création d'un produit)
 *  Pour créer la ressource, on fournit les données utiles via le paramètre data.
 *  Par exemple : postRequest("http://.../products", {name: "Marteau", category:2} )
 * 
 *  Le serveur retourne en JSON la nouvelle ressource créée en base avec son identifiant.
 *  La fonction retourne les données après conversion en objet Javascript (ou false si la requête a échoué)
 */
let postRequest = async function(uri, data){
    // encodage des données au format JSON (à vous de bien transmettre ce que le serveur attend)
    json = JSON.stringify(data);

    // Défition des options de la requêtes
    options = {
        method: 'POST',
        headers: {'Content-type': 'application/json;charset=utf-8'}, // on précise que la requête contient du json
        body: json // le json est placé dans le corps de la requête
    }

    let response = await fetch(uri, options); // exécution (asynchrone) de la requête et attente de la réponse
    let $json = await response.json(); // extraction du json retourné par le serveur (opération asynchrone aussi)
    return JSON.parse($json); // et on retourne le tout converti en Javascript.
}


/**
 *  deleteRequest
 * 
 *  Requête en DELETE l'URI uri. Par exemple "http://.../products/3"
 * 
 *  Une requête en DELETE correspond à une demande de suppression d'une ressource.
 *  Par exemple : patchRequest("http://.../products/3") pour supprimer le produit d'identifiant 3
 * 
 *  La fonction retourne true ou false selon le succès de l'opération
 */
let deleteRequest = async function(uri){
   // Pas implémenté. TODO if needed.
}


/** 
 *  patchRequest
 * 
 *  Requête en PATCH l'URI uri. Par exemple "http://.../products/3"
 * 
 *  Une requête en PATCH correspond à une demande de modification/mise à jour d'une ressource.
 *  Pour modifier la ressource, on fournit les données utiles via le paramètre data.
 *  Par exemple : patchRequest("http://.../products/3", {category:1} ) pour modifier la catégorie du produit d'identifiant 3
 * 
 *  La fonction retourne true ou false selon le succès de l'opération
 */
let patchRequest = async function(uri, data){
   // Pas implémenté. TODO if needed.
}

formatcard = function(data){
    let template = document.querySelector("#card-template");
    let html = template.innerHTML;
    html = html.replace('{{titre}}', data.titre);
    html = html.replace('{{alt}}', data.titre);
    html = html.replace('{{prix}}', data.prix);
    html = html.replace('{{url_img}}', data.url_image);
    html = html.replace('{{btn}}', data.id_produit);
    return html;
}

renderAllcard = function( data ){
    document.querySelector('#content').innerHTML = document.querySelector('#accueil-template').innerHTML;
    let htmlcard="";
    for (let all of data){
        htmlcard += formatcard(all);
    }
    document.querySelector('#content-card').innerHTML = htmlcard;
}

formatproduct = function(data){
    let template = document.querySelector("#product-template");
    let html = template.innerHTML;
    html = html.replace('{{titre}}', data.titre);
    html = html.replace('{{alt}}', data.titre);
    html = html.replace('{{prix}}', data.prix);
    html = html.replace('{{url_img}}', data.url_image);
    html = html.replace('{{description}}', data.description);
    return html;
}

getRequest("https://mmi.unilim.fr/~brandy18/api/products");



// carrousel
let offset = 0;
// Sélectionne les éléments du DOM nécessaires
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let items = document.getElementById("content-card");

// Ajoute un écouteur d'événement au bouton précédent
prev.addEventListener("click", function() {
    // Vérifie si le décalage est supérieur à zéro
    if (offset > 0) {
        // Réduit le décalage de 100%
        offset -= 40;
        // Applique la transformation CSS au conteneur des éléments
        items.style.transform = "translateX(-" + offset + "%)";
    }
});

// Ajoute un écouteur d'événement au bouton suivant
next.addEventListener("click", function() {
    // Vérifie si le décalage est inférieur à la largeur maximale du carrousel
    if (offset < items.offsetWidth - 100) {
        // Augmente le décalage de 100%
        offset += 40;
        // Applique la transformation CSS au conteneur des éléments
        items.style.transform = "translateX(-" + offset + "%)";
    }
});