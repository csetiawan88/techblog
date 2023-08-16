// Logout Element

// Timer for idle on the site for more than a set time
let timer,
  currSeconds = 0;

// Reset Timer function
function resetTimer() {
  clearInterval(timer);
  currSeconds = 0;
  timer = setInterval(startIdleTimer, 1000);
}

// Events that will reset the timer.
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;

// Start Idle timer
function startIdleTimer() {
  //Increment the timer in second
  currSeconds++;
  if (currSeconds > 180) {
    logOut(); // Idle Time 3 minutes, else logout
  }
}

const logOut = async () => {
  const response = await fetch("/api/user/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    // Message to show if sucesfully logout
    alert("logout!");
    document.location.replace("/");
  } else {
    alert("Error to logout!");
  }
};

document.querySelector("#logout").addEventListener("click", logOut);
