const noButton = document.getElementById("no");

// This event listener makes the "No" button move when the cursor hovers over it
noButton.addEventListener("mouseenter", () => {
  let x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  let y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Event listener for the "Yes" button
document.getElementById("yes").addEventListener("click", () => {
  // Hide the buttons and question text
  document.querySelector(".container").style.display = "none";

  // Show the calm text with a smooth fade-in animation
  const calmText = document.querySelector(".calm-text");
  calmText.classList.remove("hidden");
  calmText.style.opacity = 1; // Make it visible
});
