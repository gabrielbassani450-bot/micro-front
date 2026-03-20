# Projeto de Micro Frontends com React + Module Federation

Este repositório implementa um sistema de pedidos dividido em 3 aplicações independentes para demonstrar a arquitetura de Micro Frontends com Webpack Module Federation.

- `container`: aplicação principal responsável por importar e renderizar os micros.
- `micro-cardapio`: lista pratos disponíveis e envia eventos de adição ao pedido.
- `micro-pedido`: recebe os eventos e exibe os itens adicionados.

## 1. Objetivo do projeto

Aplicar os conceitos de Micro Frontends em uma aplicação React separada em micros independentes, com integração por uma aplicação container e comunicação entre partes desacopladas.

## 2. Requisitos atendidos

- Aplicação dividida em `container`, `micro-cardapio` e `micro-pedido`.
- Micro Cardápio exibindo nome, descrição e botão de adicionar ao pedido.
- Micro Pedido exibindo os itens selecionados.
- Comunicação entre micros implementada com eventos globais do navegador.
- Integração entre aplicações feita com Webpack Module Federation.
- Projeto desenvolvido em React e JavaScript.
- Organização por responsabilidade com componentes reaproveitáveis.
- README com instruções de execução e explicação da comunicação.

## 3. Tecnologias usadas

- React
- Webpack 5
- Webpack Module Federation
- JavaScript (sem TypeScript)

## 4. Estrutura do projeto

```bash
microfrontend/
  container/
    public/
    src/
    package.json
    webpack.config.js
  micro-cardapio/
    public/
    src/
    package.json
    webpack.config.js
  micro-pedido/
    public/
    src/
    package.json
    webpack.config.js
  README.md
```

## 5. Como rodar cada micro

Abra 3 terminais diferentes na pasta raiz `microfrontend`.

### Terminal 1 - Micro Cardapio

```bash
cd micro-cardapio
npm install
npm start
```

Rodando em: `http://localhost:3001`

### Terminal 2 - Micro Pedido

```bash
cd micro-pedido
npm install
npm start
```

Rodando em: `http://localhost:3002`

### Terminal 3 - Container

```bash
cd container
npm install
npm start
```

Rodando em: `http://localhost:3000`

Acesse `http://localhost:3000` para ver os micros integrados no container.

## 6. Como testar o fluxo completo

1. Inicie primeiro o `micro-cardapio` na porta `3001`.
2. Inicie depois o `micro-pedido` na porta `3002`.
3. Inicie por último o `container` na porta `3000`.
4. Abra `http://localhost:3000` no navegador.
5. Clique em `Adicionar ao pedido` em qualquer prato.
6. Verifique que o micro de pedido atualiza a lista e o total de itens em tempo real.

## 7. Como funciona a comunicação entre os micros

A comunicação acontece por eventos globais do navegador:

- O `micro-cardapio` dispara:
  - `window.dispatchEvent(new CustomEvent('pedido:add-item', { detail }))`
- O `micro-pedido` escuta:
  - `window.addEventListener('pedido:add-item', handler)`

Fluxo de dados:

1. Usuário clica em "Adicionar ao pedido" no cardápio.
2. O cardápio monta o novo item e atualiza `window.__PEDIDO_ITEMS__`.
3. O cardápio emite o evento `pedido:add-item` com os dados atualizados.
4. O micro de pedido recebe o evento e atualiza a lista exibida.

## 8. Como funciona o Module Federation

### Remotos expostos

- `micro-cardapio` expõe `./CardapioApp` via `remoteEntry.js`
- `micro-pedido` expõe `./PedidoApp` via `remoteEntry.js`

### Container consumindo remotos

No `container`, os remotos são configurados assim:

- `cardapio@http://localhost:3001/remoteEntry.js`
- `pedido@http://localhost:3002/remoteEntry.js`

E são carregados com `React.lazy` + `Suspense`.

## 9. Componentes reaproveitáveis por micro

### Micro Cardapio

- `PratoCard`: card individual de prato com botao de adicionar.
- `ListaPratos`: renderiza a colecao de pratos.

### Micro Pedido

- `ListaPedido`: renderiza os itens adicionados ou mensagem de vazio.

## 10. Scripts de build

Em cada app:

```bash
npm run build
```

As três aplicações foram validadas com build de produção sem erros.

## 11. Observações importantes

- Cada app pode ser executada e testada de forma independente.
- O container depende dos remotos ativos para importar os micros.
- React e ReactDOM são compartilhados como singleton para evitar duplicidade.
- O projeto foi estruturado em formato de monorepo, conforme permitido no enunciado.

## 12. Link do repositório

Repositório da entrega:

`https://github.com/gabrielbassani450-bot/micro-front.git`

## 13. Entrega no GitHub

1. Suba este monorepo para um repositório no GitHub.
2. Inclua este `README.md`.
3. Compartilhe o link do repositorio na plataforma da disciplina.
