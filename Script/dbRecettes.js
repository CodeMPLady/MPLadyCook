export function searchRecipes(query) {
    query = query.toLowerCase();

    var recipes = [
        { name: "Brioche", url: "Pages/Patisseries.html", anchor: "brioche" },
        { name: "Gâteau au chocolat", url:"Pages/Patisseries.html", anchor: "gateauChoc"},
        { name: "Cookies", url: "Pages/Patisseries.html", anchor: "cookies"},
        { name: "Crêpes", url: "Pages/Patisseries.html", anchor: "crepes"},
        { name: "Pancakes", url: "Pages/Patisseries.html", anchor: "pancakes"},
        { name: "Muffins", url: "Pages/Patisseries.html", anchor: "muffins"},
        { name: "Tiramisu", url: "Pages/Patisseries.html", anchor: "tiramisu"},
        { name: "Meringues", url: "Pages/Patisseries.html", anchor: "meringues"},
        { name: "Gâteau roulé", url: "Pages/Patisseries.html", anchor: "roule"},
        { name: "Brownie", url: "Pages/Patisseries.html", anchor: "brownie"},
        { name: "Biscuits sablés", url: "Pages/Patisseries.html", anchor: "biscuits"},
        { name: "Nougat", url: "Pages/Patisseries.html", anchor: "nougat"},
        { name: "Gâteau au yaourt", url: "Pages/Patisseries.html", anchor: "gateau_yaourt"},
        { name: "Cookies Deluxe", url: "Pages/Patisseries.html", anchor: "cookies_deluxe"},
        { name: "Boeuf lok lak", url: "Pages/PlatsViande.html", anchor: "loklak" },
        { name: "Nouilles sautées au boeuf", url: "Pages/PlatsViande.html", anchor: "nouillesBoeuf"},
        { name: "Poulet mariné au citron", url: "Pages/PlatsViande.html", anchor: "pouletCitron"},
        { name: "Poulet grillé à la thaï", url: "Pages/PlatsViande.html", anchor: "pouletThai"},
        { name: "Chirashi au poulet", url: "Pages/PlatsViande.html", anchor: "chirashiPoulet"},
        { name: "Saumon teriyaki", url: "Pages/PlatsMer.html", anchor: "saumonTeriyaki" },
        { name: "Pavés de saumon", url: "Pages/PlatsMer.html", anchor: "pavesSaumon"},
        { name: "Limande du Nord", url: "Pages/PlatsMer.html", anchor: "limande"},
        { name: "Makis", url: "Pages/PlatsMer.html", anchor: "makis"},
        { name: "Pâte à pizza", url: "Pages/Bases.html", anchor: "patePizza" },
        { name: "Riz japonais", url: "Pages/Bases.html", anchor: "BigTitleRiz"},
        { name: "Pâte brisée", url: "Pages/Bases.html", anchor: "pateBrisee"},
        { name: "Tortillas", url: "Pages/Bases.html", anchor: "tortillas"},
        { name: "Sauce yakiniku", url: "Pages/Bases.html", anchor: "yakiniku"},
        { name: "Fond de volaille", url: "Pages/Bases.html", anchor: "fond_volaille"},
        { name: "Poulet rôti", url: "Pages/PlatsViande.html", anchor: "pouletRoti"},
        { name: "Herbes de Provence", url: "Pages/Bases.html", anchor:"herbesPro"},
        { name: "Sauce teriyaki", url: "Pages/Bases.html", anchor: "teriyaki"},
        { name: "Sauce lok lak", url: "Pages/Bases.html", anchor: "sauceLoklak"},
        { name: "Chantilly", url: "Pages/Bases.html", anchor: "chantilly"},
        { name: "Gnocchis", url: "Pages/PlatsClassiques.html", anchor: "gnocchis" },
        { name: "Pizza", url: "Pages/PlatsClassiques.html", anchor: "pizza" },
        { name: "Quiche courgettes chèvre", url: "Pages/PlatsClassiques.html", anchor: "quicheCC"},
        { name: "Onigiri", url: "Pages/PlatsClassiques.html", anchor: "onigiri"},
        { name: "Croquettes de patates", url: "Pages/PlatsClassiques.html", anchor: "croquettes"},
        { name: "Quiche jambon épinards", url: "Pages/PlatsClassiques.html", anchor: "quicheJambonEpinards"}
    ];

    return recipes.filter(function (recipe) {
        return recipe.name.toLowerCase().includes(query);
    });
}