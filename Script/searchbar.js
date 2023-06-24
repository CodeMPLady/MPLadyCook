document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    var searchInput = document.getElementById('search-input').value.trim();
    var matchingRecipes = searchRecipes(searchInput);

    console.log(searchRecipes(searchInput));

    if (searchRecipes(searchInput).length > 1) {

        for (let i = 0; i < searchRecipes(searchInput).length; i++) {
            let recipeUrl = matchingRecipes[i].url;
            let anchor = matchingRecipes[i].anchor;

            let selectDiv = document.querySelector(".result");
            let createA = document.createElement("a");
            let brToBreath = document.createElement("br");
            let recipeName = document.createTextNode(matchingRecipes[i].name);

            recipeUrl += '#' + anchor;
            createA.appendChild(recipeName);
            createA.classList.add("linkResult");

            createA.href = recipeUrl;
            selectDiv.appendChild(createA);
            selectDiv.appendChild(brToBreath);
            
            console.log(recipeUrl);
        }


    } else {
        if (matchingRecipes.length > 0) {
            var recipeUrl = matchingRecipes[0].url;
            var anchor = matchingRecipes[0].anchor; // Identifiant de l'ancre spécifique
    
            recipeUrl += '#' + anchor; // Ajoute l'ancre à l'URL
    
            var newTab = window.open(recipeUrl, '_blank'); // Ouvre la page dans un nouvel onglet
            newTab.focus();
        }

    }

});

function searchRecipes(query) {
    query = query.toLowerCase();

    // Tableau d'exemple contenant les recettes avec leurs URL et ancres spécifiques
    var recipes = [
        { name: "brioche", url: "Patisseries.html", anchor: "brioche" },
        { name: "boeuf lok lak", url: "PlatsViande.html", anchor: "loklak" },
        { name: "saumon teriyaki", url: "PlatsMer.html", anchor: "saumonTeriyaki" },
        { name: "pate a pizza", url: "Bases.html", anchor: "patePizza" },
        { name: "gnocchis", url: "PlatsTradi.html", anchor: "gnocchis" },
        { name: "pizza", url: "PlatsTradi.html", anchor: "pizza" }
    ];

    return recipes.filter(function (recipe) {
        return recipe.name.toLowerCase().includes(query);
    });
}