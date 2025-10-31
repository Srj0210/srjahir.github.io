document.addEventListener("DOMContentLoaded", () => {
  // AOS Initialization
  AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });

  // Ensure GSAP ScrollTrigger refreshes after AOS load
  setTimeout(() => {
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }, 500);

  // Form Submission Logic
  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      formData.append("access_key", "ad6cc950-ed4c-4c24-9146-f0690ba431fb");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        window.location.href = "success.html";
      } else {
        alert("❌ Something went wrong. Please try again later.");
      }
    });
  }
});
