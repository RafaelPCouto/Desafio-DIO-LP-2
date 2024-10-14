// Função para calcular a pontuação de partidas rankeadas de um jogador

const calculateRankedBalance = (wins, losses) => wins - losses;

// Função para retornar o nível do jogador, baseado em sua pontuação de partidas rankeadas.

function getPlayerLevel(rankedPoints){
    if (rankedPoints < 10) {
        return "Ferro";
    } else if (rankedPoints <= 20) {
        return "Bronze";
    } else if (rankedPoints <= 50) {
        return "Prata";
    } else if (rankedPoints <= 80) {
        return "Ouro";
    } else if (rankedPoints <= 90) {
        return "Diamante";
    }  else if (rankedPoints <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

// Função para emitir a mensagem de classiicação do jogador

const generatePlayerLevelMessage = (playerPoints, playerLevel) => `O Herói tem o saldo de ${playerPoints} está no nível de ${playerLevel}.`;


// Exemplo de uso

let firstPlayerWins = 92;
let firstPlayerLosses = 3;
let firstPlayerRankedBalance = calculateRankedBalance(firstPlayerWins, firstPlayerLosses);
let firstPlayerRankedLevel = getPlayerLevel(firstPlayerRankedBalance);
let firstPlayerMessage = generatePlayerLevelMessage(firstPlayerRankedBalance, firstPlayerRankedLevel)

console.log(firstPlayerMessage);

// Evitando a abordagem utilizando objetos e classes, para restringir a aplicação às ferramentas que já foram estudadas no bootcamp até o momento.