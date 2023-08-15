//Signup Element
const signupForm = async (event) => {
  event.preventDefault();
  const name = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if ((name, password)) {
    const response = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // Message to show if sucesfully signup
      alert("signed up!");
      document.location.replace("/dashboard");
    } else {
      // Message to show if username exist
      alert("Error signing up, Username already exist!");
    }
  }
};

document.querySelector("#signup-form").addEventListener("submit", signupForm);
