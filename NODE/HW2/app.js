const express = require('express');
const expressHBS = require('express-handlebars');
const fs = require('fs');
const path = require('path');
const app = express();

//===================== Конфигурация придложения ==========================
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));

app.set('view engine', '.hbs');
app.engine('.hbs', expressHBS({
    defaultLayout: false
}));
app.set('views', path.join(__dirname, 'static'));
//=====================Конфигурация придложения==========================

//===================== Авторизация ==========================

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.txt'), (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        let {email, password} = req.body
        const arrayUsers = JSON.parse(data.toString());
        let search = arrayUsers.findIndex(user => {
            return (user.email === email && user.password === password);
        });

        if(search === -1) {
            res.redirect('/register');
            return ;
        }
        res.redirect(`/users/${search}`);

    });
});
//===================== Авторизация ==========================

//===================== Регистрация ==========================

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.txt'), (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        let {email} = req.body
        const arrayUsers = JSON.parse(data.toString());
        let search = arrayUsers.find(user => {
            return user.email === email;
        });

        if (search) {
            res.redirect('/regError');
            return ;
        }

        arrayUsers.push(req.body);
        fs.writeFile(path.join(__dirname, 'users.txt'), JSON.stringify(arrayUsers), err1 => {
            if (err1) {
                console.log(err1);
                return;
            }
        });
        res.redirect('/users');

    });
});
//===================== Регистрация ==========================

//===================== Ошибка при регистрации ==========================

app.get('/regError', (req, res) => {
    res.render('regError');
});

//===================== Ошибка при регистрации ==========================

//===================== Рендер пользователей ==========================

app.get('/users', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.txt'), (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const arrayUsers = JSON.parse(data.toString());
        res.render('users', {users: arrayUsers});
    });
});

app.get('/users/:userID', (req, res) => {
    const {userID} = req.params;
    fs.readFile(path.join(__dirname, 'users.txt'), (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const arrayUsers = JSON.parse(data.toString());
        res.render('users', {user: arrayUsers[userID]});
    });
});
//===================== Рендер пользователей ==========================

app.listen(5042, () => {
    console.log('Starting NODE SERVER, proceed to localhost:5042');
});
