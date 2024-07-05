const slider = document.querySelector('.slider');
        const leftButton = document.querySelector('.left-button');
        const rightButton = document.querySelector('.right-button');
        
        leftButton.addEventListener('click', () => {
            slider.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        });
        
        rightButton.addEventListener('click', () => {
            slider.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        });