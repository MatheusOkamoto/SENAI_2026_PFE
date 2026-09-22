let pedidos = [];

pedidos.push("Pedido 1");
pedidos.push("Pedido 2");
pedidos.push("Pedido 3");
pedidos.push("Pedido 4");

while (pedidos.length > 0) {

    let pedido = pedidos.shift();

    console.log(pedido + " entregue!");
}