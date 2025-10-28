// script.js (defer loaded)
// 1) Replace the placeholders with your EmailJS values
const EMAILJS_SERVICE_ID = 'your_service_id'; // e.g. 'service_xxx'
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // e.g. 'template_xxx'
const EMAILJS_TEMPLATE_REPLY_ID = 'your_reply_template_id'; // optional auto-reply template id
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // e.g. 'user_xxx'

// Basic init (emailjs script must be loaded via CDN in index.html)
document.addEventListener('DOMContentLoaded', () => {
  if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'your_public_key') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }

  const form = document.getElementById('quote-form');
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot: if bot filled hidden field, reject
    if (document.getElementById('hp_field').value.trim() !== '') {
      status.textContent = 'Spam blocked';
      return;
    }

    // Basic client-side rate limit: 60 seconds between submissions
    const last = localStorage.getItem('srj_last_submit');
    const now = Date.now();
    if (last && (now - parseInt(last, 10) < 60_000)) {
      status.textContent = 'Please wait a moment before sending another request.';
      return;
    }

    const name = document.getElementById('user_name').value.trim();
    const email = document.getElementById('user_email').value.trim();
    const projectType = document.getElementById('project_type').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill all required fields.';
      return;
    }

    status.textContent = 'Sending…';

    // Prepare template params (match fields configured in EmailJS template)
    const templateParams = {
      user_name: name,
      user_email: email,
      project_type: projectType,
      message: message,
      site: 'srjahir.in'
    };

    try {
      if (!window.emailjs) throw new Error('Email service not loaded');
      // Primary send: to your internal inbox via EmailJS template
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

      // Optional: send auto-reply to client via second template (if configured)
      if (EMAILJS_TEMPLATE_REPLY_ID && EMAILJS_TEMPLATE_REPLY_ID !== 'your_reply_template_id') {
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_REPLY_ID, {
          to_name: name,
          to_email: email,
          site: 'SRJahir Tech'
        });
      }

      localStorage.setItem('srj_last_submit', String(Date.now()));
      status.textContent = 'Request sent — we will contact you shortly.';
      form.reset();
    } catch (err) {
      console.error('Send error', err);
      status.textContent = 'Sorry — something went wrong. Please try again later or email us directly.';
    }
  });
});