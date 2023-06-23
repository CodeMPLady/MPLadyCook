document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    var searchInput = document.getElementById('search-input').value.trim();
    var matchingRecipes = searchRecipes(searchInput);

    if (matchingRecipes.length > 0) {
        var recipeUrl = matchingRecipes[0].url;
        var anchor = matchingRecipes[0].anchor; // Identifiant de l'ancre spécifique

        if (anchor) {
            recipeUrl += '#' + anchor; // Ajoute l'ancre à l'URL
        }

        var newTab = window.open(recipeUrl, '_blank'); // Ouvre la page dans un nouvel onglet
        newTab.focus();
    }
});

function searchRecipes(query) {
    query = query.toLowerCase();

    // Tableau d'exemple contenant les recettes avec leurs URL et ancres spécifiques
    var recipes = [
        { name: "brioche", url: "Patisseries.html", anchor: "brioche" },
        { name: "Recette 2", url: "recette2.html", anchor: "section2" },
        { name: "Recette 3", url: "recette3.html", anchor: "section3" }
    ];

    return recipes.filter(function (recipe) {
        return recipe.name.toLowerCase().includes(query);
    });
}