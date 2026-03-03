document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с вопросом (кнопки)
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Находим родительский элемент faq-item
            const faqItem = this.closest('.faq-item');
            
            // Переключаем класс active для текущего элемента
            faqItem.classList.toggle('active');
            
            // Находим ответ (faq-answer) внутри этого элемента
            const answer = faqItem.querySelector('.faq-answer');
            
            // Управляем максимальной высотой для плавной анимации
            if (faqItem.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
    
    // Маленькое украшение: меняем цвет сердечка при наведении (опционально)
    const heart = document.querySelector('.footer i');
    if (heart) {
        heart.addEventListener('mouseenter', () => {
            heart.style.color = '#ff9f9f';
        });
        heart.addEventListener('mouseleave', () => {
            heart.style.color = '#f8b4b4';
        });
    }
});