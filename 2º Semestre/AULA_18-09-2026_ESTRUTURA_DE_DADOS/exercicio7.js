let jogadores = ["Jogador 1", "Jogador 2", "Jogador 3", "Jogador 4", "Jogador 5"];

console.log("Jogadores:", jogadores);

for (let i = 0; i < 3; i++) {

    let jogador = jogadores.shift();

    jogadores.push(jogador);

    console.log(jogadores);
}