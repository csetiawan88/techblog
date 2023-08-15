// Login Element
const loginForm = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (name && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // Message to show if sucesfully login
      alert("Login Successful!");
      document.location.replace("/dashboard");
    } else {
      alert("Couldnt login. Please Try again.");
    }
  }
};

document.querySelector("#login-form").addEventListener("submit", loginForm);
