gsap.registerPlugin(ScrollTrigger);

// Hero text animation
gsap.from(".hero-text h2", {
  y: 40,
  opacity: 0,
  duration: 1.4,
  ease: "power3.out"
});
gsap.from(".hero-desc", {
  y: 30,
  opacity: 0,
  duration: 1.2,
  delay: 0.3
});

// Scroll-trigger fade-up for sections
document.querySelectorAll("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: { trigger: sec, start: "top 85%" },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power2.out"
  });
});
