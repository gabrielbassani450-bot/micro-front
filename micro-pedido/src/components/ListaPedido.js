import React from 'react';

function ListaPedido({ itens }) {
  if (!itens.length) {
    return <p className="vazio">Nenhum item adicionado ainda.</p>;
  }

  return (
    <ul className="lista-pedido">
      {itens.map((item) => (
        <li key={item.uid} className="item-pedido">
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListaPedido;
