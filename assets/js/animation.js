// ===== SRJahir Tech — Fade with HALF Blur (Micro Polish) =====
gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------
   HERO SECTION (Fade + very light blur)
------------------------------------------------- */
const heroBtn = document.querySelector(".hero .btn");
if (heroBtn) {
  heroBtn.style.visibility = "visible";
  heroBtn.style.opacity = "1";
}

gsap.fromTo(
  ".hero-text h2",
  { y: 25, opacity: 0, filter: "blur(2px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    ease: "power3.out",
    clearProps: "filter"
  }
);

gsap.fromTo(
  ".hero-desc",
  { y: 18, opacity: 0, filter: "blur(1.5px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.95,
    delay: 0.2,
    ease: "power2.out",
    clearProps: "filter"
  }
);

gsap.fromTo(
  ".hero .btn",
  { y: 12, opacity: 0, filter: "blur(1px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.85,
    delay: 0.4,
    ease: "power2.out",
    clearProps: "filter"
  }
);

/* -------------------------------------------------
   HERO PARALLAX (as-is, trusted)
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
   SECTIONS (Fade + HALF blur)
------------------------------------------------- */
document.querySelectorAll("section").forEach((sec) => {
  gsap.fromTo(
    sec,
    { opacity: 0, y: 35, filter: "blur(1.5px)" },
    {
      scrollTrigger: {
        trigger: sec,
        start: "top 92%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out",
      clearProps: "filter"
    }
  );
});

/* -------------------------------------------------
   FOOTER (same half blur)
------------------------------------------------- */
gsap.fromTo(
  "footer",
  { opacity: 0, y: 25, filter: "blur(1.5px)" },
  {
    scrollTrigger: {
      trigger: "footer",
      start: "top 95%"
    },
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1,
    ease: "power2.out",
    clearProps: "filter"
  }
);

/* -------------------------------------------------
   BACKGROUND WAVES (unchanged)
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