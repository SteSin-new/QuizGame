const questions = [
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choice1: 'A) Ernest Hemingway',
    choice2: 'B) F. Scott Fitzgerald',
    choice3: 'C) Harper Lee',
    choice4: 'D) Mark Twain',
    answer: 3,
  },
  {
    question: 'What is the capital of Peru?',
    choice1: 'A) Lima',
    choice2: 'B) Mexico City',
    choice3: 'C) Rio de Janeiro',
    choice4: 'D) Bogotá',
    answer: 1,
  },
  {
    question: 'Which scientist developed the theory of relativity?',
    choice1: 'A) Albert Einstein',
    choice2: 'B) Isaac Newton',
    choice3: 'C) Galileo Galilei',
    choice4: 'D) Niels Bohr',
    answer: 1,
  },
  {
    question: 'What is the largest planet in our solar system?',
    choice1: 'A) Jupiter',
    choice2: 'B) Saturn',
    choice3: 'C) Uranus',
    choice4: 'D) Neptune',
    answer: 1,
  },
  {
    question: 'Who painted the Mona Lisa?',
    choice1: 'A) Leonardo da Vinci',
    choice2: 'B) Vincent van Gogh',
    choice3: 'C) Pablo Picasso',
    choice4: 'D) Edvard Munch',
    answer: 1,
  },
  {
    question: 'What is the chemical symbol for water?',
    choice1: 'A) H2O',
    choice2: 'B) CO2',
    choice3: 'C) O2',
    choice4: 'D) NaCl',
    answer: 1,
  },
  {
    question: "Who wrote '1984'?",
    choice1: 'A) George Orwell',
    choice2: 'B) Aldous Huxley',
    choice3: 'C) Ray Bradbury',
    choice4: 'D) Arthur C. Clarke',
    answer: 1,
  },
  {
    question: 'What is the largest desert in the world?',
    choice1: 'A) Sahara',
    choice2: 'B) Gobi',
    choice3: 'C) Kalahari',
    choice4: 'D) Atacama',
    answer: 1,
  },
  {
    question: 'Which country has the highest population?',
    choice1: 'A) China',
    choice2: 'B) India',
    choice3: 'C) United States',
    choice4: 'D) Indonesia',
    answer: 1,
  },
  {
    question: 'What is the smallest country in the world?',
    choice1: 'A) Vatican City',
    choice2: 'B) Monaco',
    choice3: 'C) Nauru',
    choice4: 'D) Maldives',
    answer: 1,
  },
  {
    question: 'Who is the founder of Microsoft?',
    choice1: 'A) Bill Gates',
    choice2: 'B) Mark Zuckerberg',
    choice3: 'C) Larry Page',
    choice4: 'D) Sergey Brin',
    answer: 1,
  },
  {
    question: 'What is the chemical symbol for gold?',
    choice1: 'A) Au',
    choice2: 'B) Ag',
    choice3: 'C) Cu',
    choice4: 'D) Pb',
    answer: 1,
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    choice1: 'A) F. Scott Fitzgerald',
    choice2: 'B) Ernest Hemingway',
    choice3: 'C) John Steinbeck',
    choice4: 'D) Truman Capote',
    answer: 1,
  },
  {
    question: 'What is the tallest mammal?',
    choice1: 'A) Giraffe',
    choice2: 'B) Elephant',
    choice3: 'C) Hippopotamus',
    choice4: 'D) Blue Whale',
    answer: 4,
  },
  {
    question: "Who painted 'The Starry Night'?",
    choice1: 'A) Vincent van Gogh',
    choice2: 'B) Pablo Picasso',
    choice3: 'C) Claude Monet',
    choice4: 'D) Claude Renoir',
    answer: 1,
  },
  {
    question: 'What is the chemical symbol for sodium?',
    choice1: 'A) Na',
    choice2: 'B) K',
    choice3: 'C) Ca',
    choice4: 'D) Mg',
    answer: 1,
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
