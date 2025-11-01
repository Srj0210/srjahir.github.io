// ===== SRJahir Tech — Stable Hybrid Animation Fix =====
gsap.registerPlugin(ScrollTrigger);

// --- HERO ANIMATION ---
gsap.from(".hero-text h2", {
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});
gsap.from(".hero-desc", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});
gsap.from(".btn", {
  scale: 0.9,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  ease: "back.out(1.8)"
});

// --- LOGO ANIMATION ---
const logo = document.querySelector(".top-logo");
if (logo) {
  logo.addEventListener("mouseenter", () => {
    gsap.to(logo, { scale: 1.1, rotate: 5, duration: 0.4, ease: "back.out(1.7)" });
  });
  logo.addEventListener("mouseleave", () => {
    gsap.to(logo, { scale: 1, rotate: 0, duration: 0.5, ease: "power2.out" });
  });
}

// --- ONLY GSAP fade for footer ---
gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out"
});

// --- FIX: Disable AOS opacity conflicts ---
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-aos]").forEach(el => {
    el.style.visibility = "visible";
    el.style.opacity = "1";
  });
});

// --- INIT AOS (lighter config) ---
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 100,
  mirror: false,
  startEvent: "load"
});