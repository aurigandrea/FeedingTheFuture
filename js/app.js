
// Game state variables 
let humanCards = []; //Objects in const foodData in data.js
let computerCards = [];
let humanScore = 0;
let computerScore = 0;
let currentTurn = 'human'; // 'human' or 'computer'
let selectedCategory = null;
let gamePhase = 'setup'; // 'setup', 'playing', 'round_end', 'game_over'
let humanCardInPlay = null;
let computerCardInPlay = null;
const THINK_DELAY = 1500;   // how long the computer "thinks" before picking
const REVEAL_DELAY = 1500;  // delay between showing cards and announcing winner
const isWinner = (gamePhase === 'round_end') && (
  (containerId === 'humanCard' && humanCardInPlay && determineWinner() === 'human') ||
  (containerId === 'computerCard' && computerCardInPlay && determineWinner() === 'computer')
);



// Helper functions
// Fisher-Yates to shuffle array of cards
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
//Which card wins
function isHigherBetter(category) {
    // For environmental metrics, lower is better
    if (['greenhouse', 'water', 'saturated_fats'].includes(category)) {
        return false;
    }
    // For nutrition metrics, higher is better
    return true;
}

//Name mapping for metrics
function getMetricName(category) {
    const names = {
        greenhouse: 'Greenhouse Gas (kg CO2)',
        water: 'Water Usage (L)',
        fiber: 'Fiber (g)',
        vitaminC: 'Vitamin C (mg)',
        protein: 'Protein (g)',
        iron: 'Iron (mg)',
        saturated_fats: 'Saturated Fats (g)'
    };
    return names[category];
}
//Read the card
function getAvailableMetrics(card) {
    return Object.keys(card.metrics);
}

// Start game
function startNewGame() {
    // Shuffle and deal cards
    const shuffled = shuffleArray(foodData);
    humanCards = [];
    computerCards = [];

    // Deal cards alternately
    for (let i = 0; i < shuffled.length; i++) {
        if (i % 2 === 0) {
            humanCards.push(shuffled[i]);
        } else {
            computerCards.push(shuffled[i]);
        }
    }

    // Reset game state
    humanScore = 0;
    computerScore = 0;
    currentTurn = 'human';
    gamePhase = 'playing';
    selectedCategory = null;
    humanCardInPlay = null;
    computerCardInPlay = null;

    // Flip animation for both player sections
    document.getElementById('humanSection').classList.add('flipped');
    document.getElementById('computerSection').classList.add('flipped');
    setTimeout(() => {
        document.getElementById('humanSection').classList.remove('flipped');
        document.getElementById('computerSection').classList.remove('flipped');
    }, 600);

    updateDisplay();
    updateGameStatus('Your turn - select a category');

    document.getElementById('newGameBtn').style.display = 'none';
    document.getElementById('nextRoundBtn').style.display = 'none';
}

// Display updates
function updateDisplay() {
    // Scores & counts
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('humanCards').textContent = humanCards.length;
    document.getElementById('computerCards').textContent = computerCards.length;

    // Active player highlight
    document.getElementById('humanSection').classList.toggle('active', currentTurn === 'human');
    document.getElementById('computerSection').classList.toggle('active', currentTurn === 'computer');

    // Human card
    if (gamePhase === 'playing' && humanCards.length > 0) {
        // interactive only on the human's turn
        showCard(humanCards[0], 'humanCard', currentTurn === 'human');
    } else if (humanCardInPlay) {
        showCard(humanCardInPlay, 'humanCard', false);
    }

    // Computer card — keep hidden until it actually has a card to reveal
    if (computerCardInPlay) {
        showCard(computerCardInPlay, 'computerCard', false);
    } else {
        showHiddenCard('computerCard');
    }
}


function showCard(card, containerId, interactive) {
    const container = document.getElementById(containerId);
    const availableMetrics = getAvailableMetrics(card);
    const isWinner = (containerId === 'humanCard' && humanCardInPlay && determineWinner() === 'human') ||
                   (containerId === 'computerCard' && computerCardInPlay && determineWinner() === 'computer');

    container.innerHTML = `
        ${isWinner ? '<div class="winner-badge">Winner!</div>' : ''}
        <img src="${card.image}" alt="${card.name}" class="card-image">
        <div class="card-title">${card.name}</div>
        <div class="card-category">${card.category}</div>
        <div class="metrics">
            ${availableMetrics.map(metric => {
                const value = card.metrics[metric];
                const higher = isHigherBetter(metric);
                let className = 'metric';

                if (selectedCategory === metric) {
                    className += ' selected';
                    if (gamePhase === 'round_end') {
                        const winner = determineWinner();
                        if ((winner === 'human' && containerId === 'humanCard') ||
                            (winner === 'computer' && containerId === 'computerCard')) {
                            className += ' winner';
                        } else {
                            className += ' loser';
                        }
                    }
                }

                return `
                    <div class="${className}" ${interactive ? `onclick=\"selectCategory('${metric}')\"` : ''}>
                        <span>${getMetricName(metric)}</span>
                        <span>${higher ? '↑' : '↓'} ${value}</span>
                    </div>
                `;
            }).join('')}
        </div>
    `;

    if (isWinner) {
        container.classList.add('winner');
    } else {
        container.classList.remove('winner');
    }
}

function showHiddenCard(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '<div class="hidden-card">🃏 Computer\'s card hidden</div>';
    container.classList.remove('winner');
}

