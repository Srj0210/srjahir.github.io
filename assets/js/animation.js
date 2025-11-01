gsap.registerPlugin(ScrollTrigger);

// Init AOS safely
if (typeof AOS !== "undefined") {
  AOS.init({
    once: true,
    duration: 800,
    offset: 120,
    easing: "ease-out-cubic"
  });
}

// Hero Animation
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
gsap.from(".btn", {
  y: 20,
  opacity: 0,
  duration: 1.2,
  delay: 0.6
});

// Safe scroll-trigger animation for visible sections only
document.querySelectorAll("section").forEach((sec) => {
  ScrollTrigger.create({
    trigger: sec,
    start: "top 85%",
    onEnter: () => {
      gsap.to(sec, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
      });
    }
  });
});

// Ensure all sections visible by default
document.querySelectorAll("section, footer").forEach((el) => {
  el.style.opacity = "1";
  el.style.visibility = "visible";
});