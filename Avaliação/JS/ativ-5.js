// Função Nomeada
function greet(name) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += "<p>" + greet.name + ": Olá, " + name + "!</p>";
}
greet("paulo"); // Chamando a função com um argumento

// Função com argumento e retorno
function square(number) {
    return number * number;
}
const resultSquare = square(5);
const outputDiv = document.getElementById('output');
outputDiv.innerHTML += "<p>" + square.name + ": O quadrado de 5 é: " + resultSquare + "</p>";

// Função com Construtor
const multiply = new Function('x', 'y', 'return x * y');
const product = multiply(6, 7);
outputDiv.innerHTML += "<p>" + multiply.name + ": O produto de 6 e 7 é: " + product + "</p>";

// Função Literal (variável)
const greetLiteral = function (name) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += "<p>Função Literal: Olá, " + name + "!</p>";
};
greetLiteral("cleyton"); // Chamando a função literal com um argumento

// Função de Flecha (Arrow functions)
const greetArrow = (name) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += "<p>Função de Flecha: Olá, " + name + "!</p>";
};
greetArrow("josé"); // Chamando a função de flecha com um argumento