const loadingImg = document.querySelector(".loading-img");
const loadingLine = document.querySelector(".loading-line");
const menuBtn = document.querySelector(".menu");
const menu = document.querySelector(".menu-body");
const gameBg = document.querySelector(".game");
const closeBtn = document.querySelector(".close-btn");
const rockBtn = document.querySelector(".choice-rock");
const paperBtn = document.querySelector(".choice-paper");
const scissorsBtn = document.querySelector(".choice-scissors");

const rock = document.querySelector(".player-option-rock");
const paper = document.querySelector(".player-option-paper");
const scissors = document.querySelector(".player-option-scissors");

const game = document.querySelector(".game");

const mapBtn = document.querySelector(".map-logo");
const mapCloseBtn = document.querySelector(".maps-close-btn");
const maps = document.querySelector(".maps-box");
const mapOne = document.querySelector(".map-one");
const mapTwo = document.querySelector(".map-two");
const mapThree = document.querySelector(".map-three");

const option = document.querySelectorAll(".option");

const playerPointsSpan = document.querySelector(".player-points");
const compPointsSpan = document.querySelector(".comp-points");

const compHand = document.querySelectorAll(".comp-hand");
const nextRoundBtn = document.querySelector(".next-round");

const compRock = document.querySelector(".comp-option-rock");
const compPaper = document.querySelector(".comp-option-paper");
const compScissors = document.querySelector(".comp-option-scissors");

let playerPoints = 0;
let compPoints = 0;

function startGame() {
	playerPointsSpan.innerHTML - playerPoints;
	compPointsSpan.innerHTML = compPoints;
}

window.onload = startGame();

setTimeout(() => {
	function loadingFade() {
		loadingImg.style.opacity = "0";
		loadingLine.style.opacity = "0";
	}
	loadingRemove();
}, 2000);

function loadingRemove() {
	loadingImg.style.display = "none";
}

function showMenu() {
	if ((menu.style.display = "none")) {
		menu.style.display = "block";
		gameBg.classList.add("blur");
	} else {
		menu.style.display = "none";
		gameBg.classList.remove("blur");
	}
}
function showMaps() {
	if ((maps.style.display = "none")) {
		maps.style.display = "block";
		gameBg.classList.add("blur");
	} else {
		maps.style.display = "none";
		gameBg.classList.remove("blur");
	}
}

function playerSelect(e) {
	playerChoice = e.target.dataset.option;
	compSelect();
}

const randomCompChoice = ["ROCK", "PAPER", "SCISSORS"];

function compSelect() {
	const randomIndex = Math.floor(Math.random() * randomCompChoice.length);
	compChoice = randomCompChoice[randomIndex];
	if (compChoice === randomCompChoice[0]) {
		compRock.classList.add("show-comp-choice");
	} else if (compChoice === randomCompChoice[1]) {
		compPaper.classList.add("show-comp-choice");
	} else {
		compScissors.classList.add("show-comp-choice");
	}
	nextRoundBtn.style.display = "block";
	result();
}

function result() {
	if (
		(playerChoice === "ROCK" && compChoice === "SCISSORS") ||
		(playerChoice === "SCISSORS" && compChoice === "PAPER") ||
		(playerChoice === "PAPER" && compChoice === "ROCK")
	) {
		playerPoints++;
		playerPointsSpan.innerHTML = playerPoints;
	} else if (playerChoice === compChoice) {
		playerPointsSpan.innerHTML = playerPoints;
		compPointsSpan.innerHTML = compPoints;
	} else {
		compPoints++;
		compPointsSpan.innerHTML = compPoints;
	}
}

function nextRound() {
	game.classList.remove("block");
	rock.classList.remove("active-choice");
	paper.classList.remove("active-choice");
	scissors.classList.remove("active-choice");
	rockBtn.classList.remove("active-btn");
	paperBtn.classList.remove("active-btn");
	scissorsBtn.classList.remove("active-btn");
	compRock.classList.remove("show-comp-choice");
	compPaper.classList.remove("show-comp-choice");
	compScissors.classList.remove("show-comp-choice");
}

rockBtn.addEventListener("mouseenter", () => {
	rock.classList.add("show-choice");
	rockBtn.addEventListener("mouseleave", () => {
		rock.classList.remove("show-choice");
	});
	rockBtn.addEventListener("click", () => {
		rockBtn.classList.add("active-btn");
		rock.classList.add("active-choice");
		game.classList.add("block");
	});
});
paperBtn.addEventListener("mouseenter", () => {
	paper.classList.add("show-choice");
	paperBtn.addEventListener("mouseleave", () => {
		paper.classList.remove("show-choice");
	});
	paperBtn.addEventListener("click", () => {
		paperBtn.classList.add("active-btn");
		paper.classList.add("active-choice");
		game.classList.add("block");
	});
});
scissorsBtn.addEventListener("mouseenter", () => {
	scissors.classList.add("show-choice");
	scissorsBtn.addEventListener("mouseleave", () => {
		scissors.classList.remove("show-choice");
	});
	scissorsBtn.addEventListener("click", () => {
		scissorsBtn.classList.add("active-btn");
		scissors.classList.add("active-choice");
		game.classList.add("block");
	});
});

menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", () => {
	menu.style.display = "none";
	gameBg.classList.remove("blur");
});
mapBtn.addEventListener("click", showMaps);
mapCloseBtn.addEventListener("click", () => {
	maps.style.display = "none";
	gameBg.classList.remove("blur");
});

mapOne.addEventListener("click", () => {
	game.style.backgroundImage = 'url("../images/hero-img-one.jpg")';
	maps.style.display = "none";
	gameBg.classList.remove("blur");
});
mapTwo.addEventListener("click", () => {
	game.style.backgroundImage = 'url("../images/hero-img-two.jpg")';
	maps.style.display = "none";
	gameBg.classList.remove("blur");
});
mapThree.addEventListener("click", () => {
	game.style.backgroundImage = 'url("../images/hero-img-three.jpg")';
	maps.style.display = "none";
	gameBg.classList.remove("blur");
});

option.forEach((el) => {
	el.addEventListener("click", playerSelect);
});

nextRoundBtn.addEventListener("click", () => {
	nextRound();
	nextRoundBtn.style.display = "none";
});

