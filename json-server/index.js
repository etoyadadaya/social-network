const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();

const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// MiddleWare для небольшой задержки
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Проверка, авторизован ли пользователь
// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

server.use(jsonServer.defaults());
server.use(router);

// Login endpoint
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    const userFromDb = users.find(
        (user) => user.username === username && user.password === password,
    );

    if (userFromDb) {
        return res.json(userFromDb);
    }

    return res.status(403).json({ message: 'AUTH ERROR' });
});

// Запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
