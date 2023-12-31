let activateur = true;

function genererBaliseP() {
    let nouvelElementP = document.createElement("p");
    let parentElement = document.getElementById("textPres");
    let largeurEcran = window.innerWidth;
  
    if (activateur) {
        activateur = false;
        if (largeurEcran < 770) {
        nouvelElementP.textContent = "Découvrez ces plats qui se fondront dans votre quotidien.";
        } else {
        nouvelElementP.textContent = "Découvrez ces plats qui se fondront dans votre quotidien.";
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


