import React, { useState } from 'react';
import pratos from './data/pratos';
import ListaPratos from './components/ListaPratos';
import './styles.css';

function CardapioApp() {
  const [mensagem, setMensagem] = useState('');

  const handleAdicionar = (prato) => {
    const itemPedido = {
      ...prato,
      uid: `${prato.id}-${Date.now()}`
    };

    // Estado global simples para manter o pedido mesmo que o micro seja recarregado.
    const pedidoAtual = window.__PEDIDO_ITEMS__ || [];
    const pedidoAtualizado = [...pedidoAtual, itemPedido];
    window.__PEDIDO_ITEMS__ = pedidoAtualizado;

    // O evento notifica qualquer micro interessado que o pedido foi atualizado.
    window.dispatchEvent(
      new CustomEvent('pedido:add-item', {
        detail: {
          item: itemPedido,
          items: pedidoAtualizado
        }
      })
    );

    setMensagem(`${prato.nome} adicionado ao pedido.`);
  };

  return (
    <section>
      <p className="descricao-micro">
        Escolha um prato e envie para o micro de pedido.
      </p>
      <ListaPratos pratos={pratos} onAdicionar={handleAdicionar} />
      {mensagem ? <p className="feedback">{mensagem}</p> : null}
    </section>
  );
}

export default CardapioApp;
