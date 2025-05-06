// Example Tarot Deck Data
const tarotDeck = [
  {
    name: "The Fool",
    image: "images/fool.jpg",
    upright: "Beginnings, spontaneity, optimism.",
    reversed: "Carelessness, recklessness, inexperience."
  },
  {
    name: "The Magician",
    image: "images/magician.jpg",
    upright: "Power, skill, concentration.",
    reversed: "Manipulation, poor planning, lack of focus."
  },
  {
    name: "The High Priestess",
    image: "images/high-priestess.jpg",
    upright: "Intuition, sacred knowledge, divine feminine.",
    reversed: "Secrets, detachment, withdrawal."
  },
  {
    name: "The Empress",
    image: "images/empress.jpg",
    upright: "Femininity, beauty, nature, nurturing.",
    reversed: "Dependency, insecurity, smothering."
  },
  {
    name: "The Emperor",
    image: "images/emperor.jpg",
    upright: "Authority, structure, control, fatherhood.",
    reversed: "Tyranny, rigidity, coldness."
  },
  {
    name: "The Lovers",
    image: "images/lovers.jpg",
    upright: "Love, harmony, relationships, values alignment.",
    reversed: "Disharmony, imbalance, misalignment of values."
  }
  // Add more cards as needed...
];

function drawCards() {
  const readingDiv = document.getElementById("reading");
  readingDiv.innerHTML = "";

  let selectedCards = [];

  while (selectedCards.length < 6) {
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const card = tarotDeck[randomIndex];

    // Avoid duplicates
    if (!selectedCards.includes(card)) {
      // Randomly decide if it's reversed
      const isReversed = Math.random() < 0.5;

      selectedCards.push({
        ...card,
        reversed: isReversed
      });
    }
  }

  selectedCards.forEach((card, index) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    const meaning = card.reversed ? card.reversed : card.upright;

    cardDiv.innerHTML = `
      <img src="${card.image}" alt="${card.name}">
      <h3>${index + 1}. ${card.name} ${card.reversed ? "(Reversed)" : ""}</h3>
      <p><strong>Meaning:</strong> ${meaning}</p>
    `;

    readingDiv.appendChild(cardDiv);
  });

  generateOverallReading(selectedCards);
}

function generateOverallReading(cards) {
  const readingDiv = document.getElementById("reading");

  const summary = document.createElement("div");
  summary.style.marginTop = "40px";
  summary.innerHTML = `
    <h2>✨ Overall Interpretation</h2>
    <p>This 6-card spread represents your current situation, challenges, and potential outcomes. Reflect on how the cards relate to your life path and choices.</p>
  `;

  readingDiv.appendChild(summary);
}