// Game logic
function selectCategory(category) {
    if (gamePhase !== 'playing' || currentTurn !== 'human') return;

    selectedCategory = category;

    // Step 1: flip only the human card
    gamePhase = 'reveal_opponent';
    humanCardInPlay = humanCards.shift();
    computerCardInPlay = null; // keep computer hidden
    updateDisplay();

    // Step 2: after a beat, flip the computer card
    setTimeout(() => {
        computerCardInPlay = computerCards.shift();
        updateDisplay();

        // Step 3: after another beat, score & announce
        setTimeout(() => {
            const winner = determineWinner();
            gamePhase = 'round_end';

            if (winner === 'human') {
                humanScore++;
                updateGameStatus('You won this round!');
                currentTurn = 'human';
            } else if (winner === 'computer') {
                computerScore++;
                updateGameStatus('Computer won this round!');
                currentTurn = 'computer';
            } else {
                updateGameStatus('It\'s a tie!');
                currentTurn = currentTurn === 'human' ? 'computer' : 'human';
            }

            // End or continue
            if (humanCards.length === 0 || computerCards.length === 0) {
                setTimeout(() => {
                    gamePhase = 'game_over';
                    const finalWinner = humanScore > computerScore ? 'You'
                                      : computerScore > humanScore ? 'Computer'
                                      : 'Nobody';
                    updateGameStatus(`Game Over! ${finalWinner} ${finalWinner !== 'Nobody' ? 'won' : 'tied'}!`);
                    document.getElementById('newGameBtn').style.display = 'inline-block';
                }, REVEAL_DELAY);
            } else {
                document.getElementById('nextRoundBtn').style.display = 'inline-block';
            }
            updateDisplay();
        }, REVEAL_DELAY);
    }, REVEAL_DELAY);
}


function determineWinner() {
    if (!humanCardInPlay || !computerCardInPlay || !selectedCategory) return null;

    const humanValue = humanCardInPlay.metrics[selectedCategory];
    const computerValue = computerCardInPlay.metrics[selectedCategory];
    const higherIsBetter = isHigherBetter(selectedCategory);

    if (higherIsBetter) {
        return humanValue > computerValue ? 'human' :
               computerValue > humanValue ? 'computer' : 'tie';
    } else {
        return humanValue < computerValue ? 'human' :
               computerValue < humanValue ? 'computer' : 'tie';
    }
}

function nextRound() {
    // Flip animation for both player sections
    document.getElementById('humanSection').classList.add('flipped');
    document.getElementById('computerSection').classList.add('flipped');
    setTimeout(() => {
        document.getElementById('humanSection').classList.remove('flipped');
        document.getElementById('computerSection').classList.remove('flipped');

        selectedCategory = null;
        humanCardInPlay = null;
        computerCardInPlay = null;
        gamePhase = 'playing';

        document.getElementById('nextRoundBtn').style.display = 'none';

        if (currentTurn === 'computer') {
            // Computer's turn
            updateGameStatus('Computer is thinking...');
            setTimeout(() => {
                computerTurn();
            }, 1500);
        } else {
            updateGameStatus('Your turn - select a category');
        }

        updateDisplay();
    }, 600);
}

function computerTurn() {
    if (computerCards.length === 0) return;

    const availableMetrics = getAvailableMetrics(computerCards[0]);
    const randomMetric = availableMetrics[Math.floor(Math.random() * availableMetrics.length)];
    selectedCategory = randomMetric;

    // Step 1: flip only the human card (computer keeps its card hidden)
    gamePhase = 'reveal_opponent';
    humanCardInPlay = humanCards.shift();
    computerCardInPlay = null;
    updateDisplay();

    // Step 2: after a beat, flip the computer card
    setTimeout(() => {
        computerCardInPlay = computerCards.shift();
        updateDisplay();

        // Step 3: after another beat, score & announce
        setTimeout(() => {
            const winner = determineWinner();
            gamePhase = 'round_end';

            if (winner === 'human') {
                humanScore++;
                updateGameStatus('You won this round!');
                currentTurn = 'human';
            } else if (winner === 'computer') {
                computerScore++;
                updateGameStatus('Computer won this round!');
                currentTurn = 'computer';
            } else {
                updateGameStatus('It\'s a tie!');
                currentTurn = 'human';
            }

            if (humanCards.length === 0 || computerCards.length === 0) {
                setTimeout(() => {
                    gamePhase = 'game_over';
                    const finalWinner = humanScore > computerScore ? 'You'
                                      : computerScore > humanScore ? 'Computer'
                                      : 'Nobody';
                    updateGameStatus(`Game Over! ${finalWinner} ${finalWinner !== 'Nobody' ? 'won' : 'tied'}!`);
                    document.getElementById('newGameBtn').style.display = 'inline-block';
                }, REVEAL_DELAY);
            } else {
                document.getElementById('nextRoundBtn').style.display = 'inline-block';
            }
            updateDisplay();
        }, REVEAL_DELAY);
    }, REVEAL_DELAY);
}


function updateGameStatus(message) {
    document.getElementById('gameStatus').textContent = message;
}

// Initialize the game when the page loads
updateDisplay();

 // Toggle mobile navigation
    // Ensure the elements exist before attaching listeners 
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function(event) {
            // prevent the window click handler from immediately hiding the menu
            event.stopPropagation();
            if (mobileNav.style.display === 'flex') {
                mobileNav.style.display = 'none';
            } else {
                mobileNav.style.display = 'flex';
            }
        });

        // Hide mobile nav when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target !== mobileNav && event.target !== hamburger) {
                mobileNav.style.display = 'none';
            }
        });
    }