/* ===================================================
   SRJahir Tech — Minimal Premium Animations
   Apple-style: smooth, subtle, professional
   =================================================== */

gsap.registerPlugin(ScrollTrigger);

/* ---------------------------------
   HERO — Soft Fade on Load
---------------------------------- */
gsap.from(".hero-text h2", {
  opacity: 0,
  y: 40,
  duration: 1.4,
  ease: "power2.out"
});

gsap.from(".hero-desc", {
  opacity: 0,
  y: 40,
  duration: 1.3,
  delay: 0.15,
  ease: "power2.out"
});

gsap.from(".hero .btn", {
  opacity: 0,
  y: 30,
  duration: 1.2,
  delay: 0.3,
  ease: "power2.out"
});

/* ---------------------------------
   SECTION REVEAL — Fade + Lift
---------------------------------- */
document.querySelectorAll("section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true
    },
    opacity: 0,
    y: 45,
    duration: 1.3,
    ease: "power2.out"
  });
});

/* ---------------------------------
   CARDS — Staggered Reveal
---------------------------------- */
document.querySelectorAll(".cards").forEach((group) => {
  gsap.from(group.children, {
    scrollTrigger: {
      trigger: group,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true
    },
    opacity: 0,
    y: 35,
    duration: 1.2,
    stagger: 0.15,
    ease: "power2.out"
  });
});

/* ---------------------------------
   FOOTER — Gentle Fade
---------------------------------- */
gsap.from("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 90%",
    toggleActions: "play none none none",
    once: true
  },
  opacity: 0,
  y: 30,
  duration: 1.2,
  ease: "power2.out"
});

/* ---------------------------------
   AOS SAFE INIT (fallback only)
---------------------------------- */
if (window.AOS) {
  AOS.init({
    once: true,
    duration: 700,
    easing: "ease-out-cubic",
    offset: 120
  });
}