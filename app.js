require('dotenv').config();
const morgan = require('morgan');
const chalk = require('chalk');
const mongoose = require('mongoose');
const createPath = require('./helpers/createPath.js');
const express = require('express');
const app = express();

const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;

app.set('view engine', 'ejs');

mongoose.set('strictQuery', true);
mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(res => console.log(successMsg('Connected to DB')))
    .catch(error => console.error(errorMsg(error)));

app.listen(process.env.PORT, error => {
    error
        ? console.log(errorMsg(error))
        : console.log(successMsg(`Server running on port ${process.env.PORT}`));
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({ extended: false }));
app.use('/styles', express.static('styles'));

app.get('/', (req, res) => {
    const title = 'Главная';
    res.render(createPath('index'), { title });
});
