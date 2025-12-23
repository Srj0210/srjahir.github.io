// ===== SRJahir Tech — Clean Fade Animations (NO BLUR) =====
gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------
   HERO SECTION (Fade + Move only)
------------------------------------------------- */
const heroBtn = document.querySelector(".hero .btn");
if (heroBtn) {
  heroBtn.style.visibility = "visible";
  heroBtn.style.opacity = "1";
}

gsap.from(".hero-text h2", {
  y: 30,
  opacity: 0,
  duration: 1.1,
  ease: "power3.out"
});

gsap.from(".hero-desc", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 0.25,
  ease: "power2.out"
});

gsap.from(".hero .btn", {
  y: 15,
  opacity: 0,
  duration: 0.9,
  delay: 0.5,
  ease: "power2.out"
});

/* -------------------------------------------------
   HERO PARALLAX (UNCHANGED)
------------------------------------------------- */
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

/* -------------------------------------------------
   SECTIONS (Fade + Lift on Scroll)
------------------------------------------------- */
document.querySelectorAll("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 92%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 1.1,
    ease: "power2.out"
  });
});

/* -------------------------------------------------
   FOOTER
------------------------------------------------- */
gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%"
  },
  opacity: 0,
  y: 30,
  duration: 1.1,
  ease: "power2.out"
});

/* -------------------------------------------------
   BACKGROUND WAVES (UNCHANGED)
------------------------------------------------- */
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

/* -------------------------------------------------
   AOS (SAFE)
------------------------------------------------- */
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 120
});