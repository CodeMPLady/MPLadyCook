document.addEventListener('DOMContentLoaded', function() {
    const helpButtonsArray = document.querySelectorAll(".HelpBtn");
    const overlayAstucesArray = document.querySelectorAll(".overlayBouton");

    helpButtonsArray.forEach(function(helpButton, index) {
        const overlayAstuce = overlayAstucesArray[index];

        helpButton.addEventListener("click", () => {
            overlayAstuce.style.display = "flex";
            console.log("Ti amo");
        });

        overlayAstuce.querySelector(".closeHelp").addEventListener("click", () => {
            overlayAstuce.style.display = "none";
        });
    });
});
