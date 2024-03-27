function converterParaCaixaAlta() {
    const inputString = document.getElementById('inputString').value;
    const resultado = document.getElementById('resultado');
    resultado.textContent = inputString.toUpperCase();
}

function mostrarAlerta() {
    const resultado = document.getElementById('resultado').textContent;
    alert(resultado);
}