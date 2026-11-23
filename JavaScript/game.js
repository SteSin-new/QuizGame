const questions = [
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choice1: 'Mark Twain',
    choice2: 'Harper Lee',
    choice3: 'Ernest Hemingway',
    choice4: 'F. Scott Fitzgerald',
    answer: 2,
  },
  {
    question: 'What is the capital of Peru?',
    choice1: 'Bogotá',
    choice2: 'Mexico City',
    choice3: 'Lima',
    choice4: 'Rio de Janeiro',
    answer: 3,
  },
  {
    question: 'Which scientist developed the theory of relativity?',
    choice1: 'Niels Bohr',
    choice2: 'Isaac Newton',
    choice3: 'Albert Einstein',
    choice4: 'Galileo Galilei',
    answer: 3,
  },
  {
    question: 'What is the largest planet in our solar system?',
    choice1: 'Saturn',
    choice2: 'Neptune',
    choice3: 'Uranus',
    choice4: 'Jupiter',
    answer: 4,
  },
  {
    question: 'Who painted the Mona Lisa?',
    choice1: 'Pablo Picasso',
    choice2: 'Leonardo da Vinci',
    choice3: 'Edvard Munch',
    choice4: 'Vincent van Gogh',
    answer: 2,
  },
  {
    question: 'What is the chemical symbol for water?',
    choice1: 'CO2',
    choice2: 'O2',
    choice3: 'H2O',
    choice4: 'NaCl',
    answer: 3,
  },
  {
    question: "Who wrote '1984'?",
    choice1: 'Arthur C. Clarke',
    choice2: 'George Orwell',
    choice3: 'Ray Bradbury',
    choice4: 'Aldous Huxley',
    answer: 2,
  },
  {
    question: 'What is the largest desert in the world?',
    choice1: 'Gobi',
    choice2: 'Antarctica',
    choice3: 'Sahara',
    choice4: 'Kalahari',
    answer: 2,
  },
  {
    question: 'Which country has the highest population?',
    choice1: 'India',
    choice2: 'United States',
    choice3: 'China',
    choice4: 'Indonesia',
    answer: 1,
  },
  {
    question: 'What is the smallest country in the world?',
    choice1: 'Monaco',
    choice2: 'Maldives',
    choice3: 'Vatican City',
    choice4: 'Nauru',
    answer: 3,
  },
  {
    question: 'Who is the founder of Microsoft?',
    choice1: 'Larry Page',
    choice2: 'Sergey Brin',
    choice3: 'Bill Gates',
    choice4: 'Mark Zuckerberg',
    answer: 3,
  },
  {
    question: 'What is the chemical symbol for gold?',
    choice1: 'Cu',
    choice2: 'Au',
    choice3: 'Pb',
    choice4: 'Ag',
    answer: 2,
  },
  {
    question: "Who wrote 'The Great Gatsby'?",
    choice1: 'Truman Capote',
    choice2: 'Ernest Hemingway',
    choice3: 'F. Scott Fitzgerald',
    choice4: 'John Steinbeck',
    answer: 3,
  },
  {
    question: 'What is the tallest mammal?',
    choice1: 'Hippopotamus',
    choice2: 'Giraffe',
    choice3: 'Blue Whale',
    choice4: 'Elephant',
    answer: 2,
  },
  {
    question: "Who painted 'The Starry Night'?",
    choice1: 'Claude Monet',
    choice2: 'Vincent van Gogh',
    choice3: 'Pablo Picasso',
    choice4: 'Pierre-Auguste Renoir',
    answer: 2,
  },
  {
    question: 'What is the chemical symbol for sodium?',
    choice1: 'Mg',
    choice2: 'Na',
    choice3: 'K',
    choice4: 'Ca',
    answer: 2,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTION = 16;

class Game {
  constructor() {
    console.log('constructor');
    this.question = document.getElementById('question');
    this.choice = Array.from(document.getElementsByClassName('choice-container'));
    console.log(this.choice);
    this.choice.forEach((choice) => {
      console.log('adding listener to', choice);
      choice.addEventListener('click', () => this.checkAnswer(choice));
    });
    this.currentQuestion = {};
    this.acceptingAnswers = true;
    this.score = 0;
    this.questionCounter = 0;
    this.availableQuestions = [...questions].sort(() => Math.random() - 0.5);
  }

  startGame() {
    this.getNewQuestion();
  }

  getNewQuestion() {
    this.acceptingAnswers = true;
    if (this.questionCounter >= MAX_QUESTION || this.availableQuestions.length === 0) {
      this.acceptingAnswers = false;
      // Game over logic here
      alert('you have finished the game!');
      return;
    }

    this.questionCounter++;
    this.currentQuestion = this.availableQuestions.pop();
    this.question.innerHTML = this.currentQuestion.question;

    this.choice.forEach((choice) => {
      const choiceText = choice.querySelector('.choice-text');
      const number = choiceText.dataset.number;
      choiceText.innerHTML = this.currentQuestion[`choice${number}`];
    });
  }

  checkAnswer(choice) {
    console.log('clicked');
    if (!this.acceptingAnswers) return;

    this.acceptingAnswers = false;

    const selectedChoice = Number(choice.querySelector('.choice-text').dataset.number);
    console.log('Selected Choice:', selectedChoice);
    console.log('CORRECT ANSWER', this.currentQuestion.answer);

    if (selectedChoice === this.currentQuestion.answer) {
      this.score += CORRECT_BONUS;
      choice.classList.add('CORRECT');
    } else {
      choice.classList.add('WRONG');
    }

    setTimeout(() => {
      console.log('loading next questions');
      choice.classList.remove('CORRECT', 'WRONG');
      this.getNewQuestion();
    }, 500);
  }
}

const startGame = () => {
  const game = new Game();
  game.startGame();
};

document.addEventListener('DOMContentLoaded', startGame);
