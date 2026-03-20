import React from 'react';

function PratoCard({ prato, onAdicionar }) {
  return (
    <li className="prato-card">
      <div>
        <h3>{prato.nome}</h3>
        <p>{prato.descricao}</p>
      </div>
      <button onClick={() => onAdicionar(prato)} type="button">
        Adicionar ao pedido
      </button>
    </li>
  );
}

export default PratoCard;
