// script.js

document.addEventListener('DOMContentLoaded', function() {
    const opcionSelect = document.getElementById('opcion');
    const conditionalQuestion = document.getElementById('conditional-question');

    opcionSelect.addEventListener('change', function() {
        if (this.value === 'si') {
            conditionalQuestion.style.display = 'block';
        } else {
            conditionalQuestion.style.display = 'none';
        }
    });
});