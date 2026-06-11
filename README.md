# Dio Bank — Aplicação Bancária com React + TypeScript

Aplicação web de um banco digital desenvolvida com **React**, **TypeScript** e **Context API**, com foco em boas práticas de desenvolvimento como **TDD (Test-Driven Development)**, **gerenciamento de estado global** e **rotas protegidas**.

---

## Funcionalidades

- Autenticação de usuário com validação de **e-mail e senha**
- Gerenciamento de estado global com **Context API** do React
- Persistência de sessão utilizando **localStorage** — o usuário permanece logado mesmo após recarregar a página
- **Rotas protegidas**: páginas privadas redirecionam para o login caso o usuário não esteja autenticado
- Página de perfil exibindo nome e e-mail do usuário autenticado
- Simulação de chamada assíncrona à API com dados da conta (saldo, nome, data)

---

## Destaques Técnicos

### Context API + Estado Global
O estado de autenticação e os dados do usuário são compartilhados globalmente via **Context API**, eliminando a necessidade de prop drilling. Qualquer componente da aplicação acessa os dados do usuário diretamente do contexto, sem precisar receber via props.

### TDD — Test-Driven Development
Os testes unitários foram escritos **antes** da implementação das funcionalidades, seguindo o fluxo do TDD:
1. Escrever o teste (que falha)
2. Implementar o código mínimo para passar
3. Refatorar com segurança

Todos os cenários de autenticação são cobertos: e-mail válido, e-mail inválido, senha correta e senha incorreta.

### Persistência com localStorage
Ao logar, os dados do usuário (nome e e-mail) e o estado de autenticação são salvos no `localStorage`. No próximo acesso, o contexto lê esses dados automaticamente — a tela de login não é exibida se a sessão já existir.

### Rotas Protegidas
As rotas privadas (`/conta` e `/infoconta`) verificam o estado de autenticação no contexto. Usuários não autenticados são redirecionados automaticamente para a tela de login.

---

## Tecnologias

- React
- TypeScript
- Context API
- React Router DOM
- Chakra UI
- Jest (testes unitários)

---

## Como rodar o projeto

```bash
# Instale as dependências
npm install

# Execute o projeto
npm start

# Rode os testes
npm test
```

---

## Testes

```
PASS  src/services/login.test.tsx
PASS  src/services/storage.test.tsx
PASS  src/services/soma.test.tsx

Test Suites: 3 passed, 3 total
Tests:       11 passed, 11 total
```

---

---

# Dio Bank — Banking App with React + TypeScript

A digital banking web application built with **React**, **TypeScript**, and **Context API**, focused on development best practices such as **TDD (Test-Driven Development)**, **global state management**, and **protected routes**.

---

## Features

- User authentication with **email and password** validation
- Global state management with React's **Context API**
- Session persistence using **localStorage** — the user stays logged in even after refreshing the page
- **Protected routes**: private pages redirect to login if the user is not authenticated
- Profile page displaying the authenticated user's name and email
- Simulated async API call with account data (balance, name, date)

---

## Technical Highlights

### Context API + Global State
Authentication state and user data are shared globally via **Context API**, eliminating prop drilling. Any component in the application can access user data directly from context, without receiving it through props.

### TDD — Test-Driven Development
Unit tests were written **before** the feature implementation, following the TDD flow:
1. Write the test (which fails)
2. Implement the minimum code to make it pass
3. Refactor safely

All authentication scenarios are covered: valid email, invalid email, correct password, and incorrect password.

### Persistence with localStorage
On login, the user's data (name and email) and authentication state are saved to `localStorage`. On the next visit, the context reads this data automatically — the login screen is not shown if a session already exists.

### Protected Routes
Private routes (`/conta` and `/infoconta`) check the authentication state from context. Unauthenticated users are automatically redirected to the login screen.

---

## Tech Stack

- React
- TypeScript
- Context API
- React Router DOM
- Chakra UI
- Jest (unit tests)

---

## Getting Started

```bash
# Install dependencies
npm install

# Run the project
npm start

# Run tests
npm test
```

---

## Tests

```
PASS  src/services/login.test.tsx
PASS  src/services/storage.test.tsx
PASS  src/services/soma.test.tsx

Test Suites: 3 passed, 3 total
Tests:       11 passed, 11 total
```
