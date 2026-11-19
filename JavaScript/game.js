const questions = [
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choice1: 'A) Mark Twain',
    choice2: 'B) Harper Lee',
    choice3: 'C) Ernest Hemingway',
    choice4: 'D) F. Scott Fitzgerald',
    answer: 2,
  },
  {
    question: 'What is the capital of Peru?',
    choice1: 'A) Bogotá',
    choice2: 'B) Mexico City',
    choice3: 'C) Lima',
    choice4: 'D) Rio de Janeiro',
    answer: 3,
  },
  {
    question: 'Which scientist developed the theory of relativity?',
    choice1: 'A) Niels Bohr',
    choice2: 'B) Isaac Newton',
    choice3: 'C) Albert Einstein',
    choice4: 'D) Galileo Galilei',
    answer: 3,
  },
  {
    question: 'What is the largest planet in our solar system?',
    choice1: 'A) Saturn',
    choice2: 'B) Neptune',
    choice3: 'C) Uranus',
    choice4: 'D) Jupiter',
    answer: 4,
  },
  {
    question: 'Who painted the Mona Lisa?',
    choice1: 'A) Pablo Picasso',
    choice2: 'B) Leonardo da Vinci',
    choice3: 'C) Edvard Munch',
    choice4: 'D) Vincent van Gogh',
    answer: 2,
  },
  {
    question: 'What is the chemical symbol for water?',
    choice1: 'A) CO2',
    choice2: 'B) O2',
    choice3: 'C) H2O',
    choice4: 'D) NaCl',
    answer: 3,
  },
  {
    question: "Who wrote '1984'?",
    choice1: 'A) Arthur C. Clarke',
    choice2: 'B) George Orwell',
    choice3: 'C) Ray Bradbury',
    choice4: 'D) Aldous Huxley',
    answer: 2,
  },
  {
    question: 'What is the largest desert in the world?',
    choice1: 'A) Gobi',
    choice2: 'B) Antarctica',
    choice3: 'C) Sahara',
    choice4: 'D) Kalahari',
    answer: 2,
  },
  {
    question: 'Which country has the highest population?',
    choice1: 'A) India',
    choice2: 'B) United States',
    choice3: 'C) China',
    choice4: 'D) Indonesia',
    answer: 1,
  },
  {
    question: 'What is the smallest country in the world?',
    choice1: 'A) Monaco',
    choice2: 'B) Maldives',
    choice3: 'C) Vatican City',
    choice4: 'D) Nauru',
    answer: 3,
  },
  {
    question: 'Who is the founder of Microsoft?',
    choice1: 'A) Larry Page',
    choice2: 'B) Sergey Brin',
    choice3: 'C) Bill Gates',
    choice4: 'D) Mark Zuckerberg',
    answer: 3,
  },
  {
    question: 'What is the chemical symbol for gold?',
    choice1: 'A) Cu',
    choice2: 'B) Au',
    choice3: 'C) Pb',
    choice4: 'D) Ag',
    answer: 2,
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    choice1: 'A) Truman Capote',
    choice2: 'B) Ernest Hemingway',
    choice3: 'C) F. Scott Fitzgerald',
    choice4: 'D) John Steinbeck',
    answer: 3,
  },
  {
    question: 'What is the tallest mammal?',
    choice1: 'A) Hippopotamus',
    choice2: 'B) Giraffe',
    choice3: 'C) Blue Whale',
    choice4: 'D) Elephant',
    answer: 2,
  },
  {
    question: "Who painted 'The Starry Night'?",
    choice1: 'A) Claude Monet',
    choice2: 'B) Vincent van Gogh',
    choice3: 'C) Pablo Picasso',
    choice4: 'D) Pierre-Auguste Renoir',
    answer: 2,
  },
  {
    question: 'What is the chemical symbol for sodium?',
    choice1: 'A) Mg',
    choice2: 'B) Na',
    choice3: 'C) K',
    choice4: 'D) Ca',
    answer: 2,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTION = 16;

class Game {
  constructor() {
    this.question = document.getElementById('question');
    this.choice = Array.from(document.getElementsByClassName('choice-text'));
    this.currentQuestion = {};
    this.acceptingAnswers = true;
    this.score = 0;
    this.questionCounter = 0;
    this.currentQuestionIndex = 0;
    this.availableQuestions = [...questions];
  }

  startGame() {
    this.score = 0;
    this.questionCounter = 0;
    this.availableQuestions = [...questions];
    this.getNewQuestion();
  }

  getNewQuestion() {
    if (this.questionCounter >= MAX_QUESTION || this.availableQuestions.length === 0) {
      this.acceptingAnswers = false;
      // Game over logic here
      alert('you have finished the game!');
      return;
    }

    this.questionCounter++;
    const questionIndex = Math.floor(Math.random() * this.availableQuestions.length);
    this.currentQuestion = this.availableQuestions[questionIndex];
    this.question.innerHTML = this.currentQuestion.question;

    this.choice.forEach((choice) => {
      const number = choice.dataset['number'];
      choice.innerHTML = this.currentQuestion[`choice${number}`];
      choice.addEventListener('click', () => this.checkAnswer(choice));
    });
  }

  checkAnswer(choice) {
    if (!this.acceptingAnswers) return;

    const selectedChoice = choice.dataset['number'];
    const answer = this.currentQuestion.answer;

    if (parseInt(selectedChoice) === answer) {
      this.score += CORRECT_BONUS;
    }

    this.getNewQuestion();
  }
}

const startGame = () => {
  const game = new Game();
  game.startGame();
};

startGame();
