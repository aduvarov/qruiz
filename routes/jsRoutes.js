const createPath = require('../helpers/createPath.js');
const express = require('express');
const router = express.Router();

router.get('/javascript', (req, res) => {
    const title = 'Тестирование на знание языка JavaScript';
    res.render(createPath('js_index'), { title });
});

router.get('/javascript/:qruiz', (req, res) => {
    const title = 'JavaScript раздел';
    res.render(createPath('js_qruiz'), { title });
});

module.exports = router;
