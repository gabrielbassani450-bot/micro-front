import React from 'react';
import PratoCard from './PratoCard';

function ListaPratos({ pratos, onAdicionar }) {
  return (
    <ul className="lista-pratos">
      {pratos.map((prato) => (
        <PratoCard key={prato.id} prato={prato} onAdicionar={onAdicionar} />
      ))}
    </ul>
  );
}

export default ListaPratos;
