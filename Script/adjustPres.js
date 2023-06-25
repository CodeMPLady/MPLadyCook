let activateur = true;

function genererBaliseP() {
    let nouvelElementP = document.createElement("p");
    let parentElement = document.getElementById("textPres");
    let largeurEcran = window.innerWidth;
  
    if (activateur) {
        activateur = false;
        if (largeurEcran < 770) {
        nouvelElementP.textContent = "Nous allons présenter ici les bases qui sont nécessaires à la réalisation des recettes proposées sur ce site.";
        } else {
        nouvelElementP.textContent = "En cuisine, certaines bases sont indispensables afin de réussir et sublimer ses recettes. Nous allons donc présenter ici les bases qui sont nécessaires à la réalisation des recettes proposées sur ce site.";
        }
        nouvelElementP.setAttribute('id', 'pres');
        parentElement.appendChild(nouvelElementP);
        
        let  createStyle =  document.createElement("style");
        let style = `
        #textPres {
            width: 70%;
          }
        `
        createStyle.innerText = style;
        parentElement.appendChild(createStyle);
    }

     
}
  
window.onload = genererBaliseP;
window.onresize = genererBaliseP;


