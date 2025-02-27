const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'meubanco'
});

db.connect(err => {
    if (err) throw err;
    console.log('Banco de dados conectado!');
});

// Cadastro de usuário
app.post('/register', (req, res) => {
    const { nome, email, senha } = req.body;
    db.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
        [nome, email, senha],
        (err) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({ message: 'Usuário cadastrado!' });
        }
    );
});

// Login de usuário
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    db.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(401).json({ message: 'Email ou senha incorretos!' });
        res.json({ message: 'Login bem-sucedido!', redirect: 'dashboard.html' });
    });
});

// Listar usuários
app.get('/usuarios', (req, res) => {
    db.query('SELECT id, nome, email FROM usuarios', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
