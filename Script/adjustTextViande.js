let activateur = true;

function genererBaliseP() {
    let nouvelElementP = document.createElement("p");
    let parentElement = document.getElementById("textPres");
    let largeurEcran = window.innerWidth;
  
    if (activateur) {
        activateur = false;
        if (largeurEcran < 770) {
        nouvelElementP.textContent = "Qu'elle soit grillée, sautée ou marinée : dévorez!";
        } else {
        nouvelElementP.textContent = "Succombez aux plaisirs de la viande avec des plats qui célèbrent sa saveur et sa tendresse. Qu'elle soit grillée, sautée ou marinée : dévorez!";
        }
        nouvelElementP.setAttribute('id', 'pres');
        parentElement.appendChild(nouvelElementP);
        
        let  createStyle =  document.createElement("style");
        let style = `
        #textPres {
            font-size: 0.9em;
        }
        #textPres:hover {
            background: -webkit-linear-gradient(45deg, rgba(16,6,255,1) 0%, rgba(50,50,50,1) 50%, rgba(255,0,0,1) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        `
        createStyle.innerText = style;
        parentElement.appendChild(createStyle);
    }
}
  
window.onload = genererBaliseP;
window.onresize = genererBaliseP;


