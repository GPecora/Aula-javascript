function Adição() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultadoSoma").innerHTML = "Resultado: " + resultado;
}

function Subtração() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultadoSubtracao").innerHTML = "Resultado: " + resultado;
}

function Multiplicação() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultadoMultiplicacao").innerHTML = "Resultado: " + resultado;
}

function Divisão() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 !== 0) {
        var resultado = num1 / num2;
        document.getElementById("resultadoDivisao").innerHTML = "Resultado: " + resultado;
    } else {
        document.getElementById("resultadoDivisao").innerHTML = "Não é possível dividir por zero.";
    }
}