// Nome
let nome = document.querySelector('#nome');
let erroNome = document.querySelector('#erroNome');

function validaNome() {
    if(nome.value.length < 3) {
        erroNome.innerHTML = 'Nome inválido!';
        nomeOk = false;
    }
    else {
        erroNome.innerHTML = '';
        nomeOk = true;
    }
}

// Email
let email = document.querySelector('#email');
let erroEmail = document.querySelector('#erroEmail');

function validaEmail() {
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        erroEmail.innerHTML = 'Email inválido!'
        emailOk = false;
    }
    else {
        erroEmail.innerHTML = '';
        emailOk = true;
    }
}

// Assunto
let assunto = document.querySelector('#assunto');
let erroAssunto = document.querySelector('#erroAssunto');

function validaAssunto() {
    if(assunto.value.length > 100) {
        erroAssunto.innerHTML = 'Limite de caracteres excedido (Limite de caracteres é 100)';
        assuntoOk = false;
    }
    else {
        erroAssunto.innerHTML = '';
        assuntoOk = true;
    }
}

//Variáveis auxiliares de validação
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

function enviar() {
    if( nomeOk && emailOk && assuntoOk) {
        alert('Email enviado com sucesso!')
    }
    else {
        alert('Preencha as informações corretamente!')
    }
}

// funções do mapa
let mapa = document.querySelector('#mapa')

function mapaZoom() {
    mapa.style.width = '600px';
    mapa.style.height = '400px';
}

function mapaNormal() {
    mapa.style.width = '400px';
    mapa.style.height = '250px';
}