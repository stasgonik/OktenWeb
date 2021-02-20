const express = require('express');
const expressHBS = require('express-handlebars');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "static")));

app.set("view engine", ".hbs");
app.engine(".hbs", expressHBS({
    defaultLayout: false
}));
app.set("views", path.join(__dirname, "static"));


app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.txt'), (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const arrayUsers = JSON.parse(data.toString());
        let search = arrayUsers.findIndex(user => {
            return (user.email === req.body.email && user.password === req.body.password);
        });

        if (search !== -1) {
            res.redirect(`/users/${search}`);
        } else {
            res.redirect("/register");
        }
    });
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.txt'), (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        const arrayUsers = JSON.parse(data.toString());
        let search = arrayUsers.find(user => {
            return user.email === req.body.email;
        });

        if (!search) {
            arrayUsers.push(req.body);
            fs.writeFile(path.join(__dirname, 'users.txt'), JSON.stringify(arrayUsers), err1 => {
                if (err1) {
                    console.log(err1);
                    return;
                }
            });
            res.redirect("/users");
        } else {
            res.redirect("/regError");
        }
    });
});

app.get("/regError", (req, res) => {
    res.render('regError');
});

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

app.listen(5042, () => {
    console.log("Starting NODE SERVER, proceed to localhost:5042");
});
