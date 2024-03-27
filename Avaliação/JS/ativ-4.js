// Manipulando eventos usando JavaScript

// onmouseover
document.getElementById("elemento1").addEventListener("mouseover", function () {
    this.style.backgroundColor = 'lightgreen';
});

document.getElementById("elemento1").addEventListener("mouseout", function () {
    this.style.backgroundColor = 'lightblue';
});

// onfocus
document.getElementById("input1").addEventListener("focus", function () {
    console.log('Input ganhou o foco');
});

// onchange
document.getElementById("input2").addEventListener("change", function () {
    console.log('Valor do input alterado');
});

// onclick
document.getElementById("botao1").addEventListener("click", function () {
    alert('Botão clicado!');
});

// onsubmit
document.getElementById("form1").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário
    alert('Formulário submetido!');
});

// onchange para select
document.getElementById("select1").addEventListener("change", function () {
    console.log('Seleção alterada');
});