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

// Scroll-trigger fade-up for each section
document.querySelectorAll("section").forEach((sec) => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power2.out"
  });
});

// Animate project cards on scroll
gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// Floating logo effect for project logos
gsap.utils.toArray(".project-logo").forEach((logo, i) => {
  gsap.to(logo, {
    y: 10,
    repeat: -1,
    yoyo: true,
    duration: 3 + i * 0.5,
    ease: "power1.inOut"
  });
});