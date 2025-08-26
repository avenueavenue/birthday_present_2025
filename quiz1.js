const questions = [
  { question: "mujhe sbse zyda dar kisse lgta h?", answer: "spider" },
  { question: "whats my favrate food?", answer: "daal bati" },
  { question: "what do i love about you the most?", answer: "everything" },
  { question: "whats the most wildest thing we have done toghether 💀?", answer: "masterchef" },
  {question: "agar melody meets rasmalai face to face toh kya hoga 💀?", answer:"sex"}
];

let currentQuestion = 0;
let answerCorrect = false;

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const feedback = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const backBtn = document.getElementById("backBtn");

function updateButtons() {
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.disabled = !answerCorrect;
  submitBtn.disabled = answerCorrect;
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}: ${q.question}`;
  answerInput.value = "";
  feedback.textContent = "";
  answerInput.disabled = false;
  answerCorrect = false;
  updateButtons();
  answerInput.focus();
}

submitBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestion].answer.toLowerCase();
  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "lightgreen";
    answerCorrect = true;
    answerInput.disabled = true;
  } else {
    feedback.textContent = "❌ Wrong! Try again.";
    feedback.style.color = "red";
  }
  updateButtons();
});

nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    // Last question complete, redirect to quiz2.html
    window.location.href = "quiz2.html";
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
});

backBtn.addEventListener("click", () => {
  window.location.href = "instructions.html"; // Change if needed
});

loadQuestion();
