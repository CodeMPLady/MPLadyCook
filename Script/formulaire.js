var checkErrorForm = false;

function sendMail(){
    var parametres = {
        pseudonyme: document.getElementById("pseudonyme").value,
        email: document.getElementById("email").value,
        recetteName: document.getElementById("recetteName").value,
        ingredients: document.getElementById("ingredients").value,
        recette: document.getElementById("recette").value,
    };
    if (document.getElementById("recetteName").value == "" || document.getElementById("recette").value == "" || document.getElementById("ingredients").value == "") {
        alert("Les champs \"Nom de la recette\", \"Ingrédients\" et \"Recette\" doivent être remplis");
        checkErrorForm = true;
        return;
    }

    const serviceID = "service_1779go3";
    const templateID = "template_q5b63ud";
    
    emailjs.send(serviceID, templateID, parametres).then(
        res =>{
            document.getElementById("pseudonyme").value = "";
            document.getElementById("email").value = "";
            document.getElementById("recetteName").value = "";
            document.getElementById("ingredients").value = "";
            document.getElementById("recette").value = "";

            console.log(res);
        }
    )
    .catch((err) => console.log(err));
}
window.addEventListener("DOMContentLoaded", function() {
    var button = this.document.getElementById("boutton")
    var status = this.document.getElementById("status");
    
    button.addEventListener("click", function() {
        if (checkErrorForm === false){
            status.classList.add("sucess");
            status.innerHTML = "Merci !";
        }
    })
});