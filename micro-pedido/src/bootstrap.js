import React from 'react';
import { createRoot } from 'react-dom/client';
import PedidoApp from './PedidoApp';

const mount = (element) => {
  const root = createRoot(element);
  root.render(<PedidoApp />);
  return root;
};

if (process.env.NODE_ENV === 'development') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    mount(rootElement);
  }
}

export default PedidoApp;
