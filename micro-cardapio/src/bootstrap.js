import React from 'react';
import { createRoot } from 'react-dom/client';
import CardapioApp from './CardapioApp';

const mount = (element) => {
  const root = createRoot(element);
  root.render(<CardapioApp />);
  return root;
};

if (process.env.NODE_ENV === 'development') {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    mount(rootElement);
  }
}

export default CardapioApp;
