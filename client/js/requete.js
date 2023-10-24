let nav = document.querySelector("#barnav");
nav.addEventListener('click' , handler_clickOnNavitems);

handler_clickOnNavitems = function(ev){
    if (ev.target.tagName === "LI"){
        let cat = ev.target.id;
        renderCardsByCategory(cat);
    }
}



formatcard = function(){
    let template = document.querySelector("#card_template");
    let html = template.innerHTML;
    html = html.replace('{{titre}}', r.info.photo);
    html = html.replace('{{edition}}', r.info.name);
    html = html.replace('{{prix}}', r.info.time.cooking+r.info.time.preparation);
    html = html.replace('{{img}}', r.info.difficulty);
    html = html.replace('{{btn}}', r.info.cost);
    html = html.replace('{{texte}}', r.info.description);

    return html;
}
V.renderAllcard = function( data ){
    let htmlRecipe = formatcard(data);
    document.querySelector('#').innerHTML = htmlRecipe;
}

function renderCardsByCategory(category) {
    // Sélectionnez l'élément HTML où vous souhaitez afficher les cartes (par exemple, '#cardsContainer')
    let container = document.querySelector('#cardsContainer');
    
    // Supprimez le contenu précédent s'il y en a
    container.innerHTML = '';

    // Parcourez vos données (data) et filtrez les recettes en fonction de la catégorie
    data.forEach(function(recipe) {
        if (recipe.info.category === category) {
            let htmlRecipe = formatCard(recipe);
            // Ajoutez la carte formatée à l'élément de conteneur
            container.innerHTML += htmlRecipe;
        }
    });
}