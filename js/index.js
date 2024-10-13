const letraMaiuscula = document.getElementById("letraMaiuscula");
const letraMinuscula = document.getElementById("letraMinuscula");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");
const caracterMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caracterMinusculo = "abcdefghijklmnopqrstuvwxyz";
const caracterNumero = "0123456789";
const caracterSimbolo = "'`~!@#$%^&*()-_=+[{]}|;:'>:<.,";

const gerarSenha = {
  saidaSenha: document.getElementById("input"),
  caracteresDisponiveis: "",
  quantidadeCaracter: parseInt(document.getElementById("number").value),
  embaralhar: (str) => {
    const arrayDeCaracteres = str.split("");

    for (let i = arrayDeCaracteres.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arrayDeCaracteres[i], arrayDeCaracteres[j]] = [
        arrayDeCaracteres[j],
        arrayDeCaracteres[i],
      ];
    }

    return arrayDeCaracteres.join("");
  },

  gerar: () => {
    if (letraMaiuscula.checked) {
      gerarSenha.caracteresDisponiveis = caracterMaiusculo;
    }
    if (letraMinuscula.checked) {
      gerarSenha.caracteresDisponiveis = caracterMinusculo;
    }
    if (numeros.checked) {
      gerarSenha.caracteresDisponiveis = caracterNumero;
    }
    if (simbolos.checked) {
      gerarSenha.caracteresDisponiveis = caracterSimbolo;
    }
    if (letraMaiuscula.checked && letraMinuscula.checked) {
      gerarSenha.caracteresDisponiveis = caracterMaiusculo + caracterMinusculo;
    }
    if (letraMaiuscula.checked && numeros.checked) {
      gerarSenha.caracteresDisponiveis = caracterMaiusculo + caracterNumero;
    }
    if (letraMaiuscula.checked && simbolos.checked) {
      gerarSenha.caracteresDisponiveis = caracterMaiusculo + caracterSimbolo;
    }
    if (letraMinuscula.checked && numeros.checked) {
      gerarSenha.caracteresDisponiveis = caracterMinusculo + caracterNumero;
    }
    if (letraMinuscula.checked && simbolos.checked) {
      gerarSenha.caracteresDisponiveis = caracterMinusculo + caracterSimbolo;
    }
    if (numeros.checked && simbolos.checked) {
      gerarSenha.caracteresDisponiveis = caracterNumero + caracterSimbolo;
    }

    if (letraMaiuscula.checked && letraMinuscula.checked && numeros.checked) {
      gerarSenha.caracteresDisponiveis =
        caracterMaiusculo + caracterMinusculo + caracterNumero;
    }
    if (letraMaiuscula.checked && letraMinuscula.checked && simbolos.checked) {
      gerarSenha.caracteresDisponiveis =
        caracterMaiusculo + caracterMinusculo + caracterSimbolo;
    }
    if (letraMaiuscula.checked && numeros.checked && simbolos.checked) {
      gerarSenha.caracteresDisponiveis =
        caracterMaiusculo + caracterNumero + caracterSimbolo;
    }
    if (letraMinuscula.checked && numeros.checked && simbolos.checked) {
      gerarSenha.caracteresDisponiveis =
        caracterMinusculo + caracterNumero + caracterSimbolo;
    }
    if (letraMaiuscula.checked && letraMinuscula.checked && numeros.checked && simbolos.checked) {
      gerarSenha.caracteresDisponiveis = caracterMaiusculo + caracterMinusculo + caracterNumero + caracterSimbolo;
    }

    gerarSenha.caracteresDisponiveis = gerarSenha.embaralhar(gerarSenha.caracteresDisponiveis);

    let senha = "";
    for (let i = 0; i < gerarSenha.quantidadeCaracter; i++) {
      let indice = Math.floor(
        Math.random() * gerarSenha.caracteresDisponiveis.length
      );
      senha += gerarSenha.caracteresDisponiveis.charAt(indice);
    }
    gerarSenha.saidaSenha.value = senha;
  },
};

function run() {
  gerarSenha.gerar();
}

function copiarSenha() {
  navigator.clipboard.writeText(gerarSenha.saidaSenha.value);
  const mensagemCopiada = document.querySelector(".menssageCopiada");
  mensagemCopiada.style.animationName = "menssagem";
  mensagemCopiada.style.display = "block";
  setTimeout(function () {
    mensagemCopiada.style.display = "none";
  }, 2000);
}

function alterar(n) {
  if (gerarSenha.quantidadeCaracter == 1 && n == "-1") {
  } else if (gerarSenha.quantidadeCaracter == 100 && n == "+1") {
  } else {
    gerarSenha.quantidadeCaracter += parseInt(n);
    document.getElementById("number").value = gerarSenha.quantidadeCaracter;
  }
}
