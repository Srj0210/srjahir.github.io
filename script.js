const EMAILJS_SERVICE_ID = "your_service_id";
const EMAILJS_TEMPLATE_ID = "your_template_id";
const EMAILJS_TEMPLATE_REPLY_ID = "your_reply_template_id"; // optional
const EMAILJS_PUBLIC_KEY = "your_public_key";

document.addEventListener("DOMContentLoaded", () => {
  if (window.emailjs) emailjs.init(EMAILJS_PUBLIC_KEY);

  const form = document.getElementById("quote-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (document.getElementById("hp_field").value.trim() !== "") {
      status.textContent = "Spam blocked.";
      return;
    }

    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const project = form.project_type.value;
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill all fields.";
      return;
    }

    status.textContent = "Sending...";

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        user_name: name,
        user_email: email,
        project_type: project,
        message,
      });

      if (EMAILJS_TEMPLATE_REPLY_ID && EMAILJS_TEMPLATE_REPLY_ID !== "your_reply_template_id") {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_REPLY_ID, {
          to_name: name,
          to_email: email,
        });
      }

      status.textContent = "✅ Request sent successfully. We'll contact you soon.";
      form.reset();
    } catch (error) {
      console.error(error);
      status.textContent = "❌ Error! Try again later.";
    }
  });
});