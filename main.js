
const numbersContainer = document.querySelector('.numbers-container');
const generateBtn = document.getElementById('generate-btn');

const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
};

const displayNumbers = (numbers) => {
    numbersContainer.innerHTML = '';
    numbers.forEach(number => {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    });
};

generateBtn.addEventListener('click', () => {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
});

// Initial generation
const initialNumbers = generateLottoNumbers();
displayNumbers(initialNumbers);
