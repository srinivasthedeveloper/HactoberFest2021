console.log('hi');

// Challenge 1: Age in Days
function ageInDays() {
    const birthYear = prompt('What year were you born, my friend?');
    const ageInDays = (2020 - birthYear) * 365;
    const h1 = document.createElement('h2');
    const textAnswer = document.createTextNode(`Your age in days is ${ageInDays}`);
    h1.appendChild(textAnswer);
    document.getElementById('flexbox').appendChild(h1);
    h1.setAttribute('id', 'resettext');
}

function reset() {
    const resetText = document.getElementById('resettext');
    if (resetText) resetText.remove();
}

// Challenge 2: Cat Generator
function catGenerator() {
    const image = document.createElement('img');
    image.src = "download.jfif"; // Ensure this path is correct
    document.getElementById('flexbox-container2').appendChild(image);
}

// Challenge 4: Change the color of all buttons
function buttonColorChange(button) {
    const colorActions = {
        'red': buttonsRed,
        'green': buttonsGreen,
        'yellow': buttonsYellow,
        'resetcolors': buttonsReset,
        'random': buttonsRandom
    };

    if (colorActions[button.value]) {
        colorActions[button.value]();
    }
}

function changeButtonColor(className) {
    const copyButtons = Array.from(document.getElementsByTagName("button"));
    copyButtons.forEach(button => button.className = className);
}

function buttonsRed() {
    changeButtonColor('reset');
}

function buttonsYellow() {
    changeButtonColor('btn btn-warning');
}

function buttonsGreen() {
    changeButtonColor('btn btn-success');
}

function buttonsRandom() {
    const choices = ['reset', 'btn btn-danger', 'btn btn-success', 'btn btn-warning', 'clickme'];
    const copyButtons = Array.from(document.getElementsByTagName("button"));
    copyButtons.forEach(button => {
        button.className = choices[Math.floor(Math.random() * choices.length)];
    });
}

// Challenge 5: Blackjack Game
window.onload = function () {
    document.querySelector("#hit1").addEventListener("click", blackjackHit);
    document.querySelector("#deal").addEventListener("click", blackjackDeal);
    document.querySelector('#stand').addEventListener("click", dealerLogic);

    let blackjackGame = {
        'you': { 'scorespan': '#your-blackjack-result', 'div': '#your-box', 'score': 0 },
        'dealer': { 'scorespan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0 },
        'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
        'cardsMap': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1, 11] }
    };

    const YOU = blackjackGame['you'];
    const DEALER = blackjackGame['dealer'];

    function blackjackHit() {
        document.querySelector('#blackjack-result').textContent = 'Let\'s Play!';
        document.querySelector('#blackjack-result').style.color = 'black';
        const card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }

    function showCard(card, activePlayer) {
        if (activePlayer['score'] <= 21) {
            const pop = new Audio('sounds/pop.mp3');
            const cardImage = document.createElement('img');
            cardImage.src = `images/${card}.png`; // Ensure this path is correct
            document.querySelector(activePlayer['div']).appendChild(cardImage);
            pop.play();
        }
    }

    function blackjackDeal() {
        computeWinner();
        scoreBoard();

        // Remove all card images
        ['#your-box', '#dealer-box'].forEach(box => {
            const images = document.querySelector(box).querySelectorAll('img');
            images.forEach(image => image.remove());
        });

        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';
    }

    function randomCard() {
        const randomIndex = Math.floor(Math.random() * blackjackGame['cards'].length);
        return blackjackGame['cards'][randomIndex];
    }

    function updateScore(card, activePlayer) {
        if (card === 'A') {
            activePlayer['score'] += (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) ? blackjackGame['cardsMap'][card][1] : blackjackGame['cardsMap'][card][0];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card];
        }
    }

    function showScore(activePlayer) {
        const scoreSpan = document.querySelector(activePlayer['scorespan']);
        if (activePlayer['score'] > 21) {
            scoreSpan.textContent = 'BURST!';
            scoreSpan.style.color = 'red';
        } else {
            scoreSpan.textContent = activePlayer['score'];
        }
    }

    function dealerLogic() {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
    }

    function computeWinner() {
        let winner;
        if (YOU['score'] <= 21) {
            if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
                console.log('You won!');
                winner = YOU;
            } else if (YOU['score'] < DEALER['score']) {
                console.log('You lost');
                winner = DEALER;
            } else {
                console.log('You drew');
            }
        } else if (YOU['score'] > 21) {
            console.log('You lost');
            winner = DEALER;
        } else {
            console.log('You drew');
        }
        console.log('Winner is', winner);
        return winner;
    }

    function scoreBoard() {
        const winner = computeWinner();
        if (winner === YOU) {
            document.querySelector('#wins').textContent = ++a;
        } else if (winner === DEALER) {
            document.querySelector('#loses').textContent = ++b;
        } else {
            document.querySelector('#draws').textContent = ++d;
        }
    }
};
