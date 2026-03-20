import React, { Suspense } from 'react';
import './styles.css';

// Os micros são carregados sob demanda pelo container via Module Federation.
const CardapioApp = React.lazy(() => import('cardapio/CardapioApp'));
const PedidoApp = React.lazy(() => import('pedido/PedidoApp'));

function App() {
  return (
    <main className="container-layout">
      <header className="hero">
        <h1>Sistema de Pedidos com Micro Frontends</h1>
        <p>
          Container carregando micros independentes com Webpack Module Federation.
        </p>
      </header>

      <section className="micros-grid">
        <article className="micro-box">
          <h2>Micro Cardapio</h2>
          <Suspense fallback={<p>Carregando cardapio...</p>}>
            <CardapioApp />
          </Suspense>
        </article>

        <article className="micro-box">
          <h2>Micro Pedido</h2>
          <Suspense fallback={<p>Carregando pedido...</p>}>
            <PedidoApp />
          </Suspense>
        </article>
      </section>
    </main>
  );
}

export default App;
