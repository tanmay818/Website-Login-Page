document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  // Example check — in real applications, use server-side validation
  if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login successful!";
    // Redirect or other actions can go here
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password!";
  }
});
