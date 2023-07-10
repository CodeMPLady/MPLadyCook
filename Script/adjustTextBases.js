let activateur = true;

function genererBaliseP() {
    let nouvelElementP = document.createElement("p");
    let parentElement = document.getElementById("textPres");
    let largeurEcran = window.innerWidth;
  
    if (activateur) {
        activateur = false;
        if (largeurEcran < 770) {
        nouvelElementP.textContent = "Vous trouverez ici les bases qui sont nécessaires à la réalisation des recettes proposées sur ce site.";
        } else {
        nouvelElementP.textContent = "En cuisine, certaines bases sont indispensables afin de réussir et sublimer ses recettes. Vous trouverez ici les bases qui sont nécessaires à la réalisation des recettes proposées sur ce site.";
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


