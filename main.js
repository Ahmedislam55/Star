
const navbar = document.getElementById("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("bg-zinc-700");
    } else {
        navbar.classList.remove("bg-zinc-700");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });git init
});

