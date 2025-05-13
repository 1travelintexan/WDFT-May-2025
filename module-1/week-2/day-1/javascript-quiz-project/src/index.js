document.addEventListener("DOMContentLoaded", () => {
  /************  HTML ELEMENTS  ************/
  // View divs
  const quizView = document.querySelector("#quizView");
  const endView = document.querySelector("#endView");

  // Quiz view elements
  const progressBar = document.querySelector("#progressBar");
  const questionCount = document.querySelector("#questionCount");
  const questionContainer = document.querySelector("#question");
  const choiceContainer = document.querySelector("#choices");
  const nextButton = document.querySelector("#nextButton");
  const restartButton = document.querySelector("#restartButton");
  const quizDuration = 120; // 120 seconds (2 minutes)

  // End view elements
  const resultContainer = document.querySelector("#result");
  /************  SET VISIBILITY OF VIEWS  ************/

  // Show the quiz view (div#quizView) and hide the end view (div#endView)
  quizView.style.display = "block";
  endView.style.display = "none";

  /************  QUIZ DATA  ************/

  // Array with the quiz questions
  const questions = [
    new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4", 1),
    new Question(
      "What is the capital of France?",
      ["Miami", "Paris", "Oslo", "Rome"],
      "Paris",
      1
    ),
    new Question(
      "Who created JavaScript?",
      ["Plato", "Brendan Eich", "Lea Verou", "Bill Gates"],
      "Brendan Eich",
      2
    ),
    new Question(
      "What is the mass–energy equivalence equation?",
      ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"],
      "E = mc^2",
      3
    ),
    // Add more questions here
  ];

  const quiz = new Quiz(questions, quizDuration, quizDuration);
  quiz.shuffleQuestions();

  // Convert the time remaining in seconds to minutes and seconds, and pad the numbers with zeros if needed
  const minutes = Math.floor(quiz.timeRemaining / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");

  // Display the time remaining in the time remaining container
  const timeRemainingContainer = document.getElementById("timeRemaining");
  timeRemainingContainer.innerText = `${minutes}:${seconds}`;

  // Show first question
  showQuestion();

  /************  TIMER  ************/
  const printTimer = () => {
    const timeRemainingContainer = document.querySelector("#timeRemaining");
    const minutes = Math.floor(quiz.timeRemaining / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");
    timeRemainingContainer.innerText = `${minutes}:${seconds}`;
  };
  let timer;
  const decrementTimer = () => {
    timer = setInterval(() => {
      if (quiz.timeRemaining > 0) {
        quiz.timeRemaining -= 1;
        printTimer();
      } else {
        clearInterval(timer);
        showResults();
      }
    }, 1000);
  };
  decrementTimer();
  /************  EVENT LISTENERS  ************/
  nextButton.addEventListener("click", nextButtonHandler);

  /************  FUNCTIONS  ************/
  function showQuestion() {
    if (quiz.hasEnded()) {
      showResults();
      return;
    }

    questionContainer.innerText = "";
    choiceContainer.innerHTML = "";
    // Get the current question from the quiz by calling the Quiz class method `getQuestion()`
    const question = quiz.getQuestion();
    // Shuffle the choices of the current question by calling the method 'shuffleChoices()' on the question object
    question.shuffleChoices();
    questionContainer.innerText = question.text;
    let percentage = (100 / quiz.questions.length) * quiz.currentQuestionIndex;
    progressBar.style.width = `${percentage}%`; // This value is hardcoded as a placeholder
    questionCount.innerText = `Question ${quiz.currentQuestionIndex + 1} of ${
      quiz.questions.length
    }`;

    question.choices.forEach((e) => {
      const div = document.createElement("div");
      const oneChoice = document.createElement("input");
      oneChoice.type = "radio";
      oneChoice.name = "choice";
      oneChoice.value = e;
      let label = document.createElement("label");
      label.innerText = e;
      div.appendChild(oneChoice);
      div.appendChild(label);
      choiceContainer.appendChild(div);
    });
  }

  function nextButtonHandler() {
    let selectedAnswer;
    let allAnswers = document.querySelectorAll('input[name="choice"]');

    allAnswers.forEach((oneAnswer) => {
      if (oneAnswer.checked) {
        quiz.checkAnswer(oneAnswer.value);
        quiz.currentQuestionIndex++;
        showQuestion();
      }
    });
  }

  function showResults() {
    quizView.style.display = "none";
    endView.style.display = "flex";
    resultContainer.innerText = `You scored ${quiz.correctAnswers} out of ${quiz.questions.length} correct answers!`; // This value is hardcoded as a placeholder
  }
});

restartButton.addEventListener("click", () => {
  quizView.style.display = "block";
  endView.style.display = "none";
  quiz.currentQuestionIndex = 0;
  quiz.correctAnswers = 0;
  quiz.timeRemaining = 120;
  printTimer();
  quiz.shuffleQuestions();
  showQuestion();
  decrementTimer();
});
