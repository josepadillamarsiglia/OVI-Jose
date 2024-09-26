function checkAnswers() {
    const correctAnswer = document.querySelector('input[name="q1"]:checked').value;
    const result = document.getElementById('result');
    
    if (correctAnswer === 'correcta') {
        result.textContent = "¡Correcto!";
        result.style.color = "green";
    } else {
        result.textContent = "Incorrecto. Inténtalo de nuevo.";
        result.style.color = "red";
    }
}
