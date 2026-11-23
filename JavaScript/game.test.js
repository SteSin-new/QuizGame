// Mock the HTML elements
const mockQuestionElement = document.createElement('div');
mockQuestionElement.id = 'question';
document.body.appendChild(mockQuestionElement);

const mockChoiceElements = Array.from({ length: 4 }, (_, i) => {
  const choiceElement = document.createElement('div');
  choiceElement.classList.add('choice-text');
  choiceElement.dataset['number'] = i + 1;
  document.body.appendChild(choiceElement);
  return choiceElement;
});

// Import the game.js file
import './game.js';

// Test suite
describe('Quiz Game', () => {
  let game;

  beforeEach(() => {
    // Reset the game state before each test
    game = new Game();
    game.startGame();
  });

  it('should initialize the game with correct variables', () => {
    expect(game.questionCounter).toBe(0);
    expect(game.score).toBe(0);
    expect(game.availableQuestions.length).toBe(questions.length);
  });

  it('should display the first question', () => {
    expect(mockQuestionElement.textContent).not.toBe('');
    expect(mockChoiceElements[0].textContent).toContain('A)');
    expect(mockChoiceElements[1].textContent).toContain('B)');
    expect(mockChoiceElements[2].textContent).toContain('C)');
    expect(mockChoiceElements[3].textContent).toContain('D)');
  });

  it('should handle correct answers', () => {
    // Mock the click event on the correct answer
    mockChoiceElements[2].click();

    // Check if the score is incremented and the game continues
    expect(game.score).toBe(10);
    expect(game.questionCounter).toBe(1);
  });

  it('should handle incorrect answers', () => {
    // Mock the click event on an incorrect answer
    mockChoiceElements[0].click();

    // Check if the score remains the same and the game continues
    expect(game.score).toBe(0);
    expect(game.questionCounter).toBe(1);
  });

  it('should end the game when the maximum number of questions is reached', () => {
    // Mock multiple clicks to reach the maximum number of questions
    mockChoiceElements.forEach(() => {
      mockChoiceElements[0].click();
      game.questionCounter++;
    });

    // Check if the game state is reset and the game ends
    expect(game.questionCounter).toBe(3);
    expect(game.acceptingAnswers).toBe(false);
  });
});
