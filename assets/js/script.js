const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const imc = (weight / (height * height) * 10000).toFixed(2);

    const imc_result = document.getElementById('imc-result'); 
    let information = '';

    imc_result.classList.add('danger')

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5){
        information = 'Você está abaixo do peso.'
    } 
    else if (imc >= 18.5 && imc <= 24.9) {
        information = 'Você está no peso ideal.'
        imc_result.classList.remove('danger')
        imc_result.classList.add('normal')
    }
    else if (imc >= 25 && imc <= 29.9) {
        information = 'Você está sobrepeso.'
    }
    else if (imc >= 30 && imc <= 34.9) {
        information = 'Você está com obesidade grau I.'
    }
    else if (imc >= 35 && imc <= 40) {
        information = 'Você está com obesidade grau II.'
    }
    else {
        information = 'Você está com obesidade grau III.'
    }

    imc_result.textContent = imc.replace('.', ',');
    document.getElementById('information').textContent = information;
});