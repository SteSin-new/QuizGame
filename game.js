const question = document.getElementById('question'); // ... existing code ...
const choice = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};

const questions = [
  {
    question: 'What is the capital of Peru?',
    choice1: 'A) Bogota',
    choice2: 'B) Lima',
    choice3: 'C) Quito',
    choice4: 'D) Santiago',
    answer: 1,
  },
  {
    question: 'Which of the following is not a programming language?',
    choice1: 'A) JavaScript',
    choice2: 'B) Python',
    choice3: 'C) C++',
    choice4: 'D) Adobe Photoshop',
    answer: 3,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choice1: 'A) Ernest Hemingway',
    choice2: 'B) F. Scott Fitzgerald',
    choice3: 'C) Harper Lee',
    choice4: 'D) Mark Twain',
    answer: 2,
  },
  {
    question: 'Which of the following is a prime number?',
    choice1: 'A) 4',
    choice2: 'B) 6',
    choice3: 'C) 8',
    choice4: 'D) 11',
    answer: 3,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTION = 3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerHTML = currentQuestion.question;

  choice.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  });
};

startGame();
