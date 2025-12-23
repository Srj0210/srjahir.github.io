// ===== SRJahir Tech — Professional Fade + Blur Animations =====
gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------
   HERO SECTION (Fade + Blur on Load)
------------------------------------------------- */
const heroBtn = document.querySelector(".hero .btn");
if (heroBtn) {
  heroBtn.style.visibility = "visible";
  heroBtn.style.opacity = "1";
}

gsap.fromTo(
  ".hero-text h2",
  { y: 40, opacity: 0, filter: "blur(10px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.2,
    ease: "power3.out",
    clearProps: "filter"
  }
);

gsap.fromTo(
  ".hero-desc",
  { y: 25, opacity: 0, filter: "blur(8px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    delay: 0.3,
    ease: "power2.out",
    clearProps: "filter"
  }
);

gsap.fromTo(
  ".hero .btn",
  { y: 20, opacity: 0, filter: "blur(6px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.9,
    delay: 0.6,
    ease: "power2.out",
    clearProps: "filter"
  }
);

/* -------------------------------------------------
   HERO PARALLAX (UNCHANGED – WORKING PERFECT)
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
   SECTIONS (Fade + Blur on Scroll)
------------------------------------------------- */
document.querySelectorAll("section").forEach((sec) => {
  gsap.fromTo(
    sec,
    { opacity: 0, y: 60, filter: "blur(12px)" },
    {
      scrollTrigger: {
        trigger: sec,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out",
      clearProps: "filter"
    }
  );
});

/* -------------------------------------------------
   FOOTER (Fade + Blur)
------------------------------------------------- */
gsap.fromTo(
  "footer",
  { opacity: 0, y: 40, filter: "blur(10px)" },
  {
    scrollTrigger: {
      trigger: "footer",
      start: "top 95%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1.2,
    ease: "power2.out",
    clearProps: "filter"
  }
);

/* -------------------------------------------------
   BACKGROUND WAVES (SOFT LOOP – UNCHANGED)
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
   AOS (SAFE MODE)
------------------------------------------------- */
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  offset: 120
});