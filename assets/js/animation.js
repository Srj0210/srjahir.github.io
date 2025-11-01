// ===== SRJahir Tech — Stable Animation =====
gsap.registerPlugin(ScrollTrigger);

// --- HERO SECTION FIXED ---
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
  ease: "power2.out",
  onStart: () => {
    document.querySelector(".hero .btn").style.visibility = "visible";
    document.querySelector(".hero .btn").style.opacity = "1";
  }
});

// --- SECTIONS (FADE-UP) ---
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

// --- FOOTER ANIMATION ---
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

// --- INIT AOS SAFE MODE ---
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 120
});