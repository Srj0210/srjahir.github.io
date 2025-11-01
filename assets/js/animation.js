// ===== SRJahir Tech — Stable Hybrid Animation System =====
gsap.registerPlugin(ScrollTrigger);

// --- HERO SECTION (GSAP) ---
gsap.from(".hero-text h2", {
  y: 40,
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
gsap.from(".hero .btn", {
  scale: 0.9,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  ease: "back.out(1.8)"
});

// --- LOGO HOVER EFFECT ---
const logo = document.querySelector(".top-logo");
if (logo) {
  logo.addEventListener("mouseenter", () => {
    gsap.to(logo, { scale: 1.1, rotate: 5, duration: 0.4, ease: "back.out(1.7)" });
  });
  logo.addEventListener("mouseleave", () => {
    gsap.to(logo, { scale: 1, rotate: 0, duration: 0.5, ease: "power2.out" });
  });
}

// --- FOOTER FADE-IN ---
gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%"
  },
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power2.out"
});

// --- AOS Initialization (Cards & Sections) ---
AOS.init({
  duration: 900,
  once: true,
  offset: 100,
  easing: 'ease-in-out',
  mirror: false
});