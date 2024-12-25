const facts = [
    "I love hiking.",
    "I am an avid coder and love to code often.",
    "I once cooked a Taco.",
    "I speak three languages fluently.",
    "I’m learning to play the guitar in my free time.",
    "I developed a facial recognition attendance system using Python and Machine Learning.",
    "I play the tabla and enjoy creating music.",
    "I have been recognized on the Dean's List for academic excellence at IIT Patna.",
    "I love painting and often participate in art exhibitions.",
    "I completed the Google Foundations: Data, Data, Everywhere certificate!"
];

function generateFact() {
    const factDisplay = document.getElementById('fact-display');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}
