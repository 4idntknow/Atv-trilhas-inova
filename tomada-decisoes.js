const prompt = require("prompt-sync")();

let nome = prompt("nome do jogador: ");
let pontuacao = Number(prompt("Pontuação: "));
let pontuacaoMin = 1000;

console.log("Analisando perfil...");

if(pontuacao >= pontuacaoMin) {
    console.log("Aprovado!!! " + nome + " tem nível para a equipe principal.");
} else {
    let pontosFaltantes = pontuacaoMin - pontuacao;
    console.log("REPORVADO! Faltam " + pontosFaltantes + " pontos para entrar no time.")
}