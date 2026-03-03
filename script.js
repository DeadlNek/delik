document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            
            faqItem.classList.toggle('active');
            
            const answer = faqItem.querySelector('.faq-answer');
            
            if (faqItem.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
        });
    });
    
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