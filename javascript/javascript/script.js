
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    status.textContent = "All fields are required ❌";
    status.style.color = "red";
    return;
  } else if (!emailRegex.test(email)) {
    status.textContent = "Please enter a valid email 📧";
    status.style.color = "orange";
    return;
  }

  // Send email via EmailJS
  emailjs.sendForm("service_kivdhqw", "template_nyq86bi", "#contactForm")
    .then(() => {
      status.textContent = "Message sent successfully ✅";
      status.style.color = "lightgreen";
      form.reset(); // clear the form
    })
    .catch((error) => {
      status.textContent = "Failed to send message ❌";
      status.style.color = "red";
      console.error("EmailJS Error:", error);
    });
});
