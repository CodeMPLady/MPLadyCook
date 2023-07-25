export function searchRecipes(query) {
    query = query.toLowerCase();

    var recipes = [
        { name: "Brioche", url: "Patisseries.html", anchor: "brioche" },
        { name: "Gâteau au chocolat", url:"Patisseries.html", anchor: "gateauChoc"},
        { name: "Cookies", url: "Patisseries.html", anchor: "cookies"},
        { name: "Crêpes", url: "Patisseries.html", anchor: "crepes"},
        { name: "Pancakes", url: "Patisseries.html", anchor: "pancakes"},
        { name: "Muffins", url: "Patisseries.html", anchor: "muffins"},
        { name: "Tiramisu", url: "Patisseries.html", anchor: "tiramisu"},
        { name: "Meringues", url: "Patisseries.html", anchor: "meringues"},
        { name: "Gâteau roulé", url: "Patisseries.html", anchor: "roule"},
        { name: "Boeuf lok lak", url: "PlatsViande.html", anchor: "loklak" },
        { name: "Nouilles sautées au boeuf", url: "PlatsViande.html", anchor: "nouillesBoeuf"},
        { name: "Poulet mariné au citron", url: "PlatsViande.html", anchor: "pouletCitron"},
        { name: "Poulet grillé à la thaï", url: "PlatsViande.html", anchor: "pouletThai"},
        { name: "Chirashi au poulet", url: "PlatsViande.html", anchor: "chirashiPoulet"},
        { name: "Saumon teriyaki", url: "PlatsMer.html", anchor: "saumonTeriyaki" },
        { name: "Pavés de saumon", url: "PlatsMer.html", anchor: "pavesSaumon"},
        { name: "Limande du Nord", url: "PlatsMer.html", anchor: "limande"},
        { name: "Makis", url: "PlatsMer.html", anchor: "makis"},
        { name: "Pâte à pizza", url: "Bases.html", anchor: "patePizza" },
        { name: "Riz japonais", url: "Bases.html", anchor: "BigTitleRiz"},
        { name: "Pâte brisée", url: "Bases.html", anchor: "pateBrisee"},
        { name: "Tortillas", url: "Bases.html", anchor: "tortillas"},
        { name: "Sauce yakiniku", url: "Bases.html", anchor: "yakiniku"},
        { name: "Herbes de Provence", url: "Bases.html", anchor:"herbesPro"},
        { name: "Sauce teriyaki", url: "Bases.html", anchor: "teriyaki"},
        { name: "Sauce lok lak", url: "Bases.html", anchor: "sauceLoklak"},
        { name: "Gnocchis", url: "PlatsClassiques.html", anchor: "gnocchis" },
        { name: "Pizza", url: "PlatsClassiques.html", anchor: "pizza" },
        { name: "Quiche courgettes chèvre", url: "PlatsClassiques.html", anchor: "quicheCC"},
        { name: "Onigiri", url: "PlatsClassiques.html", anchor: "onigiri"},
        { name: "Croquettes de patates", url: "PlatsClassiques.html", anchor: "croquettes"}
    ];

    return recipes.filter(function (recipe) {
        return recipe.name.toLowerCase().includes(query);
    });
}