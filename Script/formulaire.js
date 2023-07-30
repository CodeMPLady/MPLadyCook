function sendMail(){
    var parametres = {
        pseudonyme: document.getElementById("pseudonyme").value,
        email: document.getElementById("email").value,
        recetteName: document.getElementById("recetteName").value,
        ingredients: document.getElementById("ingredients").value,
        recette: document.getElementById("recette").value,
    };
    if (document.getElementById("recetteName").value == "") {
        alert("Les champs \"Nom de la recette\", \"Ingrédients\" et \"Recette\" doivent être remplis");
        return;
    }
    
    if (document.getElementById("recette").value == "") {
        alert("Les champs \"Nom de la recette\", \"Ingrédients\" et \"Recette\" doivent être remplis");
        return;
    }

    if (document.getElementById("ingredients").value == "") {
        alert("Les champs \"Nom de la recette\", \"Ingrédients\" et \"Recette\" doivent être remplis");
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
            status.classList.add("sucess");
            console.log("click")
            status.innerHTML = "Merci !";
    })
});



// window.addEventListener("DOMContentLoaded", function() {
//     var form = document.getElementById("form");
//     var status = this.document.getElementById("status");

//     function success() {
//         form.reset()
//         status.classList.add("success");
//         status.innerHTML = "Merci !";
//     }

//     function error () {
//         status.classList.add("error");
//         status.innerHTML = "Oups, un problème est survenu";
//     }
    
//     form.addEventListener("submit"), function(ev) {
//         ev.preventDefault();
//         var data = new FormData(form);
//         ajax(form.method, form.action, data, success, error);
//     }
// });

