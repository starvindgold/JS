document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");

        // Toggle between Hamburger (☰) and Cross (✖)
        hamburger.innerHTML = hamburger.classList.contains("active") ? "✖" : "☰";
    });
});
