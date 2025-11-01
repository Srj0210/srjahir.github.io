// ===== SRJahir Tech — Polished Animations =====
gsap.registerPlugin(ScrollTrigger);

// --- HERO SECTION (Fixed Flicker + Entrance Animation) ---
const heroBtn = document.querySelector(".hero .btn");
if (heroBtn) {
  // Ensure visible before animation starts
  heroBtn.style.visibility = "visible";
  heroBtn.style.opacity = "1";
}

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
gsap.from(".hero .btn", {
  y: 20,
  opacity: 0,
  duration: 0.9,
  delay: 0.8,
  ease: "power2.out"
});

// --- SECTION ENTRANCES ---
document.querySelectorAll("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 60,
    duration: 1.2,
    ease: "power2.out"
  });
});

// --- FOOTER ENTRANCE ---
gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 40,
  duration: 1.2,
  ease: "power2.out"
});

// --- SOFT BACKGROUND WAVE MOTION ---
const waves = document.querySelector(".background-waves");
if (waves) {
  gsap.to(waves, {
    duration: 15,
    backgroundPosition: "100% 100%",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

// --- INIT AOS (Safe Mode) ---
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 120
});