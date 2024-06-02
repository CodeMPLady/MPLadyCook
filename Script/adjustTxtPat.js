let activateurGatChoc = true;
let activateurCookie = true;
let activateurCrepes = true;
let activateurPancakes = true;
let activateurMuffins = true;
let activateurBrioche = true;
let activateurTiramisu = true;
let activateurMeringues = true;
let activateurRoule = true;
let activateurBrownie = true;
let activateurBiscuits = true;

let IDGateauChoc = "IDGateauChoc";
let BigTxtChoc = "Un gâteau classique et polyvalent qui se marie très bien avec de la chantilly maison";
let SmallTxtChoc = "Un gâteau classique et polyvalent !";

let IDCookies = "IDCookies";
let BigTxtCookies = "Gourmandise simple et réconfortante à partager à tout moment de la journée";
let SmalltxtCookies = "Gourmandise croustillante à partager";

let IDCrepes = "IDCrepes";
let BigTxtCrepes = "Les crêpes fines, légères et polyvalentes, parfaites pour accompagner vos garnitures préférées";
let SmallTxtCrepes = "Les crêpes légères et fines raviront vos papilles !";

let IDPancakes = "IDPancakes";
let BigTxtPancakes = "Des pancakes moelleux et légers pour un petit-déjeuner parfait";
let SmallTxtPancakes = "Pour les gourmands pour qui les crêpes ne suffisent plus";

let IDMuffins = "IDMuffins";
let BigTxtMuffins = "Des muffins gourmands, idéals à tout moment de la journée";
let SmallTxtMuffins = "Gourmandise en format individuel";

let IDBrioche = "IDBrioche";
let BigTxtBrioche = "Un classique d'une douceur subtile, parfait pour accompagner les goûters";
let SmallTxtBrioche = "Un classique doux et doré";

let IDTiramisu = "IDTiramisu";
let BigTxtTiramisu = "Un tiramisu italien alliant onctueux et saveur intense";
let SmallTxtTiramisu = "Un dessert crémeux et savoureux à souhait !";

let IDMeringues = "IDMeringues";
let BigTxtMeringues = "Des meringues légères et croquantes, une véritable gourmandise aérienne";
let SmallTxtMeringues = "Plaisir croquant et aérien";

let IDRoule = "IDRoule";
let BigTxtRoule = "Un gâteau roulé élégant et savoureux, délicieusement garni";
let SmallTxtRoule = "Un tourbillon de saveurs dans chaque tranche";

let IDBrownie = "IDBrownie";
let BigTxtBrownie = "Un indispensable pour les gourmands du chocolat qui peut être complété par de la chantilly maison";
let SmallTxtBrownie = "Un indispensable pour les gourmands du chocolat";

let IDBiscuits = "IDBiscuits";
let BigTxtBiscuits = "Des sablés à la cannelle croustillants et délicieux à savourer au petit déjeuner comme au goûter";
let SmallTxtBiscuits = "Des sablés craquants à la cannelle, un incontournable";


function genererBalise(IDdiv, BigTxt, Smalltxt, activateur) {
    if (activateur) {
        let nouvelElementP = document.createElement("p");
        let parentElement = document.getElementById(IDdiv);
        let largeurEcran = window.innerWidth;

        if (largeurEcran > 800) {
            nouvelElementP.textContent = BigTxt;
        } else {
            nouvelElementP.textContent = Smalltxt;
        }
        parentElement.appendChild(nouvelElementP);
    }
}

window.onload = function () {
    genererBalise(IDGateauChoc, BigTxtChoc, SmallTxtChoc, activateurGatChoc);
    genererBalise(IDCookies, BigTxtCookies, SmalltxtCookies, activateurCookie);
    genererBalise(IDCrepes, BigTxtCrepes, SmallTxtCrepes, activateurCrepes);
    genererBalise(IDPancakes, BigTxtPancakes, SmallTxtPancakes, activateurPancakes);
    genererBalise(IDMuffins, BigTxtMuffins, SmallTxtMuffins, activateurMuffins);
    genererBalise(IDBrioche, BigTxtBrioche, SmallTxtBrioche, activateurBrioche);
    genererBalise(IDTiramisu, BigTxtTiramisu, SmallTxtTiramisu, activateurTiramisu);
    genererBalise(IDMeringues, BigTxtMeringues, SmallTxtMeringues, activateurMeringues);
    genererBalise(IDRoule, BigTxtRoule, SmallTxtRoule, activateurRoule);
    genererBalise(IDBrownie, BigTxtBrownie, SmallTxtBrownie, activateurBrownie);
    genererBalise(IDBiscuits, BigTxtBiscuits, SmallTxtBiscuits, activateurBiscuits);
};

window.onresize = function () {
    let parentElement1 = document.getElementById(IDGateauChoc);
    let parentElement2 = document.getElementById(IDCookies);
    let parentElement3 = document.getElementById(IDCrepes);
    let parentElement4 = document.getElementById(IDPancakes);
    let parentElement5 = document.getElementById(IDMuffins);
    let parentElement6 = document.getElementById(IDBrioche);
    let parentElement7 = document.getElementById(IDTiramisu);
    let parentElement8 = document.getElementById(IDMeringues);
    let parentElement9 = document.getElementById(IDRoule);
    let parentElement10 = document.getElementById(IDBrownie);
    let parentElement11 = document.getElementById(IDBiscuits);

    parentElement1.innerHTML = "";
    parentElement2.innerHTML = "";
    parentElement3.innerHTML = "";
    parentElement4.innerHTML = "";
    parentElement5.innerHTML = "";
    parentElement6.innerHTML = "";
    parentElement7.innerHTML = "";
    parentElement8.innerHTML = "";
    parentElement9.innerHTML = "";
    parentElement10.innerHTML = "";
    parentElement11.innerHTML = "";

    activateurGatChoc = true;
    activateurCookie = true;
    activateurBrioche = true;
    activateurCrepes = true;
    activateurMeringues = true;
    activateurMuffins = true;
    activateurPancakes = true;
    activateurRoule = true;
    activateurTiramisu = true;
    activateurBrownie = true;
    activateurBiscuits = true;

    genererBalise(IDGateauChoc, BigTxtChoc, SmallTxtChoc, activateurGatChoc);
    genererBalise(IDCookies, BigTxtCookies, SmalltxtCookies, activateurCookie);
    genererBalise(IDCrepes, BigTxtCrepes, SmallTxtCrepes, activateurCrepes);
    genererBalise(IDPancakes, BigTxtPancakes, SmallTxtPancakes, activateurPancakes);
    genererBalise(IDMuffins, BigTxtMuffins, SmallTxtMuffins, activateurMuffins);
    genererBalise(IDBrioche, BigTxtBrioche, SmallTxtBrioche, activateurBrioche);
    genererBalise(IDTiramisu, BigTxtTiramisu, SmallTxtTiramisu, activateurTiramisu);
    genererBalise(IDMeringues, BigTxtMeringues, SmallTxtMeringues, activateurMeringues);
    genererBalise(IDRoule, BigTxtRoule, SmallTxtRoule, activateurRoule);
    genererBalise(IDBrownie, BigTxtBrownie, SmallTxtBrownie, activateurBrownie);
    genererBalise(IDBiscuits, BigTxtBiscuits, SmallTxtBiscuits, activateurBiscuits);
};