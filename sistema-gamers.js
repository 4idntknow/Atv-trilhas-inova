const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

//funcoes abaixo: 

function mostrarMenu() {
    console.log("\n===============================");
    console.log("------ SISTEMA DE GAMERS -------");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Cálculo da Média da Equipe");
    console.log("5 - Buscar por Jogador");
    console.log("6 - Atualizar pontuação")
    console.log("7 - Sair")
    console.log("\n");
}

function atualizarPontuacao() {
    let AtlzQualJgdrPontos = prompt("Qual jogador deseja atualizar?: ");
    for (let i = 0; i < time.length; i++) {
        if (time[i].nome === AtlzQualJgdrPontos) {
            indexJogador = i;
            break;
        }
    }

if (indexJogador === -1) {
    console.log("Jogador não encontrado.");
    return;
}

    let pontuacaoQueFoiGanha = Number(prompt("Quantos pontos ele ganhou?: "))

    if (isNaN(pontuacaoQueFoiGanha)) {
        console.log("Pontuação inválida.");
        return;
    }

    time[indexJogador].pontuacao += pontuacaoQueFoiGanha;
    console.log("Parabénsm a nova pontuação é de " + time[indexJogador].nome + " é: " + time[indexJogador].pontuacao);
}

function buscarJogador(nomeDesejado) {
    let encontrou = false;

    for (let i = 0; i < time.length; i++) {
        let jogadorAtual = time[i];

        if (jogadorAtual.nome === nomeDesejado) {
            console.log("JOGADOR ENCONTRADO!");
            console.log(
                "Nome: " + jogadorAtual.nome +" | Pontos: " + jogadorAtual.pontuacao + " Função: " + jogadorAtual.funcao);
            encontrou = true;
            break;
        }
    }

    if (!encontrou) {
        console.log("Jogador não encontrado.");
    }
}

function mostraEquipe() {
    if(time.length === 0) {
        return;
    }

    for(let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

function cadastrarJogador() {
    let nomeJogador = prompt("Digite o nome do jogador: ");
    let funcaoJogador = prompt("Digite a função no time: ");
    let pontuacaoJogador = Number(prompt(" Digite a pontuação: "));
    
    if(isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida.")
        return;
    } else {
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        }
        time.push(recruta);
        console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso!");
        console.log("-----------------------"); 
    }
}

function deletarJogador() {
 if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }
        let nomeDeletado = prompt("Digite o nome a ser deletado: ");
        let indexDeletado = -1;

        for (let i = 0; i<time.length; i++) {

            if (time[i].nome === nomeDeletado) {
                indexDeletado = i;
                break;
            }
        }
        
    let index = time.indexOf(nomeDeletado);

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado.");
        return;
    }

    time.splice(index, 1);
    console.log("Jogador deletado com sucesso.");

}

function calculoDaMedia() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    let totalPontos = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos / time.length;

    console.log("O time possuí uma pontuação média de: ", mediaPontos);
}

while(continuar === true)  {
    mostrarMenu();
    let opcao = prompt("Digite sua opção: ")

    if (opcao === "1") {
       cadastrarJogador();
    } else if (opcao === "2") {
       deletarJogador();
    } else if (opcao === "3") {
        mostraEquipe();
    } else if (opcao === "4") {
        calculoDaMedia();
    } else if (opcao === "5") {
        let nome = prompt("Digite o jogador que deseja consultar: ");
        buscarJogador(nome);
    } else if (opcao === "6") {
        atualizarPontuacao();
    } else if (opcao === "7") {
        continuar = false;
    } else {
        console.log("Opção inválida, digite outra opção... ");
    }
}