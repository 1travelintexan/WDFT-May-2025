class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    //correct way to shuffle
    for (let i = 0; i < this.choices.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.choices.length);
      let choiceToMove = this.choices[i];
      this.choices.splice(i, 1);
      this.choices.splice(randomIndex, 0, choiceToMove);
    }
  }
}
