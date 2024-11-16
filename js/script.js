// Aura data (you can extend this with more auras and their images)
const auras = [
    { name: 'End', image: 'https://i.imghippo.com/files/oCl8350wk.png' },
    { name: 'Aura 2', image: 'https://placekitten.com/200/200' },
    { name: 'Aura 3', image: 'https://placekitten.com/200/201' }
];

let history = [];
let inventory = [];
let currentAura = null;

// DOM elements
const rollButton = document.getElementById('rollButton');
const rollResult = document.getElementById('rollResult');
const saveButton = document.getElementById('saveButton');
const skipButton = document.getElementById('skipButton');
const auraName = document.getElementById('auraName');
const auraImage = document.getElementById('auraImage');
const historyList = document.getElementById('historyList');
const inventoryList = document.getElementById('inventoryList');
const searchInventory = document.getElementById('searchInventory');

// Functions
function rollAura() {
    const randomIndex = Math.floor(Math.random() * auras.length);
    currentAura = auras[randomIndex];

    auraName.textContent = currentAura.name;
    auraImage.src = currentAura.image;

    rollResult.style.display = 'block';
    rollButton.style.display = 'none';

    // Add the rolled aura to history
    history.push(currentAura);
    displayHistory();
}

function displayHistory() {
    historyList.innerHTML = '';
    history.forEach(aura => {
        const li = document.createElement('li');
        li.textContent = aura.name;
        historyList.appendChild(li);
    });
}

function saveAura() {
    inventory.push(currentAura);
    displayInventory();
    closeResult();
}

function skipAura() {
    closeResult();
}

function displayInventory() {
    inventoryList.innerHTML = '';
    inventory.forEach(aura => {
        const li = document.createElement('li');
        li.textContent = aura.name;
        inventoryList.appendChild(li);
    });
}

function closeResult() {
    rollResult.style.display = 'none';
    rollButton.style.display = 'block';
}

// Event listeners
rollButton.addEventListener('click', rollAura);
saveButton.addEventListener('click', saveAura);
skipButton.addEventListener('click', skipAura);

// Search Inventory
searchInventory.addEventListener('input', function () {
    const searchQuery = searchInventory.value.toLowerCase();
    const filteredInventory = inventory.filter(aura => aura.name.toLowerCase().includes(searchQuery));
    displayFilteredInventory(filteredInventory);
});

function displayFilteredInventory(filteredInventory) {
    inventoryList.innerHTML = '';
    filteredInventory.forEach(aura => {
        const li = document.createElement('li');
        li.textContent = aura.name;
        inventoryList.appendChild(li);
    });
}
