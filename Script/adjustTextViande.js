let activateur = true;

function genererBaliseP() {
    let nouvelElementP = document.createElement("p");
    let parentElement = document.getElementById("textPres");
    let largeurEcran = window.innerWidth;
  
    if (activateur) {
        activateur = false;
        if (largeurEcran < 770) {
        nouvelElementP.textContent = "Phrase courte";
        } else {
        nouvelElementP.textContent = "Phrase longue";
        }
        nouvelElementP.setAttribute('id', 'pres');
        parentElement.appendChild(nouvelElementP);
        
        // let  createStyle =  document.createElement("style");
        // let style = `
        // #textPres {
        //     width: 70%;
        //   }
        // `
        // createStyle.innerText = style;
        // parentElement.appendChild(createStyle);
    }
}
  
window.onload = genererBaliseP;
window.onresize = genererBaliseP;


