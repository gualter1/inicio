let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio');

function botaoConsole() {
    console.log ('O botao foi clicado');
}

function botaoAlert() {
    alert ('eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt ('Digite o nome de uma cidade!!');
    alert (`Estive em ${cidade} e lembrei de vc`)
}

function botaoSoma() {
    let soma = prompt (' Digite um numeros');
    let soma2 = prompt (' Digite outro numeros');
    alert (soma + soma2)
}