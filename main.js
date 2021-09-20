const mobileNav = document.querySelector(".mobile-nav");
const mobileIcon = document.querySelector(".menu-icon");
const mobileMenuItems = document.querySelectorAll(".mobile-nav .menu-items li");

mobileIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

mobileMenuItems.forEach((i)=>{
    i.addEventListener("click", () =>{
        mobileNav.classList.remove("active");
    });
});
