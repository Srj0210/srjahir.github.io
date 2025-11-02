// ===== SRJahir Tech — Motion Enhanced Animations =====
gsap.registerPlugin(ScrollTrigger);

/* --- HERO SECTION: Fade-in & Button Fix --- */
const heroBtn = document.querySelector(".hero .btn");
if (heroBtn) {
  heroBtn.style.visibility = "visible";
  heroBtn.style.opacity = "1";
}

gsap.from(".hero-text h2", {
  y: 40,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});
gsap.from(".hero-desc", {
  y: 25,
  opacity: 0,
  duration: 1,
  delay: 0.4,
  ease: "power2.out"
});
gsap.from(".hero .btn", {
  y: 20,
  opacity: 0,
  duration: 0.9,
  delay: 0.8,
  ease: "power2.out"
});

/* --- SMOOTH PARALLAX DEPTH EFFECT --- */
gsap.to(".top-logo", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".hero-text h2", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".hero-desc", {
  yPercent: 15,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

/* --- SECTION FADE-IN ANIMATIONS --- */
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

/* --- FOOTER ENTRANCE --- */
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

/* --- SOFT BACKGROUND WAVE MOTION --- */
const waves = document.querySelector(".background-waves");
if (waves) {
  gsap.to(waves, {
    duration: 18,
    backgroundPosition: "100% 100%",
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
}

/* --- AOS INIT (Safe Mode) --- */
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 120
});