window.addEventListener("DOMContentLoaded", () => {
  const animatedText = document.getElementById("animatedText");
  const nextBtn = document.getElementById("nextBtn");

  setTimeout(() => {
    nextBtn.style.display = "inline-block";
  }, 2000);

  nextBtn.addEventListener("click", () => {
    window.location.href = "surprise2.html";
  });
});
