class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex += 1;
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.questions[i];
      this.questions[i] = this.questions[j];
      this.questions[j] = temp;
    }
  }

  checkAnswer(answer) {
    if (answer === this.questions[this.currentQuestionIndex].answer) {
      this.correctAnswers++;
      return true;
    }
    return false;
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else {
      return true;
    }
  }
  filterQuestionsByDifficulty(level) {
    if (typeof level === "number" && level >= 1 && level <= 3)
      this.questions = this.questions.filter(
        (oneQuestion) => oneQuestion.difficulty === level
      );
  }
  averageDifficulty() {
    return (
      this.questions.reduce((a, b) => a + b.difficulty, 0) /
      this.questions.length
    );
  }
}
