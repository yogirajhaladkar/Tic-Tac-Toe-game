🎮 Tic Tac Toe Game
  A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript.
  This project demonstrates DOM manipulation, event handling, and basic game logic in JavaScript.

📌 Features

  ✅ Two-player mode (X and O)
  ✅ Automatic turn switching  
  ✅ Winner detection logic  
  ✅ Game reset functionality  
  ✅ New Game option after winning 
  ✅ Responsive design using Flexbox  
  ✅ Clean and modern UI

🛠️ Technologies Used

  HTML5 – Structure of the game 
  CSS3 – Styling and layout 
  JavaScript (Vanilla JS) – Game logic and interactivity

🎯 How the Game Works

  The game starts with Player X.
  Players take turns clicking empty boxes.
  The game checks for winning patterns after every move.
  If a winning combination is found:
  A message is displayed showing the winner.
  All boxes get disabled.
  Users can:
  Click Reset Game to restart.
  Click New Game after winning.

🧠 Winning Patterns Logic

  The game checks these 8 winning combinations:
    
    [0,1,2]  → Row 1
    [3,4,5]  → Row 2
    [6,7,8]  → Row 3
    [0,3,6]  → Column 1
    [1,4,7]  → Column 2
    [2,5,8]  → Column 3
    [0,4,8]  → Diagonal
    [2,4,6]  → Diagonal

  If all three positions contain the same symbol (X or O), that player wins.

    📂 Project Structure
    Tic-Tac-Toe/
    │
    ├── index.html     → Game structure
    ├── style.css      → Styling and layout
    └── script.js      → Game logic

▶️ How to Run the Project

  Download or clone the repository.
  Open the project folder.
  Double-click index.html.
  The game will open in your browser.
  No installation required 🚀

📸 Game Preview

  3x3 Grid Layout
  Modern purple theme
  Centered design
  Pop-up winner message

📚 Concepts Practiced

  DOM Selection (querySelector, querySelectorAll
  Event Listeners
  Functions & Arrow Functions
  Arrays & Looping
  Conditional Logic
  CSS Flexbox
  Class Manipulation

🚀 Future Improvements

  Add Draw detection
  Add Scoreboard
  Add AI mode (Single Player)
  Add Sound effects

Add Animations

👨‍💻 Author

Yogiraj Haladkar
Computer Engineering Student
