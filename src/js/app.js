function getRandomColor() {
    const colors = ["#00bcd4", "#e91e63", "#ffeb3b", "#4caf50", "#ff9800", "#9c27b0"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function sortear() {
    const minInput = 2;
    const maxAllowed = 999;
    const maxInput = document.getElementById('maxValue');
    let max = parseInt(maxInput.value, 10);

    // Garante que o máximo está entre 2 e 999
    if (isNaN(max) || max < minInput) max = minInput;
    if (max > maxAllowed) max = maxAllowed;
    maxInput.value = max; // Atualiza o input se necessário

    // Sorteia entre 1 e o máximo escolhido
    const numero = Math.floor(Math.random() * max) + 1;
    const result = document.getElementById('result');
    result.textContent = numero;
    result.style.color = getRandomColor();
    result.style.textShadow = `0 0 20px ${getRandomColor()}`;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sortearBtn').addEventListener('click', sortear);
});