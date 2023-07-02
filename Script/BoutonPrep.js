document.addEventListener('DOMContentLoaded', function() {
    const BoutonsPrepArray = document.querySelectorAll(".openPrep");
    const DescArray = document.querySelectorAll(".descr");

    BoutonsPrepArray.forEach(function(BoutonPrep, index) {
        const Descr = DescArray[index];

        BoutonPrep.addEventListener("click", () => {
            Descr.style.height = "100%";
        });

        Descr.querySelector(".closePrep").addEventListener("click", () => {
            Descr.style.height = "25px";
        });
    });
});