document.addEventListener('DOMContentLoaded', function() {
    const helpButtonsArray = document.querySelectorAll(".HelpBtnRiz");
    const overlayAstucesArray = document.querySelectorAll(".overlayBoutonRiz");

    helpButtonsArray.forEach(function(helpButton, index) {
        const overlayAstuce = overlayAstucesArray[index];

        helpButton.addEventListener("click", () => {
            overlayAstuce.style.display = "flex";
            console.log("Ti amo");
        });

        overlayAstuce.querySelector(".closeHelpRiz").addEventListener("click", () => {
            overlayAstuce.style.display = "none";
        });
    });
});
