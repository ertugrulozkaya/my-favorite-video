document.addEventListener('DOMContentLoaded', () => {
    // Başlık animasyonu için ek efektler
    const title = document.querySelector('.animate-text');
    
    // Mouse over efekti
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
        title.style.transition = 'transform 0.3s ease';
    });

    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
    });

    // Açıklama bölümü için fade-in efekti
    const description = document.querySelector('.description');
    description.style.opacity = '0';
    
    setTimeout(() => {
        description.style.transition = 'opacity 1s ease';
        description.style.opacity = '1';
    }, 1000);

    // Sayfa scroll efekti
    window.addEventListener('scroll', () => {
        const elements = document.querySelectorAll('.description, .video-container');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            if(position.top < window.innerHeight) {
                element.style.animation = 'fadeInUp 1s ease forwards';
            }
        });
    });
});

// Scroll animasyonu için keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style); 