const barbearia = {
  cortes: [
    { id: 1, tipo: "Militar", valor: 20.0 },
    { id: 2, tipo: "Samurai", valor: 35.0 },
    { id: 3, tipo: "Pompadour", valor: 20 },
    { id: 4, tipo: "Moicano", valor: 0 },
    { id: 5, tipo: "Razor part", valor: 0 },
  ],

  barbas: [
    { id: 1, tipo: "Capitão Jack", valor: 20.0 },
    { id: 2, tipo: "Van Dyke", valor: 20.0 },
    { id: 3, tipo: "Barba Média", valor: 20.0 },
    { id: 4, tipo: "Barba Baixa", valor: 20.0 },
    { id: 5, tipo: "Barba Zero", valor: 15.0 },
  ],
  estaAberto: true,
};

function buscaCortePorId(id) {
  let cortes = barbearia.cortes;
  for (position = 0; position < cortes.length; position++) {
    if (cortes[position].id == id) {
      return cortes[position];
    }
  }
  return "Corte não encontrado";
}

function buscaBarbaPorId(id) {
  let barbas = barbearia.barbas;
  for (position = 0; position < barbas.length; position++) {
    if (barbas[position].id == id) {
      return barbas[position];
    }
  }
  return "Barba não encontrado";
}

function verificaStatusBarbearia() {
  if (barbearia.estaAberto == true) {
    return "Estamos abertos";
  } else {
    return "Estamos fechados";
  }
}

function retornaTodosCortes() {
  return barbearia.cortes;
}

function retornaTodasBarbas() {
  return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
  let corte = buscaCortePorId(corteId);
  if (corte == "Corte não encontrado") {
    return corte;
  }
  let barba = buscaBarbaPorId(barbaId);
  if (barba == "Barba não encontrado") {
    return barba;
  }
  let pedido = {
    nome: nomeCliente,
    pedidoCorte: corte.tipo,
    pedidoCortePreco: corte.valor,
    pedidoBarba: barba.tipo,
    pedidoBarbaPreco: barba.valor,
  };
  return pedido;
}

function atualizaServico(lista, id, valor, tipo) {
  if (valor == " " || tipo == " ") {
    return "Entrada de valores inválida";
  }
  if (lista == barbearia.cortes) {
    let corte = buscaCortePorId(id);
    if (corte == "Corte não encontrado") {
      return "Entrada de valores inválida";
    }
    corte.valor = valor;
    corte.tipo = tipo;
    return "Item atualizado com sucesso";
  } else {
    let barba = buscaBarbaPorId(id);
    if (barba == "Barba não encontrado") {
      return "Entrada de valores inválida";
    }
    barba.valor = valor;
    barba.tipo = tipo;
    return "Item atualizado com sucesso";
  }
}

function calculaTotal(pedido) {
  return pedido.pedidoBarbaPreco + pedido.pedidoCortePreco;
}
