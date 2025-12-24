document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      document.getElementById('status').innerText = "Please fill all fields.";
      return;
    }
  
    // Just for demo – replace with email sending API (EmailJS, Netlify Forms, etc.)
    document.getElementById('status').innerText = "Thank you! I'll respond soon.";
  });
  