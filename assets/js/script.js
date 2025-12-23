/* ===================================================
   SRJahir Tech — Core Script
   Safe, lightweight, no feature removal
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ---------------------------
  // AOS Init (safe)
  // ---------------------------
  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic"
    });
  }

  // ---------------------------
  // Smooth Scroll for Nav
  // ---------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  // ---------------------------
  // Quote Form Handler
  // ---------------------------
  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";
      }

      const formData = new FormData(form);

      try {
        // NOTE:
        // If you already have backend handling,
        // keep the same endpoint here.
        const response = await fetch(form.getAttribute("action") || "success.html", {
          method: "POST",
          body: formData
        });

        // If backend exists, you can adjust this logic
        window.location.href = "success.html";

      } catch (err) {
        alert("Something went wrong. Please try again later.");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerText = "Send Request";
        }
      }
    });
  }

});