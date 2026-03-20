import React, { useEffect, useState } from 'react';
import ListaPedido from './components/ListaPedido';
import './styles.css';

function PedidoApp() {
  const [itens, setItens] = useState(() => window.__PEDIDO_ITEMS__ || []);

  useEffect(() => {
    const handleNovoItem = (event) => {
      if (event.detail?.items) {
        setItens(event.detail.items);
        return;
      }

      if (event.detail?.item) {
        setItens((estadoAnterior) => [...estadoAnterior, event.detail.item]);
      }
    };

    window.addEventListener('pedido:add-item', handleNovoItem);

    return () => {
      window.removeEventListener('pedido:add-item', handleNovoItem);
    };
  }, []);

  return (
    <section>
      <p className="descricao-micro">Itens selecionados no pedido atual.</p>
      <ListaPedido itens={itens} />
      <p className="total">Total de itens: {itens.length}</p>
    </section>
  );
}

export default PedidoApp;
