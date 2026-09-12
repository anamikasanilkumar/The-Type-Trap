// DOM Elements
const editor = document.getElementById("editor");
const targetTextElement = document.getElementById("targetText");
const timerElement = document.getElementById("timer");
const statusElement = document.getElementById("status");
const clickMe = document.getElementById("clickMe");
const buttonArea = document.getElementById("buttonArea");
const result = document.getElementById("result");
const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const newGame = document.getElementById("newGame");
const roastPopup = document.getElementById("roastPopup");
const roastTitle = document.getElementById("roastTitle");
const roastText = document.getElementById("roastText");
const roastClose = document.getElementById("roastClose");

const sentences = [
    "Seven silly sailors swiftly sailed seven small silver ships across the stormy sea.",
    "The clever clown carefully carried thirty-three colourful candies through the crowded city.",
    "Three thirsty thieves threw thirteen thick threads through the theatre's tiny doorway.",
    "Five funny farmers found forty-four fresh flowers floating beside the flooded field.",
    "Six slippery snakes slowly slid sideways across seven smooth stones.",
    "Twenty tiny turtles tried to travel through the thick thorny bushes before twilight.",
    "Peter's purple parrot proudly picked perfectly polished peanuts from the picnic basket.",
    "Three cheerful children chased a chocolate-chewing chicken through the chilly countryside.",
    "Fred's friendly frog frequently frightened five fresh-faced fishermen fishing beside the frozen river.",
    "Crazy crocodiles carefully carried crunchy crackers across the crowded countryside."
];

const roasts = [
    "Two whole minutes?! A snail just filed a complaint about your speed. 🐌",
    "The timer gave up before you did. Actually... no, you didn't even finish. 💀",
    "Congratulations! You successfully wasted two minutes of your life. 🎉",
    "The sentence was waiting patiently. Then it stopped believing in you. 😭",
    "Even the keyboard is asking whether everything is okay. ⌨️",
    "Two minutes later... and that sentence is STILL unfinished. 😭",
    "BREAKING NEWS: You lost to a sentence. 📰",
    "The computer has officially lost faith in humanity. 💀",
    "Somewhere, a turtle just finished typing faster than you. 🐢",
    "Your keyboard deserves compensation for what just happened. 😭",
    "You had ONE sentence. ONE. And somehow the sentence won. 💀",
    "Typing speed: questionable. Confidence: concerning. 😂",
    "The letters were ready. You were not. 😭",
    "Maybe typing isn't your thing. Have you considered interpretive dance? 💃",
    "The keyboard has requested a new owner. ⌨️💔"
];

// Game State
let targetText = "";
let realText = "";
let displayedText = "";
let queue = [];
let gameStarted = false;
let gameFinished = false;
let timerInterval = null;
let startTime = 0;
let timeLimit = 120;
let timeLeft = timeLimit;
let typingVersion = 0;

const startGame = () => {
    targetText = sentences[Math.floor(Math.random() * sentences.length)];
    targetTextElement.textContent = targetText;

    realText = "";
    displayedText = "";
    queue = [];
    gameStarted = false;
    gameFinished = false;
    typingVersion++;

    editor.value = "";
    editor.disabled = false;
    editor.focus();

    clearInterval(timerInterval);
    timeLeft = timeLimit;
    
  
    timerElement.textContent = "02:00";
    timerElement.style.background = "";
    timerElement.style.color = "";

    statusElement.textContent = "Ready...";
    result.classList.add("hidden");
    roastPopup.classList.add("hidden");

    
    Object.assign(clickMe.style, {
        display: "block",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    });
    clickMe.textContent = "CLICK ME";
    clickMe.disabled = false;
};

const startTimer = () => {
    if (gameStarted) return;
    gameStarted = true;
    startTime = Date.now();
    timeLeft = timeLimit;

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) timeLeft = 0;

        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        const seconds = String(timeLeft % 60).padStart(2, "0");
        timerElement.textContent = `${minutes}:${seconds}`;

        if (timeLeft <= 10) {
            timerElement.style.background = "#ff5252";
            timerElement.style.color = "#ffffff";
        }

        if (timeLeft <= 0) timeIsUp();
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timerInterval);
    timerInterval = null;
};

const timeIsUp = () => {
    if (gameFinished) return;
    stopTimer();
    gameFinished = true;
    editor.disabled = true;
    clickMe.style.display = "none";

    statusElement.textContent = "⏰ TIME'S UP! THE COMPUTER IS DISAPPOINTED.";
    resultTitle.textContent = "💀 TIME'S UP!";
    resultMessage.textContent = "You were defeated by a sentence.";
    result.classList.remove("hidden");

    const roast = roasts[Math.floor(Math.random() * roasts.length)];
    showRoast("💀 TIME'S UP!", roast);
};

