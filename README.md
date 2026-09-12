# 🎯 The Type Trap

## 📝 Project Details

### Project Name
**The Type Trap**

### Project Description
The Type Trap is an interactive typing game where the player must type a randomly selected sentence as fast and accurately as possible within a 2-minute time limit.

The game includes typing accuracy checking, delayed character display, paste prevention, a special backspace mechanic, and a moving **CLICK ME** button that the player must catch after completing the sentence.

### Team Member :Anamika sanilkumar
---

## ⚙️ Technical Details

### Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- VS Code
- Live Server

### Software Requirements

- Modern web browser
- VS Code or any code editor
- Live Server extension (optional)

### Project Files

```text
The-Type-Trap/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### Key Features

- Random typing sentences
- 2-minute countdown timer
- Real-time typing accuracy checking
- 2-second delayed character display
- Paste prevention
- Word-based backspace
- Moving CLICK ME button
- Result screen
- Random roast messages
- Try Again option
- Responsive design

---

# 💻 Implementation

### For Software:

The project is implemented using HTML, CSS and JavaScript.

**HTML** is used to create the structure of the game.

**CSS** is used for the neo-brutalist interface, colors, borders, shadows, buttons and responsive layout.

**JavaScript** controls the game logic, including the timer, random sentence selection, typing validation, delayed characters, moving button, result calculation and roast messages.

---

# 📦 Installation

No external libraries or packages are required.

### Steps

1. Download or clone the project.
2. Open the project folder in VS Code.
3. Make sure `index.html`, `style.css` and '`script.js` are in the same folder.
4. Open `index.html` using Live Server.

---

# ▶️ Run

To run the project:

```text
Right Click on index.html
        ↓
Open with Live Server
```

The game will open in the browser.

---

# 📚 Project Documentation

The game works in the following sequence:

1. A random sentence is selected.
2. The sentence is displayed in the TARGET area.
3. The player starts typing.
4. The 2-minute timer begins.
5. Each typed character is checked against the target sentence.
6. Typed characters are displayed with a delay.
7. Copy-paste is prevented.
8. Backspace removes the current word.
9. After completing the sentence, the player must catch the CLICK ME button.
10. The button moves when the player gets close.
11. Once the button is clicked, the final time is displayed.
12. A humorous result/roast message is shown.

---

##Screenshots

###Intial game state
!type trap screenshot main full size.png
Description: Shows the main game header "THE TYPE TRAP" with instructions to type the sentence as fast as possible. Displays a target tongue-twister sentence ("Three thirsty thieves..."), a reset timer at 02:00, an empty input box with the prompt "Start typing here...", and a interactive red "CLICK ME" button below.

###Active Typing State
!type trap screenshot main22.png
Description: Shows the user actively typing out the target sentence ("The clever clown carefully carried...") into the text box while the countdown timer runs down to 00:02.

###Time's Up Popup
!
Description: Displays a bright yellow popup alert with a skull icon indicating that time ran out, showing the message "TIME'S UP! The timer gave up before you did. Actually... no, you didn't even finish." alongside an "OKAY, I GET IT" button.

# 🖥️ Software Architecture

```text
        ┌──────────────┐
        │   index.html │
        │  Game Layout │
        └──────┬───────┘
               ↓
        ┌──────────────┐
        │   style.css  │
        │ UI & Design  │
        └──────┬───────┘
               ↓
        ┌──────────────┐
        │  script.js   │
        │  Game Logic  │
        └──────┬───────┘
               ↓
     ┌─────────┼─────────┐
     ↓         ↓         ↓
   Timer    Typing    Button
            Check     Movement
               ↓
        Result / Roast
```

**Caption:** Software architecture showing the relationship between the HTML interface, CSS styling and JavaScript game logic.

---

# 🔧 Schematic & Circuit

### Circuit

**Not applicable — this project is a software-only web application and does not use electronic circuits or physical hardware.**

### Schematic

**Not applicable — no hardware components are required for The Type Trap.**
---
