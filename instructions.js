// instructions.js

// Buttons select karo
const lastBtn = document.getElementById("lastBtn");
const nextBtn = document.getElementById("nextBtn");

// Last page pe le jane ka function
lastBtn.addEventListener("click", () => {
    window.location.href = "index.html"; // yaha apna main page ka naam dalna
});

// Next page pe le jane ka function
nextBtn.addEventListener("click", () => {
    window.location.href = "quiz1.html"; // yaha apna next page ka naam dalna
});
