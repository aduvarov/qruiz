const createPath = require('../helpers/createPath.js');
const express = require('express');
const Question = require('../models/Question.js');
const router = express.Router();

router.get('/javascript', (req, res) => {
    const title = 'Тестирование на знание языка JavaScript';
    res.render(createPath('js_index'), { title });
});

router.get('/javascript/:partition', (req, res) => {
    console.log(req.params);
    Question.find({ $and: [{ technology: 'javascript' }, req.params] }).then(questions => {
        const title = 'JavaScript раздел';
        res.render(createPath('js_qruiz'), { title, partition: req.params.partition, questions });
    });
});

router.post('/javascript', (req, res) => {
    console.log(req.body);
    res.end();
});

router.post('/javascript/:partition', (req, res) => {
    const question = new Question(req.body);
    question.technology = 'javascript';
    question.partition = req.params.partition;
    console.log(req);
    question.save();
    res.end();
});

module.exports = router;
