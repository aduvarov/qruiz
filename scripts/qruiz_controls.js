'use strict';

const prevBtn = document.querySelector('.qruizControls__button-prev');
const nextBtn = document.querySelector('.qruizControls__button-next');
const questions = document.querySelectorAll('.qruiz__question');

nextBtn.addEventListener('click', evt => {
    const maxIndex = questions.length - 1;

    // Найти активный вопрос
    let activeIndex;
    questions.forEach((question, index) => {
        activeIndex = question.classList.contains('qruiz__question_active') ? index : activeIndex;
    });

    const nextActiveIndex = activeIndex >= maxIndex ? maxIndex : activeIndex + 1;

    // Сменить активный вопрос
    questions.forEach((question, index) => {
        index === nextActiveIndex
            ? question.classList.add('qruiz__question_active')
            : question.classList.remove('qruiz__question_active');
    });

    // Заблокировать кнопку "Следующий" если дошли до последнего вопроса
    if (nextActiveIndex === maxIndex) {
        nextBtn.classList.add('qruizControls__button_disabled');
        nextBtn.setAttribute('disabled', 'disabled');
    }

    // Разблокировать кнопку "Предыдущий", если вопросов больше одного
    if (nextActiveIndex > 0) {
        prevBtn.removeAttribute('disabled');
        prevBtn.classList.remove('qruizControls__button_disabled');
    }
});

prevBtn.addEventListener('click', evt => {
    const minIndex = 0;
    const maxIndex = questions.length - 1;

    // Найти активный вопрос
    let activeIndex;
    questions.forEach((question, index) => {
        activeIndex = question.classList.contains('qruiz__question_active') ? index : activeIndex;
    });

    const prevActiveIndex = activeIndex <= minIndex ? minIndex : activeIndex - 1;
    const nextActiveIndex = activeIndex >= maxIndex ? maxIndex : activeIndex + 1;

    // Сменить активный вопрос
    questions.forEach((question, index) => {
        index === prevActiveIndex
            ? question.classList.add('qruiz__question_active')
            : question.classList.remove('qruiz__question_active');
    });

    // Заблокировать кнопку "Предыдущий" если дошли до первого вопроса
    if (prevActiveIndex === minIndex) {
        prevBtn.classList.add('qruizControls__button_disabled');
        prevBtn.setAttribute('disabled', 'disabled');
    }

    // Разблокировать кнопку "Следующий", если вопросов больше одного
    if (nextActiveIndex <= maxIndex) {
        nextBtn.removeAttribute('disabled');
        nextBtn.classList.remove('qruizControls__button_disabled');
    }
});
