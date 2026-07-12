// ===== SRJahir Tech — Apple-Style Animations =====
gsap.registerPlugin(ScrollTrigger);

/* -------------------------------------------------
   NAV — Glassmorphism on scroll (Apple style)
------------------------------------------------- */
const nav = document.querySelector("header.nav");
if (nav) {
  ScrollTrigger.create({
    start: "top -80",
    onUpdate: (self) => {
      if (self.scroll() > 80) {
        nav.style.background = "rgba(255,255,255,0.82)";
        nav.style.backdropFilter = "saturate(180%) blur(18px)";
        nav.style.webkitBackdropFilter = "saturate(180%) blur(18px)";
        nav.style.boxShadow = "0 10px 30px rgba(16,18,27,0.06)";
      } else {
        nav.style.background = "rgba(255,255,255,0.78)";
        nav.style.backdropFilter = "saturate(180%) blur(18px)";
        nav.style.webkitBackdropFilter = "saturate(180%) blur(18px)";
        nav.style.boxShadow = "none";
      }
    }
  });
}

/* -------------------------------------------------
   HERO HEADING — Word-by-word reveal (Apple signature)
------------------------------------------------- */
const heading = document.querySelector(".animated-heading");
if (heading) {
  const text = heading.innerText;
  const words = text.split(" ");
  heading.innerHTML = words
    .map(w => `<span class="word-wrap"><span class="word">${w}</span></span>`)
    .join(" ");

  gsap.fromTo(
    ".animated-heading .word",
    { y: "110%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.08,
      delay: 0.1
    }
  );
}

/* -------------------------------------------------
   HERO DESC — Smooth fade up with blur
------------------------------------------------- */
gsap.fromTo(
  ".hero-desc",
  { y: 22, opacity: 0, filter: "blur(4px)" },
  {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    delay: 0.55,
    ease: "power2.out",
    stagger: 0.15,
    clearProps: "filter"
  }
);

gsap.fromTo(
  ".hero .btn",
  { y: 14, opacity: 0, scale: 0.95 },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.8,
    delay: 0.85,
    ease: "back.out(1.4)"
  }
);

/* -------------------------------------------------
   LOGO — Parallax scroll
------------------------------------------------- */
gsap.to(".top-logo", {
  yPercent: 25,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

/* -------------------------------------------------
   HERO TEXT — Subtle parallax
------------------------------------------------- */
gsap.to(".hero-text", {
  yPercent: 12,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

/* -------------------------------------------------
   SECTION HEADINGS — Apple-style text reveal
------------------------------------------------- */
document.querySelectorAll("section h3").forEach((el) => {
  gsap.fromTo(
    el,
    { y: 40, opacity: 0, filter: "blur(3px)" },
    {
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: "play none none none"
      },
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power3.out",
      clearProps: "filter"
    }
  );
});

/* -------------------------------------------------
   CARDS — Stagger fade up
------------------------------------------------- */
document.querySelectorAll(".cards").forEach((container) => {
  const cards = container.querySelectorAll(".card");
  gsap.fromTo(
    cards,
    { y: 50, opacity: 0, scale: 0.97 },
    {
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.1
    }
  );
});

/* -------------------------------------------------
   CARDS — 3D Tilt on hover (Apple subtle)
------------------------------------------------- */
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: "power1.out",
      transformPerspective: 800,
      transformOrigin: "center center"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});

/* -------------------------------------------------
   CONTENT BLOCKS — Slide in
------------------------------------------------- */
document.querySelectorAll(".content-block p").forEach((el, i) => {
  gsap.fromTo(
    el,
    { y: 25, opacity: 0 },
    {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      y: 0,
      opacity: 1,
      duration: 0.7,
      delay: i * 0.05,
      ease: "power2.out"
    }
  );
});

/* -------------------------------------------------
   FOOTER — Fade up
------------------------------------------------- */
gsap.fromTo(
  "footer",
  { opacity: 0, y: 30 },
  {
    scrollTrigger: {
      trigger: "footer",
      start: "top 95%"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  }
);

/* -------------------------------------------------
   BACKGROUND — Subtle scroll color shift
------------------------------------------------- */
ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom bottom",
  onUpdate: (self) => {
    const progress = self.progress;
    const lightness = Math.round(245 - progress * 15);
    document.body.style.background = `linear-gradient(180deg, rgb(${lightness},${lightness},${lightness}), rgb(${lightness-8},${lightness-8},${lightness-8}))`;
  }
});

/* -------------------------------------------------
   AOS Init
------------------------------------------------- */
if (window.AOS) {
  AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: true,
    offset: 100
  });
}
