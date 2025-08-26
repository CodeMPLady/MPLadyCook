import { searchRecipes } from "./dbRecettes.js";

document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let searchInput = document.getElementById('search-input').value.trim();
    let matchingRecipes = searchRecipes(searchInput);
    console.log(searchRecipes(searchInput));

    const previousResults = document.querySelectorAll(".linkResult");
    const previousError = document.querySelector(".C_erreur");
    
    if (previousError) {
        previousError.remove();
    }
    previousResults.forEach(function(result) {
        result.remove();
    });

    if (searchRecipes(searchInput).length > 1) {

        for (let i = 0; i < searchRecipes(searchInput).length; i++) {
            let recipeUrl = matchingRecipes[i].url;
            let anchor = matchingRecipes[i].anchor;

            let selectDiv = document.querySelector(".result");
            let createA = document.createElement("a");
            let recipeName = document.createTextNode(matchingRecipes[i].name);

            recipeUrl += '#' + anchor;
            createA.appendChild(recipeName);
            createA.classList.add("linkResult");
            createA.href = recipeUrl;
            selectDiv.appendChild(createA);
        }
    } else if (matchingRecipes.length === 0) {
        let selectDiv = document.querySelector(".result");
        let erreur = document.createElement("p");
        let texteErreur = document.createTextNode("Nous n'avons pas encore testé cette recette !")

        erreur.classList.add("C_erreur");
        erreur.appendChild(texteErreur);
        selectDiv.appendChild(erreur);
    } else {
        if (matchingRecipes.length > 0) {
            var recipeUrl = matchingRecipes[0].url;
            var anchor = matchingRecipes[0].anchor; 
    
            recipeUrl += '#' + anchor;
            var newTab = window.open(recipeUrl, '_blank');
            newTab.focus();
        }
    }
});