//Prática 1
const nome1 = prompt('Digite nome da pessoa 1');
const peso1 = prompt('Digite peso da pessoa 1');
const altura1 = prompt('Digite altura da pessoa 1');

const nome2 = prompt('Digite nome da pessoa 2');
const peso2 = prompt('Digite peso da pessoa 2');
const altura2 = prompt('Digite altura da pessoa 2');

const imc1 = peso1/(altura1*altura1);
const imc2 = peso2/(altura2*altura2);

if (imc1 > imc2) {
    console.log(`O IMC de ${nome1} (${imc1}) é maior que o de ${nome2} (${imc2})`);
}
else if (imc2 > imc1) {
    console.log(`O IMC de ${nome2} (${imc2}) é maior que o de ${nome1} (${imc1})`);
}
else{
    console.log('IMC´s iguais')
}


//Prática 2
const nome = prompt('Digite seu nome');
const peso = prompt('Digite seu peso');
const altura = prompt('Digite sua altura');

const imc = peso/(altura*altura);

if (imc < 17) {
    console.log('Muito abaixo do peso');
}
else if (imc >= 17 && imc <= 18.5) {
    console.log('Abaixo do peso');
}
else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
}
else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso')
}
else if (imc >= 30 && imc < 35) {
    console.log('Obesidade I');
}
else if (imc >= 35 && imc < 40) {
    console.log('Obesidade II');
}
else{
    console.log('Obesidade III');
}


//Prática 3

const login = prompt('Digite o login');
const senha = prompt('Digite a senha');

if (login === 'aluno' && parseInt(senha) === 123 || login === 'professor' && parseInt(senha) === 456) {
    alert('Login efetuado com sucesso rapeize');
}
else{
    alert('Login não efetuado bixo');
}


 //Prática 4

const tam = prompt('Digite o tamanho do Array');
const palavras = [];

for (let i = 0; i <= tam; i++) {
    const element = prompt('Escreva uma palavra');
    palavras.push(element);
}

console.log(palavras);
console.log(palavras.reverse());


//Prática 5

const nome = prompt('Digite seu nome');
const idade = prompt('Digite sua idade');

calculaTempo(idade);

function calculaTempo(idade) {
    if (idade < 65) {
        return console.log('Sem aposentadoria pra vc!');
    }
    else{
        return console.log('Aposentado');
    }
}


//Prática 6

const restaurantes = [];
const valores = [];
const gorjetas = [];

for (let i = 0; i < 3; i++) {
    const res = prompt('Nome do restaurante');
    restaurantes.push(res);
    const val = prompt(`Valor total do restaurante ${res}`);
    valores.push(val);
}

function calculaGorjeta(val) {
    if (val < 50) {
        return val*0.20;
    }
    else if (val >= 50 && val <= 200) {
        return val*0.15;
    }
    else{
        return val*0.10;
    }
}

for (const val of valores) {
    const gorj = calculaGorjeta(val);
    gorjetas.push(gorj);
}

coletaDados(restaurantes,valores,gorjetas);

function coletaDados(rests,vals,gorjs) {
    for (let i = 0; i < 3; i++) {
        detalhamento(restaurantes[i],valores[i],gorjetas[i]);
    }
}

function detalhamento(restaurante,valor,gorjeta) {
    return console.log(`Restaurante:${restaurante} - [Valor:${valor} | Gorjeta:${gorjeta} | Valor total:${parseInt(valor)+parseInt(gorjeta)}]`);
}