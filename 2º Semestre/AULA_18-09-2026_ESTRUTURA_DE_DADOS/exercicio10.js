let chamados = [];

chamados.push(101);
chamados.push(102);
chamados.push(103);

console.log("Fila de chamados:", chamados);

while (chamados.length > 0) {

    let chamado = chamados.shift();

    console.log("Chamado", chamado, "- Chamado finalizado");
}