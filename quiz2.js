const questions = [
  {
    question: "My favorite bike among these?",
    options: ["Kawasaki ZX10R", "Ducati Panigale V4R", "BMW S1000RR", "Yamaha R1"],
    answer: "Ducati Panigale V4R"
  },
  {
    question: "My favorite car among these?",
    options: ["BMW M7 Competition", "Bugatti Chiron", "Pagani Zonda R", "Koenigsegg Jesko"],
    answer: "Pagani Zonda R"
  },
  {
    question: "My favorite season?",
    options: ["Winter", "Summer", "Monsoon", "Spring"],
    answer: "Winter"
  },
  {
    question: "Favorite movie genre?",
    options: ["Action", "Comedy", "Romance", "Horror"],
    answer: "Action"
  },
  {
    question: "Anddd the final question issss ...Am I even important for you? 😂",
    options: ["Yes", "No"],
    answer: "Yes"
  }
];

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const feedback = document.getElementById("feedback");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const backBtn = document.getElementById("backBtn");

let selectedOption = null;

function loadQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}: ${q.question}`;
  optionsContainer.innerHTML = "";
  feedback.textContent = "";
  selectedOption = null;
  nextBtn.disabled = true;
  submitBtn.disabled = true;

  q.options.forEach(option => {
    const label = document.createElement("label");
    label.textContent = option;

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = option;
    radio.addEventListener("change", () => {
      selectedOption = radio.value;
      submitBtn.disabled = false;
      feedback.textContent = "";
    });

    label.prepend(radio);
    optionsContainer.appendChild(label);
  });
}

submitBtn.addEventListener("click", () => {
  if (!selectedOption) return;
  const correctAnswer = questions[currentQuestion].answer;

  if (questions[currentQuestion].question.includes("important")) {
    if (selectedOption === "Yes") {
      feedback.textContent = "goooddd girllll 😂😂❤️❤️";
      feedback.style.color = "lightred";
      submitBtn.disabled = true;
      nextBtn.disabled = false;
    } else if (selectedOption === "No") {
      feedback.textContent = "Aabee saalee 😒😒🗿🗿";
      feedback.style.color = "red";
      submitBtn.disabled = true;
      nextBtn.disabled = true;
    }
    return;
  }

  if (selectedOption === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "lightgreen";
    submitBtn.disabled = true;
    nextBtn.disabled = false;
  } else {
    feedback.textContent = "❌ Wrong! Try again.";
    feedback.style.color = "red";
  }
});

nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
    nextBtn.disabled = true;
    submitBtn.disabled = true;
  } else {
    // last question pe next click -> open surprise page
    window.location.href = "surprise1.html";
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
    nextBtn.disabled = true;
    submitBtn.disabled = true;
  }
});

backBtn.addEventListener("click", () => {
  window.location.href = "instructions.html";
});

loadQuestion();
