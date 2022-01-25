const calcular = document.getElementById('calcular');

function imc(){
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const res = document.getElementById('res');

    if(altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = ''

        if(valorIMC < 18,5){
            classificacao = 'Abaixo do peso';

        }else if (valorIMC < 25){
            classificacao = 'Peso normal';

        }else if (valorIMC < 30){
            classificacao = 'Sobrepeso';

        }else if (valorIMC < 35){
            classificacao = 'Obesidade grau I';

        }else if (valorIMC < 40){
            classificacao = 'Obesidade grau II';

        }else {
            classificacao = 'Obesidade grau III (Mórbida)';
        }

        res.textContent = `Olá! Seu IMC é de ${valorIMC} e você está na seguinte classificação: ${classificacao}`

    } else{
        res.textContent = "Preencha todos os campos!"
    }

}

calcular.addEventListener('click', imc);
