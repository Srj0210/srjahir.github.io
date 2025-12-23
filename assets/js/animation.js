// ===== SRJahir Tech — Subtle Professional Fade Animations =====
gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------
   HERO SECTION (Very Minor Blur)
------------------------------------------------- */
const heroBtn = document.querySelector(".hero .btn");
if (heroBtn) {
  heroBtn.style.visibility = "visible";
  heroBtn.style.opacity = "1";
}

gsap.fromTo(
  ".hero-text h2",
  { y: 30, opacity: 0, filter: "blur(4px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1.1,
    ease: "power3.out",
    clearProps: "filter"
  }
);

gsap.fromTo(
  ".hero-desc",
  { y: 20, opacity: 0, filter: "blur(3px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    delay: 0.25,
    ease: "power2.out",
    clearProps: "filter"
  }
);

gsap.fromTo(
  ".hero .btn",
  { y: 15, opacity: 0, filter: "blur(2px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 0.9,
    delay: 0.5,
    ease: "power2.out",
    clearProps: "filter"
  }
);

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
   SECTIONS (Subtle Fade Only)
------------------------------------------------- */
document.querySelectorAll("section").forEach((sec) => {
  gsap.fromTo(
    sec,
    { opacity: 0, y: 40, filter: "blur(3px)" },
    {
      scrollTrigger: {
        trigger: sec,
        start: "top 92%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.1,
      ease: "power2.out",
      clearProps: "filter"
    }
  );
});

/* -------------------------------------------------
   FOOTER
------------------------------------------------- */
gsap.fromTo(
  "footer",
  { opacity: 0, y: 30, filter: "blur(3px)" },
  {
    scrollTrigger: {
      trigger: "footer",
      start: "top 95%"
    },
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    duration: 1.1,
    ease: "power2.out",
    clearProps: "filter"
  }
);

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