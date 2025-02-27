# Projeto: API Node.js com Express e MySQL

Este projeto é uma API simples desenvolvida com Node.js, Express e MySQL, permitindo o cadastro, login e listagem de usuários. 

## 🚀 Tecnologias Utilizadas
- Node.js
- Express
- MySQL
- Cors
- HTML, CSS e Bootstrap

## 📂 Estrutura do Projeto
```
meu-projeto/
│-- server.js
│-- README.md
│-- index.html
│-- login.html
│-- dashboard.html
│-- package.json
```

## ⚙️ Configuração do Banco de Dados
1. Acesse seu MySQL e crie o banco de dados:
```sql
CREATE DATABASE meubanco;
USE meubanco;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);
```

## ▶️ Como Executar o Projeto
### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instalar as dependências
```sh
npm install
```

### 3️⃣ Iniciar o servidor
```sh
node server.js
```
> O servidor será executado em `http://localhost:3000`

## 🛠️ Testando a API
### 🔹 Cadastro de usuário
- Método: `POST`
- Rota: `/register`
- Body (JSON):
```json
{
    "nome": "Usuário Teste",
    "email": "teste@email.com",
    "senha": "123456"
}
```

### 🔹 Login de usuário
- Método: `POST`
- Rota: `/login`
- Body (JSON):
```json
{
    "email": "teste@email.com",
    "senha": "123456"
}
```
- Resposta esperada:
```json
{
    "message": "Login bem-sucedido!",
    "redirect": "dashboard.html"
}
```

### 🔹 Listagem de usuários
- Método: `GET`
- Rota: `/usuarios`
- Retorna uma lista com os usuários cadastrados.

## 🖥️ Interface Web
- Acesse `index.html` para cadastro
- Acesse `login.html` para autenticação
- Acesse `dashboard.html` para visualizar os usuários

## 📌 Melhorias Futuras
- Implementar autenticação JWT
- Melhorar o layout das páginas com mais estilos personalizados
- Criar um painel administrativo

---
📌 **Autor:** Hudson Neves  
📌 **Licença:** MIT

