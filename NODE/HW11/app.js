const dotenv = require('dotenv');
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');

dotenv.config({ path: path.join(process.cwd(), '../.env') });
const { sequelize } = require('./database');

const { config: { PORT } } = require('./config');
const apiRouter = require('./router/api.router');

const app = express();

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
app.use('*', (err, req, res, next) => {
    res.status(err.status || 500)
        .json({
            customCode: err.customCode || 0,
            message: err.message || 'Unknown Server Error Occurred'
        });
});

(async () => {
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
        console.log(`Starting NODE SERVER, proceed to localhost:${PORT}`);
    });
})();
