let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagensIniciais()
limparCampo()

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function exibirMensagensIniciais() {   
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');
};

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', `Acertou! o número secreto é ${chute}`);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    if (chute > numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto e menor que ${chute}`);
    }
    else {
        exibirTextoNaTela('p', `O número secreto e maior que ${chute}`);
    }
    tentativas++;
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length
    if (quantidadeDeElementosDaLista = numeroLimite){
        listaDeNumerosSorteados = [];
    };
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    };
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagensIniciais();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
