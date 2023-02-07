const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({
    answer: {
        type: String,
        required: true,
    },
    correct: {
        type: Boolean,
        required: true,
    },
});

const questionSchema = new Schema({
    technology: {
        type: String,
        required: true,
    },
    partition: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    answers: {
        type: [AnswerSchema],
        required: true,
    },
    comment: String,
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;

// "technology": "javascript",
// "partition": "basis",
// "question": "Что определяет переменная?",
// "answers": ["Символическое имя для значения", "Тип данных", "Тип значения"],
// "correct": ["Символическое имя для значения"]
