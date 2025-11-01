// ====== SRJahir Tech — Premium Animation Engine ======
gsap.registerPlugin(ScrollTrigger);

// --- Hero Animation ---
const tlHero = gsap.timeline();
tlHero.from(".hero-text h2", {
  y: 60,
  opacity: 0,
  duration: 1.3,
  ease: "power3.out"
})
.from(".hero-desc", {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
}, "-=0.8")
.from(".btn", {
  scale: 0.9,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)"
}, "-=0.5");

// --- Section Fade-Up Smooth Scroll ---
gsap.utils.toArray("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
  });
});

// --- Card Floating Entry ---
gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// --- Logo Hover Bounce ---
const logo = document.querySelector(".top-logo");
if (logo) {
  logo.addEventListener("mouseenter", () => {
    gsap.to(logo, { scale: 1.08, rotate: 6, duration: 0.5, ease: "back.out(2)" });
  });
  logo.addEventListener("mouseleave", () => {
    gsap.to(logo, { scale: 1, rotate: 0, duration: 0.6, ease: "power2.out" });
  });
}

// --- Footer Fade In ---
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

// --- Initialize AOS ---
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in-out'
});