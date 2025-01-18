
// section 1 quote.
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Where there's a will, there's a way. - Latin Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "The only thing constant is change. - Heraclitus",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Where there's a will, there's a way. - Latin Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "The only thing constant is change. - Heraclitus",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Where there's a will, there's a way. - Latin Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "The only thing constant is change. - Heraclitus",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Where there's a will, there's a way. - Latin Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "The only thing constant is change. - Heraclitus",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Where there's a will, there's a way. - Latin Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "The only thing constant is change. - Heraclitus",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
];

function generateQuote(){
    const quote = document.getElementById("quote");
    const idx = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[idx];
}

setInterval(generateQuote, 3000);

