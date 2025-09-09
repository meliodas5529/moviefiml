document.addEventListener('DOMContentLoaded', function() {
            const searchBtn = document.getElementById('search-btn');
            const categories = document.querySelectorAll('.category');
            const detailBtns = document.querySelectorAll('.btn-details');
            const favoriteBtns = document.querySelectorAll('.btn-favorite');
            const notification = document.getElementById('notification');
            
            searchBtn.addEventListener('click', function() {
                const searchInput = document.querySelector('.search-box input');
                const query = searchInput.value.trim();
                
                if (query) {
                    showNotification(`Поиск фильма: "${query}"`);
                    console.log(`Выполняется поиск: ${query}`);
                } else {
                    showNotification('Введите название фильма для поиска');
                }
            });
            });
//модалка//
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const categories = document.querySelectorAll('.category');
    const detailBtns = document.querySelectorAll('.btn-details');
    const favoriteBtns = document.querySelectorAll('.btn-favorite');
    const modal = document.getElementById('movie-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const closeModalBtn2 = document.querySelector('.btn-close-modal');
    const modalPoster = document.getElementById('modal-poster');
    const modalTitle = document.getElementById('modal-title');
    const modalYear = document.getElementById('modal-year');
    const modalRating = document.getElementById('modal-rating');
    const modalDescription = document.getElementById('modal-description');
    searchBtn.addEventListener('click', function() {
        const searchInput = document.querySelector('.search-box input');
        const query = searchInput.value.trim();
        
        if (query) {
            showNotification(`Поиск фильма: "${query}"`);
            console.log(`Выполняется поиск: ${query}`);
        } else {
            showNotification('Введите название фильма для поиска');
        }
    });

    categories.forEach(category => {
        category.addEventListener('click', function() {
            categories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            showNotification(`Выбрана категория: "${this.textContent}"`);
        });
    });
    
    detailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const movieCard = this.closest('.movie-card');
            const poster = movieCard.querySelector('.movie-poster').src;
            const title = movieCard.querySelector('.movie-title').textContent;
            const year = movieCard.querySelector('.movie-year').textContent;
            const rating = movieCard.querySelector('.movie-rating').textContent;
            const description = movieCard.querySelector('.movie-description').textContent;
        
            modalPoster.src = poster;
            modalTitle.textContent = title;
            modalYear.textContent = year;
            modalRating.textContent = rating;
            modalDescription.textContent = description;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }
    
    closeModalBtn.addEventListener('click', closeModal);
    closeModalBtn2.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});