const handleCharacter = (character) => {
    if (gameFinished) return;
    startTimer();

    realText += character;
    const currentVersion = typingVersion;

    if (!realText.includes(" ")) {
        displayedText += character;
        editor.value = displayedText;
        checkTypingAccuracy();
        return;
    }

    queue.push(character);
    statusElement.textContent = "🐌 Letters arriving in 2 seconds...";

    setTimeout(() => {
        if (currentVersion !== typingVersion || gameFinished || queue.length === 0) return;

        displayedText += queue.shift();
        editor.value = displayedText;
        checkTypingAccuracy();
    }, 2000);
};

const checkTypingAccuracy = () => {
    if (!realText.length) {
        statusElement.textContent = "Start typing...";
        return;
    }

    const isWrong = [...realText].some((char, i) => char !== targetText[i]);

    if (isWrong) {
        statusElement.textContent = "❌ WRONG! THE COMPUTER IS JUDGING YOU.";
        return;
    }

    if (realText.length < targetText.length) {
        statusElement.textContent = "🟡 So far, so good...";
        return;
    }

    if (realText === targetText) {
        statusElement.textContent = "✅ PERFECT! NOW CATCH THE CLICK ME BUTTON! 🏃";
    }
};

const moveButton = () => {
    const area = buttonArea.getBoundingClientRect();
    const btn = clickMe.getBoundingClientRect();

    const maxX = Math.max(area.width - btn.width, 0);
    const maxY = Math.max(area.height - btn.height, 0);

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    const randomRotation = Math.random() * 20 - 10;

    clickMe.style.left = `${randomX}px`;
    clickMe.style.top = `${randomY}px`;
    clickMe.style.transform = `rotate(${randomRotation}deg) scale(1.05)`;
};

const showRoast = (title, message) => {
    roastTitle.textContent = title;
    roastText.textContent = message;
    roastPopup.classList.remove("hidden");
};

// Event Listeners
editor.addEventListener("keydown", (e) => {
    if (gameFinished || ["Shift", "Control", "Alt", "Meta"].includes(e.key)) return;

    if (e.key === "Backspace") {
        e.preventDefault();
        if (!realText.length) return;

        const trimmed = realText.trimEnd();
        const lastSpace = trimmed.lastIndexOf(" ");

        realText = lastSpace === -1 ? "" : trimmed.substring(0, lastSpace + 1);
        typingVersion++;
        queue = [];
        displayedText = realText;
        editor.value = displayedText;

        statusElement.textContent = "💀 ONE BACKSPACE = ONE WHOLE WORD GONE";
        checkTypingAccuracy();
        return;
    }

    if (e.key === "Enter") {
        e.preventDefault();
        handleCharacter("\n");
        return;
    }

    if (e.key.length === 1) {
        e.preventDefault();
        handleCharacter(e.key);
    }
});

// Dodges continuously on mouse move regardless of whether text is completed
buttonArea.addEventListener("mousemove", (e) => {
    if (gameFinished) return;

    const btn = clickMe.getBoundingClientRect();
    const centerX = btn.left + btn.width / 2;
    const centerY = btn.top + btn.height / 2;

    const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);

    if (distance < 100) {
        moveButton();
        statusElement.textContent = "🏃 Catch me if you can!";
    }
});

clickMe.addEventListener("click", () => {
    if (gameFinished) return;

    if (realText !== targetText) {
        statusElement.textContent = "❌ FINISH THE SENTENCE FIRST!";
        moveButton();
        return;
    }

    stopTimer();
    gameFinished = true;
    editor.disabled = true;
    clickMe.style.display = "none";

    const finalTime = ((Date.now() - startTime) / 1000).toFixed(2);
    let message = "";

    if (finalTime < 20) message = "Okay... WHO ARE YOU?! Did you even use a keyboard? 😳";
    else if (finalTime < 40) message = "Not bad. Unfortunately, you still fell into my trap. 😈";
    else if (finalTime < 60) message = "You survived. But let's be honest... barely. 💀";
    else if (finalTime < 90) message = "That took you a while. The keyboard aged 3 years waiting for you. 😭";
    else message = "You finished! Eventually. We were about to call the typing police. 🚨";

    resultTitle.textContent = "🔥 YOU SURVIVED!";
    resultMessage.textContent = `You finished in ${finalTime} seconds.`;
    result.classList.remove("hidden");

    showRoast("🔥 YOU SURVIVED!", message);
});

editor.addEventListener("paste", (e) => {
    e.preventDefault();
    statusElement.textContent = "📋 NICE TRY. TYPE IT YOURSELF! 😈";
});

roastClose.addEventListener("click", () => roastPopup.classList.add("hidden"));
newGame.addEventListener("click", startGame);

// Initialize Game
startGame();