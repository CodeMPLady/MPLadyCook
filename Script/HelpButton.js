document.addEventListener('DOMContentLoaded', function() {
    const helpButtons = document.querySelectorAll(".HelpBtn");
    const overlayAstuces = document.querySelectorAll(".overlayBouton");

    helpButtons.forEach(function(helpButton, index) {
        const overlayAstuce = overlayAstuces[index];

        helpButton.addEventListener("click", () => {
            overlayAstuce.style.display = "flex";
            console.log("Ti amo");
        });

        overlayAstuce.querySelector(".closeHelp").addEventListener("click", () => {
            overlayAstuce.style.display = "none";
        });
    });
});
