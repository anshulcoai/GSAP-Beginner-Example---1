
document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#title", { 
        duration: 0.5, 
        opacity: 0, 
        y: -50, 
        ease: "power2.out"
    });
});
let tl = gsap.timeline();

tl.to("#title", { duration: 1, x: 100, opacity: 0.5 })
  .to("#title", { duration: 1, x: 0, opacity: 1 });
