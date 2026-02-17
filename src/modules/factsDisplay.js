// src/modules/factsDisplay.js

// Sample data array representing facts
const facts = [
    { id: 1, fact: 'Honey never spoils.', category: 'Food' },
    { id: 2, fact: 'Bananas are berries.', category: 'Food' },
    { id: 3, fact: 'The Eiffel Tower can be 15 cm taller during the summer.', category: 'Science' },
    { id: 4, fact: 'Octopuses have three hearts.', category: 'Science' },
];

// Function to render facts
function renderFacts(facts) {
    const factsContainer = document.getElementById('factsContainer');
    factsContainer.innerHTML = '';
    facts.forEach(fact => {
        const factElement = document.createElement('div');
        factElement.innerText = fact.fact;
        factsContainer.appendChild(factElement);
    });
}

// Function to filter facts by category
function filterFacts(category) {
    return facts.filter(fact => fact.category === category);
}

// Function to sort facts by id
function sortFacts(order = 'asc') {
    return facts.sort((a, b) => {
        return order === 'asc' ? a.id - b.id : b.id - a.id;
    });
}

// Example usage:
// Render all facts
renderFacts(facts);

// Filter and render food facts
const foodFacts = filterFacts('Food');
renderFacts(foodFacts);

// Sort and render facts in descending order
const sortedFacts = sortFacts('desc');
renderFacts(sortedFacts);

export { renderFacts, filterFacts, sortFacts };