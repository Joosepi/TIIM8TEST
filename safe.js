document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
