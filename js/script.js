// Roll history array
let rollHistory = [];

// Get elements
const rollButton = document.getElementById('rollButton');
const saveSkipButtons = document.getElementById('saveSkipButtons');
const saveButton = document.getElementById('saveButton');
const skipButton = document.getElementById('skipButton');
const output = document.getElementById('output');
const auraImage = document.getElementById('auraImage');
const historyList = document.getElementById('historyList');

// Aura images array (you can expand this)
const auras = [
    { name: "End Aura", img: "public/your-aura-image.png" },
    { name: "Mystic Aura", img: "public/mystic-aura.png" }
];

// Function to roll an aura
function rollAura() {
    // Pick a random aura
    const randomAura = auras[Math.floor(Math.random() * auras.length)];
    
    // Show the result
    output.innerHTML = `<h2>You Got</h2><img src="${randomAura.img}" alt="${randomAura.name}">`;
    auraImage.style.display = 'block';
    
    // Show save/skip buttons
    saveSkipButtons.style.display = 'flex';

    // Add to roll history
    rollHistory.push(randomAura.name);
    updateHistory();
}

// Function to update roll history list
function updateHistory() {
    historyList.innerHTML = '';  // Clear previous list
    rollHistory.forEach(aura => {
        const listItem = document.createElement('li');
        listItem.textContent = aura;
        historyList.appendChild(listItem);
    });
}

// Save button action
saveButton.addEventListener('click', function() {
    alert('Aura saved!');
    saveSkipButtons.style.display = 'none';
    output.innerHTML = ''; // Clear output after saving
});

// Skip button action
skipButton.addEventListener('click', function() {
    alert('Aura skipped!');
    saveSkipButtons.style.display = 'none';
    output.innerHTML = ''; // Clear output after skipping
});

// Roll button action
rollButton.addEventListener('click', rollAura);
